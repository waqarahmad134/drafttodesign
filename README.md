# DraftToDesign

Lead-generation website for 2D/3D modeling, rendering, interior/exterior design and drafting services across the USA. Built with [Astro](https://astro.build) as a fully static site for maximum page speed and SEO.

**Live:** https://drafttodesign.com

## Stack

- Astro (static output) + Tailwind CSS
- Content collections: `services`, `states`, `cities`, `posts`
- `@astrojs/sitemap` for automatic sitemap generation

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build
```

## Deploy

Any static host works (Netlify, Vercel, Cloudflare Pages, or own server via CI/CD).
Build command: `npm run build` - publish directory: `dist/`.

The domain `drafttodesign.com` should point at the deployed output. `public/robots.txt`
references the sitemap at `https://drafttodesign.com/sitemap-index.xml`.

## Quote form

`src/components/QuoteForm.astro` posts to a form endpoint configured via the
`data-endpoint` attribute on the `<form>` element. Set it to a Formspree/Getform
endpoint (or own API) at deploy time. Until configured, the form gracefully falls
back to a WhatsApp prompt.

The WhatsApp number used across the site: `https://wa.me/13094025405`
(update in `QuoteForm.astro`, `CTABand.astro`, `WhatsAppFloat.astro`, `contact.astro`
if the number changes).

## Site structure

- `/` - homepage
- `/about/`, `/pricing/`, `/process/`, `/faq/`, `/contact/`, `/portfolio/`
- `/services/[slug]/` - 6 service pages (from `src/content/services/`)
- `/[state]/` - Texas, California, Florida hubs (from `src/content/states/`)
- `/[state]/[city]/` - 12 city pages (from `src/content/cities/`)

## SEO notes

- Unique title/meta description per page via content frontmatter
- Canonical URLs, Open Graph + Twitter cards in `BaseLayout`
- JSON-LD: `ProfessionalService` sitewide, `Service` on service/city pages, `FAQPage` on FAQ blocks
- Semantic HTML, fast static pages, mobile-first Tailwind styling
- **No permit services are advertised anywhere** (business policy: design/visualization only)
