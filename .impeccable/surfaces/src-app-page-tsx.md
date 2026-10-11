---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/components/sections"]
---

Scope: the whole single-page portfolio (src/app/page.tsx and its sections). Mode: Experience/Persuade hybrid — recruiter or tech lead decides whether to contact; the person leads, projects prove.
Audience/job: Russian recruiter or tech lead, 30–90 s, often on a phone from hh.ru/Telegram. Action: write in Telegram or download the PDF résumé.
Proof: real screenshots, honest project status, one commercial project, specific technical decisions.
Constraints: static export on GitHub Pages; no fabricated claims; FastAPI/NestJS levels never inflated; Muiraje has no links.

## Direction contract
THESIS: The category standard played straight at Linear/Vercel craft: a calm, precise product-grade page about a developer. Refuses the template tells it used to ship — gradient name, typewriter, rotating rings, skill progress bars, violet glow, three equal CTAs.
OWN-WORLD: Cool near-black ground (light theme as an equal), hairline 1px borders, one warm amber accent used only for status, links and focus, never as glow. Onest for all text with tight display tracking, JetBrains Mono for small metadata labels. Screenshots sit in thin window frames on a slightly raised surface; corners small (6–10px); no glass, no gradients on type.
STORY: In one screen the visitor knows name, role, level, city/format and how to reach him; scrolling, four large case studies show what he built and the hard part of each; experience, grouped stack, short about and a clear closing CTA end the page.
FIRST VIEWPORT: Left column: status line (static dot, «Открыт к предложениям · Junior+ / Middle · Волгоград, удалёнка или гибрид»), H1 «Владислав Акимов» large, one-sentence role statement, one primary button (Telegram) + secondary (Резюме PDF) + GitHub text link, a quiet fact row. Right: two overlapping framed product screenshots (GetGrip, Muiraje). Projects heading visible at the fold on desktop.
SIGNATURE INTERACTION: Case galleries — each case shows one curated screenshot; arrows/thumbnails step through its screenshots in place, and the image opens a keyboard-complete lightbox (focus trap, restore, swipe, Esc) that carries extra case detail. Motion grammar: one authored moment only — the hero entrance (CSS keyframes, opacity+8px, 240ms ease-out, staggered); everything below the hero renders visible with no scroll-triggered reveals (hidden-by-default content failed review); hovers 150–200ms; all motion off under prefers-reduced-motion.
FORM: canon (user-chosen standing exit after one re-roll), seed key 8cb5da55.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
