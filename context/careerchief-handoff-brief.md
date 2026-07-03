# CareerChief — Venture Concept Brief

> Context for the SDD agent picking up CareerChief at Phase 4 (Spec). This document covers the venture idea, product positioning, design system, and the key technical challenge to solve in the spec.

---

## What CareerChief Is

CareerChief is an **AI-powered career chief of staff** — a strategic partner that helps job seekers and career professionals articulate their experience, close narrative gaps, and show up prepared for every opportunity.

The mental model is not "AI resume tool." It is a trusted chief of staff working behind the scenes — the kind of advisor who has done the homework, knows your history, spots what you're underselling, and makes sure you walk into every situation positioned to succeed.

The core product insight: **most people are underselling themselves and don't know it.** There is a persistent gap between what people have actually done and how they are able to articulate it — in resumes, in interviews, on LinkedIn, in conversations. CareerChief exists to close that gap.

The primary user is someone who takes their career seriously — whether actively searching or simply wanting to stay sharp and be ready. They are not looking for a resume template generator. They want a thinking partner.

---

## The Differentiation That Must Be Preserved

The market is saturated with AI tools that generate resume content. The differentiation that makes CareerChief worth building — and the thing the agent must never compromise in scoping or copy decisions — is:

**CareerChief is grounded in the user's real experience, not in what resumes are supposed to sound like.**

The AI's job is not to generate a story. It is to help the user uncover and articulate the one they already have. This distinction must be visible in the product — in how onboarding works, how coaching is framed, how outputs are presented, and what the product never claims to do.

Specific guardrails:
- CareerChief does not fabricate achievements, skills, or experience
- Every output is traceable to something the user actually told the system
- The product should never position itself as a shortcut — it is a thinking partner, not a ghostwriter
- "AI-powered" as a marketing phrase is explicitly off-brand; the capability should be demonstrated, not announced

---

## Positioning & Voice

**Positioning:** Authoritative but personable. Strategic but warm. A trusted partner in the user's corner — not a tool performing on them.

**Voice principles:**
- Speak in second person ("you," "your") — never "users" or "candidates"
- Direct without being clinical
- Confident without being cold
- Honest about what AI can and can't do — this is a feature, not a disclaimer
- Avoid: "AI-powered," "intelligent," "seamlessly," "robust," "next-generation"
- Prefer: specific, earned language — name the thing the feature actually does

**Approved brand lines:**
- *"Your story is already worth telling. Let's make sure it sounds like it."*
- *"Think of it as your career chief of staff — the strategic partner working behind the scenes."*
- *"Not a resume generator. A real thinking partner."*
- *"The AI's job isn't to generate your story. It's to help you uncover the one you already have."*

---

## Core Product Concepts

These represent the approved mental model for what the product does. The spec will formalize them into user stories and acceptance criteria.

**Career Brief** — The primary output artifact. A living document that captures the user's narrative, strengths, and positioning. Owned by the user, not locked in the platform.

**Story Score** — A signal metric reflecting the coherence and completeness of the user's career narrative. Sub-dimensions include narrative clarity, keyword alignment, and impact quantification.

**Gap Detection** — Identifying the delta between the user's actual experience and how they are currently presenting it. This is the core value-creation mechanism — not generation, but excavation.

**Onboarding as conversation** — The user does not fill out a form or paste a resume into a field. They walk through their experience conversationally. The product meets them where they are.

**Role tailoring** — Given the career brief as a foundation, the user can tailor for a specific role — producing a targeted resume, cover letter approach, or interview prep grounded in their actual story.

**Interview prep** — Role-specific practice grounded in the user's own experience, not generic templates.

**LinkedIn optimization** — Profile improvements framed as attracting inbound, not just improving applications.

---

## The Skills Origin — and the Core Technical Problem

The agentic capability powering CareerChief was originally built as a **personal career AI** — a single-user system with skills in `skills/career-chief-of-staff/`. These skills were built for one person, with one career, in one context. They work well in that form.

The product challenge CareerChief must solve in the spec is: **how do these skills scale to a multi-tenant environment?**

Specifically, the spec needs to reason through:

- **State and memory per user** — the personal career AI holds a single user's career context. In a multi-tenant product, each user needs their own isolated career brief, history, and enrichment state. How is that stored, scoped, and retrieved?
- **Skill execution in a product context** — the existing skills likely assume a conversational, single-session interaction. A product needs to persist state across sessions, handle re-entry, and surface the right capability at the right moment in a UI.
- **Career brief as a first-class data model** — what does the career brief look like as a structured database artifact (not just a markdown document)? What fields does it have? How does it evolve over time as the user adds experience, completes prep sessions, or tailors for new roles?
- **Trust and data sensitivity** — career data is personal and sensitive. Multi-tenancy requires clear data isolation, and the spec should establish the trust model up front.
- **Onboarding the skills into the product surface** — the skills define what the AI can do; the product spec defines how users access those capabilities through a UI. The spec needs to map skill capabilities to product features, flows, and entry points.

The agent should read every file in `skills/career-chief-of-staff/` before writing the spec. Treat those skills as the product's capability inventory — the spec's job is to determine which capabilities ship in v1, how they surface in the user experience, and what the multi-tenant architecture needs to support them.

---

## Visual Identity

The visual identity is established and locked. Do not deviate without explicit human approval.

### Color Palette

| Token | Hex | Role |
|---|---|---|
| `color-navy` | `#1A2F4A` | Primary — CTAs, headlines, nav |
| `color-navy-dark` | `#0F1E30` | Hover states, dark surfaces |
| `color-steel` | `#2A6C8E` | Accent — links, secondary CTAs |
| `color-steel-light` | `#6AB0CC` | Data viz, progress bars, highlights on dark |
| `color-gold` | `#C4962A` | Achievement moments only — scores, badges, milestones |
| `color-off-white` | `#F6F9FB` | Page background |
| `color-slate` | `#E8EEF4` | Secondary surfaces |
| `color-text-primary` | `#1A2F4A` | Primary body text |
| `color-text-secondary` | `#4A6480` | Supporting text |
| `color-text-muted` | `#8AA0B4` | Captions, labels, placeholders |
| `color-border` | `rgba(26,47,74,0.10)` | All borders and dividers |

Gold appears sparingly — only at moments of achievement. Overuse kills its signal value.

### Typography

- **Headlines:** DM Serif Display, weight 400, no negative letter-spacing
- **Body / UI:** Plus Jakarta Sans, weights 300–600

```
https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap
```

Full design system tokens — spacing, radius, shadows, components, motion — are in `DESIGN.md`.

### Reference Page

`careerchief-landing-v4.html` is the approved landing page reference. Treat it as a high-fidelity wireframe: the layout, copy hierarchy, section structure, and component patterns are all approved direction.

---

## What Success Looks Like at MVP

The MVP validates one thing: **that CareerChief can help a real user articulate their career story more effectively than they could on their own, and that they find the output genuinely useful.**

A user who completes onboarding and walks away with a career brief that feels accurate, specific, and better than what they had before — that is a successful MVP interaction.

Everything else is out of scope for v1.
