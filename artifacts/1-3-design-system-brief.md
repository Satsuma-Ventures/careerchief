# Design System Brief: CareerChief
*Date: 2026-07-08 · Skill: 3-concept v2.2*

## Venture context

An AI product that **excavates a mid-career professional's real experience and re-threads it** into a narrative — résumé, positioning, interview prep — for the level they're now targeting. Grounded in real experience; never fabricated. Many users arrive at a vulnerable moment (recently laid off, screened out, drowning in AI sameness), so the product's first job emotionally is to feel like a trusted partner already in their corner.

*(Working name: CareerChief. The name, logomark, and full visual identity are open for this engagement — see Creative Direction below.)*

## Brand sentiment

**The ideal professional cofounder, applied to your career.** Someone who picks you up when you're down. Who sees what you can't see about yourself. Who speaks candidly because they're unambiguously in your corner — not performing support, but genuinely invested in a shared goal. Who knows exactly when to push for more rather than let you settle. Not a coach running a protocol. Not a tool. A partner with skin in the game.

Design register: **intimate without being soft. Expert without being distant. Candid without being cold.**

This is the creative anchor for every decision in this design system. Return to it when choices feel hard.

## Emotional register

The core design tension, in the founder's words: *deliver a human career coach's high-touch experience inside an AI product.* Everything resolves toward that. Target adjectives — specific to this venture, not generic:

- **In-your-corner** — a partner working *with* you and *for* you, not a tool performing *on* you.
- **Composed / steadying** — meets an anxious user with calm, not urgency; lowers the temperature.
- **Earned-credible** — the authority of someone who has done the homework; substance over sparkle.
- **Editorial / considered** — thoughtful typographic hierarchy signals craft, not throughput.
- **Warm-authoritative** — confident without being cold; direct without being clinical.
- **Quietly premium** — the feel of a senior advisor or private-client service, not a mass-market SaaS.
- **Grounded / honest** — visibly traceable to the user's real words; never the gloss of fabrication.

## What it should NOT feel like

- **Generic "AI product" sci-fi** — no neon/violet gradients, glow, circuit motifs, robot/spark mascots, or "✨ AI-powered" ornament. The capability is demonstrated, never announced. ("AI-powered" is explicitly off-brand copy.)
- **Résumé-builder SaaS** (Teal, Rezi, Careerflow) — no dense dashboard-of-widgets, ATS-score gauges everywhere, template-picker energy. This product excavates; it does not reformat.
- **Job-board / hustle-culture** — no aggressive "APPLY NOW," countdowns, gamified streaks, or growth-hack loudness. This is a considered relationship, not a funnel.
- **Personality-quiz gamification** (Apt) — no playful quiz-toy or horoscope-y "discover your type" energy. We work from a real history, not a typology.
- **Chatbot toy** — the conversational onboarding must read as a skilled interview with a trusted partner, not a bubbly assistant widget.

## Reference points

- **A private-client / advisory interface (private banking, wealth management).** Calm authority, generous whitespace, restrained palette, one accent reserved for meaningful moments — communicates "someone who genuinely knows this domain is invested in how it turns out for you." Borrow the *feel* of calm, expert authority; leave behind the hands-off, done-for-you distance. This is the high-touch cofounder relationship translated to screen.
- **Editorial publications with earned gravitas (The Economist, Monocle).** Confident typographic hierarchy, trust conveyed through restraint and craft rather than decoration. Anchors the "considered, credible" register.
- **Chief (the premium women's executive network).** Not visually, but as *positioning tone*: a strategic partner "in your corner" at a senior register — validating the premium, in-the-room feel this product wants, delivered at software scale.

## User context

Desktop-first, high-focus. The signature interactions — a deep onboarding conversation, reviewing and editing a living Career Brief, prepping for a specific role — are lean-in sessions where the user is thinking hard about their own story, often at an emotionally loaded moment. That argues for generous spacing, calm surfaces, highly readable display headings, and a body type comfortable for sustained reading. Mobile must remain fully usable (a laid-off user checks in from anywhere), but layout and density are optimized for a focused desktop session. Never busy; never rushed.

## Creative direction

**Everything is open.** Name, logomark, color palette, typography, spacing, component language — all are creative decisions for Claude Design to make in service of the brand sentiment above. No visual decisions from prior work should be carried forward. The brief above is the full creative brief.

Principles derived from the brand sentiment to hold across every visual decision:

- **Restraint is the signal.** The cofounder relationship rests on trust — and trust is earned through substance, not performative display. Decoration is the interface showing off; it works against the credibility this product needs to build. Blank space and typographic confidence are the primary design tools.
- **Discipline your accent.** Whatever color plays the achievement/accent role, reserve it for genuine milestones — a completed brief, a breakthrough score. Its restraint is what makes it land; use it freely and it reads as decoration.
- **Authority through typography.** The reference points (private banking, editorial) achieve gravity through typographic hierarchy — not illustration, not color, not motion. Serif display + humanist sans is the proven pairing for this register. The specific choices are yours.
- **The conversational interface must read as a skilled interview, not a chat widget.** Message bubbles, typing indicators, playful avatars — none of these. The dialogue register is a 1:1 with someone you trust deeply.

## Output expectations

Produce a complete design system: name, logomark, color palette, typography, components, and all. Every decision should be made in service of the emotional register and brand sentiment above. The design system will be consumed directly by Claude Code in Phase 6 implementation — every token and component definition must be implementation-ready with full component states (hover, press, disabled, focus, error, empty).

### Required files and conventions

**`SKILL.md`** — design system descriptor:
```yaml
---
name: [chosen-name]-design
description: The [Product Name] design system — the visual and component language for the AI career partner.
user-invocable: true
---
```
Followed by: brand personality summary, hard rules (never-violate constraints — lead with accent-discipline rule and "no AI-sparkle/gradient ornament"), and file inventory.

**`brand.html`** — human-readable rendering of the full system: color palette with hex values and semantic roles; typography specimens (display, h1–h3, body, body-lg, caption, label, eyebrow, mono); spacing scale; and a component gallery (button states, card, input, link, badge, progress, score card at minimum).

**`colors_and_type.css`** — drop-in CSS variables for all tokens. This is the implementation source of truth — import it first in any artifact built from this system.

**`preview/_base.css`** — shared base imported by all preview cards: the Google Fonts `@import`, `:root` token variables, box-sizing reset, `html/body` defaults, a `.card` container (width 700px, generous padding), and a standard `.card-label`.

**`preview/[component-name].html`** — one file per component, `@dsCard` convention:
```html
<!-- @dsCard group="[Group]" name="[Component name]" subtitle="[States shown]" viewport="700x[height]" -->
```
Required cards: colors-brand, type-scale, type-display, type-body, components-button-primary, components-button-secondary, components-card, components-input, spacing-scale. Product-specific cards worth including: score-card, badges, progress.

**`assets/`** — include logomark SVGs in both full-color and light variants: `[name]-lockup.svg`, `[name]-lockup-light.svg`, `[name]-lockup-stacked.svg`, `[name]-lockup-stacked-light.svg`, `[name]-logomark.svg`, `[name]-logomark-light.svg`.

**`_ds_manifest.json`** — generated automatically by Claude Design.

### Output conventions for docs/ deployment

Files are synced to the venture repo and served via GitHub Pages from `docs/`. Follow these so they work when served from that path:

- **Self-contained HTML** — every `.html` works standalone; no dependencies on files absent from `docs/`.
- **CDN fonts only** — Google Fonts `@import`/`<link>`; no local font files.
- **Relative paths within the project** — references between files (e.g. `_base.css` from a preview card) resolve when synced to `docs/` and `design-system/`.
- **`brand.html`** is placed at `docs/brand.html` — write it standalone for that path.
- **Concept screens** are placed at `docs/concepts/[name].html` — each fully self-contained, CDN fonts only.
