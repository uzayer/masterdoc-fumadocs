import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { DM_Sans, Tenor_Sans, JetBrains_Mono } from 'next/font/google';
import { cn } from "@/lib/utils";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://helloworld.uzayermasud.com'),
  title: {
    template: '%s | Uzayer Masud',
    default: 'Uzayer Masud',
  },
  description: 'Personal portfolio of Uzayer Masud.',
  openGraph: {
    title: 'Uzayer Masud',
    description: 'Personal portfolio of Uzayer Masud.',
    url: 'https://helloworld.uzayermasud.com',
    siteName: 'Uzayer Masud',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, type: 'image/png', alt: 'Uzayer Masud — Personal portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uzayer Masud',
    description: 'Personal portfolio of Uzayer Masud.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Uzayer Masud — Personal portfolio' }],
  },
};


const tenorSans = Tenor_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: '400',
});

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={cn(dmSans.variable, tenorSans.variable, jetbrainsMono.variable, "font-sans")} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
