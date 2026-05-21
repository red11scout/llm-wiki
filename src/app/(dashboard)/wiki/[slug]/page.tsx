import { dbRead } from "@db";
import { wikiPages, edges } from "@db/schema";
import { eq, or } from "drizzle-orm";
import { notFound } from "next/navigation";
import { readFile } from "fs/promises";
import { join } from "path";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { cn } from "@/lib/utils";

const kindColors: Record<string, string> = {
  entity: "bg-blue-100 text-blue-800",
  concept: "bg-green-100 text-green-800",
  source: "bg-amber-100 text-amber-800",
  comparison: "bg-purple-100 text-purple-800",
  memory: "bg-pink-100 text-pink-800",
};

function formatDate(d: Date) {
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/** Replace [[slug]] wiki-links with anchor tags before markdown rendering. */
function expandWikiLinks(content: string): string {
  return content.replace(
    /\[\[([a-z0-9-]+)\]\]/g,
    (_match, slug: string) => `[${slug}](/wiki/${slug})`
  );
}

export default async function WikiPageDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [page] = await dbRead
    .select()
    .from(wikiPages)
    .where(eq(wikiPages.slug, slug))
    .limit(1);

  if (!page) notFound();

  // Try reading from disk first, fall back to body column
  let content = page.body;
  if (page.filePath) {
    try {
      const absPath = join(process.cwd(), page.filePath);
      const raw = await readFile(absPath, "utf-8");
      // Strip frontmatter (everything between --- ... ---)
      const stripped = raw.replace(/^---[\s\S]*?---\n*/, "");
      content = stripped;
    } catch {
      // File missing or unreadable; fall back to DB body
    }
  }

  // Fetch edges (neighbors)
  const neighbors = await dbRead
    .select()
    .from(edges)
    .where(or(eq(edges.fromSlug, slug), eq(edges.toSlug, slug)));

  // Deduplicate neighbor slugs
  const neighborSlugs = [
    ...new Set(
      neighbors.map((e) => (e.fromSlug === slug ? e.toSlug : e.fromSlug))
    ),
  ];

  const processed = expandWikiLinks(content);

  return (
    <div className="flex gap-8">
      {/* Main content */}
      <article className="flex-1 min-w-0">
        <div className="mb-6">
          <Link
            href="/wiki"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            &larr; Back to Wiki
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-2">
          {page.title}
        </h1>

        {page.summary && (
          <p className="text-muted text-lg mb-6">{page.summary}</p>
        )}

        <div className="prose prose-sm max-w-none text-foreground [&_a]:text-brand-blue [&_a:hover]:underline [&_h2]:text-foreground [&_h3]:text-foreground [&_code]:bg-panel [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:border [&_code]:border-border [&_pre]:bg-panel [&_pre]:border [&_pre]:border-border [&_pre]:rounded-lg [&_blockquote]:border-brand-blue [&_table]:border-border [&_th]:border-border [&_td]:border-border">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {processed}
          </ReactMarkdown>
        </div>
      </article>

      {/* Sidebar */}
      <aside className="w-56 shrink-0 hidden lg:block">
        <div className="sticky top-8 space-y-6">
          {/* Kind badge */}
          <div>
            <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">
              Kind
            </p>
            <span
              className={cn(
                "inline-block rounded-full px-2.5 py-0.5 text-xs font-medium",
                kindColors[page.kind] ?? "bg-gray-100 text-gray-800"
              )}
            >
              {page.kind}
            </span>
          </div>

          {/* Tags */}
          {page.tags && page.tags.length > 0 && (
            <div>
              <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">
                Tags
              </p>
              <div className="flex flex-wrap gap-1.5">
                {page.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-md bg-background border border-border px-2 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Source count */}
          <div>
            <p className="text-xs font-medium text-muted uppercase tracking-wide mb-1">
              Sources
            </p>
            <p className="text-sm font-medium">{page.sourceCount ?? 0}</p>
          </div>

          {/* Updated */}
          <div>
            <p className="text-xs font-medium text-muted uppercase tracking-wide mb-1">
              Updated
            </p>
            <p className="text-sm text-muted">{formatDate(page.updatedAt)}</p>
          </div>

          {/* Neighbors */}
          {neighborSlugs.length > 0 && (
            <div>
              <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">
                Connected Pages
              </p>
              <ul className="space-y-1">
                {neighborSlugs.map((s) => (
                  <li key={s}>
                    <Link
                      href={`/wiki/${s}`}
                      className="text-sm text-brand-blue hover:underline"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
