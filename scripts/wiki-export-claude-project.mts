/**
 * Bundle the top-N most-linked wiki pages for upload to a Claude.ai Project.
 *
 * Usage: pnpm wiki:export-claude-project [--top N]
 *
 * Output:
 *   export/claude-project-bundle.md   — concatenated markdown
 *   export/claude-project-manifest.json — slug, title, edgeCount per page
 */
import "dotenv/config";
import { readFile, mkdir, writeFile } from "fs/promises";
import { join } from "path";
import { sql } from "drizzle-orm";
import { dbRead } from "@db";
import { wikiPages, edges } from "@db/schema";

const TOP_N = parseInt(process.argv.find((a) => a === "--top")
  ? process.argv[process.argv.indexOf("--top") + 1]
  : "20", 10);

const EXPORT_DIR = join(process.cwd(), "export");

console.log(`[wiki:export-claude-project] Querying top ${TOP_N} most-linked pages...`);

// Count total edges (inbound + outbound) per slug, join to wikiPages for title/filePath
const rows = await dbRead.execute<{
  slug: string;
  title: string;
  file_path: string;
  edge_count: string;
}>(sql`
  WITH edge_counts AS (
    SELECT slug, SUM(cnt)::int AS edge_count
    FROM (
      SELECT ${edges.fromSlug} AS slug, COUNT(*)::int AS cnt
      FROM ${edges}
      GROUP BY ${edges.fromSlug}
      UNION ALL
      SELECT ${edges.toSlug} AS slug, COUNT(*)::int AS cnt
      FROM ${edges}
      GROUP BY ${edges.toSlug}
    ) sub
    GROUP BY slug
  )
  SELECT
    w.slug,
    w.title,
    w.file_path,
    COALESCE(ec.edge_count, 0) AS edge_count
  FROM ${wikiPages} w
  LEFT JOIN edge_counts ec ON ec.slug = w.slug
  ORDER BY edge_count DESC, w.title ASC
  LIMIT ${TOP_N}
`);

if (rows.rows.length === 0) {
  console.log("[wiki:export-claude-project] No pages found in the database. Run pnpm wiki:reindex first.");
  process.exit(0);
}

console.log(`[wiki:export-claude-project] Found ${rows.rows.length} pages.`);

await mkdir(EXPORT_DIR, { recursive: true });

const bundleParts: string[] = [];
const manifest: { slug: string; title: string; edgeCount: number }[] = [];

for (const row of rows.rows) {
  const filePath = join(process.cwd(), row.file_path);
  let content: string;
  try {
    content = await readFile(filePath, "utf-8");
  } catch {
    console.warn(`  [SKIP] Could not read ${row.file_path}`);
    continue;
  }

  bundleParts.push(
    `${"=".repeat(72)}\n` +
    `PAGE: ${row.slug}\n` +
    `TITLE: ${row.title}\n` +
    `EDGES: ${row.edge_count}\n` +
    `${"=".repeat(72)}\n\n` +
    content
  );

  manifest.push({
    slug: row.slug,
    title: row.title,
    edgeCount: Number(row.edge_count),
  });
}

const bundlePath = join(EXPORT_DIR, "claude-project-bundle.md");
const manifestPath = join(EXPORT_DIR, "claude-project-manifest.json");

await writeFile(bundlePath, bundleParts.join("\n\n"), "utf-8");
await writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf-8");

console.log(`[wiki:export-claude-project] Written:`);
console.log(`  ${bundlePath} (${bundleParts.length} pages)`);
console.log(`  ${manifestPath}`);
