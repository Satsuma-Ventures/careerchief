---
name: job-opportunity-evaluator
description: "Evaluate job opportunities using a structured three-table scoring framework. Use this skill whenever the user shares a job description, job posting, or asks to evaluate a role. Triggers include: pasting a job description, sharing a URL to a job posting, asking 'is this worth applying to', 'evaluate this role', 'what do you think of this opportunity', or any similar request to assess a job. Always run the full evaluation framework including all three tables and the summary recommendation table. This skill should trigger even for quick gut-check requests — always produce the structured output."
---

# Job Opportunity Evaluation Framework

## Purpose
Evaluate job opportunities using a structured, consistent framework that produces three scoring tables and a final recommendation. The goal is to make fast, honest, high-signal decisions about where to invest application energy.

---

## Before You Score: Read the System Prompt

Pull the following from the user's system prompt before evaluating:

- **Compensation floors** — minimum base, minimum total comp
- **Target roles and titles** — what they're aiming for
- **Location constraints** — remote, on-site, city, timezone
- **Career decision principles** — what matters most beyond the scorecard
- **Opportunity patterns** — environments where they've created impact
- **Prior role scores** — for calibration across evaluations
- **Long-term trajectory** — CPO, VP, Founder, etc. — affects strategic weight of each role

If any of these are missing from the system prompt (placeholders not filled in), ask the user to provide them before running the evaluation.

---

## Company Research

For roles scoring ≥65/100 on Fit With Me, run a targeted web search before finalizing Tables 2 and 3.

**Search for:**
1. Careers/culture page — company values, what they look for in candidates
2. Product or functional leadership thought leadership — blog posts, interviews, talks from relevant leaders
3. Interview process — Glassdoor reviews, known process steps, what screens are used
4. Company trajectory signals — recent layoffs, growth vs. optimization mode, leadership trust signals
5. Applicant pool signals — remote-first policies, posting age, any signals about pool size

**How research affects the evaluation:**
- **Table 1:** Revise scores for Leadership Quality, Company Growth Trajectory, and Problem/Mission Interest based on what you find
- **Table 2:** Add criteria rows for unstated but clearly valued qualifications (mark these as "sourced from research")
- **Table 3:** Adjust screen likelihood based on pool size signals, screening emphasis, and process complexity

After the three tables, include a brief "Company Research Findings" note (3–5 sentences) summarizing what was found and what it changed. If nothing material was found, say so briefly.

For roles scoring <65/100: skip deep research. A light pass on culture fit is sufficient.

---

## Table 1 — Fit With Me (Scorecard)

Score each category 1–5 using the weights below. Calculate weighted total out of 100.

> **Note:** The category weights below are defaults. The user's system prompt may specify different weights or additional/removed categories based on their personal priorities. Always use the user's customized weights if provided.

| Category | Default Weight | Score | Summary |
|---|---|---|---|
| Role Scope & Ownership | 20% | X | One-line assessment |
| Strategic Influence | 15% | X | One-line assessment |
| Company Growth Trajectory | 15% | X | One-line assessment |
| AI / Technology Exposure | 15% | X | One-line assessment |
| Compensation & Equity | 10% | X | One-line assessment |
| Problem / Mission Interest | 10% | X | One-line assessment |
| Leadership Quality & Decision Velocity | 10% | X | One-line assessment |
| Brand Value | 5% | X | One-line assessment |
| **Total Comp Estimate** | — | — | Annualized base midpoint + bonus structure + equity note |
| **Weighted Total** | | **XX/100** | |

**Scoring guidance:**
- 1 = Very weak / misaligned
- 2 = Below expectations
- 3 = Acceptable / neutral
- 4 = Strong
- 5 = Exceptional

**Category notes:**
- **AI / Technology Exposure:** Should reflect meaningful product or workflow AI mandate — not just "we use AI tools internally"
- **Problem / Mission Interest:** Factor in any personal connection the user has to the domain
- **Brand Value:** Evaluate signal value for the user's long-term trajectory, not just name recognition
- **Comp:** Score relative to the user's stated floor. Factor in total comp potential including bonus and equity
- **Total Comp Estimate:** Always include as an unweighted data point

---

## Table 2 — My Fit With Role

Evaluate the user's background against what the role actually requires. Use three signal levels: **Strong**, **Partial**, **Weak**.

| Criteria | Signal | Assessment |
|---|---|---|
| [Key requirement from JD] | Strong/Partial/Weak | One-line explanation |

**What to include:**
- All hard requirements from the JD
- Key preferred qualifications that would meaningfully affect screen likelihood
- Domain/industry experience if relevant
- Technical requirements if present
- Company leveling context when known

**Close with a summary row:**
| My Fit With Role | | XX/100 — one-sentence summary of strengths and gaps |

---

## Table 3 — Likelihood to Get Recruiter Screen

A competitive pool assessment: what is the realistic probability that a recruiter, having seen the full candidate pool, puts this person on their shortlist? Be conservative. Account for candidates who likely have more direct domain or keyword match.

| Criteria | Weight | Score | Notes |
|---|---|---|---|
| Title & level match | High | X | |
| Domain / industry match | High | X | |
| Keyword match (ATS) | High | X | |
| Quantified impact | Medium | X | |
| Years of experience match | Medium | X | |
| Leadership scope match | Medium | X | |
| Resume clarity & scannability | Low | X | |
| **Screen Likelihood** | | **~XX%** | Primary screen-out risks identified |

**Calibration guidance:**
Screen likelihood should reflect the full competitive pool — not just whether the user is qualified on paper. Common adjustments:

- Role posted publicly at a well-known company → more applicants → lower screen likelihood for any individual candidate
- Remote-first posting → dramatically larger pool → significant headwind
- Niche domain or technical requirement → smaller qualified pool → higher screen likelihood if user meets it
- Referral available → meaningful uplift (flag if the user mentions one)
- Direct domain match → higher likelihood; adjacent domain → moderate; different industry → lower

As a general calibration anchor: a strong candidate with a partial domain match at a competitive company typically lands in the 8–14% range. Adjust up or down from there.

---

## Summary Recommendation Table

| | |
|---|---|
| Fit With Me | XX/100 |
| My Fit With Role | XX/100 |
| Recruiter Screen Likelihood | ~XX% |
| Resume to Use | [Which variant] |
| Resume Changes Recommended | Yes / No — [brief summary if yes] |
| Final Call | Apply / Pass / Investigate further |

**Final call guidance:**
- **Apply** when Fit With Me ≥65, My Fit ≥55, Screen Likelihood ≥7%
- **Pass** when any of the three are clearly below threshold
- **Investigate further** when data is missing (comp not listed, remote policy unclear, etc.) or scores are borderline and more info would change the call
- Override logic: if the user's current baseline role (their "floor") scores lower than this role on all three dimensions, apply even if scores are modest

---

## Resume Selection

**Use the more leadership-focused resume when:**
- Role involves people management, org design, or P&L ownership
- Stakeholder management at exec level is central
- Title is Director, Senior Manager, Group PM, or Head of Product

**Use the more IC-focused resume when:**
- Title is Principal PM, Staff PM, Lead PM, or Senior PM
- Engineering partnership and technical pattern definition are central
- No direct people management required

---

## Resume Change Evaluation

Only recommend resume changes when ALL three are true:
1. Role scores >50/100 on Fit With Me
2. The gap is a **language problem**, not a **domain problem** — reframing can close it without overclaiming
3. The change would **meaningfully move screen likelihood** — not just make the resume feel more tailored

When recommending changes:
- Show current bullet and proposed revision side by side
- Specify whether it's a **base resume update** (broadly applicable) or a **role-specific variant** (tailored, retire after applying)
- Never recommend changes that the user couldn't defend in an interview

---

## Evaluation Lenses

Apply these lenses when reading JDs:

### Role Type Fit
Distinguish between roles that match the user's core strengths vs. roles that sound similar but require fundamentally different skills. Flag mismatches explicitly rather than letting them get buried in the scorecard.

### Domain Gap vs. Screen Risk
- **Domain gap as screen risk** — recruiter filters on industry keywords; the story doesn't match what they're scanning for
- **Domain gap as role fit issue** — the job requires specialized knowledge central to doing the work

The first is a screen problem. The second is a role fit problem. Both matter but for different reasons.

### Scope Trap
Watch for roles with impressive titles but narrow scope, or roles where the PM is executing against someone else's strategy with limited ownership. Flag these explicitly under Role Scope & Ownership.

### Opportunity Pattern Match
Check whether the role matches any of the opportunity patterns defined in the user's system prompt. If it matches one or more patterns, call it out explicitly — it's a positive signal worth naming.

---

## Prior Role Score Log

Before evaluating a new role, check project memory for prior evaluations — this provides calibration context and avoids re-evaluating roles already assessed.

For most users, project memory handles this automatically. Users who have evaluated a large number of roles over time may find it useful to maintain an explicit log in their system prompt, but this is not necessary until the history is extensive enough that memory alone becomes unreliable.
