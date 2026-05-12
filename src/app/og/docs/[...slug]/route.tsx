import { getPageImage, source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { PageOgImage } from '@/lib/og-template';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/og/docs/[...slug]'>) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  const fontData = await readFile(join(process.cwd(), 'public/fonts/TenorSans-Regular.ttf'));

  return new ImageResponse(
    <PageOgImage title={page.data.title} description={page.data.description} />,
    {
      width: 1200,
      height: 630,
      fonts: [{ name: 'Tenor Sans', data: fontData, weight: 400, style: 'normal' }],
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: getPageImage(page).segments,
  }));
}
