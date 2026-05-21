import { readFile, readdir, writeFile } from "fs/promises";
import { join } from "path";
import { dbWrite } from "@db";
import {
  wikiPages,
  edges,
  contradictions as contradictionsTable,
  ingestLog,
} from "@db/schema";
import { eq, sql, isNull } from "drizzle-orm";
import { extractWikilinks } from "./sync";
import type { LintFinding } from "./schemas";

const WIKI_DIR = join(process.cwd(), "wiki");
const WIKI_SUBDIRS = ["entities", "concepts", "sources", "memories"];

function todayISO(): string {
  return new Date().toISOString().split("T")[0];
}

async function getAllSlugs(): Promise<Set<string>> {
  const slugs = new Set<string>();
  for (const subdir of WIKI_SUBDIRS) {
    try {
      const files = await readdir(join(WIKI_DIR, subdir));
      for (const f of files) {
        if (f.endsWith(".md")) {
          slugs.add(f.replace(/\.md$/, ""));
        }
      }
    } catch {
      // directory might not exist
    }
  }
  return slugs;
}

async function findOrphans(): Promise<LintFinding[]> {
  const findings: LintFinding[] = [];

  const allPages = await dbWrite
    .select({ slug: wikiPages.slug, kind: wikiPages.kind })
    .from(wikiPages);

  for (const page of allPages) {
    const inbound = await dbWrite
      .select({ id: edges.id })
      .from(edges)
      .where(eq(edges.toSlug, page.slug))
      .limit(1);

    if (inbound.length === 0) {
      findings.push({
        type: "orphan",
        slug: page.slug,
        description: `No inbound links. This ${page.kind} page is not reachable from any other page.`,
      });
    }
  }

  return findings;
}

async function findMissingPages(): Promise<LintFinding[]> {
  const findings: LintFinding[] = [];
  const existingSlugs = await getAllSlugs();

  for (const subdir of WIKI_SUBDIRS) {
    try {
      const files = await readdir(join(WIKI_DIR, subdir));
      for (const f of files) {
        if (!f.endsWith(".md")) continue;
        const content = await readFile(join(WIKI_DIR, subdir, f), "utf-8");
        const links = extractWikilinks(content);
        const sourceSlug = f.replace(/\.md$/, "");

        for (const link of links) {
          if (!existingSlugs.has(link)) {
            findings.push({
              type: "missing_page",
              slug: link,
              description: `Referenced as [[${link}]] in ${sourceSlug} but no page exists.`,
              suggestedFix: `Create wiki/concepts/${link}.md or wiki/entities/${link}.md`,
            });
          }
        }
      }
    } catch {
      continue;
    }
  }

  const seen = new Set<string>();
  return findings.filter((f) => {
    if (seen.has(f.slug)) return false;
    seen.add(f.slug);
    return true;
  });
}

async function findUnresolvedContradictions(): Promise<LintFinding[]> {
  const rows = await dbWrite
    .select()
    .from(contradictionsTable)
    .where(isNull(contradictionsTable.resolvedAt));

  return rows.map((c) => ({
    type: "contradiction" as const,
    slug: c.pageA,
    description: `Contradiction between [[${c.pageA}]] and [[${c.pageB}]]: "${c.claimA}" vs "${c.claimB}"`,
  }));
}

async function findStaleClaims(): Promise<LintFinding[]> {
  const findings: LintFinding[] = [];
  const ninetyDaysAgo = new Date();
  ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

  const stalePages = await dbWrite
    .select({
      slug: wikiPages.slug,
      updatedAt: wikiPages.updatedAt,
      sourceCount: wikiPages.sourceCount,
    })
    .from(wikiPages)
    .where(sql`${wikiPages.updatedAt} < ${ninetyDaysAgo}`);

  for (const page of stalePages) {
    findings.push({
      type: "stale",
      slug: page.slug,
      description: `Last updated ${page.updatedAt.toISOString().split("T")[0]}, over 90 days ago. May contain outdated claims.`,
      suggestedFix: "Review against recent sources and update.",
    });
  }

  return findings;
}

export async function lint(): Promise<{
  findings: LintFinding[];
  summary: string;
}> {
  const [orphans, missingPages, contradictions, staleClaims] =
    await Promise.all([
      findOrphans(),
      findMissingPages(),
      findUnresolvedContradictions(),
      findStaleClaims(),
    ]);

  const findings = [
    ...contradictions,
    ...staleClaims,
    ...orphans,
    ...missingPages,
  ];

  const needsReviewLines = [
    "# Needs Review",
    "",
    `Last lint: ${todayISO()}`,
    `Total findings: ${findings.length}`,
    "",
  ];

  const byType: Record<string, LintFinding[]> = {};
  for (const f of findings) {
    if (!byType[f.type]) byType[f.type] = [];
    byType[f.type].push(f);
  }

  for (const [type, items] of Object.entries(byType)) {
    needsReviewLines.push(`## ${type} (${items.length})`);
    for (const item of items) {
      needsReviewLines.push(`- **[[${item.slug}]]**: ${item.description}`);
      if (item.suggestedFix) {
        needsReviewLines.push(`  - Fix: ${item.suggestedFix}`);
      }
    }
    needsReviewLines.push("");
  }

  if (findings.length === 0) {
    needsReviewLines.push("No items pending review.");
  }

  await writeFile(
    join(WIKI_DIR, "needs-review.md"),
    needsReviewLines.join("\n"),
    "utf-8"
  );

  const summary = `Lint complete: ${findings.length} findings (${contradictions.length} contradictions, ${staleClaims.length} stale, ${orphans.length} orphans, ${missingPages.length} missing pages)`;

  const logEntry = [
    "",
    `## [${todayISO()}] lint | ${findings.length} findings`,
    `- contradictions: ${contradictions.length}`,
    `- stale: ${staleClaims.length}`,
    `- orphans: ${orphans.length}`,
    `- missing pages: ${missingPages.length}`,
    "",
  ].join("\n");

  const logPath = join(WIKI_DIR, "log.md");
  const existingLog = await readFile(logPath, "utf-8");
  await writeFile(logPath, existingLog + logEntry, "utf-8");

  await dbWrite.insert(ingestLog).values({
    op: "lint",
    subject: summary,
    affectedPages: findings.map((f) => f.slug),
    details: { findingsByType: byType },
  });

  return { findings, summary };
}
