# Magiapix — Design
Reference: supplied editorial portfolio. Airy ivory canvas, inset hero, stacked split project panels, playful highlighter lettering, personal introduction.
Palette: paper #fafaf7, ink #20221f, muted #777b73, lime #d6fb78, lavender #e6e1f7, blue #dcecf5; warm-gray borders.
Typography: Manrope for headings and body; Caveat for handwritten annotations. Lowercase bold wordmark with lime pixel-star.
Layout: 1120px maximum width, 32px desktop gutters, large section spacing; narrow project info and oversized visual stage. Small pill buttons, overlapping photo prints, paper service lists.
Web only. Anchor navigation, mobile menu, project dialogs, contact form opening email drafts; reduced-motion support. All showcased work is labeled concept work. No fabricated clients or metrics, no backend needed.
Files: pages/portfolio.tsx, composition-only pages/index.tsx, styles.css, public/images. Preserve platform components.

## Scroll motion
GSAP + ScrollTrigger, scoped to the portfolio with cleanup on unmount. Staggered hero entrance; one-time section/text reveals; scrubbed project visual parallax and photo motion on desktop; a rotating contact star and thin lime progress indicator. Native scrolling is preserved, no scroll hijacking or pinning. Mobile uses shorter reveal distances and no large parallax. Reduced-motion disables entrance and scroll animations entirely. Dialogs are outside the animated selectors.

## Dedicated pages
Extend the existing web app with /work, /about and /services, using shared navigation, footer, contact/project dialogs and existing project assets. The homepage stays visually intact; its navigation links now open dedicated pages. Wouter handles routes; every route resets scroll and updates the title.
Work: inset editorial hero, All/Brand/Digital filters, numbered split project showcases, concept labels and project details.
About: large typographic hero with overlapping studio moodboard prints, studio story, numbered values and a three-step collaboration section. Existing photos are inspiration imagery, not fabricated team members.
Services: bold lime-highlighted hero, two expanded paper-style capability sections (brand and digital), four-step process, native accessible FAQ disclosures and contact CTA. No pricing or fabricated claims.
Motion: shared GSAP entrances and scroll reveals, desktop showcase parallax, reduced-motion bypass. Mobile stacks all split layouts. No API/database changes.

## 2× whitespace revision
Double the existing positive vertical margins, vertical padding, and row gaps across all four pages and dialogs, preserving fonts, horizontal content widths, illustration/mockup spacing, and photo compositions. Apply the same multiplier at each existing responsive breakpoint, including mobile. Increase navigation's empty vertical space by 2× (not the logo), and make project cards flexible so added spacing cannot clip content. ScrollTrigger continues measuring actual document height. Horizontal gutters remain mobile-safe.
