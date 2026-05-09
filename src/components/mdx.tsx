import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { GradeTableLayout } from '@/components/grade-table-layout';
import { GradesBand } from '@/components/grades-band';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    GradeTableLayout,
    GradesBand,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
