# Meritous — Design System (DESIGN.md)

*Derived from the Claude Design project "Meritous Design System" (`ece1c05b-…`) · v2 · 2026-07-21.*
*Source of truth: `design-system/colors_and_type.css` (tokens), `design-system/components.css` (component classes), `design-system/SKILL.md` (hard rules), `design-system/CONTENT.md` (content & design style guide). When they conflict, those files win over this summary.*

> **Do not make design decisions that contradict this file** (per CLAUDE.md). It is the implementation spec that Phase 4+ builds against.

---

## 0 · The register in one line

Meritous reads like a **warm, considered publication that happens to be software** — an editorial reading surface, not an app dashboard. Calibrated (for register, never to clone) against **OpenWeb**, **Paragraph**, and **Read.cv** via Refero: all-serif warmth on warm paper, one reserved accent, flat hairline structure. The product truth beneath every rule: **it's your story; you hold the pen; the AI just helps you find the words.**

---

## 1 · Typography — two families, split by meaning

The single most important rule. **Font choice encodes whether something has meaning or is chrome.**

- **Literata** (`--font-display`, `--font-text`) — **the voice.** Everything with meaning: headlines, leads, body, eyebrows, the partner's words, the user's own words, the Career Brief. It reads like a letter, not a UI. `font-optical-sizing:auto`.
- **Hanken Grotesk** (`--font-ui`) — **chrome only.** Nav, buttons, field labels, badges, metadata, system lines. Nothing with meaning. Chosen deliberately over Inter/system-sans, which read "generic AI." `--font-mono` aliases to `--font-ui` (no separate mono).

**Never** use a system/sans stack for content, and never set headings or reading text in Hanken.

**Display tracking is tight** — set-in-metal editorial feel. Loose display tracking is a generic-AI tell; avoid it.

### Type scale (px / line-height / letter-spacing)
| Token | Size | LH | LS | Use |
|---|---|---|---|---|
| `--fs-display` | 68 | 1.15 | −0.035em | Hero display (`.t-display`, clamps down) |
| `--fs-h1` | 50 | 1.15 | −0.03em | Page titles (`.t-h1`) |
| `--fs-h2` | 33 | 1.15 | −0.02em | Section heads (`.t-h2`, italic) |
| `--fs-h3` | 23 | 1.15 | −0.012em | Sub-heads (`.t-h3`) |
| `--fs-body-lg` | 23 | 1.55 | −0.006em | Leads (`.t-body-lg`) |
| `--fs-body` | 18 | 1.7 | 0 | Body (`.t-body`) |
| `--fs-caption` | 16 | 1.55 | 0 | Captions (`.t-caption`) |
| `--fs-label` | 14 | 1.4 | 0.01em | UI field labels (`.t-label`, **sans**) |
| `--fs-eyebrow` | 17 | 1.4 | 0 | Editorial standfirst (`.t-eyebrow`, **serif italic, sentence case**) |

- **All heading line-heights are 1.15** (a prior drift to 1.3 was the bug that made screens feel loose — do not reintroduce). **Never hardcode** `font-size`/`line-height` in screens or inline styles; always the `--fs-*`/`--lh-*` tokens and `.t-*` utilities.
- **Eyebrows are serif italic, sentence case** — an editorial standfirst, never a tracked-out uppercase kicker, never a restatement of the headline, never a section header on their own. (`ALL CAPS` sans is allowed only for tiny structural chrome labels like `.seclabel`.)
- Weights: `--fw-regular:400 / medium:500 / semibold:600 / bold:700` (light 300 exists, rarely used). Headlines are usually **regular-weight serif**, not bold.

---

## 2 · Color

Warm ivory paper, warm near-black ink (never pure `#000`), **pine** for authority, **luminous gold** as the reserved accent. **Warm neutrals only — never cold gray.**

### Core palette
- **Paper / surface:** `--paper #FBF8F2` · `--surface #FFFFFF` · `--surface-sunken #F1EBDE`
- **Ink:** `--ink-900 #211E18` · `--ink-700 #443E34` · `--ink-500 #6E6658` · `--ink-400 #938B7B` · `--ink-300 #BDB4A2`
- **Hairlines:** `--hairline #E6DFD0` · `--hairline-strong #D6CDBA`
- **Pine (brand):** `--brand #1E3E32` · `--brand-strong #163026` · `--brand-hover #2C5445` · `--brand-press #14261F` · `--pine-600 #3A6E58` · `--pine-400 #5C8574` · `--pine-tint #EAF0EC` · `--pine-tint-strong #DCE7E1` · dark grounds `--pine-900 #102219` · `--pine-950 #0A1712`
- **On dark:** `--on-dark #F3ECDD` · `--on-dark-muted #C7BFAD` · `--on-dark-faint #8FA398`
- **Accent (gold):** `--accent #CE9E22` · `--accent-foil #E4C05C` (on dark) · `--accent-strong #7C5A12` · `--accent-ink #5E440D` · tints `--accent-tint #F7ECC9` / `--accent-tint-strong #ECD8A2`
- **Semantic:** success `#3F6B4F`, error `#A2382A`, info `#35566B` (+ tints / `-strong`)

### The gold discipline (the rule that keeps the brand from looking generic)
1. **Gold is the color of arrival.** It appears **only** when something is genuinely earned: the held-line signing, the Story Score, a "Brief complete" milestone, a real credential. Never for eyebrows, section accents, or decoration. Its scarcity is the point.
2. **Gold pops on dark, not on ivory** (warm-on-warm won't sing). **Stage genuine milestone moments on pine/dark**, where gold reads as gilt/foil (`--accent-foil`). Everyday actions/links are **pine**.
3. **Gold is a dial, not a switch — the gild scale.** How *much* it gilds encodes how much is genuinely earned:
   - On light: `--gild-1 #D8CDB4` (neutral, unearned) → `--gild-2 #DCC38C` → `--gild-3 #D6B052` → `--gild-4 #CE9E22` (full arrival, reserved).
   - On dark: `--gild-on-dark-1 #C7BFAD` → `-2 #D3C398` → `-3 #DCC27A` → `-4 #E4C05C`.
   - Fade toward the **context's neutral, never white** (on ivory → hairline; on dark → muted warm ink).
   - **Story Score gilds by band:** `<60 → gild-1` (no gold at all), `60–74 → gild-2`, `75–89 → gild-3`, `90+ → gild-4`. Partly-filled held lines and progress gild the same way. Never reach for a middle step to assert something is "partly" earned unless it measurably is.
4. **Wayfinding stays pine.** The active-nav underline and every everyday link/action are pine — being on a page is not an achievement. Gold is never spent on navigation.

### Aliases
`--bg→paper` · `--text→ink-900` · `--text-muted→ink-500` · `--border→hairline` · `--border-strong→hairline-strong` · `--link→brand` · `--link-hover→brand-hover`. Focus rings: `--ring rgba(30,62,50,.70)`, `--ring-error`, `--ring-on-dark`.

---

## 3 · Space, radius, shadow, motion

- **Spacing (4pt base):** `--space-1 4` · `2 8` · `3 12` · `4 16` · `5 24` · `6 32` · `7 48` · `8 64` (scale extends `--space-0 2` … `--space-10 128`). Generous whitespace is a primary tool.
- **Radius:** `--radius-sm 6` · `md 10` · `lg 16` · `pill 999`.
- **Shadow:** `--shadow-sm/md/lg` exist but are **minimized** — flat, hairline-structured surfaces, not card-shadow SaaS.
- **Motion:** `--ease cubic-bezier(.22,.61,.36,1)` · `--dur-fast 120ms` · `--dur 190ms` · `--dur-slow 320ms`. Honor `prefers-reduced-motion`.
- **Measure:** `--measure 66ch`; container width ~1160px.

---

## 4 · Components (`design-system/components.css`)

Full states (hover / press / disabled / focus-visible / error / empty) are defined. Key classes:

- **Type utilities:** `.t-display .t-h1 .t-h2 .t-h3 .t-body-lg .t-body .t-caption .t-eyebrow` (serif voice) · `.t-label .t-meta` (sans chrome) · `.t-measure`.
- **Buttons** (`.btn`, sans): `--primary` (pine), `--secondary` (surface/pine border), `--ghost`, `--danger`; sizes `--sm/--lg/--block`. Focus = double box-shadow ring.
- **Field / input** (`.field`, `.input`, `textarea.input`): sans label, **serif value** (what the user types is voice). Error via `.field--error` / `aria-invalid`.
- **Card** (`.card-c`): flat, hairline border, **no resting shadow**; `--interactive` hover lifts border to pine.
- **Badge** (`.badge`, sans): `--neutral --outline --pine` everyday; `--accent` / `--gilt` (on pine) **for earned milestones only**; semantic `--info/--success/--error`. `.badge__check` for "confirmed."
- **Progress** (`.progress`): pine bar; `.progress--complete` turns the bar gold (earned).
- **Score card** (`.score-card`): **the arrival moment**, staged on `--pine-900` with foil gold — the sanctioned home of the accent. Left edge + value paint from `--gild-cur` by band. `--light` variant for rare non-dark contexts (gold stays muted).
- **Avatar** (`.avatar`): a person set as an initial in the **display serif** (or `<img>`). Variants `--pine / --neutral / --on-dark`, sizes `--sm/--lg/--xl`; every initial clears WCAG AA. **Gold is never an avatar fill.**
- **Partner voice** (`.steward` — legacy class name; render as "career partner"): a named partner speaking 1:1 — words in serif, name in serif, role tag in sans uppercase. **Not a chat bubble.**
- **Respond** (`.respond`): one field, type **or** dictate (Web Speech API) — no chat bubble, no send-arrow loop. Value in serif; gentle status line stays serif italic (the partner's voice).
- **Held-line** (`.held-line`): the brand motif — a hairline "line held for you"; `--earned` (gold) / `--earned-foil` (on dark) the moment it's signed/filled. Also `.held-blank` inline. The wordmark's trailing gold underscore = `.wm-underscore` / `.wordmark .u`.
- **Rule / divider** (`.rule`, `.rule--accent`).

---

## 5 · Partner presence (product-critical)

The chosen **career partner is present at every step**, not only while speaking:
- A persistent **partnerchip** in the app chrome (`Parker · your career partner` with avatar) on every in-app screen.
- **Speaker blocks** (`.speaker` / `.pspeak` / `.pmini`) attribute every partner utterance — the Brief, the Score read, the Tailoring coaching all carry an attributed voice. Never a disembodied "I."
- The **cast** (6): **Everett** (engineers/builders) · **Parker** (product/operators) · **Devon** (design/research) · **Marlow** (marketing/brand) · **Finn** (finance/analytics) · **Soren** (strategy). Reserve pool: Ames, Hollis, Reeve. Each is a **dialect of one house voice** — see CONTENT.md §7.

---

## 6 · Interaction & voice law

- **Extract → reflect → verify → get the user's sign-off on what matters → then capture.** Nothing lands on the page — no claim, no reframe — without the user's yes.
- **Sign-off is not friction.** Confirm the things that *matter* once, and move. Do **not** re-confirm the obvious or quadruple-check (the Copilot anti-pattern).
- **Reflect, never assume; suggest, never dictate.** Offer a phrasing; invite revise/approve. The user is the author; we amplify.
- **House voice:** direct; **no superlatives, ever** (banned: amazing/incredible/world-class/the best/10x/rockstar); encouraging by taking the user seriously, not by praising; candid because it's in your corner; curious, not performing; reflective, not directive.
- **AI, named honestly:** the partners are AI and we say so plainly — never disguised as human, never an "AI-powered" badge. Frame = empowerment via personalization ("works from your story alone, not the average of everyone else's").

---

## 7 · Capitalization

- **Wordmark:** lowercase `meritous` — *only* as the logo lockup (with the gold `.u` underscore). In prose: **"Meritous"**.
- **All customer-facing copy → sentence case.**
- **Named artifacts → Title Case** as proper nouns: **Career Brief, Story Score, Gap Detection**. Generic mentions lowercase ("your brief," "the score").
- **"career partner" → sentence case** (a role, not a proper noun). People's names as spelled.
- `ALL CAPS` only on structural chrome labels, never on user-facing content.

---

## 8 · Layout & chrome

- **Flat and editorial.** Warm hairline borders/rules do the structural work; minimize shadows. No card-shadow SaaS look, no dashboards, no feature-card marketing grids, no logo clouds, no pricing tables.
- **Persistent editorial nav** — the real destinations (Conversations · Career Brief · Story Score · Interview prep) always present; active item marked by a **pine** underline. Never contextually swap nav links.
- **The conversation is an interview, not prose and not a chat widget** — shorter turns, clear speaker attribution, the user's own words treated distinctly (a ledger/quote), generous space between turns.
- **Not image-heavy.** The references aren't; neither are we. Imagery belongs on the marketing surface (`meetmeritous.com`), not the type-led product screens. The user supplies their own photo where a face is needed.

---

## 9 · Assets & artifacts in this repo

- `design-system/colors_and_type.css` — tokens + font faces (source of truth).
- `design-system/components.css` — component classes (v2).
- `design-system/styles.css` — compiler entry (`@import`s the two above).
- `design-system/SKILL.md` — hard rules; `design-system/CONTENT.md` — content & design style guide.
- `design-system/assets/*.svg` — wordmark lockup + logomark (light/dark). **Production gap:** currently font-rendered; outline to vector paths before launch.
- `design-system/preview/*` — component gallery cards (`_ds_manifest.json` indexes them).
- `docs/concepts/screen-1…5.html` — the five concept screens (self-contained; inline `:root` token blocks — token edits reach them only via regeneration).
- `docs/brand.html` — brand overview page (GitHub Pages).

**Known production gaps (from the Phase 3 gate brief):** logos need outlining to vector paths; the Score gap-avatar initial is hardcoded in CSS and must be data-driven; a few component sizes remain hardcoded vs. tokens.
