# Meritous — Content & Design Style Guide

*The rules that govern voice and the design register. Read alongside `SKILL.md` (tokens, components, hard rules) and `DESIGN.md` (implementation spec). When copy or a design choice feels hard, this file decides.*

Anchor: **the ideal professional cofounder, applied to your career** — intimate without being soft, expert without being distant, candid without being cold. And the product truth beneath every rule: **it's your story; you hold the pen; the AI just helps you find the words.**

---

## 1 · The register (and how to calibrate it)

Meritous reads like a **warm, considered publication that happens to be software** — an editorial reading surface, not an app dashboard. Prose can't carry a design register; reference sites can. Calibrate against these — **for register, never to clone:**

- **OpenWeb** — all-serif on warm paper; huge display with aggressive negative tracking; one saturated accent; flat, hairline rules, no shadows. *Proof that all-serif can be crisply modern.*
- **Paragraph** — serif display + quiet sans utility; warm neutral borders (never cold gray); a single reserved accent; generous whitespace.
- **Read.cv** — the personal-career surface: serif/sans contrast, one accent, warm neutrals, pill-quiet chrome. *Closest to what Meritous presents: a person.*

Distinctiveness comes from *our* tokens (ivory, pine, luminous gold, the held-line, the wordmark) — the references only set warmth, restraint, accent discipline, and type rhythm.

---

## 2 · Typography — serif is the voice

- **Serif (Literata) carries everything with meaning:** the partner's words, the user's own words, the Career Brief, headlines, leads, body, eyebrows, all reading. The serif *is* the companion — it reads like a letter, not a UI.
- **Sans (Hanken Grotesk) is chrome only:** nav, buttons, tiny labels, metadata, badges. Nothing with meaning. Chosen deliberately over Inter/system-sans, which read "generic AI."
- **Display tracking is tight** — roughly −0.03 to −0.04em at large sizes (set-in-metal, editorial), easing to ~0 at body. Loose display tracking is a tell; avoid it.
- **Token discipline (enforced):** never hardcode `font-size`/`line-height` in screens or inline styles — always the `--fs-*`/`--lh-*` tokens and `.t-*` utilities. Hardcoded values are why line-heights drifted and screens felt inconsistent.

---

## 3 · Color & the gold discipline

- **Warm ivory paper**, warm near-black ink (never pure `#000`), **pine** for authority/primary actions. Warm neutrals only — never cold gray.
- **The accent is luminous gold, and it is the color of *arrival*.** It appears **only** when something is genuinely earned:
  - the **held-line** turning from hairline → gold the moment a line is filled/signed,
  - the **Story Score**, a **100%/complete** state, a **"Brief complete"** milestone, a real credential.
- **Gold pops on dark, not on ivory** (warm-on-warm won't sing) — so stage genuine milestone moments on **pine/dark**, where gold reads as gilt/foil. Everyday actions/links use pine.
- **Never** use gold for eyebrows, section accents, or decoration. Its scarcity is the entire point; spend it and it stops meaning anything.

---

## 4 · Capitalization

- **Wordmark:** lowercase `meritous` — *only* as the logo lockup. In prose it's **"Meritous"** (proper noun).
- **All customer-facing copy → sentence case** (first word + proper nouns). "the excavation" → "The excavation."
- **Named artifacts → Title Case** as proper nouns: **Career Brief, Story Score, Gap Detection.** Generic mentions lowercase ("your brief," "the score").
- **"career partner" → sentence case** (a role, not a proper noun). People's names as spelled.
- **No decorative all-lowercase** anywhere. `ALL CAPS` only on structural chrome labels, never on user-facing content.

---

## 5 · Voice — the partner's conversational law

The partner **extracts → reflects → verifies → gets the user's sign-off on what matters → then captures.** In practice:

- **Reflect, never assume; suggest, never dictate.** "Here's what I'm hearing — does that sound right?" Never tell the user what to write; offer a phrasing and invite them to revise or approve. Like a great coach or therapist, help them see their own worth for themselves.
- **The user is the author.** We *amplify*; we never act autonomously and never write the final words over them. Nothing lands on the page — no claim, no reframe — without their yes.
- **Sign-off is not friction (critical).** Confirm the things that *matter* — a reframe of their story, a claim about to go on the page — **once**, and move. Do **not** re-confirm the obvious, ask permission for every step, or quadruple-check (the Copilot anti-pattern). A partner has the judgment to know what's worth a check and briskly handles the rest. Confirmation is respect for the user's authorship, never a token-burning loop.

---

## 6 · AI, named honestly — as empowerment

- The career partners **are AI, and we say so plainly** — never "people," never disguised as human, never an "AI-powered" badge.
- The frame is **empowerment via personalization**: most AI flattens everyone into the same average; a Meritous partner works from *your story alone*, so you sound more like yourself, not less. You direct it; it amplifies what was already yours.

**Canonical lines:**
- *"It's your story — you hold the pen, they just help you find the words."*
- *"Meet the career partners. They're AI — but the kind that works from your story alone, not the average of everyone else's."*

---

## 7 · The partner cast

Names cue the field by initial; specialties name **people, not functions** (individuals, not aggregates):

| Partner | Speaks for |
|---|---|
| **Everett** | engineers & builders |
| **Parker** | product managers & operators |
| **Devon** | designers & researchers |
| **Marlow** | marketers & brand builders |
| **Finn** | finance & analytics people |
| **Soren** | strategists & sustainability leads |

*(Ames, Hollis, Reeve remain in the reserve pool for future partners.)*

---

## 8 · Layout, components & chrome

- **Flat and editorial.** Warm hairline borders/rules do the structural work; minimize shadows. No card-shadow SaaS look, no dashboards, no feature-card marketing grids, no logo clouds, no pricing tables.
- **Generous whitespace**, contained measure, large section gaps. Blank space is a primary tool.
- **Persistent editorial nav** — the real destinations (Career Brief · Story Score · Interview Prep) always present, the active item marked by a **held-line underline**. Never contextually swap nav links.
- **No eyebrow that restates the headline.** The headline stands alone (this is a recurring generation tic — kill it). Use eyebrows sparingly; for section titles use real headings, not italic eyebrows.
- **The conversation is an interview, not prose and not a chat widget.** Shorter turns, clear speaker attribution, the user's own words treated distinctly (a ledger/quote), generous space between turns. Editorial, but unmistakably a *dialogue*.

---

## 9 · Customer-facing language only

Every word the user sees is warm, plain, editorial — zero internal/product-team jargon. **Kill "Verified"** and any overclaim that implies external validation we aren't doing; ground everything in the user's own words instead ("in your words," "confirmed by you"). If a line reads like a spec, rewrite it as a sentence you'd say to the person.

---

## Open product notes (Phase 5)
- Privacy promises ("never sold / never trained on / always yours") are real commitments the business must keep — and a likely differentiator + business-model lever.
- A shareable **personal career site** (the Career Brief as a public page that represents you) is a natural adjacent product; resume/CV-site templates (e.g. Read.cv) are the reference.
