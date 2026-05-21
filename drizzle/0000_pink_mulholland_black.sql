CREATE EXTENSION IF NOT EXISTS vector;--> statement-breakpoint
CREATE TYPE "public"."confidence" AS ENUM('EXTRACTED', 'INFERRED', 'AMBIGUOUS');--> statement-breakpoint
CREATE TYPE "public"."page_kind" AS ENUM('entity', 'concept', 'source', 'comparison');--> statement-breakpoint
CREATE TYPE "public"."source_type" AS ENUM('imessage', 'article', 'pdf', 'transcript', 'note', 'chat');--> statement-breakpoint
CREATE TABLE "contradictions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"page_a" text NOT NULL,
	"page_b" text NOT NULL,
	"claim_a" text NOT NULL,
	"claim_b" text NOT NULL,
	"detected_at" timestamp DEFAULT now() NOT NULL,
	"resolved_at" timestamp,
	"resolution" text
);
--> statement-breakpoint
CREATE TABLE "edges" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"from_slug" text NOT NULL,
	"to_slug" text NOT NULL,
	"relation" text DEFAULT 'references' NOT NULL,
	"confidence" "confidence" DEFAULT 'EXTRACTED' NOT NULL,
	"confidence_score" double precision DEFAULT 1,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ingest_log" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"ts" timestamp DEFAULT now() NOT NULL,
	"op" text NOT NULL,
	"subject" text NOT NULL,
	"source_id" uuid,
	"affected_pages" text[],
	"details" jsonb
);
--> statement-breakpoint
CREATE TABLE "raw_sources" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"type" "source_type" NOT NULL,
	"external_id" text,
	"sha256" text NOT NULL,
	"file_path" text NOT NULL,
	"ingested" boolean DEFAULT false NOT NULL,
	"ingested_at" timestamp,
	"metadata" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "wiki_pages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"kind" "page_kind" NOT NULL,
	"title" text NOT NULL,
	"summary" text,
	"body" text NOT NULL,
	"body_sha256" text NOT NULL,
	"file_path" text NOT NULL,
	"tags" text[],
	"source_count" integer DEFAULT 0,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"needs_review" boolean DEFAULT false,
	"embedding" vector(1536)
);
--> statement-breakpoint
CREATE UNIQUE INDEX "wiki_pages_slug_idx" ON "wiki_pages" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "raw_sources_sha256_idx" ON "raw_sources" USING btree ("sha256");--> statement-breakpoint
ALTER TABLE "edges" ADD CONSTRAINT "edges_from_slug_wiki_pages_slug_fk" FOREIGN KEY ("from_slug") REFERENCES "public"."wiki_pages"("slug") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "edges" ADD CONSTRAINT "edges_to_slug_wiki_pages_slug_fk" FOREIGN KEY ("to_slug") REFERENCES "public"."wiki_pages"("slug") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ingest_log" ADD CONSTRAINT "ingest_log_source_id_raw_sources_id_fk" FOREIGN KEY ("source_id") REFERENCES "public"."raw_sources"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "edges_from_to_rel_idx" ON "edges" USING btree ("from_slug","to_slug","relation");--> statement-breakpoint
CREATE INDEX "wiki_pages_fts_idx" ON "wiki_pages" USING gin (to_tsvector('english', coalesce("title", '') || ' ' || coalesce("summary", '') || ' ' || coalesce("body", '')));--> statement-breakpoint
CREATE OR REPLACE FUNCTION notify_ingest_log() RETURNS trigger AS $$
BEGIN
  PERFORM pg_notify('ingest_log_insert', row_to_json(NEW)::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;--> statement-breakpoint
CREATE TRIGGER ingest_log_notify AFTER INSERT ON ingest_log
FOR EACH ROW EXECUTE FUNCTION notify_ingest_log();