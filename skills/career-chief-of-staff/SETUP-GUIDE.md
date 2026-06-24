# Career Chief of Staff — Setup Guide

A structured job search system built on Claude. Helps you evaluate opportunities, generate application materials, and make high-quality career decisions — all personalized to your background and goals.

---

## What You'll Get

Once set up, your Career Chief of Staff will:

- **Evaluate job opportunities** using a structured scorecard (Fit With Role, My Fit, Recruiter Screen Likelihood)
- **Generate cover letters and resume bullets** tailored to specific roles
- **Prep you for interviews** with cheat sheets, story anchors, and likely questions
- **Evolve over time** — learning your writing style and career preferences as you use it

---

## What You Need Before Starting

- A **Claude Pro account** (claude.ai) — the Project feature requires Pro
- Your **current resume** (copy-paste the text, or have the file ready to upload)
- Your **LinkedIn profile** content (easiest to copy from your profile page)
- 20–30 minutes for the onboarding conversation

---

## Setup Steps

### Step 1 — Create a Claude Project

1. Go to [claude.ai](https://claude.ai)
2. Click **Projects** in the left sidebar
3. Click **New Project**
4. Name it something like "Career Chief of Staff" or "Job Search"

---

### Step 2 — Add the Project Instructions

1. Inside your new project, click **Project Instructions** (or the settings icon)
2. Copy the entire contents of **`system-prompt.md`** and paste it in
3. Save

This is the core of your Career Chief of Staff. It tells Claude who you are, what you're looking for, and how to behave.

> **Don't fill in the placeholders yet** — you'll do that in Step 4.

---

### Step 3 — Upload the Skill Files

Upload all four skill files to your project:

1. Click **Add Content** or the upload icon in your project
2. Upload each of these files:
   - `job-evaluator.md`
   - `resume-cover-letter.md`
   - `interview-prep.md`
   - `writing-style.md`

Claude will reference these automatically when you trigger the relevant workflows.

---

### Step 4 — Run the Onboarding Conversation

Onboarding happens in two phases. See **`ONBOARDING.md`** for the full instructions and prompts to paste in.

**Phase 1 — Foundation (20–30 min)**
Produces your personalized `system-prompt.md` and `career-context-qa.md`. After Phase 1 you can start using the system immediately.

**Phase 2 — Depth (20–30 min)**
Produces your `signature-stories-library.md` and `writing-style-guide.md`. Can be done in the same sitting or a separate session.

After each phase, upload the output documents to your project (Add Content → upload file) and update your Project Instructions with the completed system prompt.

---

### Step 5 — Upload Your Resume

Upload or paste your resume into the project directly. Claude will reference it when building your stories library in Phase 2 and when generating application materials.

---

## How to Use It

### Evaluate a job opportunity
Paste the job description into a chat and say:
> "Evaluate this role."

You'll get a three-table scorecard: how well the role fits your goals, how well your background fits the role, and an honest estimate of your likelihood to get a recruiter screen.

### Generate a cover letter
After evaluating a role, say:
> "Generate a cover letter for this role."

Or for resume bullets:
> "What resume changes would you recommend for this role?"

### Prep for an interview
After evaluating a role, say:
> "Build me an interview cheat sheet for this role."

### Give style feedback
After Claude generates any written output, tell it what you liked or didn't like:
> "Good structure but too formal — I write more casually than this."
> "Never use the word 'passionate' in my cover letters."

Claude will update its style model and apply your feedback going forward.

---

## Customizing the Skills

Each skill file is a plain text document with the logic Claude uses for that workflow. To customize:

1. Open the relevant `.md` file in any text editor
2. Make your changes
3. Re-upload the file to your Claude Project (delete the old version first)

Common customizations:
- **Scorecard weights** — adjust category weights in `job-evaluator.md` to match what matters most to you
- **Cover letter structure** — modify paragraph structure or sign-off in `resume-cover-letter.md`
- **Writing style rules** — add your own style rules to `writing-style.md` as you discover them

---

## Tips

- **Run the job evaluator before generating content.** The resume and cover letter generator uses the evaluation output to make smarter decisions about framing and story selection.
- **Be honest in onboarding.** The system is calibrated to make realistic recommendations — it works better when your background and goals are accurately represented.
- **Give feedback on outputs.** Every piece of feedback you give improves future outputs. Don't just silently discard something you don't like — tell Claude why.
- **Keep your prior role scores.** The evaluator maintains a running log of roles you've evaluated. This helps calibrate future evaluations and avoids re-evaluating the same roles.

---

## Files in This Package

| File | Purpose |
|---|---|
| `SETUP-GUIDE.md` | This document — start here |
| `ONBOARDING.md` | Step-by-step onboarding instructions with prompts to paste in |
| `system-prompt.md` | Core project instructions template (filled in during onboarding) |
| `job-evaluator.md` | Job opportunity scoring skill |
| `resume-cover-letter.md` | Cover letter and resume bullet generator skill |
| `interview-prep.md` | Interview cheat sheet generator skill |
| `writing-style.md` | Writing style tracker skill |

**Documents produced during onboarding (not in this package — Claude generates them for you):**

| File | Purpose |
|---|---|
| `career-context-qa.md` | Your goals, constraints, and decision principles — produced in Phase 1 |
| `signature-stories-library.md` | Your key career stories in STAR format — produced in Phase 2 |
| `writing-style-guide.md` | Your tone, voice, and formatting rules — produced in Phase 2 |
