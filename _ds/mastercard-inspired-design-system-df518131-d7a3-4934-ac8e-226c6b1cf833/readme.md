# Mastercard-Inspired Design System

A warm, editorial design system for **money-transfer websites and landing pages**, built from the documented Mastercard aesthetic: soft stone-cream surfaces, signal orange, extreme pill/stadium/circle radii, circular photo portraits with satellite CTAs, and traced-orange orbital arcs. The system is tuned for marketing surfaces (heroes, service sections, story carousels, footers) rather than dense product dashboards.

> **Placeholder brand:** the sample product is named **"Meridian"** — a fictional money-transfer brand used only to populate examples. Rename freely.

## Sources

- `uploads/DESIGN-mastercard.md` — the single source of truth: a detailed brand/UI spec (visual theme, color palette with hex + roles, typography table, component stylings, layout, elevation, do's/don'ts, responsive behavior). Every token and component value in this system is transcribed from that document. No codebase, Figma file, or logo assets were provided.

## Brand & logo status

**No logo file was supplied, and the real Mastercard mark (interlocking red + yellow circles) is a trademark that is deliberately NOT reconstructed here.** Wherever a mark would go, the `Wordmark` component renders the brand name in plain type. Brand red (`#EB001B`) and yellow (`#F79E1B`) are documented as logo-only colors and never used in the UI. Supply a real SVG logo to replace the wordmark.

---

## CONTENT FUNDAMENTALS

How copy is written in this system:

- **Voice: warm, plainspoken, human.** Copy talks about people and families, not "users" or "transactions." Example hero: *"Money that moves at the speed of family."* Example services line: *"However your family wants to receive it, there is a way to send it."*
- **Person:** addresses the reader as **"you"** ("fees you can see before you send"), and speaks as the brand in first-person plural in service moments (footer: *"We're always here when you need us"*). Not clinical, not corporate-we-mandate.
- **Casing:** **sentence case everywhere** for headings and body. The ONLY uppercase is the 14px eyebrow label (e.g. `SERVICES`, `NEWS AND TRENDS`) with +4% tracking. No shouty all-caps titles, no Title Case Headlines.
- **Tone:** editorial and confident, never hype. Short declaratives. Numbers are concrete and reassuring ("180+ countries", "arrives in minutes, not days", "$2.99 flat fee") rather than superlative ("the world's best").
- **Eyebrows** are single words or short phrases naming the section category, always prefixed with the accent dot: `• Send`, `• Services`, `• News and trends`.
- **CTAs** are short verb phrases: "Learn more", "Start sending", "Read the story", "How it works". No exclamation marks.
- **No emoji, ever.** Iconography carries any visual accents (see ICONOGRAPHY). No unicode-glyph decoration in copy.
- **Vibe:** a 60-year-old payments institution rewritten as a modern brand magazine — trustworthy but soft, premium but not cold.

---

## VISUAL FOUNDATIONS

- **Color:** warm putty-**cream canvas** (`#F3F0EE`) is the default background — never pure white. Three-tone surface rhythm: canvas cream → lifted cream (`#FCFBFA`) → ink footer (`#141413`). Text and primary CTAs are warm near-black **Ink** (`#141413`). Signal orange (`#CF4500`) is a compliance/consent color and is kept off marketing CTAs; light signal orange (`#F37338`) appears only as decorative orbital arcs and carousel indicators. Link blue (`#3860BE`) for inline links.
- **Type:** one-font system. **Sofia Sans** (open-source stand-in for the proprietary MarkForMC — see Caveats). Contrast comes from scale, weight, and letter-spacing, not from a second face. Headlines at weight **500** with **-2% letter-spacing** (tight, editorial). Body at the load-bearing weight **450** (softer than 500, firmer than 400). Line-height tightens with size: H1 1:1, H3 1.2, body 1.4.
- **Spacing:** 8px base, powers-of-8 scale (8/16/24/32/48/64/96/128). Section vertical padding ~112px desktop. Whitespace is treated as structure — sections are deliberately empty around a single focal element.
- **Backgrounds:** flat warm color fields, no programmatic gradients in the core UI. The only "gradient" impression comes from warm circular photos fading to cream at their edge, and from soft large-radius shadows. Imagery is **circularly masked** — square photos cropped to perfect circles; never rectangular service imagery. Photo color vibe is **warm** (amber/rust/gold subjects on cream), not cool or B&W.
- **Border radius:** an unusual, gapped scale — **tiny (≤6px)**, **medium-large (20px buttons / 40px stadium)**, or **full pill (99–1000px)** and **50% circles**. The 8–16px middle ground is intentionally absent, so surfaces read either "precise utility" or "soft editorial" with no in-between.
- **Corners/cards:** cards are white (`#FFFFFF`) on cream, radius 40px (stadium) or full-circle for portraits. Elevation is **atmospheric**: large-spread, low-opacity shadows (nav `0 4 24 / 4%`; cards `0 24 48 / 8%`; rare feature `0 70 110 / 25%`). No hard, tight drop shadows anywhere. Borders (1.5px ink on buttons, 1px low-opacity hairlines elsewhere) are preferred over shadows for functional delineation.
- **Animation:** restrained. Buttons compress slightly on press (`scale(0.97)`), links shift opacity on hover, the nav search field drops in with a short ease. No bounces, no parallax, no elaborate entrance choreography.
- **Hover states:** links/nav raise opacity toward 1; the clay-brown link buttons underline. **Press states:** subtle inward shrink (`scale`), not color change.
- **Transparency & blur:** used sparingly — translucent white for controls placed over media (`on-media` icon buttons), a dark-to-transparent scrim gradient over photo carousel cards for legible overlaid text, and low-opacity white dividers/borders on the ink footer. No frosted-glass panels in the core UI.
- **Signature motifs:** (1) circular photo **portraits** with a white **satellite** micro-CTA docked to the bottom-right, protruding ~40% outside the circle; (2) thin (~1.5px) light-orange **orbital arcs** tracing connections between portraits; (3) **ghost watermark** headlines — oversized cream-on-cream text behind portraits; (4) the **floating nav pill** docked ~24px below the viewport top.
- **Layout rules:** content max-width ~1280px with 48px+ gutters; nav floats fixed at top; portraits are placed **asymmetrically** (never on a strict grid) to create the "constellation" feel.

---

## ICONOGRAPHY

- **Icon set: [Bootstrap Icons](https://icons.getbootstrap.com/)** (v1.11.3), loaded from CDN (`https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css`). This was the explicitly requested set. Icons are used via `<i class="bi bi-...">`; every component that takes an `icon` prop expects a `bi-*` class name.
- The source spec did not ship an icon font or SVG set, so Bootstrap Icons is the chosen system — a clean, medium-weight, mostly-outline set that sits comfortably with the geometric type. This is a **substitution**; flag it if a specific icon library is later mandated.
- **Common glyphs in use:** `bi-arrow-right` (satellite CTA, primary buttons), `bi-search` (nav), `bi-chevron-left/right` (carousel), `bi-play-fill` (media), `bi-shield-check` (trust), `bi-chat-dots / bi-geo-alt / bi-credit-card / bi-question-circle` (footer "Need help?" column), `bi-globe2 / bi-chevron-down` (country selector), `bi-linkedin / bi-facebook / bi-twitter-x / bi-youtube` (footer socials), `bi-apple / bi-google-play` (app store chips).
- **No emoji** anywhere, per brand and per the project brief. **No unicode characters used as icons** — the one arrow motif (→) is rendered as `bi-arrow-right`, not a text glyph. No PNG icons.
- Icons are monochrome, inheriting `currentColor`; they are sized relative to their container (e.g. satellite arrow ≈ 36% of the circle diameter).

---

## Index / manifest

Root:
- `styles.css` — the single entry point consumers link; `@import`s all token files.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `shadows.css`.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills-compatible wrapper.
- `readme.md` — this file.

Components (namespace `window.MastercardInspiredDesignSystem_df5181`):
- **buttons/** — `Button` (primary / secondary / consent / link), `IconButton`, `SatelliteButton`
- **content/** — `Eyebrow`, `Chip`, `GhostHeadline`
- **media/** — `PortraitCard`, `CarouselCard`
- **navigation/** — `NavPill`, `Footer`, `Wordmark`
- **forms/** — `Input`

Each component directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one `@dsCard`-tagged card HTML.

**Intentional additions** (not literally named in the source, added to make the system usable): `Wordmark` (plain-type logo placeholder, since no logo was provided) and `Input` (the spec describes the nav search field and footer selector; `Input` generalizes that pill field).

UI kits:
- `ui_kits/website/` — money-transfer marketing homepage: floating nav with working search toggle, hero with an **interactive send-money calculator** (live rate/fee math), asymmetric services constellation with orbital arc, horizontally-scrollable story carousel, dark CTA band, and footer. See `ui_kits/website/README.md`.

Foundation specimen cards live in `guidelines/` (groups: Colors, Type, Spacing, Brand).

---

## CAVEATS

- **Font substitution:** the real typeface is **MarkForMC** (proprietary, licensed). This system uses **Sofia Sans** (Google Fonts) — the closest open-source match and the face named in Mastercard's own fallback stack. It is loaded via a Google Fonts `@import` (so the compiler reports 0 bundled `@font-face` binaries; the font still loads for any consumer with network access). Supply MarkForMC WOFF2 files to self-host and make it offline-safe.
- **No logo:** the brand mark is a plain-type `Wordmark`. Provide a real SVG to replace it.
- **Imagery is placeholder:** portrait circles and carousel cards use warm CSS gradient placeholders in the documented "warm-photo-fading-to-cream" style. Drop real square photos into the `image` prop.
- Bootstrap Icons is a chosen substitute for an unspecified icon set — confirm or swap.
