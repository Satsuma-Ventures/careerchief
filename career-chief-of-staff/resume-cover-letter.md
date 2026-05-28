---
name: resume-cover-letter-generator
description: "Generate cover letters, resume bullet variants, and application question responses for job applications. Use this skill when the user asks to draft a cover letter, revise resume bullets for a specific role, or write application question responses. Always produces copy-paste ready plain text output — no files. If no job evaluation has been run in the current chat, prompt the user to run the job-opportunity-evaluator skill first before generating content."
---

# Resume + Cover Letter Generator

## Purpose
Generate copy-paste ready cover letters, resume bullet variants, and application question responses. All output is plain text formatted for direct use — no files, no markdown formatting that won't survive a paste.

---

## Prerequisite Check

Before generating any content, check whether a job evaluation has been run in the current chat. Look for the three-table evaluation output (Fit With Me, My Fit With Role, Recruiter Screen Likelihood).

- **If evaluation is present:** Proceed. Use the scores, resume recommendation, and change recommendations to inform all content.
- **If no evaluation is present:** Say: "I don't see a job evaluation for this role in our conversation. Please run the job evaluator first — it will tell me which resume to use, what changes to make, and how to frame your story for this specific role."

---

## Before Generating: Read the System Prompt

Pull the following before writing anything:

- **Writing style preferences** — tone, words to avoid, formatting rules, sign-off
- **Signature story library** — which stories map to which situations
- **Key metrics** — approved numbers to use in bullets and cover letters
- **Resume variants** — which version to use for this role type
- **Career principles** — what the user cares about, which shapes how to frame their interest

---

## Cover Letters

### Structure

Follow this four-paragraph structure unless the role warrants three (clean fit, tight story):

**Paragraph 1 — Hook**
Company-specific observation or problem statement. Not generic. Should reflect something specific about the company's challenge, mission, or product mandate that connects to the user's genuine interest. Do not open with "I am writing to apply for..."

**Paragraph 2 — Superpower / Core Value Proposition**
Lead with the user's core differentiator — the thing they do better than most candidates. This should be pulled from the system prompt (career profile, core strengths, or any explicitly defined "superpower" framing).

Then connect immediately to a specific story with outcome metrics. Choose the story from the signature story library that best maps to this JD.

**Paragraph 3 — Role Connection**
Connect the user's background directly to the specific role mandate. Name what the role is trying to accomplish and show how their experience maps to it. Do not repeat paragraph 2's story — build on it or use a complementary story.

**Paragraph 4 — Close**
One sentence closing. Keep it simple and confident. No "I look forward to hearing from you." No "available at your earliest convenience."

Use the sign-off defined in the user's writing style preferences.

### Tone

Match the JD's voice. Read the JD for register signals:
- Mission-forward, people-focused JDs → warmer, more personal opening
- High-performance, competitive JDs → confident and precise
- Technical, craft-focused JDs → builder tone, output-forward
- Enterprise, formal JDs → measured and strategic

### What Not to Do
- Do not mirror JD language back verbatim — it reads as constructed
- Do not exceed 4 paragraphs unless explicitly requested
- Do not open with the superpower line — earn it with a hook first
- Do not make claims the user couldn't defend in an interview
- Do not include location in the closing (applications capture it separately)
- Do not use filler closings ("I look forward to hearing from you", "at your earliest convenience")

---

## Resume Bullet Variants

### When to Generate
Only generate bullet variants when the job evaluation explicitly recommended changes. If the evaluation said "no changes," confirm that before generating anything.

### Output Format

Label each proposed change clearly:

```
Current bullet:
[exact text of current bullet]

Revised bullet:
[revised text]

Type: Base update OR Role-specific variant
Why: One sentence on what changed and why it matters for this role.
```

### Bullet Writing Principles

**Outcome-first structure:**
Lead with what was achieved, then explain how.
"[Outcome] — [how it was achieved]"

Use an em dash to separate outcome from action in resume bullets. This is the primary (and preferred) use of em dashes in this system.

**Multiplier framing over efficiency framing:**
- Not: "Reduced planning time by 60%"
- Yes: "Accelerated planning cycles by 3X by introducing AI agent workflows..."

**Never overclaim:**
- Only add language the user can defend in an interview
- If a gap is a domain problem (not a language problem), do not try to close it with bullet framing
- "Defensible in an interview" is the test for every word

**Quantification:**
Only use metrics that appear in the user's system prompt key metrics table or that the user has confirmed are accurate. Do not invent or estimate numbers.

### Base Update vs. Role-Specific Variant

**Base update criteria:** The change improves signal for a wide range of roles, not just this one. Recommend adding to the base resume.

**Role-specific variant criteria:** The change is tailored to this JD's specific language and wouldn't strengthen other applications. Label clearly — retire after applying.

---

## Application Question Responses

### Core Principle
Application questions are read as a set alongside the cover letter. Draft them cohesively — they should not repeat the cover letter's story verbatim.

Divide the narrative:
- **Cover letter carries:** Core value proposition, primary story, outcome metrics
- **Application questions get:** Personal/mission angle, specific behavioral examples, honest self-assessment

When multiple questions are requested for one role, draft them all together and review the full set before outputting. Each answer should stand alone and not reproduce the cover letter's primary story.

### Question Type Handling

**"Why are you interested in [company/role]?"**
Two-part answer: (1) personal connection or genuine domain interest, (2) specific product or mission challenge that energizes the user. Be direct — do not mirror JD language back as the answer.

**Behavioral / STAR questions**
Match to the appropriate story from the signature story library. Do not force a story that doesn't fit. Acknowledge gaps honestly if the question requires experience the user doesn't have.

**Skill or competency self-assessments**
Be honest about gaps the job evaluation identified. Do not overclaim. A recruiter who reads an overclaim and then meets the candidate will notice the mismatch.

---

## Output Formatting for Copy-Paste

Cover letters and application question responses should be formatted as plain text for form field pasting:
- No markdown headers
- No bold formatting
- No bullet markdown
- Blank lines between paragraphs
- Em dashes use the actual character (—), not double hyphens (--)
- Sign-off per user's writing style preferences

Resume bullets keep standard resume formatting (em dash bullet structure) since they go into a document editor.

Clearly label each output block so the user knows where to paste it.

---

## Writing Style Deference

The writing style rules in the user's system prompt take precedence over any defaults in this skill. When in doubt:
- Use the user's preferred tone, not a generic professional tone
- Use their preferred words and constructions
- Respect their formatting rules exactly
- Apply any "never use" rules without exception

If you receive feedback on an output ("too formal", "I'd never say it this way", "avoid the word X"), update your understanding of the user's style and apply it immediately to the current output and all future outputs in this session.
