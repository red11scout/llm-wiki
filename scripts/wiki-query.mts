import { query } from "../src/lib/wiki/query.js";

const question = process.argv[2];
if (!question) {
  console.error('Usage: pnpm wiki:query "your question here"');
  process.exit(1);
}

console.log(`[wiki:query] Querying: ${question}`);
const result = await query(question);
console.log("\n--- Answer ---");
console.log(result.answer);
console.log("\n--- Citations ---");
for (const c of result.citations) {
  console.log(`  [[${c.slug}]]`);
}
if (result.filedAs) {
  console.log(`\n[Filed as new page: [[${result.filedAs}]]]`);
}
