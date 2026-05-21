import { readFile, writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { generateText, stepCountIs } from "ai";
import { opus } from "@/lib/ai/provider";
import { z } from "zod";
import { dbRead, dbWrite } from "@db";
import { wikiPages, edges, ingestLog } from "@db/schema";
import { eq, or, sql } from "drizzle-orm";
import { syncWikiToDb, rebuildIndex } from "./sync";
import simpleGit from "simple-git";

const ROOT = process.cwd();
const WIKI_DIR = join(ROOT, "wiki");
const git = simpleGit(ROOT);

function todayISO(): string {
  return new Date().toISOString().split("T")[0];
}

const wikiTools = {
  searchPages: {
    description:
      "Search wiki pages using full-text search. Returns matching slugs and summaries.",
    parameters: z.object({
      query: z.string().describe("Search query"),
    }),
    execute: async ({ query }: { query: string }) => {
      const results = await dbRead
        .select({
          slug: wikiPages.slug,
          title: wikiPages.title,
          summary: wikiPages.summary,
          kind: wikiPages.kind,
        })
        .from(wikiPages)
        .where(
          sql`to_tsvector('english', coalesce(${wikiPages.title}, '') || ' ' || coalesce(${wikiPages.summary}, '') || ' ' || coalesce(${wikiPages.body}, '')) @@ plainto_tsquery('english', ${query})`
        )
        .orderBy(
          sql`ts_rank(to_tsvector('english', coalesce(${wikiPages.title}, '') || ' ' || coalesce(${wikiPages.summary}, '') || ' ' || coalesce(${wikiPages.body}, '')), plainto_tsquery('english', ${query})) DESC`
        )
        .limit(10);
      return results;
    },
  },
  readPage: {
    description: "Read the full markdown content of a wiki page by its slug.",
    parameters: z.object({
      slug: z.string().describe("The page slug to read"),
    }),
    execute: async ({ slug }: { slug: string }) => {
      const page = await dbRead
        .select({ filePath: wikiPages.filePath, body: wikiPages.body })
        .from(wikiPages)
        .where(eq(wikiPages.slug, slug))
        .limit(1);

      if (page.length === 0) return { error: `Page [[${slug}]] not found` };

      try {
        const content = await readFile(join(ROOT, page[0].filePath), "utf-8");
        return { slug, content };
      } catch {
        return { slug, content: page[0].body };
      }
    },
  },
  neighbors: {
    description:
      "Get all pages connected to a given slug via edges (incoming and outgoing).",
    parameters: z.object({
      slug: z.string().describe("The page slug to find neighbors for"),
    }),
    execute: async ({ slug }: { slug: string }) => {
      const results = await dbRead
        .select({
          fromSlug: edges.fromSlug,
          toSlug: edges.toSlug,
          relation: edges.relation,
          confidence: edges.confidence,
        })
        .from(edges)
        .where(or(eq(edges.fromSlug, slug), eq(edges.toSlug, slug)));

      return results.map((e) => ({
        neighbor: e.fromSlug === slug ? e.toSlug : e.fromSlug,
        direction: e.fromSlug === slug ? "outgoing" : "incoming",
        relation: e.relation,
        confidence: e.confidence,
      }));
    },
  },
  shortestPath: {
    description:
      "Find the shortest path between two wiki pages through the edge graph.",
    parameters: z.object({
      from: z.string().describe("Starting slug"),
      to: z.string().describe("Target slug"),
    }),
    execute: async ({ from, to }: { from: string; to: string }) => {
      const result = await dbRead.execute(sql`
        WITH RECURSIVE path AS (
          SELECT from_slug, to_slug, ARRAY[from_slug] AS trail, 1 AS depth
          FROM edges WHERE from_slug = ${from}
          UNION ALL
          SELECT e.from_slug, e.to_slug, p.trail || e.from_slug, p.depth + 1
          FROM edges e JOIN path p ON e.from_slug = p.to_slug
          WHERE NOT e.from_slug = ANY(p.trail) AND p.depth < 6
        )
        SELECT trail || to_slug AS path FROM path WHERE to_slug = ${to} ORDER BY depth LIMIT 1
      `);

      if (result.rows.length === 0) {
        return { error: `No path found between [[${from}]] and [[${to}]]` };
      }
      return { path: result.rows[0].path };
    },
  },
} as const;

export async function query(question: string): Promise<{
  answer: string;
  citations: Array<{ slug: string; excerpt: string }>;
  filedAs: string | null;
}> {
  const schemaContent = await readFile(join(WIKI_DIR, "SCHEMA.md"), "utf-8");
  const indexContent = await readFile(join(WIKI_DIR, "index.md"), "utf-8");

  const { text, steps } = await generateText({
    model: opus,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tools: wikiTools as any,
    stopWhen: stepCountIs(10),
    providerOptions: {
      anthropic: {
        thinking: { type: "adaptive" },
      },
    },
    system: [
      "You are a wiki query agent. You answer questions by searching and reading wiki pages.",
      "Use the tools to find relevant pages, read their content, and traverse the knowledge graph.",
      "Always cite your sources using [[slug]] notation.",
      "",
      "At the end of your response, if the answer represents durable, novel knowledge that would",
      "benefit future queries, note it with: [FILE_AS: slug-name | Title]",
      "",
      "Wiki Schema:",
      schemaContent,
    ].join("\n"),
    prompt: [
      "## Current Wiki Index",
      indexContent,
      "",
      "## Question",
      question,
    ].join("\n"),
  });

  const citations: Array<{ slug: string; excerpt: string }> = [];
  const citationRe = /\[\[([a-z0-9][a-z0-9-]*[a-z0-9])\]\]/g;
  let m;
  while ((m = citationRe.exec(text)) !== null) {
    if (!citations.find((c) => c.slug === m![1])) {
      citations.push({ slug: m[1], excerpt: "" });
    }
  }

  let filedAs: string | null = null;
  const fileMatch = text.match(/\[FILE_AS:\s*([a-z0-9-]+)\s*\|\s*([^\]]+)\]/);
  if (fileMatch) {
    const slug = fileMatch[1];
    const title = fileMatch[2].trim();

    const conceptDir = join(WIKI_DIR, "concepts");
    await mkdir(conceptDir, { recursive: true });
    const pagePath = join(conceptDir, `${slug}.md`);

    const pageContent = [
      "---",
      `title: ${title}`,
      "kind: concept",
      `summary: Synthesized from query: ${question.slice(0, 120)}`,
      "tags: [query-derived]",
      "sources: 0",
      `updated: ${todayISO()}`,
      "---",
      "",
      text.replace(/\[FILE_AS:[^\]]+\]/, "").trim(),
    ].join("\n");

    await writeFile(pagePath, pageContent, "utf-8");
    await syncWikiToDb(pagePath);
    await rebuildIndex();

    try {
      await git.add(["wiki"]);
      await git.commit(`query: filed ${title}`);
    } catch {
      // no changes to commit
    }

    filedAs = slug;
  }

  const logEntry = [
    "",
    `## [${todayISO()}] query | ${question.slice(0, 80)}`,
    `- citations: ${citations.map((c) => `[[${c.slug}]]`).join(", ") || "none"}`,
    `- filed: ${filedAs ? `[[${filedAs}]]` : "no"}`,
    `- steps: ${steps.length}`,
    "",
  ].join("\n");

  const logPath = join(WIKI_DIR, "log.md");
  const existingLog = await readFile(logPath, "utf-8");
  await writeFile(logPath, existingLog + logEntry, "utf-8");

  await dbWrite.insert(ingestLog).values({
    op: "query",
    subject: question.slice(0, 200),
    affectedPages: filedAs ? [filedAs] : [],
    details: {
      citations: citations.map((c) => c.slug),
      filedAs,
      stepsUsed: steps.length,
    },
  });

  return { answer: text, citations, filedAs };
}
