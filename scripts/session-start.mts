import { readFile, writeFile, mkdir } from "fs/promises";
import { join } from "path";

const ROOT = process.cwd();
const WIKI_DIR = join(ROOT, "wiki");
const CLAUDE_DIR = join(ROOT, ".claude");

async function safeRead(path: string): Promise<string> {
  try {
    return await readFile(path, "utf-8");
  } catch {
    return "";
  }
}

const [schema, index, log] = await Promise.all([
  safeRead(join(WIKI_DIR, "SCHEMA.md")),
  safeRead(join(WIKI_DIR, "index.md")),
  safeRead(join(WIKI_DIR, "log.md")),
]);

const logLines = log.split("\n");
const recentLog = logLines.slice(-30).join("\n");

const needsReview = await safeRead(join(WIKI_DIR, "needs-review.md"));
const pendingCount = (needsReview.match(/^- /gm) || []).length;

const context = [
  "# Wiki Context (auto-generated at session start)",
  "",
  "## Schema",
  schema.trim(),
  "",
  "## Current Index",
  index.trim(),
  "",
  "## Recent Log (last 30 lines)",
  recentLog.trim(),
  "",
  `## Pending Review Items: ${pendingCount}`,
  "",
].join("\n");

await mkdir(CLAUDE_DIR, { recursive: true });
await writeFile(join(CLAUDE_DIR, "last-context.md"), context, "utf-8");

console.log(
  JSON.stringify({
    hookSpecificOutput: [
      `Wiki: ${index.split("\n").filter((l) => l.startsWith("- [")).length} pages indexed`,
      `Pending review: ${pendingCount} items`,
      `Read .claude/last-context.md for full context.`,
    ].join(" | "),
  })
);
