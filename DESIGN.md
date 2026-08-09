# Design

Style: **Magazine Brutalism** (Editorial family) — locked, non-negotiable per project style system. This supersedes the earlier Editorial Bold pass; do not blend with other sub-styles. Full behavioral spec lives in `Design Styles Description.txt`; this file translates that spec into concrete, reusable tokens for this codebase.

## Visual Theme

Aggressive, typographic, unapologetic — i-D meets Dazed & Confused underground print culture, not a booking engine. Type is a weapon, not a caption. Deep glacier navy slams against ice-blue, one safety-orange accent is used like a slap in the face, and elements are allowed to collide and overlap rather than sit politely inside a grid. The page should feel like a limited-run print zine put together by an operator who has actually stood on every one of these passes — confrontational proof of expertise, not a polished travel brochure.

Scene: a traveler on a laptop or phone, evening, deciding between three Himalayan regions they've never been to, wanting proof this operator knows the terrain before they hand over a WhatsApp number. Contrast and confrontation read as competence; safety and symmetry read as inexperience.

## Color

OKLCH throughout. Strategy: **Committed** — a deep navy/ice-blue neutral ramp (pulled from the brand reference photo) carries the surface, one shocking accent (safety orange) is pulled like a rubber stamp across the page, never decoratively. Navy replaces the earlier black-and-newsprint neutral ramp; the accent stays a hot, high-chroma color deliberately opposite the cool base — glacier blue against sunrise orange, not two blues.

| Token | OKLCH | Role |
|---|---|---|
| `--ink` | `#021228` | Primary text, dominant dark surface (deep navy, darkened) |
| `--void` | `#010d1d` | Near-black navy — full-bleed dark sections, hero backdrops |
| `--paper` | `oklch(0.90 0.025 240)` | Primary light surface — ice-blue, not neutral white or cream |
| `--paper-dim` | `oklch(0.85 0.035 240)` | Secondary light surface — card/section separation on paper |
| `--stone` | `oklch(0.36 0.09 255)` | Secondary text, captions, metadata on light surfaces |
| `--stone-on-dark` | `oklch(0.62 0.08 240)` | Secondary text on ink/void surfaces |
| `--rule` | `oklch(0.72 0.06 240)` | Hairline dividers on paper |
| `--rule-on-dark` | `oklch(0.36 0.09 255)` | Hairline dividers on ink/void |
| `--accent` | `oklch(0.65 0.19 45)` | Safety orange — the stamp color. Shocking, singular, never decoration. |
| `--accent-ink` | `oklch(0.44 0.16 42)` | Accent shifted dark enough for AA text on `--paper`; also the stamp-fill color |
| `--accent-paper` | `oklch(0.90 0.045 55)` | Accent tint for backgrounds behind accent-colored text on light surfaces (rare) |

**Accent discipline:** one element per composition, never more. Valid uses — the ink stamp mark, a single underline/tag, the active nav indicator, the primary CTA fill, a pull-quote mark, one headline word, a print-misregistration echo behind a headline. Never a background wash, never a gradient, never repeated across a page as decoration. On `--paper`, accent text must use `--accent-ink` (verified ≥4.8:1); full-saturation `--accent` is reserved for large display type, non-text fills, and use on `--ink`/`--void` where contrast is already high (verified ≥5:1). Every pairing above was hand-checked against WCAG relative-luminance math, not eyeballed.

**Bans:** no neutral gray or warm cream in the base ramp — every neutral carries the navy hue (240–255°); no second cool accent (the blue family is neutral here, not decorative); no gradients outside the two named dark-scrim uses (hero scrim, header-on-hero gradient).

## Typography

Pairing: one massive aggressive display + one completely neutral sans for body — both sourced from fontshare.com.

- **Display — Clash Display** (fontshare.com). Bold, condensed, confrontational letterforms — the "someone threw type at a wall and it worked" cut Magazine Brutalism calls for. Used for H1–H4, pull quotes, nav wordmark, package/place names, the stamp mark's set type. Tops out at weight 700 (no 800/900 cut exists) — that ceiling is the brief, not a compromise.
- **Cabinet Grotesk** (fontshare.com) stays loaded as the display fallback and as the "wide thin" counterpoint text Magazine Brutalism pairs against the bold hero — available via `.font-alt` for the rare secondary display moment that wants a lighter, wider foil next to a Clash Display headline.
- **Body — General Sans** (fontshare.com). Humanist, neutral, holds up at long-form itinerary length (day-by-day blog content). Used for paragraphs, form labels, nav links, metadata.
- **Mono accent (sparse)** — where a technical/metadata feel is wanted (dates, coordinates, "EST. 2000" stamps), use **JetBrains Mono** at small size, wide tracking, as a texture element only — never body copy.

### Scale (fluid, clamp-based)

| Role | clamp() | Weight | Tracking |
|---|---|---|---|
| H1 (hero) | `clamp(2.75rem, 6vw + 1rem, 5.75rem)` | 700 (Clash Display ceiling) | `-0.03em` |
| H2 (section) | `clamp(2rem, 3.5vw + 0.5rem, 3.5rem)` | 700 | `-0.025em` |
| H3 (card/place title) | `clamp(1.4rem, 1.8vw + 0.8rem, 2rem)` | 700 | `-0.02em` |
| Lede / intro paragraph | `clamp(1.1rem, 1vw + 0.9rem, 1.35rem)` | 400 (body font) | `0` |
| Body | `1rem–1.0625rem` | 400 | `0` |
| Eyebrow / meta / tag | `0.75rem` | 600–700 (display font) | `0.14em`, uppercase |

Hard ceilings respected: H1 never exceeds `5.75rem`; no display tracking tighter than `-0.03em`. Body measure capped at 68ch — the wider canvas (below) is for air and collision, never for longer text lines. `text-wrap: balance` on H1–H3, `text-wrap: pretty` on long-form prose (blog itinerary copy).

**No tiny uppercase tracked eyebrow above every section.** Hierarchy comes from scale, weight, and collision — reserve the eyebrow/mono-tag treatment for genuine metadata (region name, date, altitude), never as decorative section labeling repeated site-wide.

## Layout & Grid

- **Violently broken grid, not just asymmetric.** Editorial Bold's grid was broken but well-mannered; Magazine Brutalism lets elements physically collide — a title chip slammed over the bottom edge of a photograph, a stamp mark dropped across a photo/content boundary. Nothing about the collision is accidental: it's staged tension, not clutter. (The trust strip is the one deliberate exception — see below: it gets symmetric breathing room instead of a collision.)
- **Wide-format canvas.** The content container is wide (~1600px+) with fluid outer padding rather than a narrow centered column — on a large monitor the page should feel like a spread, not a phone layout stretched wide. Negative space at the outer edges is load-bearing composition, not unused screen space.
- Type is allowed to bleed off edges or cut across a photograph; photographs are allowed to interrupt a text column.
- Destinations/blog listings: an editorial mosaic (mixed image sizes, asymmetric column spans) with the place name on a collision chip that overlaps the photo's lower edge — never a uniform icon+heading+text card grid, never a caption politely floating below the image. `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` as the responsive fallback, overridden with explicit spans on wider viewports for the mosaic effect.
- Section rhythm varies deliberately — no fixed vertical rhythm marched down every page.
- z-index scale: `--z-dropdown: 20; --z-sticky-header: 30; --z-modal-backdrop: 40; --z-modal: 50; --z-toast: 60;`
- **Mobile is denser, not shorter-on-content.** Any listing that's naturally a grid (destination/place mosaics, footer sitemap columns, info-card clusters) runs 2-up on phones instead of stacking 1-up — cuts scroll length without cutting content. Prose-plus-image compositions (`.feature`) stay single-column on mobile; forcing text-heavy content into cramped columns to chase "more grid" would hurt legibility, which the mobile adaptation rules explicitly forbid trading away.

## Texture & Finish

- Subtle grain/noise overlay on every major section (fixed SVG noise filter, low opacity) — the page should never read as flat digital white.
- Halftone dot texture available on select image overlays and section breaks (SVG dot pattern, multiply blend, low-medium opacity) — newsprint/risograph, not a photo filter used everywhere.
- A single **print-misregistration echo** — a duplicate of a headline offset a few pixels in the accent color, low opacity, behind the real type — reserved for the homepage H1 as a signature moment, not repeated on every heading.
- Hairline rules (`--rule` / `--rule-on-dark`, 1px) plus deliberate heavier rules (2–3px, `--ink`) where a collision element needs a hard edge (title chips, the trust strip's overlap border) — no drop shadows, no soft glows, `border-radius` capped at 2–4px on any element (pill shapes reserved for tags/badges/social icons only).
- Torn-edge / ink-bleed accents used sparingly at true section breaks — not on every card.
- **Topography background**: an animated WebGL2 contour-line shader sits behind every CTA band (the dark conversion banner near the end of nearly every page) — terrain lines rising from `--void` through the photo-palette's mid-blue to `--accent` orange at "peak" elevation, drifting and gently responding to the cursor. Ported by hand from reactbits.dev's React/`ogl` component into plain WebGL2 (the GLSL shader is unchanged; only the mount harness was rewritten) — no new dependency, no build step. Skips entirely under `prefers-reduced-motion` or missing WebGL2 support, leaving the flat `--ink` background as the fallback.

## Imagery

- Hard, aggressive crops — subject bleeds off frame, never a safe centered shot.
- High-contrast grade: crush blacks, lift whites; a duotone (ink + paper) treatment available for archival/heritage moments (About page, "since 2000" storytelling).
- Photography is the content, not decoration — full-bleed and large wherever the destination itself is the message.
- Government approval marks (Himachal Tourism, Ministry of Tourism) render in their own original colors, small and grouped, in the trust strip and footer trust strip only — never resized into the accent system.

## Motion

- Ease-out-expo/quart on all entrances, no bounce or elastic loops.
- **One named exception:** the homepage hero stamp mark gets a single-shot impact entrance — overshoot then settle, like a rubber stamp striking paper. This is one deliberate directional motion (in, past rest, back to rest — never oscillating) on one element on one page, not a bounce reflex applied broadly. It still runs once, never repeats, and collapses to its resting state instantly under `prefers-reduced-motion`.
- Reveal-on-scroll content is visible by default (no opacity:0 gating) and enhances via IntersectionObserver-triggered class; a `prefers-reduced-motion` branch disables transforms and substitutes an instant or crossfade state.
- Stagger only within a genuine list (mosaic tiles, itinerary days) — never a uniform identical reveal applied to every section.
- Header dropdown/flyout: fast (200ms), no bounce, `position: fixed`-safe so it never clips inside a scroll container. Opens on hover-intent for mouse users (`(hover: hover)`) as well as click, with a grace delay on close so crossing the gap between the trigger and the panel (which is centered under the whole header, not directly beneath the button) doesn't prematurely dismiss it. Click/keyboard remains the primary path for touch and screen-reader users.
- Header hides on scroll-down past a short threshold and reappears immediately on scroll-up — never while a dropdown or the mobile nav is open, so nothing is left orphaned mid-interaction.

## Components (patterns, not a library)

- **Header**: `position: fixed`, wordmark left, nav right, Blog item opens a flyout to 7 regions → each region flyouts one level deeper to its 5 places. Contact form CTA is the single visually dominant nav action; phone/WhatsApp present but visually secondary. **Header/hero merge**: on any page that has a `.hero` (`body:has(.hero)`), the header starts fully transparent — no fill, no border — floating directly on the hero photograph with only a dark gradient (`::before`, near-black fading to nothing by ~65% down) behind its row for legibility; wordmark and nav text swap to `--paper`. Past a small scroll threshold it flips to a solid `--paper` header with the ink wordmark/nav back, matching the non-hero pages' default (always-solid) header. Pages without a hero (Contact, Terms) never get the transparent treatment — there's no photograph to merge into.
- **Hero**: full-bleed mountain photography, massive H1 bleeding toward an edge, one credibility line (25 years / govt-approved) directly beneath. Because the header now floats on top of it instead of pushing it down, the image runs from true `y:0` — one continuous photograph carrying both the nav and the headline. On the homepage only: an ink-stamp mark strikes onto the hero on load — the brand's roundel, drawn as a genuine stamp (double ring, arced set type, worn/rough edge), in `--accent-ink`, sitting off-kilter across the photo/content boundary. Proof arrives before persuasion; the stamp is the credibility gesture made physical.
- **Trust strip**: government approval marks + "Est. 2000" + review proof, framed with a heavy ink top/bottom border. On region index pages, where it follows a `.hero` directly (`.hero + .trust`), it gets generous symmetric padding (`--space-2xl` top and bottom) instead of a collision — this is the one component in the system that deliberately reads as a clean, separated proof block rather than staged tension, since credibility copy needs to be read calmly, not fought for. (The homepage's trust strip isn't hero-adjacent at all — `StampMark` sits between them — so this rule never applies there.)
- **Destination mosaic**: the homepage/blog/region grid into regions or places — asymmetric image tiles, place name on a collision chip overlapping the image's lower edge, no icon-card treatment.
- **Region/place page**: editorial long-form — hero image, lede, broken-grid attraction sections, activities list, single contact-form CTA block at the end.
- **Blog index**: region-first taxonomy (matches header), article entries as an editorial list/mosaic, not a card grid.
- **Contact form**: name, phone, email, destination (select, pre-populated from region list), message — primary conversion object of the site; treated with the most visual weight of any form on the site.
- **Footer**: dense but ordered — sitemap column lists regions only (no per-place sub-links; the flyout nav and blog/region pages already carry that depth), contact block, social links, government approval marks, copyright.
