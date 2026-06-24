---
name: writing-style-tracker
description: "Track and evolve the user's writing style preferences over time. This skill runs passively in the background — it does not need to be explicitly triggered. Apply it whenever generating any written output (cover letters, application responses, bullets). Actively capture new style signals from user feedback and explicit preferences. Surface style updates to the user periodically so they can be added to the system prompt."
---

# Writing Style Tracker

## Purpose
Ensure every piece of written output sounds like the user — not like generic AI output. Writing style evolves through two mechanisms: passive learning from how the user writes in conversation, and active capture from explicit feedback on generated outputs.

---

## How This Works

### Passive Style Learning
Observe how the user writes in the conversation itself:
- Sentence length and rhythm
- How formal or casual their word choice is
- Whether they hedge ("I think", "probably") or assert ("this is", "I do")
- How they handle lists — bullet-heavy or prose-forward
- Whether they use em dashes, parentheticals, semicolons
- What they cut when they edit Claude's output (deletions reveal preferences as much as additions)

Apply these observations immediately in the current session. Do not wait for explicit instruction.

### Active Style Capture
When the user gives feedback on a generated output — even informally — extract the style signal and apply it:

| Feedback Example | Style Signal to Capture |
|---|---|
| "Too formal" | Reduce formality one register |
| "I'd never say it this way" | Flag the specific construction; avoid it |
| "Good but shorter" | User prefers tighter prose; trim future outputs |
| "I hate the word 'passionate'" | Add to never-use list |
| "Can you make the opening punchier?" | User prefers strong, direct openings |
| "This doesn't sound like me" | Ask: "What feels off? Is it tone, word choice, structure?" |

---

## Style Dimensions to Track

Build a style model across these dimensions. Start with what's defined in the system prompt; add to it as signals emerge.

### Tone
Where does the user sit on this spectrum?
- Formal ←————————→ Casual
- Measured ←————————→ Direct
- Warm ←————————→ Cool
- Hedged ←————————→ Assertive

Most people aren't at either extreme — note where they actually land.

### Voice Markers
Words or phrases they use naturally:
- Characteristic sentence openers
- Preferred connective tissue ("and so", "which means", "as a result")
- How they signal emphasis (em dashes, italics, all-caps, bold — or none of the above)

### Never-Use List
Words, phrases, or constructions the user has explicitly rejected or that clearly don't fit their voice. Maintain this list actively.

**Universal defaults (apply unless the user overrides):**
- "Passionate" — overused in job search contexts; avoid unless user specifically requests it
- "I am writing to apply for..." — never open a cover letter this way
- "I look forward to hearing from you" — generic closing; avoid
- "At your earliest convenience" — passive and dated; avoid

### Formatting Preferences
- Em dash usage (sparingly? frequently? only in specific patterns?)
- Bullet point style (periods or no periods? full sentences or fragments?)
- Paragraph length (short and punchy or developed?)
- Sign-off preference

---

## Surfacing Style Updates

Periodically (after 3–5 pieces of written output in a session, or when asked), offer to surface a summary of new style signals captured:

"Based on your feedback this session, here are some style preferences I've picked up:
- [signal 1]
- [signal 2]
- [signal 3]

Want to add any of these to your system prompt so they persist across sessions?"

This is how passive style learning becomes permanent — the user reviews and approves, then adds to the Writing Style section of their system prompt.

---

## Applying Style in Practice

When generating any written output:

1. **Start with the system prompt.** Apply all style rules defined there before writing a single word.
2. **Apply session learning.** Layer in any signals captured during this conversation.
3. **Match the channel.** Cover letters and application questions are more formal than conversation. Adjust register accordingly, but stay within the user's range — don't drift to generic professional.
4. **Read it back.** Before outputting, ask: does this sound like this person? Or does it sound like generic Claude output?

If you're uncertain whether something fits the user's voice, produce the output and flag the uncertainty: "This opening felt slightly more formal than your usual register — let me know if you'd like me to loosen it up."

---

## When to Ask vs. When to Apply

**Apply without asking:**
- Any style signal that has been explicitly stated
- Any preference the user has corrected Claude on before
- Register matching (casual conversation → casual response)

**Ask before applying:**
- A significant register shift (e.g., much more casual than any previous output)
- A structural change to cover letter format (e.g., dropping a paragraph)
- Any change that might feel surprising

The goal is for the user to spend zero mental energy on formatting and style — it should just be right.
