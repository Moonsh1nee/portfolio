# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and tech leads in the Russian job market who arrive from an hh.ru application, a résumé link, or a Telegram message. They give the page 30–90 seconds, often on a phone, and are answering three questions: who is this, what level, can I verify the claims. Secondary: a tech lead who decides to dig deeper and opens a project's details or GitHub.

## Product Purpose

Personal portfolio of Vladislav Akimov (Владислав Акимов), a full-stack developer looking for a **Junior+ / Middle full-stack** position (staff hire; Next.js/TypeScript primary, backend as a strength). Location: **Волгоград, удалёнка или гибрид**. Success = a recruiter or tech lead understands level and fit within the first screen, can verify it through real project evidence, and contacts him or downloads the résumé.

## Positioning

A strong, straightforward developer portfolio — the person first, projects as supporting evidence, not a concept built around the pet projects (user's explicit call, 2026-10-11: "делать всё вокруг пет-проектов не особо"). What makes him credible: commercial client work (Muiraje) plus several finished full-stack products spanning frontend, backend, mobile and infrastructure (GetGrip's own OAuth2 server is one strong detail among others, not the theme), with honest scoping of what is finished, offline, or in progress.

## Operating Context

- Live at https://getgrip.ru, static export (`output: "export"`) on GitHub Pages, deployed by `.github/workflows/deploy.yml` on push to `master`. No server runtime, no image optimisation (`images.unoptimized`), no API routes.
- Single page, Russian language (`lang="ru"`). Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind v4, Framer Motion, Lenis, next-themes, lucide-react.
- All editable content lives in `src/lib/content.ts`.
- Visitors frequently open the link from Telegram/hh.ru on mobile; link previews (OG) matter.

## Capabilities and Constraints

- Projects (6): GetGrip, Fuel, Wisely, Sift, Cadence, Muiraje. Facts per project are in `src/lib/content.ts` and the projects' own READMEs.
- **No live demos exist.** The VPS hosting the GetGrip demo is gone (2026-10-11). Never show "Live"/"Открыть демо" or imply anything besides the portfolio itself is publicly running.
- Muiraje: client-commissioned, private repository — **no code link, no live link** (site offline, client business paused). The retro Windows-2000s design was the client's concept, implemented by Vladislav; say so. JWT auth there is admin-panel-only.
- Cadence is "в разработке"; GetGrip is "демо офлайн"; the rest are finished.
- Wisely/Fuel "вход через GetGrip" is a real implemented feature but only works against a locally run GetGrip backend now.
- Experience: one commercial engagement — freelance, solo, Muiraje, сен 2024 — мар 2025 (~6 months).
- Skill self-assessment must stay honest, never inflated: FastAPI ≈ basic (40–50%), NestJS ≈ 60% (user's explicit correction). If levels are shown at all, they must not exceed these.

## Brand Commitments

- Name: Владислав Акимов (surname may be shown). Role label: full-stack разработчик, Junior+ / Middle.
- Voice: speaks to employers, not freelance clients. One register: formal «вы». Russian copy; tech names stay in Latin.
- Contacts: email moonsh1ne.vlad@yandex.ru, Telegram @Moonsh1ne_OP, GitHub github.com/Moonsh1nee, VK vk.ru/moonsh1ne_vk. hh.ru résumé link: not provided yet — do not invent one; add when supplied.
- **Standing direction (user-chosen 2026-10-11):** the category standard played straight — a balanced developer portfolio (strong first screen about him → 3–4 best projects shown large → experience → skills → contact), executed at the craft level of product-premium sites like Linear and Vercel. No concept metaphors (rejected: C4 diagram, ESKD drawing, tech longread, work book).
- Domain getgrip.ru is reused for the portfolio (historical: it was GetGrip's product domain).

## Evidence on Hand

- Real screenshots: `public/projects/{getgrip,fuel,wisely,sift,cadence,muiraje}-N.png` (4–5 each, 4.5 MB total PNG, desktop captures).
- Real personal photos: `public/about/vladislav-{1,2,3}.jpg`.
- Résumé: `public/Akimov_Vladislav_Resume.docx` — a PDF version is approved and should replace it as the primary download.
- Screen-recording demos: approved; Vladislav will record them. Until the files exist, do not reference or fake video players — leave a clear slot.
- Project READMEs with "технически интересное" write-ups (Cadence billing-cycle clamp, Fuel seeded-RNG menu generator, Sift hh.ru scraping pivot, GetGrip OAuth2 server).
- Absent and must not be fabricated: testimonials, employer names beyond Muiraje, user counts, metrics, years of experience beyond the stated freelance period, live demo URLs.

## Product Principles

1. Evidence before claims: real projects, screenshots, and technical specifics carry the page; self-ratings never lead.
2. First screen answers who / what level / where / how to contact.
3. Honest status everywhere — offline, private, in-progress are stated plainly, not buried.
4. Speak to an employer evaluating a hire, in one consistent register.
5. Respect a 60-second, mobile-first read: progressive disclosure for depth, nothing essential behind interaction.

## Accessibility & Inclusion

WCAG 2.1 AA: keyboard-complete (including dialogs), visible focus, AA contrast in both themes, `prefers-reduced-motion` honoured with meaningful alternatives, no horizontal overflow at 320px+.
