import { getTableOfContents } from 'fumadocs-core/content/toc';
import { printErrors, scanURLs, validateFiles } from 'next-validate-link';
import { source } from '@/lib/source';

async function main() {
  const pages = source.getPages();

  const pagesWithData = await Promise.all(
    pages.map(async (page) => {
      const raw = await page.data.getText('raw');
      const toc = await getTableOfContents(raw);
      return { page, raw, hashes: toc.map((item) => item.url.slice(1)) };
    }),
  );

  const scanned = await scanURLs({
    preset: 'next',
    populate: {
      '(docs)/[...slug]': pagesWithData.map(({ page, hashes }) => ({
        value: page.slugs,
        hashes,
      })),
    },
  });

  const files = pagesWithData.map(({ page, raw }) => ({
    path: page.absolutePath,
    content: raw,
    url: page.url,
    data: page.data,
  }));

  printErrors(
    await validateFiles(files, {
      scanned,
      markdown: {
        components: {
          Card: { attributes: ['href'] },
          Cards: { attributes: ['href'] },
          StatusCard: { attributes: ['href'] },
        },
      },
      checkRelativePaths: 'as-url',
    }),
    true,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
