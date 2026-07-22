---
name: meritous-design
description: The Meritous design system — the visual and component language for the career partner in your corner.
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

The identity is **wordmark-forward** — the name *meritous* set all-lowercase in Literata,
tight display tracking, pine ink, closed with a single **luminous-gold held line** that trails
the word (sized to a lowercase letter's height) — *a line held for you*. From *merit* (earned
worth). A brand layer
(stable, gravitas) sits above a lightweight per-persona **career-partner** layer (warmth, the 1:1
relationship) that arrives later — leave disciplined room for it; don't fragment the master
brand.

## Hard rules (never violate)

1. **Discipline the accent — luminous gold is arrival.** Gold (`--accent` #CE9E22; on dark use
   the foil `--accent-foil` #E4C05C) appears ONLY when something is genuinely earned — a filled
   held line, the Story Score, a completed/100% brief, a real credential. Its restraint is what
   makes it land; used freely it reads as decoration. **Gold pops on dark, not on ivory**
   (warm-on-warm won't sing), so stage genuine milestone moments on **pine/dark**, where gold
   reads as gilt/foil. Everyday actions and links stay pine. Never gold for eyebrows, section
   accents, or decoration. The **one sanctioned everyday use** is the **held-line motif** (the
   wordmark's trailing gold line and its in-product descendants): a line is a quiet hairline
   while *empty/waiting* and turns gold only when *earned/filled/signed* — so even it obeys the
   milestone logic. The wordmark carries the gold line because the brand itself is the earned state.
   **Gold is a dial, not a switch — use the `--gild-1…4` scale** (and `--gild-on-dark-1…4` on pine):
   how much it gilds encodes how much is genuinely earned. `gild-1` is neutral/unearned; `gild-4` is
   full arrival and stays reserved. The Story Score gilds by band — `<60 → gild-1` (no gold),
   `60–74 → gild-2`, `75–89 → gild-3`, `90+ → gild-4`; a partly-filled held line and progress gild
   the same way. Fade toward the context's neutral, never white. **Wayfinding stays pine** — the
   active-nav underline and everyday actions/links are pine; being on a page is not an achievement.
2. **No AI-sparkle / gradient ornament.** No neon/violet gradients, glow, circuit motifs,
   robot or spark mascots, or "✨ AI-powered" copy. "AI-powered" is off-brand copy. Capability
   is demonstrated, never announced.
3. **Restraint is the signal.** Blank space and typographic confidence are the primary design
   tools. Decoration works against the trust this product must build.
4. **Two families, split by meaning.** **Literata (serif) is the VOICE** — it carries
   everything with meaning: the partner's words, the user's own words, the Career Brief,
   headlines, leads, body, and eyebrows. It reads like a letter, not a UI. **Hanken Grotesk
   (sans) is CHROME ONLY** — nav, buttons, field labels, badges, metadata. **Nothing with
   meaning is set in the sans**, and never Inter/system-sans (reads generic) or monospace
   (signals machine). Display tracking is TIGHT (roughly -0.03 to -0.04em at large sizes),
   easing to ~0 at body. The eyebrow is a sentence-case serif-italic standfirst, used sparingly,
   never a tracked-out uppercase kicker and never restating the headline. Never hardcode
   `font-size`/`line-height` — always the `--fs-*`/`--lh-*` tokens and `.t-*` utilities.
5. **The conversation is a skilled interview, not a chat widget.** No message bubbles, typing
   indicators, or playful avatars. Set dialogue in the display serif; the register is a 1:1
   with someone you trust.

### Capitalization rules (enforce universally — CONTENT.md governs)

Match these exactly — never claim one case and ship another:

- **Eyebrows / standfirsts** (`.t-eyebrow`, `.card-c__eyebrow`, `.score-card__eyebrow`): **Sentence
  case** — capitalize only the first word and proper/product nouns. Each segment split by a `·`
  separator restarts as its own sentence case (e.g. *"Your Career Brief · Draft"*, *"Interview
  prep · In progress"*). Never Title Case, never ALL CAPS, never tracked-out.
- **Persona / role descriptors** (any "your ___" label): **Sentence case** — "your career
  partner" is a role, not a proper noun. (Per CONTENT.md; warmer and customer-facing.)
- **Status badges** (`.badge`): **Sentence case** — first word capitalized only (e.g. *"In progress"*,
  *"Brief complete"*, *"Needs input"*).
- **Named artifacts**: **Title Case** as proper nouns — *Career Brief, Story Score, Gap Detection*.
  Generic mentions stay lowercase ("your brief," "the score").
- **Card titles** (`.card-c__title`): **Sentence case** — first word and proper nouns only.
- **Names**: as the proper noun is spelled (*Everett*).
- **The wordmark**: always all-lowercase (*meritous*).
- **Section/nav labels**: ALL CAPS is never used on user-facing content.
6. **Not résumé-builder SaaS, job-board hustle, or personality-quiz gamification.** No
   dashboard-of-widgets, ATS gauges everywhere, "APPLY NOW", streaks, or quiz-toy energy.
7. **Desktop-first, high-focus.** Generous spacing, calm surfaces, readable display headings,
   a body comfortable for sustained reading. Mobile stays fully usable; never busy, never rushed.

## Palette (see colors_and_type.css)

- **Brand — pine** `#1E3E32` (steady authority, primary actions, links, wordmark)
- **Accent — luminous gold** `#CE9E22`, foil `#E4C05C` on dark (RESERVED; earned worth = gold, best on dark)
- **Warm neutrals** paper `#FBF8F2`, surface `#FFFFFF`, ink-900 `#211E18`, hairline `#E6DFD0`; on-dark ink `#F3ECDD`
- **Semantic** success `#3F6B4F`, error `#A2382A`, info `#35566B`

## Typography

- **Voice (Literata, serif)** — display, headings, lockup, eyebrow, body, leads, the user's and partner's words
- **Chrome (Hanken Grotesk, sans)** — nav, buttons, field labels, badges, metadata; nothing with meaning
- **Weights** — 400 body, 500 h2/h3/labels, 600 buttons/badges/names, 700 rare emphasis; italic for leads, eyebrows, and quoted user words
- **No system-sans, no monospace** — `--font-ui` is Hanken Grotesk; `--font-mono` is a deprecated alias to it. Evidence/quoted user words are set in serif italic, anchored to a source.

## File inventory

- `colors_and_type.css` — token source of truth (import FIRST). Fonts, color, type scale,
  spacing, radii, elevation, motion.
- `components.css` — implementation-ready component classes with full states (button, input,
  card, badge, progress, score-card, career-partner voice (narrative-first input), link, dividers).
- `styles.css` — compiler entry; imports the two files above.
- `brand.html` — self-contained human-readable rendering of the full system.
- `CONTENT.md` — content & design style guide (voice, capitalization, cast, layout rules). Governs copy.
- `assets/` — logo SVGs: `meritous-lockup(.svg|-light)`,
  `meritous-logomark(.svg|-light)`.
- `preview/_base.css` + `preview/*.html` — `@dsCard` component gallery (colors, type,
  buttons, input, card, spacing, badges, progress, score-card, career-partner voice, logo).

## Photo credits — the `pexels-link` class

Where photography is sourced from Pexels (via the `pexels_search_photos` tool), the delivered
HTML must credit it inline, adjacent to the image: "Photo by [Photographer] on Pexels", linked
to the photo page.

The credit is metadata, so it is **chrome** — set in `--font-ui` at caption size, `--ink-500`.
It is not the partner's voice and never sets in the serif. Do not use `.link` for it: the
credit must not carry the underline of a real link, and it is **never gold** — a photo credit
is not an earned milestone.

```css
.pexels-link{font-family:var(--font-ui);color:inherit;text-decoration:none;
  transition:color var(--dur-fast) var(--ease)}
.pexels-link::after{content:" ↗";opacity:0;transition:opacity var(--dur-fast) var(--ease)}
.pexels-link:hover{color:var(--ink-900)}
.pexels-link:hover::after{opacity:1}
.pexels-link:focus-visible{outline:2px solid var(--ring);outline-offset:3px;border-radius:2px}
```

## Usage

Import `colors_and_type.css` then `components.css` (or `styles.css` for both). Build with the
token variables and component classes. When a choice feels hard, return to the anchor: *the
ideal professional cofounder, applied to your career.*
