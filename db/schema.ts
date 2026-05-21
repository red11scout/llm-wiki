import {
  pgTable,
  uuid,
  text,
  boolean,
  timestamp,
  integer,
  jsonb,
  doublePrecision,
  pgEnum,
  uniqueIndex,
  index,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { customType } from "drizzle-orm/pg-core";

const vector = customType<{ data: number[]; driverParam: string }>({
  dataType() {
    return "vector(1536)";
  },
  toDriver(value: number[]) {
    return JSON.stringify(value);
  },
  fromDriver(value) {
    if (typeof value === "string") {
      return JSON.parse(value) as number[];
    }
    return value as number[];
  },
});

export const sourceTypeEnum = pgEnum("source_type", [
  "imessage",
  "article",
  "pdf",
  "transcript",
  "note",
  "chat",
]);

export const pageKindEnum = pgEnum("page_kind", [
  "entity",
  "concept",
  "source",
  "comparison",
]);

export const confidenceEnum = pgEnum("confidence", [
  "EXTRACTED",
  "INFERRED",
  "AMBIGUOUS",
]);

export const rawSources = pgTable(
  "raw_sources",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    type: sourceTypeEnum("type").notNull(),
    externalId: text("external_id"),
    sha256: text("sha256").notNull(),
    filePath: text("file_path").notNull(),
    ingested: boolean("ingested").default(false).notNull(),
    ingestedAt: timestamp("ingested_at"),
    metadata: jsonb("metadata"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (t) => [uniqueIndex("raw_sources_sha256_idx").on(t.sha256)]
);

export const wikiPages = pgTable(
  "wiki_pages",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    slug: text("slug").notNull(),
    kind: pageKindEnum("kind").notNull(),
    title: text("title").notNull(),
    summary: text("summary"),
    body: text("body").notNull(),
    bodySha256: text("body_sha256").notNull(),
    filePath: text("file_path").notNull(),
    tags: text("tags").array(),
    sourceCount: integer("source_count").default(0),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    needsReview: boolean("needs_review").default(false),
    embedding: vector("embedding"),
  },
  (t) => [
    uniqueIndex("wiki_pages_slug_idx").on(t.slug),
    index("wiki_pages_fts_idx").using(
      "gin",
      sql`to_tsvector('english', coalesce(${t.title}, '') || ' ' || coalesce(${t.summary}, '') || ' ' || coalesce(${t.body}, ''))`
    ),
    // Enable HNSW only past ~1000 pages:
    // index("wiki_pages_embedding_idx").using("hnsw", t.embedding.op("vector_cosine_ops")),
  ]
);

export const edges = pgTable(
  "edges",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    fromSlug: text("from_slug")
      .notNull()
      .references(() => wikiPages.slug, { onDelete: "cascade" }),
    toSlug: text("to_slug")
      .notNull()
      .references(() => wikiPages.slug, { onDelete: "cascade" }),
    relation: text("relation").notNull().default("references"),
    confidence: confidenceEnum("confidence").notNull().default("EXTRACTED"),
    confidenceScore: doublePrecision("confidence_score").default(1.0),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (t) => [
    uniqueIndex("edges_from_to_rel_idx").on(
      t.fromSlug,
      t.toSlug,
      t.relation
    ),
  ]
);

export const ingestLog = pgTable("ingest_log", {
  id: uuid("id").primaryKey().defaultRandom(),
  ts: timestamp("ts").defaultNow().notNull(),
  op: text("op").notNull(),
  subject: text("subject").notNull(),
  sourceId: uuid("source_id").references(() => rawSources.id),
  affectedPages: text("affected_pages").array(),
  details: jsonb("details"),
});

export const contradictions = pgTable("contradictions", {
  id: uuid("id").primaryKey().defaultRandom(),
  pageA: text("page_a").notNull(),
  pageB: text("page_b").notNull(),
  claimA: text("claim_a").notNull(),
  claimB: text("claim_b").notNull(),
  detectedAt: timestamp("detected_at").defaultNow().notNull(),
  resolvedAt: timestamp("resolved_at"),
  resolution: text("resolution"),
});
