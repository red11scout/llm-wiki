import { dbRead } from "@db";
import { wikiPages, edges, ingestLog } from "@db/schema";
import { desc, count } from "drizzle-orm";
import Link from "next/link";
import { cn } from "@/lib/utils";

const kindColors: Record<string, string> = {
  entity: "bg-blue-100 text-blue-800",
  concept: "bg-green-100 text-green-800",
  source: "bg-amber-100 text-amber-800",
  comparison: "bg-purple-100 text-purple-800",
  memory: "bg-pink-100 text-pink-800",
};

function KindBadge({ kind }: { kind: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-2.5 py-0.5 text-xs font-medium",
        kindColors[kind] ?? "bg-gray-100 text-gray-800"
      )}
    >
      {kind}
    </span>
  );
}

function formatDate(d: Date) {
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function WikiIndexPage() {
  const [pages, edgeCount, recentLogs] = await Promise.all([
    dbRead.select().from(wikiPages).orderBy(desc(wikiPages.updatedAt)),
    dbRead.select({ value: count() }).from(edges),
    dbRead
      .select()
      .from(ingestLog)
      .orderBy(desc(ingestLog.ts))
      .limit(10),
  ]);

  const totalEdges = edgeCount[0]?.value ?? 0;

  // Group pages by kind
  const grouped = new Map<string, typeof pages>();
  for (const page of pages) {
    const existing = grouped.get(page.kind) ?? [];
    existing.push(page);
    grouped.set(page.kind, existing);
  }

  const kindOrder = ["entity", "concept", "source", "comparison", "memory"];
  const sortedKinds = [...grouped.keys()].sort(
    (a, b) => kindOrder.indexOf(a) - kindOrder.indexOf(b)
  );

  return (
    <>
      <h1 className="text-2xl font-bold text-foreground mb-6">Wiki</h1>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="rounded-lg border border-border bg-panel p-5">
          <p className="text-sm text-muted mb-1">Total Pages</p>
          <p className="text-3xl font-bold text-brand-navy">{pages.length}</p>
        </div>
        <div className="rounded-lg border border-border bg-panel p-5">
          <p className="text-sm text-muted mb-1">Total Edges</p>
          <p className="text-3xl font-bold text-brand-navy">{totalEdges}</p>
        </div>
        <div className="rounded-lg border border-border bg-panel p-5">
          <p className="text-sm text-muted mb-1">Recent Ingests</p>
          <p className="text-3xl font-bold text-brand-navy">
            {recentLogs.length}
          </p>
        </div>
      </div>

      {/* Recent log entries */}
      {recentLogs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Recent Activity
          </h2>
          <div className="rounded-lg border border-border bg-panel divide-y divide-border">
            {recentLogs.map((log) => (
              <div
                key={log.id}
                className="px-4 py-3 flex items-center gap-3 text-sm"
              >
                <span className="font-mono text-xs text-muted shrink-0">
                  {formatDate(log.ts)}
                </span>
                <span className="font-medium text-brand-navy uppercase text-xs">
                  {log.op}
                </span>
                <span className="text-foreground truncate">{log.subject}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pages grouped by kind */}
      {sortedKinds.map((kind) => {
        const kindPages = grouped.get(kind)!;
        return (
          <section key={kind} className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 capitalize">
              {kind === "entity" ? "Entities" : `${kind}s`}
            </h2>
            <div className="rounded-lg border border-border bg-panel overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-background/50">
                    <th className="text-left px-4 py-2.5 font-medium text-muted">
                      Title
                    </th>
                    <th className="text-left px-4 py-2.5 font-medium text-muted">
                      Kind
                    </th>
                    <th className="text-left px-4 py-2.5 font-medium text-muted hidden md:table-cell">
                      Summary
                    </th>
                    <th className="text-right px-4 py-2.5 font-medium text-muted">
                      Sources
                    </th>
                    <th className="text-right px-4 py-2.5 font-medium text-muted hidden sm:table-cell">
                      Updated
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {kindPages.map((page) => (
                    <tr
                      key={page.id}
                      className="hover:bg-background/50 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <Link
                          href={`/wiki/${page.slug}`}
                          className="font-medium text-brand-blue hover:underline"
                        >
                          {page.title}
                        </Link>
                      </td>
                      <td className="px-4 py-3">
                        <KindBadge kind={page.kind} />
                      </td>
                      <td className="px-4 py-3 text-muted max-w-xs truncate hidden md:table-cell">
                        {page.summary ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-right tabular-nums">
                        {page.sourceCount ?? 0}
                      </td>
                      <td className="px-4 py-3 text-right text-muted hidden sm:table-cell">
                        {formatDate(page.updatedAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}

      {pages.length === 0 && (
        <div className="text-center py-16 text-muted">
          <p className="text-lg mb-2">No wiki pages yet.</p>
          <p className="text-sm">
            Run <code className="font-mono bg-panel px-1.5 py-0.5 rounded border border-border">pnpm wiki:ingest</code> to get started.
          </p>
        </div>
      )}
    </>
  );
}
