import { dbRead } from "@db";
import { wikiPages, edges } from "@db/schema";
import { WikiGraph } from "@/components/wiki-graph";

export const metadata = { title: "Knowledge Graph — LLM Wiki" };

export default async function GraphPage() {
  const [allPages, allEdges] = await Promise.all([
    dbRead
      .select({
        slug: wikiPages.slug,
        title: wikiPages.title,
        kind: wikiPages.kind,
      })
      .from(wikiPages),
    dbRead
      .select({
        fromSlug: edges.fromSlug,
        toSlug: edges.toSlug,
        relation: edges.relation,
      })
      .from(edges),
  ]);

  const nodes = allPages.map((p) => ({
    id: p.slug,
    title: p.title,
    kind: p.kind,
  }));

  const links = allEdges.map((e) => ({
    source: e.fromSlug,
    target: e.toSlug,
    relation: e.relation,
  }));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Knowledge Graph</h1>
          <p className="text-sm text-muted mt-1">
            {nodes.length} nodes &middot; {links.length} edges
          </p>
        </div>
      </div>

      <div className="relative">
        <WikiGraph nodes={nodes} links={links} />
      </div>
    </div>
  );
}
