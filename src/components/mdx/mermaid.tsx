import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { renderMermaidSVG } from 'beautiful-mermaid';

export async function Mermaid({ chart }: { chart: string }) {
  try {
    const svg = renderMermaidSVG(chart, {
      bg: 'var(--color-fd-background)',
      fg: 'var(--color-fd-foreground)',
      line: 'var(--color-fd-foreground)',
      border: 'var(--color-fd-border)',
      muted: 'var(--color-fd-muted-foreground)',
      interactive: true,
      transparent: true,
    });
    // Inject responsive sizing — beautiful-mermaid emits fixed width/height attributes
    // on the <svg> element. Prepending max-width/height:auto to the SVG's inline style
    // lets it scale down when the container is narrower than the diagram, while the
    // outer overflow-x:auto wrapper gives a horizontal scrollbar for very wide diagrams.
    const responsiveSvg = svg.replace(
      /(<svg\b[^>]+\bstyle=")([^"]*)/,
      '$1max-width:100%;height:auto;$2',
    );

    return (
      <div style={{ overflowX: 'auto' }} dangerouslySetInnerHTML={{ __html: responsiveSvg }} />
    );
  } catch {
    return (
      <CodeBlock title="Mermaid">
        <Pre>{chart}</Pre>
      </CodeBlock>
    );
  }
}
