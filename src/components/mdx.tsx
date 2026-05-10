import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { GradeTableLayout } from '@/components/grade-table-layout';
import { GradesBand } from '@/components/grades-band';
import { Mermaid } from '@/components/mdx/mermaid';
import { OrgTag } from '@/components/org-tag';
import { StatusCard } from '@/components/status-card';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Tab,
    Tabs,
    Accordion,
    Accordions,
    Step,
    Steps,
    Card,
    Cards,
    File,
    Files,
    Folder,
    img: (props) => <ImageZoom {...(props as Parameters<typeof ImageZoom>[0])} />,
    GradeTableLayout,
    GradesBand,
    Mermaid,
    OrgTag,
    StatusCard,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
