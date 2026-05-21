import { lint } from "../src/lib/wiki/lint.js";

console.log("[wiki:lint] Running lint...");
const result = await lint();
console.log(`[wiki:lint] ${result.summary}`);

if (result.findings.length > 0) {
  console.log("\nFindings:");
  for (const f of result.findings) {
    console.log(`  [${f.type}] [[${f.slug}]]: ${f.description}`);
  }
}
