import type { ReactNode } from 'react';

/** Wraps academic-record tables; last column is right-aligned with tabular figures. */
export function GradeTableLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="grade-table-layout [&_table_thead_th:last-child]:text-end [&_table_tbody_td:last-child]:text-end [&_table_tbody_td:last-child]:tabular-nums"
      data-slot="grade-table-layout"
    >
      {children}
    </div>
  );
}
