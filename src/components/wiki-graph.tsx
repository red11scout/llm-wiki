"use client";

import { useCallback, useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

interface GraphNode {
  id: string;
  title: string;
  kind: string;
}

interface GraphLink {
  source: string;
  target: string;
  relation: string;
}

interface WikiGraphProps {
  nodes: GraphNode[];
  links: GraphLink[];
}

const KIND_COLORS: Record<string, string> = {
  entity: "#02a2fd",
  concept: "#36bf78",
  source: "#f59e0b",
  comparison: "#8b5cf6",
  memory: "#ec4899",
};

export function WikiGraph({ nodes, links }: WikiGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    function update() {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleNodeClick = useCallback(
    (node: { id?: string | number }) => {
      if (node.id) {
        window.location.href = `/wiki/${node.id}`;
      }
    },
    []
  );

  const graphData = {
    nodes: nodes.map((n) => ({ id: n.id, title: n.title, kind: n.kind })),
    links: links.map((l) => ({ source: l.source, target: l.target, relation: l.relation })),
  };

  return (
    <div ref={containerRef} className="w-full h-[calc(100vh-12rem)] rounded-lg border border-border bg-panel">
      <ForceGraph2D
        width={dimensions.width}
        height={dimensions.height}
        graphData={graphData}
        nodeLabel="title"
        nodeColor={(node) => KIND_COLORS[(node as GraphNode).kind] ?? "#6b7280"}
        nodeRelSize={6}
        linkDirectionalArrowLength={4}
        linkDirectionalArrowRelPos={1}
        linkColor={() => "rgba(107,114,128,0.3)"}
        linkLabel="relation"
        onNodeClick={handleNodeClick}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const n = node as GraphNode & { x?: number; y?: number };
          const label = n.title;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px DM Sans, system-ui, sans-serif`;
          const color = KIND_COLORS[n.kind] ?? "#6b7280";

          // Draw node circle
          ctx.beginPath();
          ctx.arc(n.x ?? 0, n.y ?? 0, 5, 0, 2 * Math.PI);
          ctx.fillStyle = color;
          ctx.fill();

          // Draw label
          ctx.textAlign = "center";
          ctx.textBaseline = "top";
          ctx.fillStyle = color;
          ctx.fillText(label, n.x ?? 0, (n.y ?? 0) + 7);
        }}
      />

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-3 bg-panel/80 backdrop-blur rounded-md px-3 py-2 border border-border text-xs">
        {Object.entries(KIND_COLORS).map(([kind, color]) => (
          <span key={kind} className="flex items-center gap-1.5">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: color }}
            />
            {kind}
          </span>
        ))}
      </div>
    </div>
  );
}
