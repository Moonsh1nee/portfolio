# Portfolio

Personal portfolio site — single-page, dark-theme by default, built with Next.js App Router.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lenis (smooth scroll), `next-themes` (light/dark), React Compiler.

## Structure

- `src/lib/content.ts` — all editable content: projects, skills, experience, contact info, social links. Update this file to change what the site shows.
- `src/components/sections/` — one component per page section (Hero, About, Skills, Projects, Experience, ContactForm, Footer), composed in `src/app/page.tsx`.
- `src/components/navigation/Navbar.tsx` — sticky nav with scroll-spy (`useActiveSection`) and theme toggle.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Not yet deployed. `NEXT_PUBLIC_SITE_URL` (see `src/lib/site.ts`) needs to be set to the real production domain once one exists — it feeds `metadataBase`, Open Graph tags, `robots.ts` and `sitemap.ts`.
