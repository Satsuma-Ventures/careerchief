---
name: interview-prep
description: "Generate interview cheat sheets and preparation materials for job applications. Use this skill when the user asks to prep for an interview, build a cheat sheet, or prepare for a specific role. Should be triggered after a job evaluation has been run. Produces a structured cheat sheet covering opening narrative, story anchors, likely questions, compensation script, and signals to watch for."
---

# Interview Prep Generator

## Purpose
Generate structured interview cheat sheets that help the user walk into any interview with a clear narrative, pre-loaded story anchors, and a plan for handling likely questions.

---

## Prerequisite Check

Before building the cheat sheet, check whether a job evaluation has been run in the current chat.

- **If evaluation is present:** Proceed. Use the scores, fit gaps, and company research to shape the prep.
- **If no evaluation is present:** Say: "I don't see a job evaluation for this role in our conversation. The cheat sheet will be more useful if I have the evaluation first — it tells me where your story is strongest, where the gaps are, and what the interviewer is likely to probe. Would you like to run the evaluator first, or should I build a cheat sheet from the JD alone?"

---

## Cheat Sheet Structure

Produce the cheat sheet as a single structured document. Include all sections below.

---

### Section 1 — Meta

| Field | Value |
|---|---|
| Company | |
| Role | |
| Fit With Me Score | |
| My Fit Score | |
| Screen Likelihood | |
| Key Fit Gaps | (from Table 2 of the evaluation) |
| Interview Format | (if known — phone screen / panel / case / etc.) |

---

### Section 2 — Opening Narrative

A 3–4 sentence answer to "Tell me about yourself" that is:
- Specific to this role and company (not a generic career summary)
- Anchored in the user's core value proposition (pulled from system prompt)
- Ending with a clear statement of why they're interested in this role

Write this out in full, ready to deliver verbally. Keep it under 90 seconds when spoken aloud.

---

### Section 3 — Story Anchors

Select 3–4 stories from the user's signature story library that best map to this role's requirements. For each:

| Story | Maps To | Key Points | Metrics |
|---|---|---|---|
| [Story name] | [Which JD requirement] | [2–3 key points] | [Key numbers] |

Include a brief note on any story the user should **avoid** for this role (e.g., if a story implies experience in a domain they're not claiming).

---

### Section 4 — Likely Questions

| Question | Pre-Loaded Answer |
|---|---|
| [Likely question] | [2–3 sentence answer using the best-fit story] |

**What to include:**
- 2–3 standard opening questions (Tell me about yourself, Why this role, Why this company)
- 3–4 behavioral questions mapped to the JD's key requirements
- 1–2 questions likely to probe the user's biggest fit gap (prepare a candid, confident answer — not a deflection)
- 1–2 questions about the user's approach to [core skill the role requires]

---

### Section 5 — Questions to Ask the Interviewer

3–5 questions the user should ask. These should:
- Reflect genuine curiosity about the role or company
- Signal strategic thinking
- Surface information that would help the user evaluate the opportunity

Avoid generic questions ("What does success look like in this role?") unless they're genuinely the right question for this context. Make them specific.

---

### Section 6 — Compensation Script

A brief, plain-language script for handling comp questions — calibrated to the user's stated comp floors and preferences from the system prompt.

Cover two scenarios:
1. **If asked early (before offer):** How to deflect or anchor without over-committing
2. **If negotiating an offer:** Opening position and fallback language

Keep it conversational, not scripted-sounding.

---

### Section 7 — Signals Table

| Signal | Upgrade | Downgrade |
|---|---|---|
| [What to watch for] | [If this happens, it's a good sign] | [If this happens, it's a concern] |

Include 4–6 signals relevant to:
- Leadership quality
- Strategic clarity (do they know what they want to build?)
- Team health
- Role scope (does the actual scope match the JD?)
- Decision velocity

---

### Section 8 — Posture Note

One paragraph — plain text, not a table — on the overall strategic posture the user should bring into this interview. This is not tactics; it's tone and intent. Examples:

- "This is a role where you want to come in as a peer, not a supplicant. The company needs what you have. Ask questions that signal you're evaluating them as much as they're evaluating you."
- "Your biggest gap here is domain experience. Lead with intellectual curiosity about the problem space — don't try to paper over the gap, let genuine interest carry it."
- "The JD signals a high-execution culture. Be concrete and specific. Every answer should have a number or a named outcome."

---

## After the Debrief

If the user comes back after an interview to debrief, offer to:
1. Identify questions they struggled with and build STAR-format prep blocks for those
2. Update the cheat sheet signals table based on what they observed
3. Note any new style or preference signals that emerged from the conversation

This is how the system learns and improves over time.
