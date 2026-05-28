---
name: careerchief-design
description: Use this skill to generate well-branded interfaces and assets for CareerChief, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# CareerChief design skill

CareerChief is a career chief of staff. The brand is **authoritative but personable, strategic but warm** — the smartest person in your corner. The product works _alongside_ you, not _on top of_ you: it surfaces the story you already have, never hallucinates one.

## How to use this skill

1. Read `README.md` first. It contains the brand essence, voice rules, visual foundations, and iconography guidance.
2. Skim `styles/colors_and_type.css` for the token names you can use (`--color-navy`, `--font-display`, `--space-7`, etc.) and the semantic element styles (`h1`, `h2`, `.cc-eyebrow`, `.cc-kicker`).
3. Browse the component kits — `marketing/` (landing page) and `app/` (product mockup) — for ready-made React/JSX components (logomark, kicker, score card, step list, conversation rail, etc.). Lift them rather than inventing.
4. Use the `assets/` SVGs (logo, mark, favicon) directly — do **not** redraw the faceted-crown logomark.

## When making artifacts

- For slides, mocks, throwaway prototypes: copy the relevant CSS, fonts, and assets out and write static HTML files for the user to view. Mirror the kicker / italic-emphasis / dark-feature-card patterns — they are the brand's visual signature.
- For production code: copy assets and treat `README.md` + `styles/colors_and_type.css` as the source of truth. Components in `marketing/` and `app/` are reference implementations, not production code (they cut interaction corners).
- If the user invokes this skill with no specific brief, ask them what they want to build, then act as an expert designer producing HTML artifacts or production code as needed.

## Hard rules

- **No emoji** in product or marketing UI.
- **Sentence case everywhere** except eyebrow labels (UPPERCASE, 0.10em tracking).
- **Second person** always — "you," "your." Never "users" or "candidates."
- **Em dashes with spaces** in place of parentheses.
- **Gold is reserved** for achievement moments — scores, milestones, the kicker rule. Never use it as a primary surface color.
- **The logomark construction is locked** (faceted crown, five points, diagonal slice). Color treatment may vary inside the palette.
- **No bouncy/springy motion**, no glassmorphism, no bluish-purple gradients, no rounded-card-with-colored-left-border. The brand is confident and settled.
- Avoid the words "AI-powered," "intelligent," "next-generation," "seamlessly," "robust," "unlock," "supercharge," "elevate."

## Layout of this skill

```
README.md             Brand essence, voice, visual foundations, iconography
SKILL.md              This file
brand.html            Brand book reference page (all foundations + components)
index.html            Marketing landing page (deployable)
app/                  Product-app mockup (React JSX, modular) — also deployable at /app/
marketing/            Landing-page components (React JSX, modular)
styles/
  colors_and_type.css   All tokens + semantic element styles
  marketing.css         Marketing-only styles
  app.css               App-only styles
  brand-book.css        Brand book page styles
assets/               Logos (mark, wordmark, inverse, favicon)
preview/              Design-system cards rendered to the DS tab
```
