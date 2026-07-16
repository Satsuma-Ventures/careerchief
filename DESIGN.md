# Meritous — Design System
*Derived from Claude Design on 2026-07-15 · Phase 3 · Skill: 3-concept v2.2*

The machine-readable translation of the Meritous design system for Phase 6 implementation.
Source of truth for values: `design-system/colors_and_type.css` (tokens) and
`design-system/components.css` (component classes). Human rendering: `docs/brand.html`.

**Anchor:** the ideal professional cofounder, applied to your career — *intimate without
being soft, expert without being distant, candid without being cold.* Identity is
**wordmark-forward** (the name *meritous* in Libertinus Serif, all-lowercase, pine ink, closed
by a brass "held-line" underscore). **All-serif system — no sans, no monospace.**

## Color tokens

```css
:root {
  /* Semantic roles */
  --color-primary:      #1E3E32;  /* Pine — CTAs, wordmark, primary actions, links */
  --color-primary-hover:#2C5445;  /* Button hover (lighter than base) */
  --color-primary-press:#14261F;  /* Button active (deeper than base) */
  --color-accent:       #9A7833;  /* Brass — RESERVED: genuine milestones ONLY, never decorative */
  --color-accent-tint:  #F4EBD5;  /* Pale gold surface for achievement moments */
  --color-accent-ink:   #664C18;  /* Readable text on brass tint */
  --color-bg:           #FBF8F2;  /* Warm ivory page background */
  --color-surface:      #FFFFFF;  /* Cards, inputs */
  --color-surface-sunken:#F1EBDE; /* Wells, insets, code */
  --color-text:         #211E18;  /* Primary text (ink-900) */
  --color-text-strong:  #443E34;  /* Headings, strong secondary (ink-700) */
  --color-text-muted:   #6E6658;  /* Secondary text (ink-500) */
  --color-text-subtle:  #938B7B;  /* Placeholders, subtle marks (ink-400) */
  --color-text-disabled:#BDB4A2;  /* Disabled text (ink-300) */
  --color-rule:         #E6DFD0;  /* Borders and dividers (hairline) */
  --color-rule-strong:  #D6CDBA;  /* Input borders, stronger dividers */
  /* State colors */
  --color-success:      #3F6B4F;
  --color-error:        #A2382A;  /* Warm brick red */
  --color-info:         #35566B;  /* Calm slate (non-alarming) */
  /* (No dedicated "warning" — brass is milestone, not caution; use --color-info or error) */
  /* Focus rings */
  --ring:               rgba(30, 62, 50, 0.40);
  --ring-error:         rgba(162, 56, 42, 0.38);
}
```

Deep-surface pine for footers/dark panels: `--pine-900: #102219`. Pine tints for quiet
fills: `--pine-tint: #EAF0EC`, `--pine-tint-strong: #DCE7E1`.

## Typography

**Display / body / everything:** Libertinus Serif — `https://fonts.googleapis.com/css2?family=Libertinus+Serif:ital,wght@0,400;0,600;0,700;1,400&display=swap`
**Mono:** none — `--font-mono` is a deprecated alias that degrades to the serif.

One family throughout (lockup, headings, eyebrow, leads, body, UI). Hierarchy comes from
size, weight, italic, and color — never a second family.

### Type scale
| Role     | Size | Weight | Line height | Tracking  | Usage |
|----------|------|--------|-------------|-----------|-------|
| display  | 78px | 400    | 1.03        | -0.022em  | Hero statements (clamp min 40px) |
| h1       | 52px | 400    | 1.06        | -0.02em   | Section headers (clamp min 32px) |
| h2       | 34px | 500    | 1.14        | -0.013em  | Subsection, ink-700 |
| h3       | 24px | 400    | 1.34        | -0.006em  | Card titles, ink-700 |
| body-lg  | 25px | 400    | 1.5         | -0.003em  | Lead paragraphs |
| body     | 18px | 400    | 1.72        | 0         | Sustained reading |
| caption  | 15px | 400    | 1.55        | 0         | Secondary detail |
| label    | 14px | 500    | 1.4         | 0.004em   | UI field labels |
| eyebrow  | 16px | 400 *italic* | 1.4    | 0         | Editorial standfirst — **sentence case, serif italic, never tracked-out uppercase** |

**Weights:** 400 regular (body), 500 medium (h2, labels), 600 semibold (buttons, badges, names), 700 bold (rare emphasis). Italic for leads, eyebrows, and quoted user words.

## Spacing scale
Base unit: 4px. Tokens: `--space-0:2px · 1:4 · 2:8 · 3:12 · 4:16 · 5:24 · 6:32 · 7:48 · 8:64 · 9:96 · 10:128`px.

## Border radius
`--radius-sm:6px` (buttons, inputs) · `--radius-md:10px` (respond field) · `--radius-lg:16px` (cards, score-card) · `--radius-pill:999px` (badges, progress, mic).

## Elevation
Soft, warm, never a glow. `--shadow-sm:0 1px 2px rgba(33,30,24,.06)` · `--shadow-md:0 4px 18px -6px rgba(33,30,24,.12)` · `--shadow-lg:0 16px 44px -12px rgba(33,30,24,.18)`.

## Motion
Composed/steadying. `--ease:cubic-bezier(.22,.61,.36,1)` · `--dur-fast:120ms` · `--dur:190ms` · `--dur-slow:320ms`.

## Component definitions
Full implementations with states live in `design-system/components.css`. Summary:

### Button — primary (`.btn.btn--primary`)
- Background `--color-primary`; text `#F7F3EA`; height 44px; padding 0 24px; radius sm; weight 600.
- Hover `--color-primary-hover`; active `--color-primary-press` + translateY(1px); disabled → pine-tint-strong bg / ink-300 text; focus-visible → double ring (paper + `--ring`).
- Sizes: `--sm` 36px, `--lg` 52px; `--block` full width.

### Button — secondary / ghost / danger
- **Secondary:** surface bg, pine text, rule-strong border; hover pine border + pine-tint fill.
- **Ghost:** transparent, ink-700; hover surface-sunken.
- **Danger:** transparent, error text, error-tint border; hover error-tint fill.

### Input / field (`.field`, `.input`)
- Input: surface bg, 1px rule-strong border, radius sm, height 46px (textarea min 120px, resize-y).
- Hover pine-400 border; focus pine border + `--ring`; disabled surface-sunken; error → error border + `--ring-error`, `.field__error` shown.

### Card (`.card-c`)
- Surface bg, 1px hairline border, radius lg, padding 32px, shadow-sm.
- `--interactive`: hover lifts (translateY(-2px) + shadow-md); focus-visible ring.
- Parts: `__eyebrow` (serif italic, sentence case), `__title` (h3, 500), `__body` (ink-500).

### Badge (`.badge`)
- Pill, height 26px, weight 600. Variants: neutral, outline, pine, **accent (MILESTONE ONLY)**, info, success, error. Optional live dot / check.

### Progress (`.progress`)
- 6px pill track (surface-sunken), pine bar. `--complete` turns the bar **brass** (an earned state).

### Score card (`.score-card`)
- The earned-milestone moment — **the sanctioned home of brass**: accent-tint-strong border + 3px brass left edge. Serif-italic accent eyebrow; large serif value (68px) with muted unit.

### Career-partner voice (`.steward`) + Respond field (`.respond`)
- **Not a chat bubble.** Named partner: circular pine-tint avatar (initial), name (600), role in serif italic (**"Your Career Partner"**). Utterance `.steward__say` set in display serif (21–23px), not a bubble.
- `.respond`: one field the user can **type or dictate** into (Web Speech API); mic is an affordance on the field, no send button, no bubble. `is-live` state turns border/mic pine.

### Link (`.link`)
- Pine, animated underline (1px → 2px on hover) via background-gradient; focus-visible ring. `--muted` variant.

### Held-line motif (`.held-line`, `.held-blank`, `.wm-underscore`)
- The brand's signature underscore: a quiet hairline while **empty/waiting**, turning **brass** only when **earned/filled/signed**. The wordmark's trailing brass underscore is its root; in-product blanks (`.held-blank--earned`) obey the same milestone logic.

## Hard rules
Copied from `design-system/SKILL.md` — inviolable:

1. **Discipline the accent.** Brass (`#9A7833`) appears ONLY at genuine milestones — a completed brief, a breakthrough score, a real credential. The one sanctioned exception is the **held-line motif** (hairline while empty, brass when earned) — which still obeys milestone logic.
2. **No AI-sparkle / gradient ornament.** No neon/violet gradients, glow, circuit motifs, robot/spark mascots, or "✨ AI-powered" copy. "AI-powered" is off-brand copy. Capability is demonstrated, never announced.
3. **Restraint is the signal.** Blank space and typographic confidence are the primary tools.
4. **Authority through typography, serif-forward.** Libertinus Serif carries everything. **All-serif — no sans, no monospace anywhere** (sans reads app-generic, mono signals machine). Eyebrow is a sentence-case serif-italic standfirst, never a tracked-out uppercase kicker.
5. **The conversation is a skilled interview, not a chat widget.** No message bubbles, typing indicators, or playful avatars. Set dialogue in the display serif.
6. **Not résumé-builder SaaS, job-board hustle, or personality-quiz gamification.** No dashboard-of-widgets, ATS gauges everywhere, "APPLY NOW", streaks, or quiz-toy energy.
7. **Desktop-first, high-focus.** Generous spacing, calm surfaces, readable display headings, body comfortable for sustained reading. Mobile stays fully usable; never busy, never rushed.

### Capitalization (enforce universally)
- **Eyebrows/standfirsts:** sentence case (each `·`-separated segment restarts). Never Title Case / ALL CAPS / tracked-out.
- **Persona/role descriptors** ("Your ___"): Title Case. The persona role is **"Career Partner"** (not "steward").
- **Status badges:** sentence case ("In progress", "Brief complete").
- **Card titles:** sentence case (proper nouns keep caps).
- **The wordmark:** always all-lowercase (*meritous*).
- **ALL CAPS** permitted only on structural chrome labels (`.card-label`), never on user-facing content.

## Phase 6 implementation notes
- Always use CSS custom properties — never hardcode hex values.
- Import `design-system/colors_and_type.css` first, then `design-system/components.css` (or `design-system/styles.css` for both).
- Reference `design-system/preview/` cards and `docs/brand.html` for component implementation targets.
- **Brand assets** are `<text>`-based SVGs that rely on Libertinus Serif rendering — ensure the webfont loads, or convert the wordmark to outlines for a production logo asset.
- **Persona layer** (the named "Career Partner" cast: avatars, accents, matched-vs-chosen) is intentionally left as room to extend in Phase 5 solutioning — do not fully bake it here.
