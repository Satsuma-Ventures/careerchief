---
name: meritous-design
description: The Meritous design system — the visual and component language for the AI career partner.
user-invocable: true
---

# Meritous Design System

**"The expert in your corner."** Meritous excavates a mid-career professional's real
experience and re-threads it into a narrative — résumé, positioning, interview prep — for
the level they're now targeting. Grounded in real experience; never fabricated.

## Brand personality

The ideal professional cofounder, applied to your career. Someone who sees what you can't
see about yourself and speaks candidly because they're unambiguously in your corner.

**Design register: intimate without being soft. Expert without being distant. Candid
without being cold.** Target adjectives: in-your-corner, composed/steadying,
earned-credible, editorial/considered, warm-authoritative, quietly premium, grounded/honest.

The identity is **wordmark-forward** — the name *meritous* set in Libertinus Serif, all-lowercase,
tracking -0.028em, pine ink, closed with a single **brass underscore** — *a line held for
you*. From *merit* (earned worth). A brand layer
(stable, gravitas) sits above a lightweight per-persona **career-partner** layer (warmth, the 1:1
relationship) that arrives later — leave disciplined room for it; don't fragment the master
brand.

## Hard rules (never violate)

1. **Discipline the accent.** Brass (`--accent` #9A7833) appears ONLY at genuine milestones
   — a completed brief, a breakthrough score, a real credential. Its restraint is what makes
   it land; used freely it reads as decoration. The **one sanctioned exception** is the
   **held-line motif** (the wordmark's trailing brass underscore and its in-product
   descendants): a line is a quiet hairline while *empty/waiting* and turns brass only when
   *earned/filled/signed* — so even the exception obeys the milestone logic. The wordmark
   carries the brass underscore because the brand itself is the earned state.
2. **No AI-sparkle / gradient ornament.** No neon/violet gradients, glow, circuit motifs,
   robot or spark mascots, or "✨ AI-powered" copy. "AI-powered" is off-brand copy. Capability
   is demonstrated, never announced.
3. **Restraint is the signal.** Blank space and typographic confidence are the primary design
   tools. Decoration works against the trust this product must build.
4. **Authority through typography, serif-forward.** Libertinus Serif (the text cut) carries
   headings, the lockup, and the eyebrow, because serifs read as edited and credible (the trust
   the product must earn). One family throughout — Libertinus Serif is a genuine text face, so
   it carries body, leads, and UI as comfortably as display; hierarchy comes from size, weight,
   italic, and colour, never a second typeface. **All-serif system — no sans, no monospace anywhere** —
   sans reads app-generic and mono signals machine, both the opposite of the human register. The eyebrow is a sentence-case serif-italic standfirst, never a
   tracked-out uppercase kicker (that stack — uppercase + wide tracking + mono micro-label —
   is the templated-AI tell).
5. **The conversation is a skilled interview, not a chat widget.** No message bubbles, typing
   indicators, or playful avatars. Set dialogue in the display serif; the register is a 1:1
   with someone you trust.

### Capitalization rules (enforce universally)

Match these exactly — never claim one case and ship another:

- **Eyebrows / standfirsts** (`.t-eyebrow`, `.card-c__eyebrow`, `.score-card__eyebrow`): **Sentence
  case** — capitalize only the first word and proper/product nouns. Each segment split by a `·`
  separator restarts as its own sentence case (e.g. *"Your Career Brief · Draft"*, *"Interview
  prep · In progress"*). Never Title Case, never ALL CAPS, never tracked-out.
- **Persona / role descriptors** (`.steward__role` and any "Your ___" label): **Title Case** —
  every principal word capitalized (e.g. *"Your Career Partner"*). The persona role is
  **"Career Partner"** (not "steward" — that read custodial/hands-off; the register is an
  active partner with skin in the game).
- **Status badges** (`.badge`): **Sentence case** — first word capitalized only (e.g. *"In progress"*,
  *"Brief complete"*, *"Needs input"*).
- **Card titles** (`.card-c__title`): **Sentence case** — first word and proper nouns only
  (role names, companies). E.g. *"Platform & reliability leadership"*, *"Director of Engineering — Northwind"*.
- **Names**: as the proper noun is spelled (*Ames*).
- **The wordmark**: always all-lowercase (*meritous*).
- **Section/nav labels** (`.card-label`): ALL CAPS is permitted here only, as a structural chrome
  label — never on user-facing content.
6. **Not résumé-builder SaaS, job-board hustle, or personality-quiz gamification.** No
   dashboard-of-widgets, ATS gauges everywhere, "APPLY NOW", streaks, or quiz-toy energy.
7. **Desktop-first, high-focus.** Generous spacing, calm surfaces, readable display headings,
   a body comfortable for sustained reading. Mobile stays fully usable; never busy, never rushed.

## Palette (see colors_and_type.css)

- **Brand — pine** `#1E3E32` (steady authority, primary actions, wordmark)
- **Accent — brass** `#9A7833` (RESERVED; earned worth = gold)
- **Warm neutrals** paper `#FBF8F2`, surface `#FFFFFF`, ink-900 `#211E18`, hairline `#E6DFD0`
- **Semantic** success `#3F6B4F`, error `#A2382A`, info `#35566B`

## Typography

- **Everything — display, headings, lockup, eyebrow, body, leads, UI** — Libertinus Serif, one family
- **Weights** — 400 body, 600 headings & labels, 700 rare emphasis; italic for leads, eyebrows, and quoted user words
- **All-serif, no sans, no monospace** — the `--font-mono` token is a deprecated alias that
  degrades to the text serif. Evidence/quoted user words are set in serif italic, anchored to a source.

## File inventory

- `colors_and_type.css` — token source of truth (import FIRST). Fonts, color, type scale,
  spacing, radii, elevation, motion.
- `components.css` — implementation-ready component classes with full states (button, input,
  card, badge, progress, score-card, career-partner voice (narrative-first input), link, dividers).
- `styles.css` — compiler entry; imports the two files above.
- `brand.html` — self-contained human-readable rendering of the full system.
- `assets/` — logo SVGs: `meritous-lockup(.svg|-light)`,
  `meritous-logomark(.svg|-light)`.
- `preview/_base.css` + `preview/*.html` — `@dsCard` component gallery (colors, type,
  buttons, input, card, spacing, badges, progress, score-card, career-partner voice, logo).

## Usage

Import `colors_and_type.css` then `components.css` (or `styles.css` for both). Build with the
token variables and component classes. When a choice feels hard, return to the anchor: *the
ideal professional cofounder, applied to your career.*
