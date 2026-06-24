# Career Chief of Staff — Onboarding Guide

This document explains how to set up your Career Chief of Staff and includes the prompts to run each phase of onboarding.

---

## What Onboarding Produces

By the end of onboarding, you'll have five personalized files to upload to your Claude Project:

| File | What It Is | Phase |
|---|---|---|
| `system-prompt.md` | Core project instructions personalized to you | Phase 1 |
| `career-context-qa.md` | Your goals, constraints, and decision principles in Q&A format | Phase 1 |
| `signature-stories-library.md` | Your key career stories structured for cover letters and interviews | Phase 2 |
| `writing-style-guide.md` | Your tone, voice, formatting rules, and style preferences | Phase 2 |
| Your resume | Uploaded directly — no formatting needed | Either phase |

---

## Two-Phase Structure

Onboarding is split into two phases. You can do them back to back in one sitting (60–90 min total) or in separate sessions — Phase 1 is enough to start using the system immediately.

**Phase 1 — Foundation (20–30 min)**
Covers your career background, target roles, compensation, location, goals, and decision principles. Outputs your system prompt and career context doc. After Phase 1 you can start evaluating roles right away.

**Phase 2 — Depth (20–30 min)**
Goes deeper on your career stories and writing style. Outputs your signature stories library and writing style guide. Cover letters and interview prep get significantly better once Phase 2 is complete.

---

## Before You Start

Have these ready — you don't need all of them, but more context produces better output:

- **Your resume** (paste the text, or have the file ready to upload)
- **Your LinkedIn profile** (copy the About, Experience, and Skills sections)
- **A rough sense of your comp expectations** (current or most recent base, target range)
- **Any cover letters or writing samples you're proud of** (optional — helps calibrate Phase 2)

---

## Phase 1 — Foundation

### What to do
1. Open your Career Chief of Staff project in Claude
2. Start a new chat
3. Paste the prompt below

---

### Phase 1 Prompt

```
I'd like to set up my Career Chief of Staff. Please run Phase 1 of the onboarding flow.

Here's what I'd like you to do:

1. Ask me questions in organized batches — not all at once. Cover these areas in order:
   - My career background: current or most recent role, total years of experience, key domains and industries
   - Key accomplishments: 3–5 highlights with metrics if I have them
   - Target roles: preferred titles, levels, and any roles I'm explicitly not interested in
   - Compensation: previous base and bonus, target range, any flexibility scenarios
   - Location: city, remote preference, timezone constraints
   - Long-term goals: where I want to be in 5–10 years, what the next role should build toward
   - Risk tolerance: what kinds of companies and situations I'm comfortable with
   - Career decision principles: what matters most to me beyond the scorecard — the 2–4 things that guide how I evaluate opportunities

2. After collecting my answers, produce two outputs formatted for copy-paste:

   OUTPUT 1 — Completed system-prompt.md
   Fill in all placeholders with my actual information. Replace the example career decision principles with my real ones. Do not leave any placeholders unfilled — if something is unclear, make a reasonable inference and flag it.

   OUTPUT 2 — career-context-qa.md
   A clean Q&A document summarizing my career context. Format it as a series of questions and answers — not prose paragraphs. This document will be uploaded to my Claude Project as a reference file.

Start with a brief overview of what we're doing, then begin with batch one of questions.
```

---

### After Phase 1

1. Copy the completed `system-prompt.md` output
2. Go to your Project Instructions (click the project name → settings icon)
3. Replace the placeholder contents with the completed version and save
4. Copy the `career-context-qa.md` output and save it as a new file
5. Upload `career-context-qa.md` to your project (Add Content → upload file)
6. Upload or paste your resume into the project as well

You now have a functional Career Chief of Staff. Start a new chat and try:
> "Evaluate this role." (paste any job description)

---

## Phase 2 — Depth

### What to do
Start a new chat in your project and paste the prompt below. If you're doing Phase 2 in the same sitting as Phase 1, take a short break first.

---

### Phase 2 Prompt

```
I'd like to run Phase 2 of my Career Chief of Staff onboarding — building my signature stories library and writing style guide.

Here's what I'd like you to do:

1. Ask me to share my resume and any LinkedIn content I have. Use that as the foundation for the stories library.

2. Ask me follow-up questions to develop 4–6 signature career stories. For each story, you'll want to know:
   - The situation and what was at stake
   - What I specifically did (my role, my decisions)
   - The outcome with metrics if available
   - What it signals about how I work

   Good story categories to explore: a platform or systems transformation, a conviction moment where I pushed back on something, an AI or data-driven product win, a cross-functional alignment challenge, a 0-to-1 build, and anything that shows how I lead or develop others.

3. Ask me questions about my writing style:
   - How would I describe my tone? (formal/casual, warm/direct, etc.)
   - What do I like in a cover letter opening?
   - What words or phrases do I hate seeing in my own writing?
   - Any formatting rules I care about?
   - How do I want to sign off on cover letters?
   - Share any writing samples I have — cover letters, emails, LinkedIn posts — so you can observe my natural voice directly.

4. After collecting my answers, produce two outputs formatted for copy-paste:

   OUTPUT 1 — signature-stories-library.md
   Each story in STAR format (Situation, Task, Actions, Result) plus a one-line leadership signal. Include a summary table at the top mapping each story to the situations it's best used for.

   OUTPUT 2 — writing-style-guide.md
   A structured style guide covering: tone and register, preferred constructions, never-use list, formatting rules, and sign-off preference. Written as instructions Claude should follow when generating content for me — not as a description of my style.

Start with a brief overview, then ask me to share my resume and LinkedIn content before beginning the story development questions.
```

---

### After Phase 2

1. Copy the `signature-stories-library.md` output and save it as a new file
2. Copy the `writing-style-guide.md` output and save it as a new file
3. Upload both files to your Claude Project

Your Career Chief of Staff is now fully set up.

---

## Keeping Your Profile Current

Your Career Chief of Staff improves over time as it learns more about you. Two ways to update it:

**After a meaningful conversation** — if you've shared new context, given style feedback, or updated your situation, ask Claude at the end of the session:
> "What should I update in my project files based on what we discussed today?"

Claude will suggest specific edits. Review them, update the relevant file, and re-upload it to your project.

**After a big life event** (new job, new target, comp change) — use the update prompt below rather than re-running Phase 1 from scratch. Claude will read your existing files, ask what's changed, and output revised versions with only the relevant sections updated.

---

### Profile Update Prompt

```
I need to update my Career Chief of Staff profile. My existing system-prompt.md and career-context-qa.md are in this project.

Please read both files, then ask me what's changed — new role, updated comp targets, different goals, whatever's relevant. Keep your questions focused on what's likely to have changed rather than re-covering everything from scratch.

Once we've covered the updates, produce revised versions of whichever files need changing, clearly marking what's new or different so I can easily spot the edits before replacing the old versions.
```

After Claude outputs the revised files, replace the old versions in your project with the new ones. You usually won't need to update Phase 2 docs unless your stories or writing style have changed significantly.
