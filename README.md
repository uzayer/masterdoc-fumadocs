# masterdoc-fumadocs

Personal portfolio/biography site built with [Next.js](https://nextjs.org) and [Fumadocs](https://fumadocs.dev). Renders the Masterdoc — a long personal document — as a navigable docs site with a sidebar TOC.

## Development

```bash
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Production build (also runs fumadocs-mdx codegen)
pnpm lint         # Run ESLint
pnpm types:check  # Run fumadocs-mdx codegen + Next.js typegen + tsc
```

> `fumadocs-mdx` must run before TypeScript can resolve types from `.source/` — it runs automatically on `postinstall` and as part of `types:check`.

## Project structure

```
src/
  app/
    (home)/           # Landing page
    (docs)/           # Docs layout + page renderer
    api/search/       # Fumadocs search API
    og/docs/          # OG image generation
    llms.txt          # LLM-readable content
    llms-full.txt     # LLM-readable content (full)
    sitemap.ts        # Auto-generated sitemap
    robots.ts         # robots.txt
  components/         # Custom MDX component overrides
  lib/
    source.ts         # Fumadocs loader wrapping the docs collection
    shared.ts         # App name, route constants, git config
    layout.shared.tsx # Shared layout options (sidebar, nav)

content/docs/         # MDX source files (edit these)
source.config.ts      # Fumadocs collection definition
.source/              # Auto-generated — do not edit
```

## Content

Add or edit `.mdx` files in `content/docs/`. The sidebar order is controlled by `content/docs/meta.json`.
