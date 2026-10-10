# Portfolio

Personal portfolio — single-page, dark-theme by default, built with Next.js App Router. Served as a static export via GitHub Pages at [getgrip.ru](https://getgrip.ru).

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lenis (smooth scroll), `next-themes` (light/dark), React Compiler.

## Structure

- `src/lib/content.ts` — all editable content: projects, skills, experience, contact info, social links. Update this file to change what the site shows.
- `src/components/sections/` — one component per page section (Hero, About, Skills, Projects, Experience, Contact, Footer), composed in `src/app/page.tsx`.
- `src/components/sections/ProjectLightbox.tsx` — fullscreen project gallery (image carousel with click-to-zoom, full description, links) opened from a project card's screenshot preview.
- `src/components/navigation/Navbar.tsx` — sticky nav with scroll-spy (`useActiveSection`) and theme toggle.
- `public/projects/` — screenshot galleries, 4-5 images per project, referenced by `content.ts`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Built with `output: "export"` (`next.config.ts`) — a fully static site, no Node runtime needed, so image optimization is disabled (`images.unoptimized: true`; images are pre-resized at source instead).

`.github/workflows/deploy.yml` builds on every push to `master` and publishes `out/` to GitHub Pages via `actions/deploy-pages`. `public/CNAME` points the Pages deployment at the custom domain `getgrip.ru` (DNS: A records to GitHub Pages' IPs). `NEXT_PUBLIC_SITE_URL` (see `src/lib/site.ts`) is set to `https://getgrip.ru` in the workflow — it feeds `metadataBase`, Open Graph tags, `robots.ts` and `sitemap.ts`.

To preview the static export locally: `npm run build && npx serve out`.
