/* global React */

function HonestSection() {
  const card = {
    background: "#fff",
    borderRadius: 18,
    padding: 32,
    border: "0.5px solid rgba(26,47,74,0.10)",
  };
  const body = { fontSize: 15, color: "#4A6480", lineHeight: 1.8, marginBottom: 24 };
  const dot = {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#C4962A",
    flexShrink: 0,
    marginTop: 6,
  };
  const point = {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    fontSize: 14,
    color: "#4A6480",
    lineHeight: 1.6,
  };
  return (
    <section id="honest" style={{ padding: "0 32px 56px" }}>
      <div style={card}>
        <div
          style={{
            fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em",
            fontSize: 24,
            color: "#1A2F4A",
            marginBottom: 16,
            lineHeight: 1.25,
            fontWeight: 400,
          }}
        >
          Why we built this differently
        </div>
        <div style={body}>
          A great chief of staff doesn't show up with a script. They show up having done the work —
          knowing your history, your strengths, and the gaps you haven't noticed yet.{" "}
          <strong style={{ color: "#1A2F4A", fontWeight: 500 }}>That's the standard we built to.</strong>
          <br/><br/>
          There's no shortage of tools that will rewrite your resume in seconds. Most are
          making things up — they know what resumes sound like, but they don't know <em>you</em>.
          CareerChief starts with your actual experience, your actual decisions, your actual
          outcomes. The point isn't to generate your story. The point is to help you{" "}
          <strong style={{ color: "#1A2F4A", fontWeight: 500 }}>
            uncover and articulate the one you already have.
          </strong>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={point}><div style={dot} />Everything is grounded in what you tell us — no hallucinated achievements</div>
          <div style={point}><div style={dot} />Built and tested with real hiring managers and career coaches</div>
          <div style={point}><div style={dot} />You own your career brief — it travels with you, not locked in a platform</div>
        </div>
      </div>
    </section>
  );
}

window.HonestSection = HonestSection;
