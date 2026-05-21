/**
 * Create a sanitized wiki export for sharing via Cowork or other channels.
 *
 * Usage: pnpm wiki:cowork-package
 *
 * Output:
 *   export/cowork/          — sanitized markdown files
 *   export/cowork.tar.gz    — compressed archive of the above
 */
import "dotenv/config";
import { readdir, readFile, writeFile, mkdir, stat } from "fs/promises";
import { join, relative } from "path";
import { createWriteStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream/promises";
import { Readable } from "stream";
import matter from "gray-matter";

const WIKI_DIR = join(process.cwd(), "wiki");
const EXPORT_DIR = join(process.cwd(), "export", "cowork");
const ARCHIVE_PATH = join(process.cwd(), "export", "cowork.tar.gz");

/** Frontmatter keys that should be stripped from exported files */
const CONFIDENTIAL_TAGS = ["confidential", "internal"];

console.log("[wiki:cowork-package] Building sanitized wiki export...");

// Collect all markdown files recursively
async function collectMarkdownFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(fullPath)));
    } else if (entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

function sanitizeFrontmatter(content: string): string {
  const parsed = matter(content);

  // Remove confidential/internal metadata fields
  let stripped = false;
  for (const key of Object.keys(parsed.data)) {
    const val = parsed.data[key];
    if (typeof val === "string" && CONFIDENTIAL_TAGS.some((t) => val.toLowerCase().includes(t))) {
      delete parsed.data[key];
      stripped = true;
    }
    // Also strip if the key itself is tagged
    if (CONFIDENTIAL_TAGS.some((t) => key.toLowerCase().includes(t))) {
      delete parsed.data[key];
      stripped = true;
    }
  }

  // Strip pages tagged with confidential/internal tags array
  if (Array.isArray(parsed.data.tags)) {
    const originalLen = parsed.data.tags.length;
    parsed.data.tags = parsed.data.tags.filter(
      (t: string) => !CONFIDENTIAL_TAGS.some((ct) => t.toLowerCase().includes(ct))
    );
    if (parsed.data.tags.length !== originalLen) stripped = true;
  }

  if (stripped) {
    return matter.stringify(parsed.content, parsed.data);
  }
  return content;
}

/**
 * Minimal tar archive creator — avoids needing an external `tar` dependency.
 * Writes a POSIX ustar archive to a gzip stream.
 */
function tarHeader(name: string, size: number): Buffer {
  const buf = Buffer.alloc(512);
  // name (100 bytes)
  buf.write(name.slice(0, 100), 0, 100, "utf-8");
  // mode (8 bytes)
  buf.write("0000644\0", 100, 8, "utf-8");
  // uid (8 bytes)
  buf.write("0001000\0", 108, 8, "utf-8");
  // gid (8 bytes)
  buf.write("0001000\0", 116, 8, "utf-8");
  // size (12 bytes, octal)
  buf.write(size.toString(8).padStart(11, "0") + "\0", 124, 12, "utf-8");
  // mtime (12 bytes)
  const mtime = Math.floor(Date.now() / 1000);
  buf.write(mtime.toString(8).padStart(11, "0") + "\0", 136, 12, "utf-8");
  // checksum placeholder (8 spaces)
  buf.write("        ", 148, 8, "utf-8");
  // type flag — regular file
  buf.write("0", 156, 1, "utf-8");
  // ustar indicator
  buf.write("ustar\0", 257, 6, "utf-8");
  buf.write("00", 263, 2, "utf-8");

  // Compute checksum
  let checksum = 0;
  for (let i = 0; i < 512; i++) checksum += buf[i];
  buf.write(checksum.toString(8).padStart(6, "0") + "\0 ", 148, 8, "utf-8");

  return buf;
}

const mdFiles = await collectMarkdownFiles(WIKI_DIR);
console.log(`[wiki:cowork-package] Found ${mdFiles.length} markdown files.`);

// Create export directory structure and write sanitized files
await mkdir(EXPORT_DIR, { recursive: true });

let exportedCount = 0;
const archiveChunks: Buffer[] = [];

for (const filePath of mdFiles) {
  const relPath = relative(WIKI_DIR, filePath);
  const destPath = join(EXPORT_DIR, relPath);
  await mkdir(join(destPath, ".."), { recursive: true });

  const raw = await readFile(filePath, "utf-8");
  const sanitized = sanitizeFrontmatter(raw);
  await writeFile(destPath, sanitized, "utf-8");

  // Add to tar archive
  const content = Buffer.from(sanitized, "utf-8");
  const archiveName = `cowork/${relPath}`;
  archiveChunks.push(tarHeader(archiveName, content.length));
  archiveChunks.push(content);
  // Pad to 512-byte boundary
  const remainder = content.length % 512;
  if (remainder > 0) {
    archiveChunks.push(Buffer.alloc(512 - remainder));
  }

  exportedCount++;
}

// Add COMPLIANCE-WARNING.md
const complianceWarning = `# Compliance Warning

This export was generated from a private LLM Wiki maintained by BlueAlly.

**This archive may contain proprietary knowledge, client methodologies, and
internal frameworks.** Handle with the same care as any confidential document.

- Do NOT share outside authorized personnel without written approval.
- Do NOT upload to public repositories, forums, or AI training platforms.
- Confidential and internal metadata has been stripped, but the underlying
  knowledge may still be sensitive.
- Review contents before sharing with third parties.

Generated: ${new Date().toISOString()}
`;

const warningPath = join(EXPORT_DIR, "COMPLIANCE-WARNING.md");
await writeFile(warningPath, complianceWarning, "utf-8");

const warningBuf = Buffer.from(complianceWarning, "utf-8");
archiveChunks.push(tarHeader("cowork/COMPLIANCE-WARNING.md", warningBuf.length));
archiveChunks.push(warningBuf);
const warningRemainder = warningBuf.length % 512;
if (warningRemainder > 0) {
  archiveChunks.push(Buffer.alloc(512 - warningRemainder));
}

// End-of-archive marker (two 512-byte zero blocks)
archiveChunks.push(Buffer.alloc(1024));

// Write tar.gz
await mkdir(join(ARCHIVE_PATH, ".."), { recursive: true });
const tarBuf = Buffer.concat(archiveChunks);
const gzipStream = createGzip({ level: 9 });
const outStream = createWriteStream(ARCHIVE_PATH);
await pipeline(Readable.from(tarBuf), gzipStream, outStream);

const archiveStat = await stat(ARCHIVE_PATH);
const sizeKb = (archiveStat.size / 1024).toFixed(1);

console.log(`[wiki:cowork-package] Exported ${exportedCount} files to ${EXPORT_DIR}`);
console.log(`[wiki:cowork-package] Archive: ${ARCHIVE_PATH} (${sizeKb} KB)`);
console.log(`[wiki:cowork-package] COMPLIANCE-WARNING.md included.`);
