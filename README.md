# CareerChief Design System

> Your career chief of staff.

CareerChief is a career chief of staff for job seekers and career professionals. It helps users articulate their experience, close narrative gaps, and show up prepared for every opportunity — not by generating content from thin air, but by uncovering and sharpening the story they already have.

The key differentiation: **the system works _alongside_ you, not _on top of_ you.** Everything is grounded in your real experience. No hallucinated bullet points.

---

## Source materials

This design system was built from two seed documents — there is no production codebase or Figma file yet, but the visual direction is closely locked.

- `uploads/careercheif-design-system.md` — brand spec: color tokens, type, spacing, components, voice guardrails.
- `uploads/careerchief-landing-v4.html` — approved high-fidelity wireframe for the marketing landing page. Treated as source-of-truth for layout, copy hierarchy, component structure, and the logomark.

If you have a Figma file, app codebase, or marketing site code, drop it in and I can tighten everything against the real product.

---

## Brand essence

**Mental model:** a trusted chief of staff. Working behind the scenes, invested in your success, never in the spotlight. Less "AI productivity tool," more "the smartest person in your corner."

- **Authoritative but personable.** Confident voice, never stiff.
- **Strategic but warm.** Earned language; specific, never generic.
- **With you, not on you.** Everything is grounded in your real experience.

---

## Content fundamentals

### Voice

Authoritative but warm. The product speaks like a senior advisor who has read every line of your resume — direct, specific, never showy. Sentences are short. Lift comes from accuracy, not adjectives.

### Person + pronouns

- Always **second person**: "you," "your."
- Never "users," "candidates," "applicants."
- The product refers to itself sparingly — "I'll surface the gaps" is fine; "CareerChief intelligently analyzes" is not.

### Casing

- **Sentence case everywhere** — headlines, buttons, page titles, menu items. Capitalize the first word and proper nouns. That's it.
- **Eyebrows / kickers are ALL CAPS** with 0.10em tracking. This is the only place uppercase appears.
- Proper nouns stay capitalized: CareerChief, Story, Snapshot, etc.

### Punctuation

- **Em dashes** ( — ) with spaces on either side. Use them in place of parentheses for asides.
- No exclamation points.
- One space after periods.
- Oxford commas.

### Words to avoid

Anything that sounds like a 2019 SaaS landing page:
- "AI-powered," "intelligent," "next-generation," "seamlessly," "robust"
- "Unlock," "supercharge," "elevate," "transform your career"
- "Users," "candidates"

**Don't lean on "AI" as a noun in marketing copy.** It reads as hand-wavy and is a turn-off for the people who want hands-on, real guidance — even when the engine underneath happens to be an LLM. Lead with the work the product does (build context, surface gaps, evaluate roles, prep interviews), not the technology that does it.

### Words and patterns to prefer

- Name the thing the feature actually does. "Surface gaps in your story" beats "AI-powered story analysis."
- Verb-first feature names: "Sharpen," "Surface," "Rehearse," "Match."
- Earned, concrete numbers: "12 roles reviewed this week" beats "Powerful insights."
- Hands-on framing: "works alongside you," "a real thinking partner," "shows up having done the work."

### Vibe

Like a chief of staff sliding a briefing across a quiet table. Specific. Calm. Slightly formal. Never cute.

### Emoji + decorative chars

**No emoji in product UI or marketing.** This is a deliberate brand choice — the visual register is one of polished professionalism. Unicode bullets (•) are fine. Arrows (→) are fine for "next" affordances. That's the ceiling.

### Examples

> ✓ "Three roles you haven't told a story about yet."
> ✗ "🚀 Unlock your career potential with AI!"

> ✓ "I noticed a gap between your 2021 PM role and the strategy work you described — want to talk through it?"
> ✗ "Our AI detected a discrepancy in your timeline. Click to optimize."

> ✓ Button: "Review my story"
> ✗ Button: "GET STARTED NOW"

---

## Visual foundations

### Palette

A two-pole palette: **Navy** anchors authority, **Steel** carries motion and interaction. **Gold** is reserved — it only appears for achievement moments (scores, badges, milestones) and for the signature kicker rule. Off-white and slate fill out the surfaces.

- **Navy `#1A2F4A`** — primary actions, headlines, dark cards, nav.
- **Steel `#2A6C8E`** — links, secondary CTAs, accent fills.
- **Steel Light `#6AB0CC`** — progress bars, data viz, hover highlights.
- **Gold `#C4962A`** — _scarcely used._ Score numbers, milestone badges, the 22×1.5px kicker rule.
- **Off-white `#F6F9FB`** — page background. Never pure white.
- **Slate `#E8EEF4`** — secondary card surfaces, hover backgrounds on light.

See `styles/colors_and_type.css` for all tokens.

### Typography

Two families, intentional contrast:

- **DM Serif Display** — _display, all headings._ 400 weight only. No letter-spacing. Italic for warmth and emphasis (used sparingly, often on a single word in a headline).
- **Plus Jakarta Sans** — body, UI, labels. 400/500/600. Slight humanist warmth without sacrificing clarity.

Type pairs work because the serif carries the gravitas while Jakarta keeps the chrome quiet. Body line-height runs generous (1.65–1.70) — the brand should feel like it has room to breathe.

### Spacing

Hard 4px base unit. Use the `--space-N` tokens. Sections breathe — `--space-8` (48px) is the floor between section blocks; hero padding goes to `--space-10` (72px). Card padding sits at `--space-6` or `--space-7`.

### Backgrounds

- Page background is always `--color-off-white` (`#F6F9FB`), never pure white.
- Hero and "moment" sections use **navy** as a full-bleed surface with white type at 95% opacity.
- **No gradients** as primary backgrounds. The brand reads as solid and grounded. A subtle navy → navy-dark gradient on a CTA card is the only exception.
- **No background images** by default. When imagery appears it is full-bleed, cool-toned, lightly desaturated (warm photos break tone). Editorial, not stock.
- **No repeating patterns or textures.** The signature texture is _negative space._
- No bluish-purple gradients. No glassmorphism. No noise overlays.

### Borders + dividers

- All borders are `rgba(26,47,74,0.10)` — derived from navy, never gray.
- 0.5px for card edges, 1px for inputs and dividers.
- Dividers between list items are full-width and `--color-border`.

### Shadows

Four-step elevation, all tinted with navy (not neutral gray) so shadows feel of-a-piece with the palette.

- `--shadow-xs` — subtle lift (step numbers).
- `--shadow-sm` — cards on white.
- `--shadow-md` — modals, dropdowns.
- `--shadow-lg` — popovers, elevated panels.

No inner shadows. No heavy drop shadows.

### Corner radii

A measured ladder: `6 / 8 / 12 / 16 / 18 / full`. Cards default to `--radius-xl` (16px); feature/score cards go to `--radius-2xl` (18px). Inputs and buttons use 8px. Pills are fully rounded. Sharp 90° corners do not appear in the system.

### Cards

- **Light card** — white background, 0.5px navy-tinted border, `--radius-xl`, `--shadow-sm`, padding `--space-7`.
- **Dark card** — `--color-navy` background, no border, `--radius-2xl`, padding `--space-7`. Inner stat blocks use `rgba(255,255,255,0.07)` background with `0.5px rgba(255,255,255,0.08)` border.

### Hover states

- Buttons: shift to `--color-navy-dark` (primary) or fill with slate (secondary). 150ms `ease`.
- Links: text color → `--color-navy` (from `--color-steel`).
- Cards: tiny lift via shadow step-up (sm → md). No translateY.
- Ghost buttons: opacity 0.7 → 1.0.

### Press states

Subtle color darken only. **No scale-down** transforms — the brand should not feel toy-like or springy.

### Motion

Confident and settled. No bounce, no overshoot.

- `--t-fast` (0.15s ease) — hover states, button fills.
- `--t-mid` (0.25s ease) — panel transitions, reveals.
- `--t-slow` (0.40s ease) — page transitions, score animations.

All easings are plain `ease`. Spring or `cubic-bezier(.68,-.55,...)` style curves are off-limits.

### Transparency + blur

Used sparingly. Sticky headers may use `rgba(246,249,251,0.85)` + 12px backdrop blur. Modal backdrops are flat `rgba(15,30,48,0.45)` — not blurred. Inner stat tiles on dark cards use white at 7% — that is the limit.

### Layout rules

- Single-column hero, max content width 1200px, comfortable side margins.
- Two-column splits favor 60/40 (content/imagery) — never 50/50.
- Sticky top nav, 64px tall, off-white background with backdrop blur.
- Sidebars in the app are 256px on desktop.

### Signature motifs

- **The kicker** — `22px × 1.5px` gold horizontal rule next to a small uppercase label. It opens nearly every section in the product and on the marketing site. Don't skip it.
- **Italic emphasis word** in serif display headlines — one italic word per headline, never two.
- **Stat tiles** on dark cards — subtle bordered cells with large display numerals and a tiny eyebrow label.

---

## Logomark

A geometric, faceted crown — five points constructed from angular triangular segments with a diagonal cut through the base. **The wireframe / construction is locked**; only the color treatment can move within the palette.

- **Default lockup** — full-color: the two outer wings carry a steel-light → steel gradient, the two center peaks carry a navy-dark → navy gradient. Wordmark in single solid navy.
- **Mono lockup** — single-color black; use when only one ink is available.
- **White lockup** — single-color white; the on-dark default.
- Never recolor with gold — gold stays reserved for achievement.
- Minimum size: 20px tall in product chrome. 14px in dense footers.

See `assets/careerchief-lockup.svg`, `assets/careerchief-lockup-white.svg`, `assets/careerchief-logomark.svg`.

---

## Iconography

**Library: [Lucide](https://lucide.dev/)** — stroke-based, 1.5px stroke, calm geometry. Lucide reads as grown-up and editorial; it does not lean playful (Phosphor) or boxy (Material).

- **Stroke weight:** 1.5px. Never 2px or 1px.
- **Sizes:** 16px in dense UI, 18–20px alongside body text, 24–28px in feature contexts.
- **Color:** inherit from text token in context. Icons follow text color — they are not separately tinted.

### Loading

CDN per-icon imports during prototyping (`https://unpkg.com/lucide-static/icons/<name>.svg`) or the inline `lucide` web font. For production bundle into the build.

### Substitutions / flags

The original brief specifies **"No icon library locked yet. Recommended: Lucide."** I've taken that recommendation as the working answer. If the engineering team locks in Phosphor or a custom set later, this needs to update.

### Emoji + unicode

- **No emoji** in product UI or marketing.
- **Unicode arrows** (→ ↗) acceptable as affordances next to link text.
- Bullets (•) acceptable in dense lists.

---

## Index

### Foundations
- `README.md` — this file. Brand essence, voice, visual foundations, iconography.
- `brand.html` — visual reference: brand book page with every foundation and component rendered on one canvas.
- `styles/colors_and_type.css` — full token set + semantic element styles. Import once and you have the system.
- `styles/brand-book.css` — styles specific to `brand.html`.
- `SKILL.md` — agent skill manifest so this system can be invoked from Claude Code as `careerchief-design`.

### Assets
- `assets/careerchief-lockup.svg` — full color lockup (mark + wordmark). Default on light surfaces.
- `assets/careerchief-lockup-mono.svg` — single-color (black) lockup.
- `assets/careerchief-lockup-white.svg` — single-color (white) lockup for dark surfaces.
- `assets/careerchief-logomark.svg` — logomark only, gradient color.
- `assets/careerchief-logomark-white.svg` — logomark only, white fill.
- `assets/careerchief-favicon.svg` — square favicon.

### Site (deployable as-is)
- `index.html` — marketing landing page. Mounts the React/Babel components in `marketing/`.
- `marketing/` — landing-page components: `Brand.jsx`, `Nav.jsx`, `Hero.jsx`, `ProofStrip.jsx`, `HowItWorks.jsx`, `ScoreCard.jsx`, `HonestSection.jsx`, `Testimonial.jsx`, `FooterCTA.jsx`.
- `app/index.html` — product-app mockup. Mounts the components in `app/`.
- `app/` — product-app components: `Sidebar.jsx`, `Conversation.jsx`, `BriefView.jsx`, `RolesView.jsx`, `RehearseView.jsx`, `Icons.jsx`, `Brand.jsx`.
- `styles/marketing.css` — marketing-only styles.
- `styles/app.css` — app-only styles.
- `.nojekyll` — tells GitHub Pages to skip Jekyll processing.

The whole project root is the deployable site. Push it to a GitHub Pages branch and it ships — no build step.

### Preview cards (Design System tab)
- `preview/*.html` — one file per concept card. Cards register with `viewport: 700×…` and `group: Type | Colors | Spacing | Components | Brand`.

### Source materials
- `uploads/careercheif-design-system.md` — original brand spec (color, type, components, voice).
- `uploads/careerchief-landing-v4.html` — approved landing-page reference.
