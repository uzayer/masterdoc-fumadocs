import { GraphView } from '@/components/graph-view';
import { buildGraph } from '@/lib/build-graph';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Graph View',
  description: 'A visual map of how every page on this site connects.',
};

export default function GraphPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <h1 className="mb-2 text-2xl font-semibold tracking-tight text-fd-foreground">Graph View</h1>
      <p className="mb-8 text-fd-muted-foreground text-sm">
        Each node is a page. Edges are links between pages. Hover to see descriptions, click to navigate.
      </p>
      <GraphView graph={buildGraph()} />
    </div>
  );
}
