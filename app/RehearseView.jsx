/* global React, Kicker, Icons */

const PROMPTS = [
  {
    tag: "Behavioral",
    title: "Walk me through the moment your team scaled from 4 to 11.",
    note: "Lead with the hiring bar, not the headcount.",
  },
  {
    tag: "Strategy",
    title: "Tell me about a decision in 2021 that only you could have made.",
    note: "Anchor your transition to strategy.",
  },
  {
    tag: "Conflict",
    title: "When did you push back on a senior leader — and what changed?",
    note: "Avoid abstractions. Name the meeting.",
  },
  {
    tag: "Failure",
    title: "What did you ship in 2023 that didn't work the way you hoped?",
    note: "Show the learning, not the apology.",
  },
];

function PromptCard({ tag, title, note }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "0.5px solid rgba(26,47,74,0.10)",
        borderRadius: 14,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <span className="app-tag app-tag-steel" style={{ alignSelf: "flex-start" }}>{tag}</span>
      <div style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em", fontSize: 19, color: "#1A2F4A", lineHeight: 1.3, fontWeight: 400 }}>
        {title}
      </div>
      <div style={{ fontSize: 12, color: "#8AA0B4", lineHeight: 1.5 }}>{note}</div>
      <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
        <button className="app-btn app-btn-primary" style={{ padding: "8px 14px", display: "inline-flex", alignItems: "center", gap: 6 }}>
          <Icons.Mic size={12} /> Rehearse
        </button>
        <button className="app-btn app-btn-secondary" style={{ padding: "8px 14px" }}>See your story</button>
      </div>
    </div>
  );
}

function RehearseView() {
  return (
    <>
      <div className="app-page-head">
        <div>
          <Kicker>Rehearse · Grounded in your brief</Kicker>
          <div className="app-page-title" style={{ marginTop: 8 }}>
            Practice the answers<br />
            <em style={{ color: "#2A6C8E", fontStyle: "italic" }}>you've already</em> lived.
          </div>
          <div className="app-page-sub" style={{ marginTop: 6, maxWidth: 460 }}>
            Every prompt pulls from your real history. No generic questions — only the ones that matter for what you're going for.
          </div>
        </div>
        <button className="app-btn app-btn-primary">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Icons.Mic size={12} /> Start a session
          </span>
        </button>
      </div>

      <div className="app-card-dark" style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <Kicker onDark>Last session · Tuesday</Kicker>
          <div style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em", fontSize: 22, color: "#fff", marginTop: 8, fontStyle: "italic", lineHeight: 1.3 }}>
            "Your strategy story tightened — the team-scale moment still needs a number."
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "14px 18px" }}>
            <div style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em", fontSize: 28, color: "#C4962A", fontWeight: 300, lineHeight: 1 }}>+9</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", marginTop: 4, letterSpacing: "0.04em" }}>Story score</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "14px 18px" }}>
            <div style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em", fontSize: 28, color: "#fff", fontWeight: 300, lineHeight: 1 }}>14m</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", marginTop: 4, letterSpacing: "0.04em" }}>Practiced</div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 14 }}>
          <Kicker>Prompts from your brief</Kicker>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {PROMPTS.map((p) => <PromptCard key={p.title} {...p} />)}
        </div>
      </div>
    </>
  );
}

window.RehearseView = RehearseView;
