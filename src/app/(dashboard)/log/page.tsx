import { dbRead } from "@db";
import { ingestLog } from "@db/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";

export const metadata = { title: "Ingest Log — LLM Wiki" };

const OP_COLORS: Record<string, string> = {
  ingest: "bg-blue-100 text-blue-800",
  query: "bg-green-100 text-green-800",
  lint: "bg-amber-100 text-amber-800",
  crystallize: "bg-purple-100 text-purple-800",
  reindex: "bg-gray-100 text-gray-800",
};

function relativeTime(date: Date): string {
  const now = Date.now();
  const diff = now - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 30) return `${days}d ago`;
  return date.toLocaleDateString();
}

export default async function LogPage() {
  const logs = await dbRead
    .select()
    .from(ingestLog)
    .orderBy(desc(ingestLog.ts))
    .limit(50);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Ingest Log</h1>
        <p className="text-sm text-muted mt-1">
          Last {logs.length} operations
        </p>
      </div>

      {logs.length === 0 ? (
        <div className="rounded-lg border border-border bg-panel p-8 text-center text-muted">
          No log entries yet. Ingest a source to get started.
        </div>
      ) : (
        <div className="rounded-lg border border-border bg-panel overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-background/50">
                <th className="px-4 py-3 text-left font-medium text-muted">
                  Time
                </th>
                <th className="px-4 py-3 text-left font-medium text-muted">
                  Op
                </th>
                <th className="px-4 py-3 text-left font-medium text-muted">
                  Subject
                </th>
                <th className="px-4 py-3 text-left font-medium text-muted">
                  Affected Pages
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {logs.map((entry) => (
                <tr key={entry.id} className="hover:bg-background/30 transition-colors">
                  <td className="px-4 py-3 text-muted whitespace-nowrap">
                    <span title={entry.ts.toISOString()}>
                      {relativeTime(entry.ts)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        OP_COLORS[entry.op] ?? "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {entry.op}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium text-foreground">
                    {entry.subject}
                  </td>
                  <td className="px-4 py-3">
                    {entry.affectedPages && entry.affectedPages.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {entry.affectedPages.map((slug) => (
                          <Link
                            key={slug}
                            href={`/wiki/${slug}`}
                            className="inline-flex items-center rounded bg-brand-blue/10 px-1.5 py-0.5 text-xs text-brand-blue hover:bg-brand-blue/20 transition-colors"
                          >
                            {slug}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <span className="text-muted text-xs">--</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
