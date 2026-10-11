# Portfolio

Personal portfolio of Vladislav Akimov — a single page for recruiters and tech leads: who he is, what level, where, how to reach him, and four case studies that back it up. Served as a static export on GitHub Pages at [getgrip.ru](https://getgrip.ru).

## Why it looks like this

The first version was a stock "dark dev portfolio": gradient name, typewriter tagline, rotating rings, 26 skill progress bars, projects buried four screens down. A design critique scored it 18/32, and the redesign went the other way — a calm, product-grade page (Linear/Vercel as the craft bar) where real screenshots and honest project status carry the argument instead of self-ratings.

- **Person first, projects as proof.** The first screen answers name, role, level, city/format and contact; projects start right under it.
- **Honest status.** "Демо офлайн", "Код приватный", "В разработке" are stated next to each project, not hidden.
- **Light and dark as equals**, following the system setting; one amber accent for status, links and focus.

## Stack

Next.js 16 (App Router, static export), React 19, TypeScript, Tailwind CSS v4, `next-themes`, `lucide-react`, React Compiler. Fonts: Onest and JetBrains Mono via `next/font`.

## Structure

- `src/lib/content.ts` — all content in one place: person, projects (with per-screenshot notes), experience, education, skills, contacts.
- `src/components/sections/` — Hero, Projects (`CaseStudy`, `ProjectLightbox`, `ProjectStatus`), Experience, Skills, About, Contact, Footer.
- `src/components/navigation/Navbar.tsx` — sticky header with scroll-spy; the mobile menu panel lives outside the header on purpose: the header's `backdrop-filter` makes it the containing block for `position: fixed` children, which collapsed the panel to zero height.
- `PRODUCT.md` / `DESIGN.md` — product truth and the design system the page is built on.

## Technically interesting

- **Lightbox on a native `<dialog>`** (`showModal`): focus trap and inert background come from the platform; arrows, swipe and Esc are layered on top, focus returns to the opener.
- **Entrance motion is pure CSS** (`animate-rise` keyframes), so the hero animates before hydration and is disabled under `prefers-reduced-motion`.
- **Images are prepared at source** — the static export has no image optimizer, so screenshots are WebP (4.5 MB of PNG → ~1.2 MB), with the Next.js dev badge painted out, and every raster carries its origin in embedded metadata.

## Getting started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000). Before committing: `bun run lint` and `npx tsc --noEmit`.

## Deployment

`output: "export"` in `next.config.ts` produces a fully static site in `out/`. `.github/workflows/deploy.yml` builds on every push to `master` and publishes it via `actions/deploy-pages`; `public/CNAME` points the deployment at `getgrip.ru`. `NEXT_PUBLIC_SITE_URL` (default `https://getgrip.ru`, see `src/lib/site.ts`) feeds `metadataBase`, Open Graph, `robots.ts` and `sitemap.ts`.

Preview the export locally: `bun run build && npx serve out`.
