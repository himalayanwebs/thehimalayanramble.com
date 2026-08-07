---
target: index.html (homepage) + site-wide style.css
total_score: 33
p0_count: 0
p1_count: 1
timestamp: 2026-08-07T19-12-46Z
slug: index-html-homepage-site-wide-style-css
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Header/dropdown/mobile-nav states are all clear; contact form has no async loading state |
| 2 | Match System / Real World | 4 | Plain language, real place names, no jargon |
| 3 | User Control and Freedom | 3 | Dropdown + mobile nav support outside-click/Escape; no back-to-top on long place pages |
| 4 | Consistency and Standards | 4 | Was 2 (form inputs silently dropped the site's focus ring) — fixed this pass |
| 5 | Error Prevention | 3 | Inline field validation exists (`.field.has-error`) |
| 6 | Recognition Rather Than Recall | 4 | All nav is text-labeled; icon-only elements (social links) carry `aria-label` |
| 7 | Flexibility and Efficiency | 3 | tel:/WhatsApp deep links are a real mobile accelerator; no keyboard shortcuts (not expected here) |
| 8 | Aesthetic and Minimalist Design | 4 | Deliberate editorial system, no clutter |
| 9 | Error Recovery | 3 | Field errors shown inline, non-blocking |
| 10 | Help and Documentation | 2 | No FAQ; Call/WhatsApp function as the "ask a human" escape hatch |
| **Total** | | **33/40** | **Good** |

#### Audit Health Score

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 3 | Global `:focus-visible` ring existed but was silently overridden on form fields — fixed |
| 2 | Performance | 3 | Lazy-loading used consistently below the fold; new Topography WebGL background has IO/visibility pause but is unverified on low-end mobile |
| 3 | Theming | 4 | Full custom-property token system, no stray hard-coded colors found |
| 4 | Responsive | 3 | `.btn` white-space:nowrap was overflowing its own background on long labels at ≤360px — fixed this session |
| 5 | Anti-Patterns | 4 | Detector clean after fixes; one false positive (see below) |
| **Total** | | **17/20** | **Good** |

#### Anti-Patterns Verdict

Ran the bundled deterministic detector (`detect.mjs`) against `index.html`, `contact.html`, `blog.html`, `himachal-pradesh/manali.html`, `style.css`.

**Real findings (fixed this pass):**
- `bounce-easing` in `style.css:65` — `--ease-stamp: cubic-bezier(0.2, 1.3, 0.4, 1)` had a >1 control point (mathematical overshoot), on top of the stamp's own keyframe-authored impact motion, effectively double-bouncing. Replaced with a clean decelerating curve (`cubic-bezier(0.22, 1, 0.36, 1)`); the keyframes still carry the "struck stamp" impact feel.
- `em-dash-overuse` on `index.html` — 9 em-dashes in body copy. Verified by hand: 3 were legitimate title/label-style dashes (`<title>`, meta description, hero eyebrow "Shimla, Himachal Pradesh — Est. 2000") and left alone; 6 were the same "clause — clause" construction repeated across paragraphs, which is a genuine AI cadence tell. Rewrote those 6 using colons, periods, and commas for punctuation variety.

**False positive (verified, not changed):**
- `single-font` on every page scanned — detector reports only JetBrains Mono in use. Manual check of `style.css` shows a real 3-family system (`--font-display` for headings, `--font-body` for prose, `--font-mono` for meta/labels), applied across 15+ selectors. The detector isn't resolving the `@font-face`/custom-property cascade correctly for a non-bundled multi-page site.

**Borderline (left as-is):** `numbered-section-markers` on place pages (01–05 on the "things to know" highlights list, e.g. `manali.html`). This is a numbered list within one section, not the banned pattern (numbered eyebrows repeated as section-level AI scaffolding across a page). Reasonable as-is.

#### What's Working

- The navy/orange token system is applied with real discipline — no hard-coded stray colors turned up anywhere I checked.
- The hover-intent dropdown, outside-click/Escape handling, and scroll-aware header are real, considered interaction design, not defaults.
- Alt text is present and specific (not "image123") on every image checked, including correct `alt=""` on the decorative footer logo.

#### Priority Issues (fixed this pass)

- **[P1] Button text could overflow its own background on mobile** — `.btn` forced `white-space: nowrap`; several region-index CTAs ("Plan Your Uttarakhand Trip") exceed available width at 320–360px viewports, and the site's own hero `overflow: hidden` would clip it. Fixed: buttons now wrap instead of forcing a single line. — *this was the bug the user originally flagged.*
- **[P2] Small buttons (`.btn--sm`) had a ~35px tap target**, below the 44×44px minimum. Fixed via an invisible `::before` hit-area expansion (visual size unchanged).
- **[P2] Form-field focus ring was inconsistent with the rest of the site** — `.field input:focus{ outline:none }` silently dropped the global 2px accent focus ring, leaving only a border-color shift. Fixed by removing the override; both now apply.
- **[P2] Bounce easing on the homepage stamp mark** (anti-pattern ban). Fixed, see above.
- **[P3] Em-dash repetition in homepage copy** reads as AI cadence. Fixed, see above.

#### Persona Notes

**Jordan (first-time visitor)**: Nothing broke for Jordan — nav is fully text-labeled, breadcrumbs exist on place pages, and the primary action ("Plan Your Trip") is visually dominant on every hero. The only soft gap: no FAQ/help section if Jordan has a question they don't want to call/WhatsApp about.

**Casey (distracted mobile user)**: Was actively failed by the button-overflow bug above — fixed. Primary CTAs sit high in the hero rather than the thumb zone, which is acceptable for a marketing scroll (not a bottom-nav app) but worth knowing.

#### Minor Observations

- The Topography WebGL background (added earlier this session) has no way to be verified visually in this environment — worth a real-device check, especially older Android mid-range phones, given it's a continuous `requestAnimationFrame` shader loop (it does pause off-screen and on tab-hidden, and respects `prefers-reduced-motion`).
- No FAQ/help content exists site-wide; for a travel operator this is usually a trust-building surface (cancellation policy, what's included, safety) worth considering later.

#### Run Notes

Assessment independence: degraded (no browser automation available in this environment; single-pass code review + deterministic detector, no live visual verification). CLI detector: ran successfully, 2 real findings fixed, 1 false positive documented, 1 borderline left as-is. Browser visibility/overlay: not available, skipped. Live-server: not started. Temp-file cleanup: pending after snapshot write.
