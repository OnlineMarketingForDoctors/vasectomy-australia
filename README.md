# Vasectomy Australia — Website Rebuild (2026)

A modern, editorial, image-led rebuild of [vasectomyaustralia.com.au](https://vasectomyaustralia.com.au),
re-focused on the two doctors behind the practice — **Dr Geoff Cashion** and
**Dr Matt Valentine** ("VA = Geoff = Matt").

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` design tokens)
- Self-hosted variable fonts via **Fontsource** (Fraunces display + Inter body)
- **Sanity** (hosted) planned as the client-facing CMS (see below)
- Deployed on **Vercel**

## Design language

Warm editorial neutrals (bone/paper) with a deep clinical **teal** and a **clay**
accent. Large asymmetric image-led sections, generous whitespace, a Fraunces
display serif, and deliberately *no* uniform card grids. The doctors lead; the
brand name sits behind them.

## Project structure

```
app/
  layout.tsx        # fonts, metadata, Header/Footer shell
  page.tsx          # homepage section composition
  globals.css       # Tailwind v4 theme tokens + base styles
components/
  site/             # Header, Footer
  sections/         # Hero, Stats, Doctors, PullQuote, Procedure,
                    # Reassurance, Reviews, Locations, Cost, Faq, FinalCta
  ui/               # Reveal (scroll-in animation)
lib/
  content.ts        # all homepage copy as typed data (maps onto Sanity)
  images.ts         # editorial image map (Higgsfield CDN → Sanity later)
```

## Imagery

Editorial scenes are AI-generated (Higgsfield / Nano Banana Pro) using the real
reference photos of Geoff & Matt for likeness, then served from the Higgsfield
CDN for review. These get migrated into the Sanity media library for production.

## CMS (next step)

Content is intentionally kept in plain typed structures (`lib/content.ts`,
`lib/images.ts`) so it maps directly onto Sanity documents. The Studio will be
embedded at `/studio`, and the homepage components will read from Sanity queries
in place of these constants — no layout changes required.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

> Built page-by-page. The homepage ships first for approval before the rest of
> the site is migrated.
