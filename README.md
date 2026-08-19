# Dialed — marketing homepage

Single-page marketing site for Dialed, built from the `design_handoff_dialed_homepage`
package. React + TypeScript on Vite, CSS Modules, static output.

```bash
npm install
npm run dev        # dev server
npm run build      # typecheck + static build to dist/
npm run preview    # serve the built output
npm run typecheck
```

## Layout

```
src/
  content/site.ts     all copy, pricing strings and FAQ data — the only file to edit for content
  styles/             tokens.css (design tokens), global.css (reset/base), fonts.css (self-hosted faces)
  ui/                 Container, Button, Eyebrow, PhoneShot — shared primitives
  components/         one module per page section, each with a co-located .module.css
  assets/             the six app screenshots
```

Copy lives in `src/content/site.ts` and nowhere else, so a wording change never
means touching markup. Section components hold layout only.

## Decisions the handoff left open

**Framework.** No environment existed, so this is Vite + React 19 + TypeScript with
CSS Modules. Every value from the handoff's token table lives in
`src/styles/tokens.css`.

**Fonts.** Lora and IBM Plex Mono are self-hosted via `@fontsource` (both SIL OFL),
latin subsets only, rather than hitting Google Fonts.

**The accent knob was not ported.** `--accent` is hard-coded to `#4a6b8a`. The app
screenshots have that blue baked into their pixels, so moving the token alone would
desync the mockups.

**Responsive** (the design stops at desktop):

- Both 2-column grids collapse to one column at 900px; the image always follows the
  copy, so the `order: -1` alternation drops out.
- AI cards go 3 → 1 column at 900px; pricing cards stack; the FAQ answer loses its
  right indent at 560px; the share-card parameter table goes single-column at 560px.
- Hero H1 68 → 42 → 36px; section H2s 40–48 → ~32px.
- Nav links hide below 720px, leaving the wordmark and the CTA. There is no mobile
  menu — the same links are all in the footer.
- The 28px gutter is kept at every width.

**Accessibility additions** (none were specified): `aria-expanded`/`aria-controls`
on the FAQ triggers, `aria-pressed` on the billing toggle, a visible `:focus-visible`
ring, `prefers-reduced-motion` handling for smooth scrolling and transitions, and
labelled nav landmarks.

**Hover transitions** are 140ms ease, within the 120–150ms the handoff suggested.

## Fidelity

Verified against `standalone/Dialed-Homepage.html` by pixel diff at 1280px: total
page height 7004px vs the reference's 7005px, and every section landmark (hero H1,
method strip, all four feature headings, AI, sharing, pricing, FAQ, CTA) lands on
the identical y. All six screenshots sit at identical positions and sizes.

The 1px total difference is the pricing toggle: this build sets `button { font: inherit }`
so the toggle uses the site's body font, where the prototype left buttons on the
browser's default button font. That makes it 0.5px shorter per button.

## Before shipping

- **Wire the buttons.** `links` at the top of `src/content/site.ts` is the single
  place to swap `#get` for the real App Store listing, Android waitlist, contact,
  changelog, privacy and terms destinations.
- **Re-export the screenshots** from real device captures at 2×/3× and serve WebP/AVIF
  with `srcset`. The current PNGs are prototype exports.
- **Confirm licensing on the coffee-bag photography** composited into
  `app-beans-blue.png` and `app-detail-blue.png` — those are the user's own uploads.
- `app-activity-blue.png` is unused, kept as the documented spare.

Six AI features exist but only three are described on the page. The other three are
unnamed on purpose — see the note in `src/content/site.ts`.
