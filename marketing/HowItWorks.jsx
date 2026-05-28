/* global React, Kicker */

const HOW_STEPS = [
  {
    title: "Tell us where you've been",
    desc: (
      <>
        Upload your resume or walk us through your experience conversationally.{" "}
        <strong style={{ color: "#4A6480", fontWeight: 500 }}>No forms, no templates</strong>{" "}
        — just a real conversation about your career so far.
      </>
    ),
  },
  {
    title: "We find what's missing",
    desc: (
      <>
        CareerChief surfaces the gaps between your actual impact and how you're presenting it —{" "}
        <strong style={{ color: "#4A6480", fontWeight: 500 }}>achievements buried in vague language</strong>,
        the leadership no one would know about, the context that changes everything.
      </>
    ),
  },
  {
    title: "Build your career brief",
    desc: (
      <>
        A living document that captures your narrative, your strengths, and your positioning —{" "}
        <strong style={{ color: "#4A6480", fontWeight: 500 }}>yours to own and evolve</strong>,
        not locked behind a subscription.
      </>
    ),
  },
  {
    title: "Show up ready",
    desc: (
      <>
        Tailor for specific roles, prep for interviews, sharpen your LinkedIn.{" "}
        <strong style={{ color: "#4A6480", fontWeight: 500 }}>Every output is grounded in your real story</strong>{" "}
        — not hallucinated bullet points.
      </>
    ),
  },
];

function Step({ n, title, desc, last }) {
  return (
    <div style={{ display: "flex", gap: 22, paddingBottom: last ? 0 : 32, position: "relative" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 38 }}>
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "#fff",
            border: "0.5px solid rgba(26,47,74,0.10)",
            display: "grid",
            placeItems: "center",
            fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em",
            fontSize: 17,
            color: "#1A2F4A",
            fontWeight: 400,
            zIndex: 1,
            boxShadow: "0 1px 4px rgba(26,47,74,0.06)",
          }}
        >
          {n}
        </div>
        {!last && (
          <div style={{ width: "0.5px", flex: 1, background: "rgba(26,47,74,0.10)", marginTop: 6 }} />
        )}
      </div>
      <div style={{ paddingTop: 8 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#1A2F4A", marginBottom: 5 }}>{title}</div>
        <div style={{ fontSize: 14, color: "#8AA0B4", lineHeight: 1.65 }}>{desc}</div>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" style={{ padding: "60px 32px 52px" }}>
      <div style={{ marginBottom: 12 }}>
        <Kicker>How it works</Kicker>
      </div>
      <h2
        style={{
          fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em",
          fontSize: 34,
          color: "#1A2F4A",
          lineHeight: 1.15,
          marginBottom: 10,
          fontWeight: 400,
        }}
      >
        A chief of staff<br/>for your career
      </h2>
      <p style={{ fontSize: 15, color: "#8AA0B4", lineHeight: 1.65, marginBottom: 40, maxWidth: 420 }}>
        The best chiefs of staff don't just execute — they listen, identify what's missing,
        and make sure you're always positioned to succeed. That's exactly what CareerChief does.
      </p>
      <div>
        {HOW_STEPS.map((s, i) => (
          <Step key={s.title} n={i + 1} title={s.title} desc={s.desc} last={i === HOW_STEPS.length - 1} />
        ))}
      </div>
    </section>
  );
}

window.HowItWorks = HowItWorks;
