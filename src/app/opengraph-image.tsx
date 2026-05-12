import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { SiteOgImage } from '@/lib/og-template';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const fontData = await readFile(join(process.cwd(), 'public/fonts/TenorSans-Regular.ttf'));

  return new ImageResponse(<SiteOgImage />, {
    ...size,
    fonts: [{ name: 'Tenor Sans', data: fontData, weight: 400, style: 'normal' }],
  });
}
