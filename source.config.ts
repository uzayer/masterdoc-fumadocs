import { defineCollections, defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { remarkMdxMermaid, remarkSteps } from 'fumadocs-core/mdx-plugins';
import lastModified from 'fumadocs-mdx/plugins/last-modified';
import { z } from 'zod';

// You can customize Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema.extend({
      tags: z.array(z.string()).optional(),
      date: z.string().optional(),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Short dated entries shown as a stream on the homepage. One file per update.
export const updates = defineCollections({
  type: 'doc',
  dir: 'content/updates',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxMermaid, remarkSteps],
  },
  plugins: [lastModified()],
});
