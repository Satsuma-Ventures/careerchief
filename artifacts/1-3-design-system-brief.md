# Design System Brief: CareerChief
*Date: 2026-07-08 · Skill: 3-concept v2.2*

## Venture context

CareerChief is an AI "career chief of staff" that **excavates a mid-career professional's real experience and re-threads it** into a narrative — résumé, positioning, interview prep — for the level they're now targeting. It is not a résumé generator; it is a strategic partner that surfaces value the user assumes is trivial and never fabricates. Many users arrive at a vulnerable moment (recently laid off, screened out, drowning in AI sameness), so the product's first job emotionally is to feel like a trusted advisor already in their corner.

## Emotional register

The core design tension, in the founder's words: *deliver a human career coach's high-touch experience inside an AI product.* Everything resolves toward that. Target adjectives — specific to this venture, not generic:

- **In-your-corner** — a partner working *for* you behind the scenes, not a tool performing *on* you.
- **Composed / steadying** — meets an anxious user with calm, not urgency; lowers the temperature.
- **Earned-credible** — the authority of someone who has done the homework; substance over sparkle.
- **Editorial / considered** — serif headlines and generous space signal thought, not throughput.
- **Warm-authoritative** — confident without being cold; direct without being clinical.
- **Quietly premium** — the feel of a senior advisor or private-client service, not a mass-market SaaS.
- **Grounded / honest** — visibly traceable to the user's real words; never the gloss of fabrication.

## What it should NOT feel like

- **Generic "AI product" sci-fi** — no neon/violet gradients, glow, circuit motifs, robot/spark mascots, or "✨ AI-powered" ornament. The capability is demonstrated, never announced. ("AI-powered" is explicitly off-brand copy.)
- **Résumé-builder SaaS** (Teal, Rezi, Careerflow) — no dense dashboard-of-widgets, ATS-score gauges everywhere, template-picker energy. CareerChief excavates; it does not reformat.
- **Job-board / hustle-culture** — no aggressive "APPLY NOW," countdowns, gamified streaks, or growth-hack loudness. This is a considered relationship, not a funnel.
- **Personality-quiz gamification** (Apt) — no playful quiz-toy or horoscope-y "discover your type" energy. We work from a real history, not a typology.
- **Chatbot toy** — the conversational onboarding must read as a skilled interview with a senior coach, not a bubbly assistant widget.

## Reference points

- **A private-client / advisory interface (private banking, wealth management).** Calm authority, generous whitespace, restrained palette, one accent reserved for meaningful moments — communicates "your interests are being handled by someone senior." This is the *feel* of the high-touch coach translated to screen.
- **Editorial publications with earned gravitas (The Economist, Monocle).** Serif display over clean sans body, confident typographic hierarchy, trust conveyed through restraint and craft rather than decoration. Anchors the "considered, credible" register.
- **Chief (the premium women's executive network).** Not visually, but as *positioning tone*: a strategic partner "in your corner" at a senior register — validating the premium, in-the-room feel CareerChief wants, delivered at software scale instead of a physical clubhouse.

## User context

Desktop-first, high-focus. The signature interactions — a deep onboarding conversation, reviewing and editing a living Career Brief, prepping for a specific role — are lean-in sessions where the user is thinking hard about their own story, often at an emotionally loaded moment. That argues for generous spacing, calm surfaces, highly readable serif headlines, and a body type comfortable for sustained reading. Mobile must remain fully usable (a laid-off user checks in from anywhere), but layout and density are optimized for a focused desktop session. Never busy; never rushed.

## Established direction — color and logomark

The color palette and logomark are approved starting points. All other design decisions — typography, spacing, component style, motion — are open for your interpretation within the emotional register above.

**Color palette**

| Approximate role | Hex | Semantic intent |
|---|---|---|
| Primary (navy) | `#1A2F4A` | CTAs, headlines, nav |
| Primary dark | `#0F1E30` | Hover, dark surfaces |
| Accent (steel) | `#2A6C8E` | Links, secondary CTAs |
| Accent light | `#6AB0CC` | Data viz, progress, highlights on dark |
| Achievement (gold) | `#C4962A` | **Achievement moments only** — scores, milestones |
| Page background | `#F6F9FB` | Off-white, not pure white |
| Surface | `#E8EEF4` | Cards, secondary backgrounds |

**Gold is signal, not decoration.** Reserve it for genuine achievement moments — a completed brief, a milestone score. Its restraint is what makes it land. This is the single most important discipline in the palette.

**Logomark:** SVG assets are available in `assets/` (`careerchief-logomark.svg`, `careerchief-lockup.svg`, and variants). Use them; the logomark itself is not up for redesign.

## Output expectations

Produce a complete design system for CareerChief. The color palette and logomark are anchor points; all other decisions are yours to make in service of the emotional register above. The design system will be consumed directly by Claude Code in Phase 6 implementation — every token and component definition must be implementation-ready with full component states (hover, press, disabled, focus, error, empty).

### Required files and conventions

**`SKILL.md`** — design system descriptor:
```yaml
---
name: careerchief-design
description: The CareerChief design system — the visual and component language for the AI career chief of staff.
user-invocable: true
---
```
Followed by: brand personality summary, hard rules (never-violate constraints — lead with "gold is achievement-only" and "no AI-sparkle/gradient ornament"), and file inventory.

**`brand.html`** — human-readable rendering of the full system: color palette with hex values and semantic roles; typography specimens (display, h1–h3, body, body-lg, caption, label, eyebrow, mono); spacing scale; and a component gallery (button states, card, input, link, badge, progress, score card at minimum).

**`colors_and_type.css`** — drop-in CSS variables for all tokens. This is the implementation source of truth — import it first in any artifact built from this system.

**`preview/_base.css`** — shared base imported by all preview cards: the Google Fonts `@import`, `:root` token variables, box-sizing reset, `html/body` defaults, a `.card` container (width 700px, generous padding), and a standard `.card-label`.

**`preview/[component-name].html`** — one file per component, `@dsCard` convention:
```html
<!-- @dsCard group="[Group]" name="[Component name]" subtitle="[States shown]" viewport="700x[height]" -->
```
Required cards: colors-brand, type-scale, type-display, type-body, components-button-primary, components-button-secondary, components-card, components-input, spacing-scale. CareerChief-specific cards worth including: score-card, badges, progress.

**`assets/`** — include the CareerChief logo SVGs from the provided assets folder (`careerchief-lockup*.svg`, `careerchief-logomark*.svg`, favicon).

**`_ds_manifest.json`** — generated automatically by Claude Design.

### Output conventions for docs/ deployment

Files are synced to the venture repo and served via GitHub Pages from `docs/`. Follow these so they work when served from that path:

- **Self-contained HTML** — every `.html` works standalone; no dependencies on files absent from `docs/`.
- **CDN fonts only** — Google Fonts `@import`/`<link>`; no local font files.
- **Relative paths within the project** — references between files (e.g. `_base.css` from a preview card) resolve when synced to `docs/` and `design-system/`.
- **`brand.html`** is placed at `docs/brand.html` — write it standalone for that path.
- **Concept screens** are placed at `docs/concepts/[name].html` — each fully self-contained, CDN fonts only.
