"use server";

import { ingest } from "@/lib/wiki/ingest";
import { query } from "@/lib/wiki/query";
import { lint } from "@/lib/wiki/lint";
import { reindexAll, rebuildIndex } from "@/lib/wiki/sync";
import { dbWrite } from "@db";
import { contradictions } from "@db/schema";
import { eq } from "drizzle-orm";

export async function ingestAction(filePath: string) {
  return ingest(filePath);
}

export async function queryAction(question: string) {
  return query(question);
}

export async function lintAction() {
  return lint();
}

export async function reindexAction() {
  const result = await reindexAll();
  await rebuildIndex();
  return result;
}

export async function resolveContradiction(id: string, resolution: string) {
  await dbWrite
    .update(contradictions)
    .set({ resolvedAt: new Date(), resolution })
    .where(eq(contradictions.id, id));
  return { ok: true };
}

export async function forceReIngest(filePath: string) {
  return ingest(filePath);
}
