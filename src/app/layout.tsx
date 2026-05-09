import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { DM_Sans, Tenor_Sans, JetBrains_Mono } from 'next/font/google';
import { cn } from "@/lib/utils";


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
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
