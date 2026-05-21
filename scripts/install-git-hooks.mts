import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { chmod } from "fs/promises";

const hookDir = join(process.cwd(), ".git", "hooks");
const hookPath = join(hookDir, "post-commit");

await mkdir(hookDir, { recursive: true });

const hookContent = `#!/bin/sh
# Auto-reindex wiki after commits
pnpm wiki:reindex 2>/dev/null || true
`;

await writeFile(hookPath, hookContent, "utf-8");
await chmod(hookPath, 0o755);

console.log("[hooks:install] Installed .git/hooks/post-commit → pnpm wiki:reindex");
