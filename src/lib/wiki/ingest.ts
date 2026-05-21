import { readFile, writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { generateObject } from "ai";
import { sonnet } from "@/lib/ai/provider";
import { PageUpdateSchema } from "./schemas";
import { syncWikiToDb, rebuildIndex } from "./sync";
import { dbWrite } from "@db";
import { rawSources, ingestLog } from "@db/schema";
import { eq } from "drizzle-orm";
import simpleGit from "simple-git";

const ROOT = process.cwd();
const WIKI_DIR = join(ROOT, "wiki");
const git = simpleGit(ROOT);

async function readSchemaPrompt(): Promise<string> {
  return readFile(join(WIKI_DIR, "SCHEMA.md"), "utf-8");
}

async function readCurrentIndex(): Promise<string> {
  return readFile(join(WIKI_DIR, "index.md"), "utf-8");
}

function todayISO(): string {
  return new Date().toISOString().split("T")[0];
}

function buildFrontmatter(fields: Record<string, unknown>): string {
  const lines = ["---"];
  for (const [key, value] of Object.entries(fields)) {
    if (Array.isArray(value)) {
      lines.push(`${key}: [${value.map((v) => `${v}`).join(", ")}]`);
    } else {
      lines.push(`${key}: ${value}`);
    }
  }
  lines.push("---");
  return lines.join("\n");
}

export async function ingest(sourceFilePath: string): Promise<{
  sourcePageSlug: string;
  pagesCreated: string[];
  pagesUpdated: string[];
  contradictions: number;
}> {
  const absSourcePath = join(ROOT, sourceFilePath);
  const sourceContent = await readFile(absSourcePath, "utf-8");
  const schemaPrompt = await readSchemaPrompt();
  const currentIndex = await readCurrentIndex();

  const { object: result } = await generateObject({
    model: sonnet,
    schema: PageUpdateSchema,
    system: [
      "You are the wiki ingest engine. Follow this schema exactly:",
      schemaPrompt,
      "",
      "Your job: read the new source, produce structured output to create/update wiki pages.",
      "Every page body MUST include YAML frontmatter at the top (---\\ntitle: ...\\n---).",
      "Use [[slug]] wikilinks to cross-reference other pages.",
      "One entity/concept per page. Slugs are kebab-case.",
    ].join("\n"),
    prompt: [
      "## Current Wiki Index",
      currentIndex,
      "",
      "## New Source to Ingest",
      `File: ${sourceFilePath}`,
      "",
      sourceContent,
      "",
      "Produce the page update set. Create a source summary page and any new entity/concept pages.",
      "For existing pages mentioned in the index, provide updated bodies if the new source adds information.",
    ].join("\n"),
  });

  const pagesCreated: string[] = [];
  const pagesUpdated: string[] = [];

  const sourceDir = join(WIKI_DIR, "sources");
  await mkdir(sourceDir, { recursive: true });
  const sourcePagePath = join(sourceDir, `${result.sourcePageSlug}.md`);

  const sourceFrontmatter = buildFrontmatter({
    title: result.sourcePageTitle,
    kind: "source",
    summary: result.sourcePageSummary,
    tags: result.sourcePageTags,
    sources: 1,
    updated: todayISO(),
  });
  await writeFile(
    sourcePagePath,
    `${sourceFrontmatter}\n\n${result.sourcePageBody}`,
    "utf-8"
  );
  pagesCreated.push(result.sourcePageSlug);

  for (const entity of result.newEntities) {
    const kindDir = entity.kind === "entity" ? "entities" : "concepts";
    const dir = join(WIKI_DIR, kindDir);
    await mkdir(dir, { recursive: true });
    const pagePath = join(dir, `${entity.slug}.md`);

    const fm = buildFrontmatter({
      title: entity.title,
      kind: entity.kind,
      summary: entity.summary,
      tags: entity.tags,
      sources: 1,
      updated: todayISO(),
    });
    await writeFile(pagePath, `${fm}\n\n${entity.body}`, "utf-8");
    pagesCreated.push(entity.slug);
  }

  for (const affected of result.affectedPages) {
    const kindDirs = ["entities", "concepts", "sources", "memories"];
    let found = false;
    for (const kd of kindDirs) {
      const candidatePath = join(WIKI_DIR, kd, `${affected.slug}.md`);
      try {
        await readFile(candidatePath, "utf-8");
        await writeFile(candidatePath, affected.updatedBody, "utf-8");
        pagesUpdated.push(affected.slug);
        found = true;
        break;
      } catch {
        continue;
      }
    }
    if (!found) {
      const fallbackDir = join(WIKI_DIR, "concepts");
      await mkdir(fallbackDir, { recursive: true });
      await writeFile(
        join(fallbackDir, `${affected.slug}.md`),
        affected.updatedBody,
        "utf-8"
      );
      pagesCreated.push(affected.slug);
    }
  }

  const allTouched = [...pagesCreated, ...pagesUpdated];
  for (const slug of pagesCreated) {
    const kindDirs = ["sources", "entities", "concepts", "memories"];
    for (const kd of kindDirs) {
      const p = join(WIKI_DIR, kd, `${slug}.md`);
      try {
        await readFile(p, "utf-8");
        await syncWikiToDb(p);
        break;
      } catch {
        continue;
      }
    }
  }
  for (const slug of pagesUpdated) {
    const kindDirs = ["entities", "concepts", "sources", "memories"];
    for (const kd of kindDirs) {
      const p = join(WIKI_DIR, kd, `${slug}.md`);
      try {
        await readFile(p, "utf-8");
        await syncWikiToDb(p);
        break;
      } catch {
        continue;
      }
    }
  }

  await rebuildIndex();

  const logEntry = [
    "",
    `## [${todayISO()}] ingest | ${result.sourcePageTitle}`,
    `- source: ${sourceFilePath}`,
    `- created: ${pagesCreated.map((s) => `[[${s}]]`).join(", ") || "none"}`,
    `- updated: ${pagesUpdated.map((s) => `[[${s}]]`).join(", ") || "none"}`,
    `- contradictions: ${result.contradictions.length}`,
    "",
  ].join("\n");

  const logPath = join(WIKI_DIR, "log.md");
  const existingLog = await readFile(logPath, "utf-8");
  await writeFile(logPath, existingLog + logEntry, "utf-8");

  if (result.contradictions.length > 0) {
    const nrPath = join(WIKI_DIR, "needs-review.md");
    const existingNR = await readFile(nrPath, "utf-8");
    const newItems = result.contradictions
      .map(
        (c) =>
          `- **${c.pageSlug}**: "${c.existingClaim}" vs "${c.newClaim}" (from ${sourceFilePath})`
      )
      .join("\n");
    await writeFile(
      nrPath,
      existingNR.replace(
        "No items pending review.",
        `${newItems}\n\nNo items pending review.`
      ),
      "utf-8"
    );
  }

  try {
    await git.add(["raw", "wiki"]);
    await git.commit(`ingest: ${result.sourcePageTitle}`);
  } catch {
    console.log("[ingest] git commit skipped (no changes or not a git repo)");
  }

  await dbWrite
    .update(rawSources)
    .set({ ingested: true, ingestedAt: new Date() })
    .where(eq(rawSources.filePath, sourceFilePath));

  await dbWrite.insert(ingestLog).values({
    op: "ingest",
    subject: result.sourcePageTitle,
    affectedPages: allTouched,
    details: {
      sourceFile: sourceFilePath,
      pagesCreated,
      pagesUpdated,
      contradictions: result.contradictions.length,
    },
  });

  return {
    sourcePageSlug: result.sourcePageSlug,
    pagesCreated,
    pagesUpdated,
    contradictions: result.contradictions.length,
  };
}
