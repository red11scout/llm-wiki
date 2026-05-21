import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import simpleGit from "simple-git";

const ROOT = process.cwd();
const WIKI_DIR = join(ROOT, "wiki");
const git = simpleGit(ROOT);

function todayISO(): string {
  return new Date().toISOString().split("T")[0];
}

const status = await git.status();
const wikiChanges = status.files.filter(
  (f) => f.path.startsWith("wiki/") || f.path.startsWith("raw/")
);

if (wikiChanges.length === 0) {
  console.log("[crystallize] No wiki/raw changes to commit.");
  process.exit(0);
}

const logEntry = [
  "",
  `## [${todayISO()}] crystallize | session-end auto-commit`,
  `- files: ${wikiChanges.length} changed (${wikiChanges.map((f) => f.path).join(", ")})`,
  "",
].join("\n");

const logPath = join(WIKI_DIR, "log.md");
try {
  const existingLog = await readFile(logPath, "utf-8");
  await writeFile(logPath, existingLog + logEntry, "utf-8");
} catch {
  // log.md might not exist yet
}

try {
  await git.add(["wiki", "raw"]);
  await git.commit(`crystallize: session-end auto-commit (${wikiChanges.length} files)`);
  console.log(`[crystallize] Committed ${wikiChanges.length} wiki/raw changes.`);
} catch {
  console.log("[crystallize] Nothing to commit (already clean).");
}
