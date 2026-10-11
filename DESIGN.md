---
name: Владислав Акимов — Portfolio
description: A calm, precise, product-grade single page about a full-stack developer.
colors:
  background: "oklch(0.985 0.002 250)"
  surface: "oklch(1 0 0)"
  surface-2: "oklch(0.965 0.003 250)"
  foreground: "oklch(0.21 0.012 260)"
  muted: "oklch(0.47 0.012 260)"
  border: "oklch(0.91 0.004 255)"
  border-strong: "oklch(0.84 0.006 255)"
  accent: "oklch(0.7 0.16 58)"
  link: "oklch(0.5 0.13 52)"
  inverse: "oklch(0.21 0.012 260)"
  inverse-foreground: "oklch(0.985 0.002 250)"
  background-dark: "oklch(0.155 0.006 260)"
  surface-dark: "oklch(0.19 0.007 260)"
  surface-2-dark: "oklch(0.225 0.008 260)"
  foreground-dark: "oklch(0.955 0.003 250)"
  muted-dark: "oklch(0.72 0.009 255)"
  border-dark: "oklch(1 0 0 / 9%)"
  border-strong-dark: "oklch(1 0 0 / 16%)"
  accent-dark: "oklch(0.79 0.14 66)"
  link-dark: "oklch(0.82 0.12 68)"
  inverse-dark: "oklch(0.955 0.003 250)"
  inverse-foreground-dark: "oklch(0.17 0.006 260)"
typography:
  display:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
    fontFeature: "\"ss01\" 1, \"cv11\" 1"
  headline:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline-mobile:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.11
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  title-sm:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.03em"
  body-lg:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  ui:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.43
  label-mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"tnum\" 1"
  label-frame:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1
rounded:
  focus: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  section: "96px"
  section-lg: "128px"
  gutter: "16px"
  gutter-sm: "24px"
  container: "1152px"
components:
  button-primary:
    backgroundColor: "{colors.inverse}"
    textColor: "{colors.inverse-foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0 20px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0 20px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.surface-2}"
  button-text:
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    padding: "0 8px"
    height: "48px"
  button-text-hover:
    textColor: "{colors.foreground}"
  button-nav-compact:
    backgroundColor: "{colors.inverse}"
    textColor: "{colors.inverse-foreground}"
    typography: "{typography.ui}"
    rounded: "{rounded.md}"
    padding: "8px 14px"
  icon-button:
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
    size: "40px"
  icon-button-hover:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.foreground}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.ui}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.ui}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  nav-link-active:
    textColor: "{colors.foreground}"
  status-chip:
    textColor: "{colors.muted}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  window-frame:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
  window-frame-caption:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.muted}"
    typography: "{typography.label-frame}"
    padding: "0 12px"
    height: "32px"
  gallery-thumb:
    backgroundColor: "{colors.surface-2}"
    rounded: "{rounded.md}"
    width: "96px"
  note-panel:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.muted}"
    typography: "{typography.ui}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
  lightbox-control:
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    size: "44px"
---

# Design System: Владислав Акимов — Portfolio

## Overview

**Creative North Star: "The Product Page About a Person"**

The category standard played straight, at the craft level of Linear and Vercel. A cool, near-neutral ground in two equal themes, hairline structure, one warm amber signal and real product screenshots doing the persuading. Nothing is decorative: every border separates, every grey ranks information, and the only colour that is not grey means "status, link or focus".

Density is editorial rather than dashboard: a 1152px column, generous section padding (96px, 128px from md), and content split into an asymmetric two-column grid where a label or image column sits beside a reading column. Typography carries the hierarchy through size and weight alone; the display name is large and tightly tracked, metadata drops into small JetBrains Mono. Motion lives only in the hero entrance; everything below renders visible with no scroll-triggered reveals.

Rejected outright in this world: gradient type, typewriter effects, rotating rings, skill progress bars, violet glow, glass, and three equal CTAs.

**Key Characteristics:**
- Cool near-neutral ground (hue 250–260, chroma under 0.013) with light and dark as equals.
- 1px hairline borders as the primary structural device; two border strengths only.
- One warm amber accent, reserved for status, links (as a darker/lighter amber) and focus.
- Screenshots live inside thin window frames with a mono caption bar and one soft shadow.
- Onest for everything readable, JetBrains Mono for small metadata.
- Small corners (6/8/12px), pills only for status chips and dots.
- 240ms opacity + 8px rises, ease-out-expo, disabled under reduced motion.

## Colors

A cool, nearly achromatic slate scale with a single warm amber voice; dark theme is a full peer, not an inversion afterthought.

### Primary
- **Signal Amber** (accent; accent-dark in dark theme): the "open to offers" dot, the in-progress status dot, the focus outline, the text caret and (at 35%) the selection tint. Never a fill for buttons, never a glow, never on type.

### Secondary
- **Burnt Amber Link** (link; link-dark): inline and standalone text links ("Код на GitHub", "Все репозитории на GitHub", ".docx"). A deeper amber in light theme and a paler one in dark so it reaches AA as text where Signal Amber would not.

### Neutral
- **Cool Paper / Night Slate** (background): page ground.
- **Raised White / Raised Slate** (surface): window frames, secondary button fill, and the Contact section band.
- **Recessed Grey** (surface-2): frame caption bars, image wells, note panels, hover fill for secondary and icon buttons.
- **Ink** (foreground): headings, primary text, the "done" status dot, the active thumbnail ring.
- **Pencil Grey** (muted): supporting copy, nav links at rest, labels, metadata, the "client" status dot.
- **Hairline** (border): section dividers, list rules, header bottom edge, chip outlines.
- **Firm Hairline** (border-strong): frames, image wells, secondary button outline, skill-group top rule, list-bullet dash.
- **Inverse Ink / Inverse Paper** (inverse, inverse-foreground): the primary button and skip link; it flips with the theme, so the primary button is ink-on-paper in light and paper-on-ink in dark.

### Named Rules
**The One Warm Voice Rule.** Amber is the only chroma on the page. It marks state (open, in progress), navigation (links) and focus. If a new element wants colour for emphasis, use weight or Ink instead.

**The Ink Button Rule.** The primary action is filled with the inverse token, not with the accent. Hierarchy between actions comes from fill versus outline versus text, never from hue.

**The Shape Carries Status Rule.** Project status is told by dot fill and shape first (solid Ink = done, solid Pencil = client, hollow ring = offline, Amber = in progress), with the label always present.

## Typography

**Display Font:** Onest (with system-ui, sans-serif), stylistic sets ss01 and cv11 on
**Body Font:** Onest
**Label/Mono Font:** JetBrains Mono (400/500)

**Character:** A neutral, Cyrillic-native grotesque tracked tight at display sizes for a product-site voice, paired with a mono used only small, as instrumentation: periods, stacks, frame captions, counters.

### Hierarchy
- **Display** (600, clamp(2.75rem, 7vw, 5rem), 0.98, -0.04em): the name in the hero only.
- **Headline** (600, 2.25rem mobile / 3rem from sm, -0.03em): section headings (Проекты, Опыт, Навыки, Обо мне, closing CTA).
- **Title** (600, 1.875rem): case-study project names. **Title-sm** (600, 1.25rem) for experience roles and secondary project names; 1.5rem for the "Ещё проекты" subheading.
- **Body-lg** (400, 1.125rem, 1.625): hero role statement (1.25rem from sm), section ledes, case summaries, About prose. Measure capped around 34–42rem.
- **Body** (400, 1rem, 1.625): highlights, experience descriptions, project summaries.
- **UI** (500, 0.875rem): nav links, chips, small links, fact labels (400 for labels).
- **Label-mono** (400, 0.75rem, tabular): tech stacks joined with " · ", project periods; 0.875rem for experience periods; 11px for frame captions.

### Named Rules
**The Tight Heading Rule.** All h1–h3 get -0.03em tracking and balanced wrapping; the display name goes to -0.04em. Paragraphs use pretty wrapping.

**The Mono Is Metadata Rule.** JetBrains Mono never sets headings or prose. It appears at 11–14px for things a developer would read as data.

## Layout

A single 1152px column (max-w-6xl) with 16px gutters, 24px from sm. Sections are separated by a full-width 1px hairline and padded 96px vertically, 128px from md (Skills runs tighter at 80/96px; Projects opens at 64/80px so its heading sits near the desktop fold).

Two-column grids are asymmetric and collapse to one column below lg (or md): hero 1fr / 1.05fr; case study 1.2fr / 1fr; skills 260px label column beside a 4-up (2-up mobile) group grid; experience 220px period column beside a 48rem reading column; about 320px portrait beside prose. Column gaps run 40–64px; stacked gaps 32–56px.

Vertical rhythm inside blocks uses 12 / 16 / 24 / 40px steps; lists are separated by hairline rules with 16–32px row padding rather than by cards. The fixed header is 64px tall; anchor scrolling offsets 80px. No horizontal overflow from 320px up; the hero image stack clips on x.

## Elevation & Depth

Flat by default, with tonal layering (background, surface, surface-2) and hairlines doing nearly all the work. Exactly one shadow exists and it belongs to framed screenshots, so that product images read as objects lifted slightly off the page. The header uses an 85%/70% background with a medium backdrop blur purely for legibility over scrolled content, not as a glass aesthetic.

### Shadow Vocabulary
- **Frame** (light: `0 1px 2px oklch(0.2 0.01 260 / 6%), 0 12px 32px -8px oklch(0.2 0.01 260 / 14%)`; dark: `0 1px 2px oklch(0 0 0 / 30%), 0 16px 40px -12px oklch(0 0 0 / 55%)`): hero window frames and the main case-study image only.

### Named Rules
**The Only Screenshots Float Rule.** The frame shadow is reserved for product imagery. Buttons, chips, panels and sections never cast shadows.

## Shapes

Small, consistent corners: 6px available, 8px for buttons, thumbnails, note panels and icon buttons, 12px for window frames, the case image and the portrait well. Full pills only for status chips and status dots. Focus outlines are 2px Signal Amber, offset 3px, 4px radius. Images are always clipped inside a bordered well at 16:10 (screenshots) or 4:5 (portrait), anchored to the top.

List bullets in case highlights are a 10px horizontal hairline dash in Firm Hairline, not a glyph.

## Components

### Buttons
Calm and solid; hierarchy by fill, never by colour.
- **Shape:** gently rounded (8px), 48px tall in content, 20px horizontal padding, 10px icon gap with a 17px lucide icon.
- **Primary:** inverse fill with inverse-foreground text; hover drops opacity to 85% over 150ms.
- **Secondary:** surface fill (or transparent on the Contact band) with a Firm Hairline outline; hover fills surface-2.
- **Text:** muted label with a trailing up-right arrow; hover to Ink.
- **Compact (header):** primary styling at 14px, 8px by 14px padding, hidden below sm.
- At most one primary per group; the pattern is primary + secondary + text link.

### Chips
- **Status chip:** pill, Hairline outline, 12px medium Pencil Grey label, 6px dot coloured per the Shape Carries Status rule. The only chip in the system.

### Cards / Containers
There are no cards. Content groups are separated by hairline rules (top border on each case study and experience row, divided lists for secondary projects and contact channels). The only containers are:
- **Note panel:** surface-2 fill, 8px corners, 12px by 14px padding, 14px muted text with a leading 16px info icon, for honest status caveats.
- **Contact band:** the closing section on surface instead of background.

### Navigation
Fixed 64px header with a bottom hairline and translucent blurred background. Name at left (15px, 600). Desktop links are 14px Pencil Grey in 8px-rounded hit areas, turning Ink on hover and when the section is current (`aria-current="location"`); no underline or pill indicator. Right side: 40px theme icon button and the compact résumé button. Below md, a 40px menu toggle opens a full-height sheet under the header with 24px link rows divided by hairlines and stacked full-width primary/secondary actions; focus is trapped and restored, Esc closes.

### Window Frame (signature)
A screenshot presented as an app window: 12px corners, Firm Hairline border, surface fill, Frame shadow, a 32px surface-2 caption bar with an 11px mono label, and a 16:10 image well anchored top. In the hero two frames overlap (88% and 56% width, the smaller pinned bottom-right).

### Case Gallery (signature)
Main 16:10 image in a framed button; hover scales the image to 1.015 and reveals a small dark "Во весь экран" tag. Below, a scrollable row of 80–96px 16:10 thumbnails: active one gets an Ink border plus 1px Ink ring, others a Hairline that firms on hover. Clicking opens the lightbox.

### Lightbox
Native modal dialog over a 90% black backdrop with a small blur. White text; a top bar with the project title and a mono "n / total" counter; 44px controls on 10% white that rise to 20% on hover; image contained at 16:10 up to 1152px; caption and note below in a polite live region. Arrow keys, swipe (50px threshold), Esc and backdrop click all work; focus returns to the opener.

### Motion
Only the hero enters: opacity plus 8px rise, 240ms, ease-out-expo `cubic-bezier(0.16, 1, 0.3, 1)`, staggered 40ms in the hero; hero frames add a 3px blur-in. Hover state transitions are 150–200ms. Below the hero nothing is hidden by default — a scroll-triggered reveal left content invisible in review and was removed. All entrance animation and smooth scrolling switch off under prefers-reduced-motion.

## Do's and Don'ts

### Do:
- **Do** separate content with 1px hairlines (border / border-strong) instead of boxes.
- **Do** keep Signal Amber to status dots, focus, caret and selection; use the link token for text links.
- **Do** make the primary action an inverse-filled 48px button with 8px corners, paired with an outlined secondary.
- **Do** present product screenshots in the window frame or a bordered 16:10 well, top-anchored.
- **Do** set stacks, periods and counters in JetBrains Mono at 11–14px, stacks joined with " · ".
- **Do** ship both themes from the same token names and check AA contrast in each.
- **Do** keep entrances to one opacity + 8px rise at 180–240ms, ease-out-expo, and honour reduced motion.

### Don't:
- **Don't** use gradients on type, glow, glass panels, rotating or typewriter effects.
- **Don't** show skill levels as progress bars or percentages.
- **Don't** fill buttons or large areas with the amber accent.
- **Don't** put shadows on anything but framed screenshots.
- **Don't** add eyebrow labels or kickers above section headings; headings stand alone with an optional muted lede.
- **Don't** introduce corners above 12px or pills other than status chips.
- **Don't** wrap content groups in cards with backgrounds and shadows.
