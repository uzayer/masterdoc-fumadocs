import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { source } from '@/lib/source';

const baseUrl = 'https://helloworld.uzayermasud.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages();

  return [
    {
      url: baseUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...pages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
