# Portfolio

Personal portfolio — single-page, dark-theme by default, built with Next.js App Router. Live at [getgrip.ru](https://getgrip.ru).

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

Deployed on a self-managed VPS: systemd service (`npm start` behind nginx) + certbot for TLS. `NEXT_PUBLIC_SITE_URL` (see `src/lib/site.ts`) is set to `https://getgrip.ru` in production — it feeds `metadataBase`, Open Graph tags, `robots.ts` and `sitemap.ts`.

To redeploy: `git pull && npm install && npm run build && systemctl restart portfolio` on the server.
