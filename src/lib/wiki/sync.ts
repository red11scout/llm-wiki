import { readFile, readdir, stat } from "fs/promises";
import { join, relative } from "path";
import { createHash } from "crypto";
import matter from "gray-matter";
import { dbWrite } from "@db";
import { wikiPages, edges, ingestLog } from "@db/schema";
import { eq, and, notInArray, sql } from "drizzle-orm";

const WIKI_DIR = join(process.cwd(), "wiki");
const WIKI_SUBDIRS = ["entities", "concepts", "sources", "memories"];
const WIKILINK_RE = /\[\[([a-z0-9][a-z0-9-]*[a-z0-9])\]\]/g;

export function extractWikilinks(body: string): string[] {
  const matches = new Set<string>();
  let m;
  while ((m = WIKILINK_RE.exec(body)) !== null) {
    matches.add(m[1]);
  }
  return Array.from(matches);
}

export function computeSha256(content: string): string {
  return createHash("sha256").update(content).digest("hex");
}

interface ParsedPage {
  slug: string;
  title: string;
  kind: "entity" | "concept" | "source" | "comparison";
  summary: string | null;
  tags: string[];
  sourceCount: number;
  body: string;
  bodySha256: string;
  filePath: string;
  needsReview: boolean;
  wikilinks: string[];
}

export function parsePage(filePath: string, content: string): ParsedPage {
  const { data, content: body } = matter(content);
  const relPath = relative(process.cwd(), filePath);
  const slug = relPath.split("/").pop()!.replace(/\.md$/, "");

  return {
    slug,
    title: (data.title as string) || slug,
    kind: (data.kind as ParsedPage["kind"]) || "concept",
    summary: (data.summary as string) || null,
    tags: (data.tags as string[]) || [],
    sourceCount: (data.sources as number) || 0,
    body: body.trim(),
    bodySha256: computeSha256(body.trim()),
    filePath: relPath,
    needsReview: !!data.needsReview,
    wikilinks: extractWikilinks(body),
  };
}

export async function syncWikiToDb(fileAbsPath: string): Promise<void> {
  const content = await readFile(fileAbsPath, "utf-8");
  const page = parsePage(fileAbsPath, content);

  await dbWrite
    .insert(wikiPages)
    .values({
      slug: page.slug,
      kind: page.kind,
      title: page.title,
      summary: page.summary,
      body: page.body,
      bodySha256: page.bodySha256,
      filePath: page.filePath,
      tags: page.tags,
      sourceCount: page.sourceCount,
      updatedAt: new Date(),
      needsReview: page.needsReview,
    })
    .onConflictDoUpdate({
      target: wikiPages.slug,
      set: {
        kind: page.kind,
        title: page.title,
        summary: page.summary,
        body: page.body,
        bodySha256: page.bodySha256,
        filePath: page.filePath,
        tags: page.tags,
        sourceCount: page.sourceCount,
        updatedAt: new Date(),
        needsReview: page.needsReview,
      },
    });

  const validTargets: string[] = [];
  for (const targetSlug of page.wikilinks) {
    const targetExists = await dbWrite
      .select({ slug: wikiPages.slug })
      .from(wikiPages)
      .where(eq(wikiPages.slug, targetSlug))
      .limit(1);

    if (targetExists.length > 0) {
      validTargets.push(targetSlug);
      await dbWrite
        .insert(edges)
        .values({
          fromSlug: page.slug,
          toSlug: targetSlug,
          relation: "references",
          confidence: "EXTRACTED",
          confidenceScore: 1.0,
        })
        .onConflictDoNothing();
    }
  }

  if (validTargets.length > 0) {
    await dbWrite
      .delete(edges)
      .where(
        and(
          eq(edges.fromSlug, page.slug),
          eq(edges.relation, "references"),
          notInArray(edges.toSlug, validTargets)
        )
      );
  } else {
    await dbWrite
      .delete(edges)
      .where(
        and(eq(edges.fromSlug, page.slug), eq(edges.relation, "references"))
      );
  }
}

async function walkDir(dir: string): Promise<string[]> {
  const files: string[] = [];
  try {
    const entries = await readdir(dir);
    for (const entry of entries) {
      const full = join(dir, entry);
      const s = await stat(full);
      if (s.isFile() && entry.endsWith(".md")) {
        files.push(full);
      }
    }
  } catch {
    // directory doesn't exist yet
  }
  return files;
}

export async function reindexAll(): Promise<{
  pagesIndexed: number;
  edgesCreated: number;
}> {
  let pagesIndexed = 0;

  for (const subdir of WIKI_SUBDIRS) {
    const files = await walkDir(join(WIKI_DIR, subdir));
    for (const file of files) {
      await syncWikiToDb(file);
      pagesIndexed++;
    }
  }

  const edgeCount = await dbWrite
    .select({ count: sql<number>`count(*)` })
    .from(edges);
  const edgesCreated = Number(edgeCount[0]?.count ?? 0);

  await dbWrite.insert(ingestLog).values({
    op: "reindex",
    subject: `Reindexed ${pagesIndexed} pages`,
    affectedPages: [],
  });

  return { pagesIndexed, edgesCreated };
}

export async function rebuildIndex(): Promise<void> {
  const { writeFile } = await import("fs/promises");

  const pages = await dbWrite
    .select({
      slug: wikiPages.slug,
      kind: wikiPages.kind,
      summary: wikiPages.summary,
    })
    .from(wikiPages)
    .orderBy(wikiPages.slug);

  const groups: Record<string, typeof pages> = {
    entity: [],
    concept: [],
    source: [],
    comparison: [],
  };

  for (const page of pages) {
    const group = groups[page.kind];
    if (group) group.push(page);
  }

  const lines = ["# Index", ""];

  lines.push("## Entities");
  for (const p of groups.entity) {
    lines.push(`- [[${p.slug}]] — ${p.summary || p.slug}`);
  }

  lines.push("");
  lines.push("## Concepts");
  for (const p of groups.concept) {
    lines.push(`- [[${p.slug}]] — ${p.summary || p.slug}`);
  }
  for (const p of groups.comparison) {
    lines.push(`- [[${p.slug}]] — ${p.summary || p.slug}`);
  }

  lines.push("");
  lines.push("## Sources");
  for (const p of groups.source) {
    lines.push(`- [[${p.slug}]] — ${p.summary || p.slug}`);
  }

  lines.push("");
  await writeFile(join(WIKI_DIR, "index.md"), lines.join("\n"), "utf-8");
}
