import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

const sections = [
  { label: 'Preface', href: '/preface' },
  { label: 'History', href: '/history' },
  { label: 'Projects', href: '/projects' },
  { label: 'Academic record', href: '/academic-record' },
  { label: 'Reference', href: '/reference' },
] as const;

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-16 md:py-24">
      <h1 className="text-balance text-3xl font-semibold tracking-tight text-fd-foreground md:text-4xl">
        Hi, I&apos;m Uzayer and I design systems for humans
      </h1>
      <p className="mt-6 text-pretty text-lg leading-relaxed text-fd-foreground md:text-xl">
        <mark
          className={cn(
            'box-decoration-clone rounded px-1 py-0.5 [-webkit-box-decoration-break:clone]',
            'bg-fd-idea/25 text-fd-foreground',
          )}
        >
          I care about language, cognition, research, and infrastructure that is meant to outlast any
          one person.
        </mark>{' '}
        This site is designed to hold all of what I&apos;ve done so far, what mattered to me and why.
      </p>

      <Link
        href="/preface"
        className={cn(
          'mt-10 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors',
          'bg-fd-primary text-fd-primary-foreground hover:opacity-90',
        )}
      >
        enter the lore
        <ArrowRight className="size-4 shrink-0" aria-hidden />
      </Link>
      <p className="mt-3 max-w-prose text-sm leading-relaxed text-fd-muted-foreground">
        The lore is non-linear, 10k+ words and comes with diagrams, receipts and metacognitive philosophy. Coffee highly
        recommended.
      </p>

      <div className="mt-12 border-t border-fd-border pt-10">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-fd-muted-foreground">
          Inside the gungeon
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {sections.map(({ label, href }) => (
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
      </div>
    </div>
  );
}
