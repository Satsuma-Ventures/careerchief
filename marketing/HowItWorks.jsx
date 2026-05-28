/* global React, Kicker */

const HOW_STEPS = [
  {
    title: "Build your context",
    desc: (
      <>
        A two-phase conversation captures your background, target roles, principles, signature
        stories, and writing voice. <strong style={{ color: "#4A6480", fontWeight: 500 }}>No forms.</strong>
      </>
    ),
  },
  {
    title: "We find what's missing",
    desc: (
      <>
        Gaps between your actual impact and how you're presenting it —{" "}
        <strong style={{ color: "#4A6480", fontWeight: 500 }}>buried achievements</strong>, leadership
        no one would know about, context that changes everything.
      </>
    ),
  },
  {
    title: "Evaluate any role",
    desc: (
      <>
        Paste a job description; get a three-table scorecard — Fit With Me, My Fit, and an{" "}
        <strong style={{ color: "#4A6480", fontWeight: 500 }}>honest recruiter-screen likelihood.</strong>
      </>
    ),
  },
  {
    title: "Show up ready",
    desc: (
      <>
        Tailored cover letters, resume variants, and an eight-section interview cheat sheet.{" "}
        <strong style={{ color: "#4A6480", fontWeight: 500 }}>Every output is grounded in your real story</strong>{" "}
        — not hallucinated bullet points.
      </>
    ),
  },
];

function Step({ n, title, desc }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "#fff",
          border: "0.5px solid rgba(26,47,74,0.10)",
          display: "grid",
          placeItems: "center",
          fontFamily: "'DM Serif Display', serif",
          letterSpacing: "-0.024em",
          fontSize: 19,
          color: "#1A2F4A",
          fontWeight: 400,
          boxShadow: "0 1px 4px rgba(26,47,74,0.06)",
        }}
      >
        {n}
      </div>
      <div style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em", fontSize: 22, color: "#1A2F4A", lineHeight: 1.2, fontWeight: 400 }}>
        {title}
      </div>
      <div style={{ fontSize: 14, color: "#8AA0B4", lineHeight: 1.65 }}>{desc}</div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" style={{ padding: "104px 0 88px" }}>
      <div className="mk-container">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14, marginBottom: 52 }}>
          <Kicker>How it works</Kicker>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              letterSpacing: "-0.024em",
              fontSize: 42,
              color: "#1A2F4A",
              lineHeight: 1.12,
              fontWeight: 400,
              maxWidth: 640,
            }}
          >
            A chief of staff <em style={{ color: "#2A6C8E", fontStyle: "italic" }}>for your career.</em>
          </h2>
          <p style={{ fontSize: 16, color: "#8AA0B4", lineHeight: 1.65, maxWidth: 560 }}>
            The best chiefs of staff don't just execute — they listen, identify what's missing,
            and make sure you're always positioned to succeed.
          </p>
        </div>
        <div className="mk-steps">
          {HOW_STEPS.map((s, i) => (
            <Step key={s.title} n={i + 1} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

window.HowItWorks = HowItWorks;
