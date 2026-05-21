import { readFile, writeFile, mkdir, readdir } from "fs/promises";
import { join } from "path";
import { generateObject } from "ai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { config } from "dotenv";
import { z } from "zod";
import simpleGit from "simple-git";

config({ path: ".env.local", override: true });

const ROOT = process.cwd();
const WIKI_DIR = join(ROOT, "wiki");
const MEMORIES_DIR = join(WIKI_DIR, "memories");
const git = simpleGit(ROOT);

function todayISO(): string {
  return new Date().toISOString().split("T")[0];
}

const MemorySchema = z.object({
  memories: z.array(
    z.object({
      slug: z.string().describe("Kebab-case slug for the memory page"),
      title: z.string().describe("Short descriptive title"),
      summary: z
        .string()
        .describe("One-line summary, max 160 chars"),
      body: z
        .string()
        .describe(
          "Markdown body capturing the durable observation, pattern, or decision. Use [[slug]] wikilinks."
        ),
      tags: z.array(z.string()),
    })
  ),
  skipReason: z
    .string()
    .optional()
    .describe("If no memories worth filing, explain why"),
});

// Commit any uncommitted wiki/raw changes first
const status = await git.status();
const wikiChanges = status.files.filter(
  (f) => f.path.startsWith("wiki/") || f.path.startsWith("raw/")
);

if (wikiChanges.length > 0) {
  try {
    await git.add(["wiki", "raw"]);
    await git.commit(
      `crystallize: session-end auto-commit (${wikiChanges.length} files)`
    );
    console.log(`[crystallize] Committed ${wikiChanges.length} wiki/raw changes.`);
  } catch {
    console.log("[crystallize] Already clean or nothing to commit.");
  }
}

// Gather session context: recent log entries + changed file summaries
const recentLog = await git.log({ maxCount: 20 });
const sessionCommits = recentLog.all
  .filter((c) => {
    const commitDate = new Date(c.date).toISOString().split("T")[0];
    return commitDate === todayISO();
  })
  .map((c) => `- ${c.message}`)
  .join("\n");

if (!sessionCommits) {
  console.log("[crystallize] No session commits today, skipping memory distillation.");
  process.exit(0);
}

// Read existing memories to avoid duplicates
await mkdir(MEMORIES_DIR, { recursive: true });
const existingMemories: string[] = [];
try {
  const files = await readdir(MEMORIES_DIR);
  for (const f of files) {
    if (f.endsWith(".md")) {
      const content = await readFile(join(MEMORIES_DIR, f), "utf-8");
      existingMemories.push(content);
    }
  }
} catch {
  // empty dir
}

// Read index for context
const indexContent = await readFile(join(WIKI_DIR, "index.md"), "utf-8");

// Distill memories via Sonnet
const anthropic = createAnthropic({
  baseURL: "https://api.anthropic.com/v1",
});
const sonnet = anthropic("claude-sonnet-4-6");

console.log("[crystallize] Distilling session into memories...");

try {
  const { object: result } = await generateObject({
    model: sonnet,
    schema: MemorySchema,
    providerOptions: {
      anthropic: { structuredOutputMode: "jsonTool" },
    },
    system: [
      "You are the wiki memory distiller. Your job is to extract durable observations from a work session.",
      "Memories are cross-session knowledge: patterns noticed, architectural decisions made, relationships discovered,",
      "recurring themes, or non-obvious insights that would help future sessions work more effectively.",
      "",
      "Rules:",
      "- Only file memories that are DURABLE — they should still be useful weeks from now.",
      "- Do NOT memory-ify routine operations (e.g., 'ingested 43 files' is not a memory).",
      "- DO capture: surprising connections between entities, architectural patterns, recurring themes,",
      "  decisions that resolved ambiguity, ecosystem relationships that aren't obvious from individual pages.",
      "- Use [[slug]] wikilinks to connect memories to relevant wiki pages.",
      "- Each memory should be 2-5 sentences. Concise and specific.",
      "- If nothing from this session is worth remembering, set skipReason and return empty memories array.",
      "- Slugs for memory pages should be descriptive: 'memory-blueally-pipeline-pattern' not 'memory-1'.",
    ].join("\n"),
    prompt: [
      "## Today's Session Activity",
      sessionCommits,
      "",
      "## Current Wiki Index (for context on what exists)",
      indexContent,
      "",
      existingMemories.length > 0
        ? `## Existing Memories (${existingMemories.length} pages — avoid duplicates)\n${existingMemories.join("\n---\n")}`
        : "## Existing Memories\nNone yet.",
      "",
      "Distill any durable observations from this session. If this was routine ingest work with",
      "nothing surprising, it's fine to return no memories.",
    ].join("\n"),
  });

  if (result.skipReason) {
    console.log(`[crystallize] No memories filed: ${result.skipReason}`);
  } else if (result.memories.length > 0) {
    for (const mem of result.memories) {
      const safeTitle = mem.title.includes(":") ? `"${mem.title.replace(/"/g, '\\"')}"` : mem.title;
      const safeSummary = mem.summary.includes(":") ? `"${mem.summary.replace(/"/g, '\\"')}"` : mem.summary;
      const fm = [
        "---",
        `title: ${safeTitle}`,
        "kind: concept",
        `summary: ${safeSummary}`,
        `tags: [memory, ${mem.tags.join(", ")}]`,
        "sources: 0",
        `updated: ${todayISO()}`,
        "---",
      ].join("\n");

      const pagePath = join(MEMORIES_DIR, `${mem.slug}.md`);
      await writeFile(pagePath, `${fm}\n\n${mem.body}`, "utf-8");
      console.log(`[crystallize] Memory filed: [[${mem.slug}]]`);
    }

    // Append to log
    const logEntry = [
      "",
      `## [${todayISO()}] crystallize | session memory distillation`,
      `- memories filed: ${result.memories.map((m) => `[[${m.slug}]]`).join(", ")}`,
      "",
    ].join("\n");

    const logPath = join(WIKI_DIR, "log.md");
    try {
      const existingLog = await readFile(logPath, "utf-8");
      await writeFile(logPath, existingLog + logEntry, "utf-8");
    } catch {
      // log.md might not exist yet
    }

    // Commit the new memories
    try {
      await git.add(["wiki"]);
      await git.commit(
        `crystallize: filed ${result.memories.length} memory page(s)`
      );
      console.log(
        `[crystallize] Committed ${result.memories.length} memory page(s).`
      );
    } catch {
      console.log("[crystallize] Nothing new to commit.");
    }
  }
} catch (err) {
  console.error("[crystallize] Memory distillation failed:", err);
  // Non-fatal — the git commit already happened above
}
