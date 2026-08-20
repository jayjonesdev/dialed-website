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
- Below 720px the section links collapse into a menu behind a button in the nav,
  which also holds Log in (the login pill leaves the bar so the primary CTA keeps
  its room). The panel closes on Escape, on picking a link, and on growing past
  the breakpoint.
- Touch targets are 44px on mobile: nav controls, the pricing toggle, the menu
  panel rows and the footer links, which are only 16px tall at desktop sizes.
- `--nav-height` moves to 77px below 720px, since the bar grows with those
  targets. Anchor `scroll-margin-top` reads the token, so it tracks automatically.
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

## Pages

Three pages, built as separate entry points rather than behind a router, so each
is a real file the host serves directly:

| URL | Entry | Content |
|---|---|---|
| `/` | `src/main.tsx` | the marketing homepage |
| `/privacy/` | `src/privacy.tsx` | Privacy Policy |
| `/terms/` | `src/terms.tsx` | Terms of Use |

Links use the **trailing slash** (`/privacy/`), which resolves to the directory's
`index.html` on any static host. The bare `/privacy` only works where the host
does directory indexes; `render.yaml` rewrites it explicitly for that reason.

`appType: 'mpa'` is set so dev and preview stop rewriting unknown paths to
`index.html` — without it they hide the real routing and every URL looks fine
locally while 404ing in production.

### Legal copy

`src/content/legal.tsx` carries the Privacy Policy and Terms of Use. **The
wording came from `dialed-backend` (`src/services/legal.ts`, on branch
`fix/app-store-blockers`)**, which wrote it from what the API actually does.
Substance is unchanged here; only the markup and styling were adapted. That
means the same text now exists in two repos — if one changes, change both.

It is a faithful description of the data flows, **not legal advice**. Have it
reviewed before submission.

Three values in `src/content/site.ts` feed it, standing in for the backend's
environment variables: `supportEmail` (the backend leaves `SUPPORT_EMAIL` unset
and falls back to pointing at the App Store listing), `legalJurisdiction` (unset
in the backend, so its page carries no governing-law clause at all), and
`legalLastUpdated` — bump that when the substance changes.

## Link previews

Each page carries its own Open Graph and Twitter card tags plus a canonical URL,
built from `siteUrl` in `src/content/site.ts`. The preview is **text-only by
design**: there is no `og:image`, so platforms render the title and description
against the favicon rather than a hero image. Adding one later means an image at
1200×630 and an `og:image` tag per page.

## Icons

`public/` holds `favicon.ico` (16/32/48), `favicon-32.png`,
`apple-touch-icon.png` (180), and `icon-192/512.png` for the web manifest. All
are generated from `dialed-ios`'s app icon
(`Dialed/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png`) — the
two-bean mark, flattened onto its own paper `#F4EDE1`, which is also this site's
`--bg`. Regenerate them from that source if the app icon changes.

Note the mark is the app's terracotta `#B0521F`, not the site's blue `--accent`.
That is intentional: it matches the App Store listing, which is what people
recognise.

## Deployment

Static output, no server. Build with `npm run build` and serve `dist/`.

`render.yaml` holds the Render configuration: build command, publish directory,
a pinned `NODE_VERSION` (Vite 8 needs Node 20.19+ / 22.12+), long-lived cache
headers for the fingerprinted files under `/assets`, and a few security headers.

Render only reads that file for **Blueprint-managed** services. A static site
created by hand in the dashboard keeps using its dashboard settings, so it has to
be configured there instead — Build Command `npm run build`, Publish Directory
`dist`. Getting either one wrong fails the deploy with
`Publish directory dist does not exist!`.

There is deliberately no SPA rewrite rule. This is one static page with same-page
anchors and no client-side router, so an unknown path should 404 rather than
serve `index.html`.

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
