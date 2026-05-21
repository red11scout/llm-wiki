import { readFile } from "fs/promises";
import { join } from "path";

const toolInput = process.argv[2] || "";

let filePath: string | null = null;
try {
  const parsed = JSON.parse(toolInput);
  filePath = parsed.file_path || parsed.filePath || null;
} catch {
  const match = toolInput.match(/(wiki\/[^\s"]+)/);
  if (match) filePath = match[1];
}

if (!filePath || !filePath.includes("wiki/")) {
  process.exit(0);
}

const absPath = filePath.startsWith("/") ? filePath : join(process.cwd(), filePath);

let existing: string;
try {
  existing = await readFile(absPath, "utf-8");
} catch {
  process.exit(0);
}

const wikilinks = existing.match(/\[\[([a-z0-9][a-z0-9-]*[a-z0-9])\]\]/g) || [];

if (wikilinks.length > 0) {
  console.log(
    JSON.stringify({
      hookSpecificOutput: `Editing wiki page with ${wikilinks.length} cross-references. Verify no contradictions with linked pages: ${wikilinks.slice(0, 5).join(", ")}`,
    })
  );
}
