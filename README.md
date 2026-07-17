# เตรียมสอบราชการ ฉบับคนมีเวลาน้อย

Government Exam Prep for Busy People — an SEO-first educational brand site.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run build && npm start   # production
npm run typecheck            # types
npm run lint                 # lint
```

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Lucide React · Framer Motion

## Structure

```
src/
├── app/
│   ├── layout.tsx        Root shell, metadata, font, Organization + WebSite JSON-LD
│   ├── page.tsx          Homepage composition, FAQ + ItemList + Breadcrumb JSON-LD
│   ├── globals.css       Tailwind v4 @theme tokens, base, utilities
│   ├── robots.ts         → /robots.txt
│   ├── sitemap.ts        → /sitemap.xml
│   ├── not-found.tsx     404
│   └── privacy/page.tsx  Privacy policy
├── components/           Presentational components, one section each
├── data/                 All copy and config — edit content here, not in JSX
└── lib/seo.ts            schema.org builders
```

## Before launch

1. **Domain** — set `SITE.url` in `src/data/site.ts`. It feeds the canonical URL, Open Graph, sitemap and every JSON-LD `@id`.
2. **Email** — set `SITE.email` in the same file.
3. **OG image** — replace `public/og-image.png` (1200×630) with branded artwork. The shipped file is a placeholder.
4. **Favicon** — replace `public/favicon.ico`, `public/icon.svg`, `public/icon-192.png`, `public/icon-512.png`, `public/apple-touch-icon.png`.
5. **Articles** — article and category cards currently point at `#articles`. When the real pages ship, update `href` in `src/data/articles.ts` and `src/data/categories.ts`, and add the routes to `src/app/sitemap.ts`.
6. **Resources** — set `available: true` and a real file path in `src/data/resources.ts` once each PDF is published.

## Content conventions

- Everything the reader sees lives in `src/data/`. The FAQ accordion and the FAQPage schema read from the same `FAQS` array, so they can never disagree — which is what Google requires.
- Every "Follow Facebook" action renders `<FacebookButton>`, which is the only place the URL and `target="_blank" rel="noopener noreferrer"` are written.

## Accessibility

Semantic landmarks, a skip link, visible focus rings, `aria-expanded`/`aria-controls` on the accordion and mobile menu, labelled SVG illustration, and `prefers-reduced-motion` honoured globally.
