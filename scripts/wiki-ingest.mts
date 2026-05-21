import { ingest } from "../src/lib/wiki/ingest.js";

const filePath = process.argv[2];
if (!filePath) {
  console.error("Usage: pnpm wiki:ingest <path-to-raw-file>");
  process.exit(1);
}

console.log(`[wiki:ingest] Ingesting ${filePath}...`);
const result = await ingest(filePath);
console.log(`[wiki:ingest] Done.`);
console.log(`  Source page: [[${result.sourcePageSlug}]]`);
console.log(`  Pages created: ${result.pagesCreated.join(", ") || "none"}`);
console.log(`  Pages updated: ${result.pagesUpdated.join(", ") || "none"}`);
console.log(`  Contradictions: ${result.contradictions}`);
