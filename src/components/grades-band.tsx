import type { ReactNode } from 'react';

/** Wraps a markdown pipe table so the A2 awarded block stays visually grouped. Used from MDX only. */
export function GradesBand({ children }: { children: ReactNode }) {
  return (
    <div
      role="region"
      aria-label="Awarded A2 grades, 2023–24 session"
      className="rounded-lg border border-(--color-fd-warning)/35 bg-(--color-fd-warning)/10 p-3 [&>div.relative]:my-0"
      data-slot="grades-a2-band"
    >
      {children}
    </div>
  );
}
