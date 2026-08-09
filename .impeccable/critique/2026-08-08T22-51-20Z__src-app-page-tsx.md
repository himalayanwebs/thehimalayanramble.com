---
target: site-wide (home, 7 regions, 35 places)
total_score: 24
p0_count: 2
p1_count: 2
timestamp: 2026-08-08T22-51-20Z
slug: src-app-page-tsx
---
# Design Critique — The Himalayan Ramble (site-wide: home, all 7 region pages, all 35 place pages)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2/4 | NavLink's aria-current logic exists but is never used |
| 2 | Match Between System and Real World | 4/4 | n/a |
| 3 | User Control and Freedom | 3/4 | Minor: mega-nav auto-opens first region on keyboard focus |
| 4 | Consistency and Standards | 2/4 | Mosaic chip text breaks on mobile; duplicate Destinations/Blog entry points |
| 5 | Error Prevention | n/a | Contact form internals out of scope |
| 6 | Recognition Rather Than Recall | 4/4 | n/a |
| 7 | Flexibility and Efficiency | 3/4 | Deep-linked destination pre-fill is genuinely efficient |
| 8 | Aesthetic and Minimalist Design | 3/4 | Undercut by hero H1 tonal mismatch |
| 9 | Error Recovery | n/a | Contact form error states out of scope |
| 10 | Help and Documentation | 3/4 | n/a |
| **Total** | | **24/32 scored** | H5/H9 need a contact-form-focused pass |

## Anti-Patterns Verdict

Deterministic scan: 0 findings across all scannable source (both assessments agree). Design review clears nearly every AI-slop ban. Two real cracks: mobile mosaic text-overflow bug, and one generic hero headline. Cross-page sweep found something template review couldn't: several place pages show photos that don't match the real place.

## Priority Issues

**[P0] Six place pages show a photo that doesn't match the real place** — /delhi/humayuns-tomb/ (gallery photo is a Delhi Metro platform), /chandigarh/capitol-complex/ (bronze dancers + bazaar, not Le Corbusier's complex), /chandigarh/rock-garden/ (aerial traffic intersection), /chandigarh/sukhna-lake/ (government building, no water), /chandigarh/rose-garden/ (Mughal water garden), /jammu-and-kashmir/jammu/ (Dal Lake houseboat scene — Jammu has no such lake), /jammu-and-kashmir/sonmarg/ and /pahalgam/ (identical photo captioned as two different places). Confirmed by opening raw files. Fix: replace with real/accurate photos. Command: harden.

**[P0] Destination-mosaic place/region names break into single-character vertical columns on mobile** — .mosaic__name / .mosaic__name h3 (globals.css ~525-539) combine min-width:0 with overflow-wrap:break-word, collapsing flex items toward zero width. Verified via 390px viewport emulation ("Kinnaur" → one letter per line). Fix: min-width: 9ch on the h3, or drop the min-width:0/break-word pairing. Command: harden.

**[P1] Hero headline copy breaks the brand's own voice at the highest-visibility moment** — page.tsx:44-50, "the only place that feels like heaven on earth" reads like generic travel-blog copy; PRODUCT.md explicitly bans this tone. Fix: rewrite in the voice the founder-block/route copy already uses. Command: clarify.

**[P1] Primary nav gives zero "current page" feedback** — nav-link.tsx's aria-current logic exists but mega-nav.tsx/mobile-nav.tsx use plain Link instead. Fix: swap to NavLink for Home/Contact/Terms. Command: harden.

**[P2] Four place pages missing the numbered attractions block their siblings have** — /ladakh/zanskar/, /sikkim/yumthang-valley/, /sikkim/nathula/, /uttarakhand/dehradun/. Command: harden.

**[P2] Hero eyebrow/breadcrumb has unreliable-contrast scrim on some photos** — .hero__scrim starts at 22% opacity at top; washes out on bright-sky photos, untested per-photo across 35+ pages. Command: polish.

## Flagged, not auto-fixed

Trust-strip "collision" overlap documented in DESIGN.md is currently absent — but this is because the user explicitly requested symmetric spacing instead, earlier in this same session. Not reverted automatically; needs a user decision (restore overlap / update DESIGN.md to reflect new intentional spacing / leave as-is).

## Persona Red Flags

Casey (mobile): hits the P0 mosaic bug immediately when comparing regions. Riley (stress-tester): mosaic break is default state for names >7-8 chars; also notices no nav active-state. Deciding Traveler (project-specific): job-to-be-done runs through the mosaic (broken) and trusting photos are real (6 aren't).

## Minor Observations

- signature-routes.tsx (src/components/home/) is a corrupted unreadable file, not git-tracked, nothing imports it — crashed the detector twice. Needs user go-ahead to delete.
- Footer "Blog" link and header "Destinations" flyout are two entry points into the same taxonomy.
- .hero__lede uses hardcoded #d9e7f5 instead of a token (from an earlier contrast fix this session).
- One verbatim Google review says "Himalayan Rumble" (brand name misspelled) — intentionally preserved as authentic.
- Uttarakhand's trust-strip stat wraps to 2 lines where every other region fits on 1 — cosmetic only.

## Questions to Consider

1. Were the 6+ mismatched photos ever visually spot-checked against the real place, or sourced by keyword search alone?
2. The founder-block copy sounds lived-in; the hero H1 sounds templated. Was it written in a separate pass?
