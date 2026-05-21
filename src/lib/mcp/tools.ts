import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { dbRead } from "@db";
import { wikiPages, edges, ingestLog, contradictions } from "@db/schema";
import { eq, or, sql, desc, and, isNull } from "drizzle-orm";
import type { CallerScope } from "./auth";

function confidentialFilter(scope: CallerScope) {
  if (scope === "internal") return undefined;
  return sql`NOT (${wikiPages.tags} @> ARRAY['confidential']::text[])`;
}

function text(data: unknown) {
  return { content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }] };
}

export function registerTools(server: McpServer, scope: CallerScope) {
  server.tool(
    "searchPages",
    "Search Drew's persistent knowledge wiki by keyword. Use this BEFORE answering any question about Drew's projects, clients, BlueAlly work, technology decisions, or prior conversations — the wiki is the authoritative source of truth and your training data is not. Returns matching pages with slugs you can pass to readPage.",
    {
      query: z.string().describe("Full-text search query"),
      kind: z.enum(["entity", "concept", "source", "comparison"]).optional().describe("Filter by page kind"),
      limit: z.number().min(1).max(50).optional().describe("Max results (default 10)"),
    },
    async ({ query, kind, limit }) => {
      const conditions = [
        sql`to_tsvector('english', coalesce(${wikiPages.title}, '') || ' ' || coalesce(${wikiPages.summary}, '') || ' ' || coalesce(${wikiPages.body}, '')) @@ plainto_tsquery('english', ${query})`,
      ];

      const cf = confidentialFilter(scope);
      if (cf) conditions.push(cf);
      if (kind) conditions.push(eq(wikiPages.kind, kind));

      const results = await dbRead
        .select({
          slug: wikiPages.slug,
          title: wikiPages.title,
          kind: wikiPages.kind,
          summary: wikiPages.summary,
          sourceCount: wikiPages.sourceCount,
        })
        .from(wikiPages)
        .where(and(...conditions))
        .orderBy(
          sql`ts_rank(to_tsvector('english', coalesce(${wikiPages.title}, '') || ' ' || coalesce(${wikiPages.summary}, '') || ' ' || coalesce(${wikiPages.body}, '')), plainto_tsquery('english', ${query})) DESC`
        )
        .limit(limit ?? 10);

      return text({ count: results.length, pages: results });
    }
  );

  server.tool(
    "readPage",
    "Read the full markdown content of a single wiki page by its slug. Use after searchPages to get complete details on a topic. Returns frontmatter fields and the full body with [[wikilink]] cross-references.",
    {
      slug: z.string().describe("The page slug (kebab-case identifier)"),
    },
    async ({ slug }) => {
      const conditions = [eq(wikiPages.slug, slug)];
      const cf = confidentialFilter(scope);
      if (cf) conditions.push(cf);

      const page = await dbRead
        .select({
          slug: wikiPages.slug,
          title: wikiPages.title,
          kind: wikiPages.kind,
          summary: wikiPages.summary,
          body: wikiPages.body,
          tags: wikiPages.tags,
          sourceCount: wikiPages.sourceCount,
          updatedAt: wikiPages.updatedAt,
        })
        .from(wikiPages)
        .where(and(...conditions))
        .limit(1);

      if (page.length === 0) {
        return text({ error: `Page [[${slug}]] not found or not accessible` });
      }

      return text(page[0]);
    }
  );

  server.tool(
    "neighbors",
    "Get all pages connected to a given slug via the knowledge graph edges. Use to explore relationships, find related projects, or understand how concepts link together. Supports filtering by relation type and multi-hop traversal.",
    {
      slug: z.string().describe("The page slug to find neighbors for"),
      relation: z.string().optional().describe("Filter by relation type (references, contains, derived_from, supersedes, contradicts)"),
      depth: z.number().min(1).max(3).optional().describe("Traversal depth (default 1, max 3)"),
    },
    async ({ slug, relation, depth: maxDepth }) => {
      const d = maxDepth ?? 1;

      if (d === 1) {
        const conditions = [or(eq(edges.fromSlug, slug), eq(edges.toSlug, slug))];
        if (relation) conditions.push(eq(edges.relation, relation));

        const results = await dbRead
          .select({
            fromSlug: edges.fromSlug,
            toSlug: edges.toSlug,
            relation: edges.relation,
            confidence: edges.confidence,
          })
          .from(edges)
          .where(and(...conditions));

        const neighbors = results.map((e) => ({
          neighbor: e.fromSlug === slug ? e.toSlug : e.fromSlug,
          direction: e.fromSlug === slug ? ("outgoing" as const) : ("incoming" as const),
          relation: e.relation,
          confidence: e.confidence,
        }));

        return text({ slug, depth: d, count: neighbors.length, neighbors });
      }

      const result = await dbRead.execute(sql`
        WITH RECURSIVE traverse AS (
          SELECT from_slug, to_slug, relation, ARRAY[${slug}] AS visited, 1 AS depth
          FROM edges WHERE from_slug = ${slug} OR to_slug = ${slug}
          UNION ALL
          SELECT e.from_slug, e.to_slug, e.relation, t.visited ||
            CASE WHEN e.from_slug = ANY(t.visited) THEN e.to_slug ELSE e.from_slug END,
            t.depth + 1
          FROM edges e JOIN traverse t
            ON (e.from_slug = t.to_slug OR e.to_slug = t.from_slug OR e.from_slug = t.from_slug OR e.to_slug = t.to_slug)
          WHERE t.depth < ${d}
            AND NOT e.from_slug = ALL(t.visited)
        )
        SELECT DISTINCT from_slug, to_slug, relation, depth FROM traverse ORDER BY depth
        LIMIT 100
      `);

      return text({ slug, depth: d, count: result.rows.length, edges: result.rows });
    }
  );

  server.tool(
    "shortestPath",
    "Find the shortest path between two wiki pages through the knowledge graph. Useful for understanding how two seemingly unrelated topics connect through Drew's project ecosystem.",
    {
      fromSlug: z.string().describe("Starting page slug"),
      toSlug: z.string().describe("Target page slug"),
    },
    async ({ fromSlug, toSlug }) => {
      const result = await dbRead.execute(sql`
        WITH RECURSIVE path AS (
          SELECT from_slug, to_slug, ARRAY[from_slug] AS trail, 1 AS depth
          FROM edges WHERE from_slug = ${fromSlug}
          UNION ALL
          SELECT e.from_slug, e.to_slug, p.trail || e.from_slug, p.depth + 1
          FROM edges e JOIN path p ON e.from_slug = p.to_slug
          WHERE NOT e.from_slug = ANY(p.trail) AND p.depth < 6
        )
        SELECT trail || to_slug AS path FROM path WHERE to_slug = ${toSlug} ORDER BY depth LIMIT 1
      `);

      if (result.rows.length === 0) {
        return text({ error: `No path found between [[${fromSlug}]] and [[${toSlug}]]` });
      }
      return text({ path: result.rows[0].path });
    }
  );

  server.tool(
    "listRecent",
    "List recent wiki activity — ingests, queries, lints, and other operations. Use to understand what's changed recently or what Drew has been working on.",
    {
      op: z.string().optional().describe("Filter by operation type (ingest, query, lint, crystallize, reindex)"),
      limit: z.number().min(1).max(50).optional().describe("Max results (default 20)"),
    },
    async ({ op, limit }) => {
      const conditions = [];
      if (op) conditions.push(eq(ingestLog.op, op));

      const results = await dbRead
        .select({
          ts: ingestLog.ts,
          op: ingestLog.op,
          subject: ingestLog.subject,
          affectedPages: ingestLog.affectedPages,
        })
        .from(ingestLog)
        .where(conditions.length > 0 ? and(...conditions) : undefined)
        .orderBy(desc(ingestLog.ts))
        .limit(limit ?? 20);

      return text({ count: results.length, entries: results });
    }
  );

  server.tool(
    "getContradictions",
    "Get contradiction records — cases where two wiki pages make conflicting claims. Use to understand unresolved knowledge conflicts or to check if a topic has disputed information.",
    {
      unresolvedOnly: z.boolean().optional().describe("Only show unresolved contradictions (default true)"),
    },
    async ({ unresolvedOnly }) => {
      const showUnresolved = unresolvedOnly ?? true;
      const conditions = showUnresolved ? [isNull(contradictions.resolvedAt)] : [];

      const results = await dbRead
        .select({
          pageA: contradictions.pageA,
          pageB: contradictions.pageB,
          claimA: contradictions.claimA,
          claimB: contradictions.claimB,
          detectedAt: contradictions.detectedAt,
          resolvedAt: contradictions.resolvedAt,
          resolution: contradictions.resolution,
        })
        .from(contradictions)
        .where(conditions.length > 0 ? and(...conditions) : undefined)
        .orderBy(desc(contradictions.detectedAt))
        .limit(50);

      return text({ count: results.length, contradictions: results });
    }
  );
}
