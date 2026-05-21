import { join } from "path";

const toolInput = process.argv[2] || "";

let filePath: string | null = null;
try {
  const parsed = JSON.parse(toolInput);
  filePath = parsed.file_path || parsed.filePath || null;
} catch {
  const match = toolInput.match(/(raw\/[^\s"]+)/);
  if (match) filePath = match[1];
}

if (!filePath || !filePath.includes("raw/")) {
  process.exit(0);
}

const absPath = filePath.startsWith("/") ? filePath : join(process.cwd(), filePath);

console.log(
  JSON.stringify({
    hookSpecificOutput: `New raw file detected: ${filePath}. Run \`pnpm wiki:ingest ${absPath}\` to process it.`,
  })
);
