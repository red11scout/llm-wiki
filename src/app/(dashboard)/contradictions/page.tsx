import { dbRead } from "@db";
import { contradictions } from "@db/schema";
import { desc, isNull, isNotNull } from "drizzle-orm";
import Link from "next/link";
import { ResolveForm } from "@/components/resolve-form";

export const metadata = { title: "Contradictions — LLM Wiki" };

export default async function ContradictionsPage() {
  const [unresolved, resolved] = await Promise.all([
    dbRead
      .select()
      .from(contradictions)
      .where(isNull(contradictions.resolvedAt))
      .orderBy(desc(contradictions.detectedAt)),
    dbRead
      .select()
      .from(contradictions)
      .where(isNotNull(contradictions.resolvedAt))
      .orderBy(desc(contradictions.detectedAt)),
  ]);

  const total = unresolved.length + resolved.length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Contradictions</h1>
        <p className="text-sm text-muted mt-1">
          {unresolved.length} unresolved &middot; {resolved.length} resolved
          &middot; {total} total
        </p>
      </div>

      {total === 0 ? (
        <div className="rounded-lg border border-border bg-panel p-8 text-center text-muted">
          No contradictions detected. Run a lint pass to check for conflicts.
        </div>
      ) : (
        <div className="space-y-8">
          {/* Unresolved */}
          {unresolved.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500" />
                Unresolved ({unresolved.length})
              </h2>
              <div className="grid gap-4">
                {unresolved.map((c) => (
                  <div
                    key={c.id}
                    className="rounded-lg border border-amber-200 bg-amber-50/50 p-5 space-y-3"
                  >
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Link
                        href={`/wiki/${c.pageA}`}
                        className="text-brand-blue hover:underline"
                      >
                        {c.pageA}
                      </Link>
                      <span className="text-muted">vs</span>
                      <Link
                        href={`/wiki/${c.pageB}`}
                        className="text-brand-blue hover:underline"
                      >
                        {c.pageB}
                      </Link>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="rounded-md bg-white/60 border border-border p-3">
                        <p className="text-xs font-medium text-muted mb-1">
                          Claim A ({c.pageA})
                        </p>
                        <p className="text-sm text-foreground">{c.claimA}</p>
                      </div>
                      <div className="rounded-md bg-white/60 border border-border p-3">
                        <p className="text-xs font-medium text-muted mb-1">
                          Claim B ({c.pageB})
                        </p>
                        <p className="text-sm text-foreground">{c.claimB}</p>
                      </div>
                    </div>

                    <p className="text-xs text-muted">
                      Detected {c.detectedAt.toLocaleDateString()}
                    </p>

                    <ResolveForm contradictionId={c.id} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Resolved */}
          {resolved.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-muted flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500" />
                Resolved ({resolved.length})
              </h2>
              <div className="grid gap-4">
                {resolved.map((c) => (
                  <div
                    key={c.id}
                    className="rounded-lg border border-border bg-panel p-5 space-y-3 opacity-70"
                  >
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Link
                        href={`/wiki/${c.pageA}`}
                        className="text-brand-blue hover:underline"
                      >
                        {c.pageA}
                      </Link>
                      <span className="text-muted">vs</span>
                      <Link
                        href={`/wiki/${c.pageB}`}
                        className="text-brand-blue hover:underline"
                      >
                        {c.pageB}
                      </Link>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="rounded-md bg-background/50 border border-border p-3">
                        <p className="text-xs font-medium text-muted mb-1">
                          Claim A ({c.pageA})
                        </p>
                        <p className="text-sm text-foreground">{c.claimA}</p>
                      </div>
                      <div className="rounded-md bg-background/50 border border-border p-3">
                        <p className="text-xs font-medium text-muted mb-1">
                          Claim B ({c.pageB})
                        </p>
                        <p className="text-sm text-foreground">{c.claimB}</p>
                      </div>
                    </div>

                    <div className="rounded-md bg-green-50/50 border border-green-200 p-3">
                      <p className="text-xs font-medium text-green-700 mb-1">
                        Resolution
                      </p>
                      <p className="text-sm text-foreground">{c.resolution}</p>
                    </div>

                    <div className="flex gap-3 text-xs text-muted">
                      <span>Detected {c.detectedAt.toLocaleDateString()}</span>
                      <span>
                        Resolved {c.resolvedAt?.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
