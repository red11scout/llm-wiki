import { z } from "zod";

export const NewEntitySchema = z.object({
  slug: z.string().describe("Kebab-case slug for the new page"),
  title: z.string().describe("Human-readable title"),
  kind: z.enum(["entity", "concept"]),
  summary: z
    .string()
    .describe("One-line summary for index.md, max 160 chars"),
  body: z
    .string()
    .describe("Full markdown body with [[wikilinks]] and frontmatter"),
  tags: z.array(z.string()).default([]),
});

export const ContradictionSchema = z.object({
  pageSlug: z.string().describe("Slug of the existing page that conflicts"),
  existingClaim: z.string().describe("The claim in the existing page"),
  newClaim: z.string().describe("The contradicting claim from the new source"),
});

export const AffectedPageSchema = z.object({
  slug: z.string().describe("Slug of existing page to update"),
  updatedBody: z
    .string()
    .describe(
      "Full updated markdown body (with frontmatter) for the existing page"
    ),
});

export const PageUpdateSchema = z.object({
  sourcePageSlug: z.string().describe("Slug for the new source page"),
  sourcePageTitle: z.string().describe("Title for the source page"),
  sourcePageSummary: z
    .string()
    .describe("One-line summary of the source for index.md"),
  sourcePageBody: z
    .string()
    .describe("Full markdown body for the source page with [[wikilinks]]"),
  sourcePageTags: z.array(z.string()).default([]),
  newEntities: z
    .array(NewEntitySchema)
    .describe("New entity or concept pages to create"),
  contradictions: z
    .array(ContradictionSchema)
    .describe("Contradictions found with existing pages"),
  affectedPages: z
    .array(AffectedPageSchema)
    .describe("Existing pages that need updating"),
});

export const QueryResultSchema = z.object({
  answer: z.string().describe("Synthesized answer with [[slug]] citations"),
  citations: z.array(
    z.object({
      slug: z.string(),
      excerpt: z.string().describe("Relevant excerpt from the cited page"),
    })
  ),
  shouldFile: z
    .boolean()
    .describe("True if this answer is durable and should become a wiki page"),
  filedSlug: z
    .string()
    .optional()
    .describe("If shouldFile, the slug for the new page"),
  filedTitle: z
    .string()
    .optional()
    .describe("If shouldFile, the title for the new page"),
});

export const LintFindingSchema = z.object({
  type: z.enum([
    "contradiction",
    "stale",
    "orphan",
    "missing_page",
    "missing_crossref",
  ]),
  slug: z.string().describe("The page slug this finding relates to"),
  description: z.string(),
  suggestedFix: z.string().optional(),
});

export type PageUpdate = z.infer<typeof PageUpdateSchema>;
export type QueryResult = z.infer<typeof QueryResultSchema>;
export type LintFinding = z.infer<typeof LintFindingSchema>;
export type NewEntity = z.infer<typeof NewEntitySchema>;
