import { config } from "dotenv";
config({ path: ".env.local", override: true });

import { reindexAll, rebuildIndex } from "../src/lib/wiki/sync.js";

console.log("[wiki:reindex] Reindexing all wiki pages...");
const result = await reindexAll();
await rebuildIndex();
console.log(
  `[wiki:reindex] Done. ${result.pagesIndexed} pages indexed, ${result.edgesCreated} edges total.`
);
