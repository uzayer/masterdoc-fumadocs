import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { updates } from 'collections/server';
import { getMDXComponents } from '@/components/mdx';
import { cn } from '@/lib/cn';

const atlasLinks = [
  { label: 'GitHub', href: 'https://github.com/tryatlas/atlas' },
  { label: 'Docs I built', href: 'https://docs.tryatlas.cc/' },
  { label: 'Tutorial playlist', href: 'https://youtube.com/playlist?list=PLWa1N2LyiGv0' },
  { label: 'Design system', href: 'https://github.com/tryatlas/design' },
] as const;

const selectedWork = [
  {
    title: 'Atlas',
    href: '/projects/atlas',
    description: 'The shared record of how a team builds software with coding agents. Frontend, design system, docs, talking to companies.',
  },
  {
    title: 'LabKit',
    href: '/projects/labkit',
    description: "Open-source research information system. Runs DIAL's website in production.",
  },
  {
    title: 'DIAL Recruitment Redesign',
    href: '/projects/dial-recruitment',
    description: "Rebuilt a research lab's hiring to screen for curiosity and grit instead of academic polish.",
  },
  {
    title: 'Fieldkit',
    href: '/projects/fieldkit',
    description: 'An open-source operating stack for nonprofits and student organisations.',
  },
] as const;

const lore = [
  { label: 'Preface', href: '/preface' },
  { label: 'History', href: '/history' },
  { label: 'All projects', href: '/projects' },
  { label: 'Writing', href: '/writing' },
] as const;

const dateFormat = new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-wide text-fd-muted-foreground">{children}</h2>
  );
}

export default function HomePage() {
  const stream = [...updates].sort((a, b) => b.date.getTime() - a.date.getTime());
  const components = getMDXComponents();

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 py-16 md:py-24">
      <h1 className="text-balance text-3xl font-semibold tracking-tight text-fd-foreground md:text-4xl">
        Hi, I&apos;m Uzayer and I design systems for humans
      </h1>
      <p className="mt-6 text-pretty text-lg leading-relaxed text-fd-foreground md:text-xl">
        Right now I&apos;m building{' '}
        <mark
          className={cn(
            'box-decoration-clone rounded px-1 py-0.5 [-webkit-box-decoration-break:clone]',
            'bg-fd-primary/22 text-fd-foreground dark:bg-fd-primary/28',
          )}
        >
          Atlas
        </mark>
        , an open-source tool for teams that ship code with AI agents. I do frontend, the design system, the docs, and
        talk to companies about adopting it. Before that: research infrastructure, organisational systems, and a lot of
        writing.
      </p>

      <section className="mt-12 rounded-xl border border-fd-border bg-fd-card p-5">
        <SectionHeading>Now · Atlas</SectionHeading>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-fd-card-foreground">
          <li>About half of the app&apos;s commits since joining in July 2026</li>
          <li>Built the docs site and the tutorial playlist</li>
          <li>Built and open-sourced the design system, @tryatlas/design</li>
          <li>9k+ GitHub stars, open source under Apache 2.0</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {atlasLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="inline-flex items-center gap-1 font-medium text-fd-primary hover:underline"
            >
              {label}
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading>Updates</SectionHeading>
        <ol className="mt-4 space-y-6 border-l border-fd-border pl-5">
          {stream.map((update) => (
            <li key={update.info.path} className="relative">
              <span className="absolute -left-[1.6rem] top-1.5 size-2 rounded-full bg-fd-primary" aria-hidden />
              <time dateTime={update.date.toISOString().slice(0, 10)} className="text-xs text-fd-muted-foreground">
                {dateFormat.format(update.date)}
              </time>
              <h3 className="mt-0.5 font-medium text-fd-foreground">{update.title}</h3>
              <div className="prose prose-sm mt-1 max-w-none text-fd-muted-foreground [&_p]:my-0">
                <update.body components={components} />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <SectionHeading>Selected work</SectionHeading>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {selectedWork.map(({ title, href, description }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex h-full flex-col gap-1 rounded-lg border border-fd-border bg-fd-card p-4 transition-colors hover:bg-fd-accent/60"
              >
                <span className="text-sm font-medium text-fd-card-foreground">{title}</span>
                <span className="text-sm leading-snug text-fd-muted-foreground">{description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-fd-border pt-10">
        <SectionHeading>The long version</SectionHeading>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-fd-muted-foreground">
          Everything I&apos;ve done since 2020, what mattered and why. 10k+ words, with diagrams and receipts.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {lore.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center justify-between gap-3 rounded-lg border border-fd-border bg-fd-card px-4 py-3 text-sm font-medium text-fd-card-foreground transition-colors hover:bg-fd-accent/60"
              >
                {label}
                <ArrowRight className="size-3.5 shrink-0 text-fd-muted-foreground" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
