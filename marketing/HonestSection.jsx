/* global React, Kicker */

function HonestSection() {
  const dot = {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#C4962A",
    flexShrink: 0,
    marginTop: 8,
  };
  const point = {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    fontSize: 15,
    color: "#4A6480",
    lineHeight: 1.65,
  };
  return (
    <section id="honest" style={{ padding: "0 0 96px" }}>
      <div className="mk-container">
        <div
          style={{
            background: "#fff",
            borderRadius: 22,
            padding: "48px 56px",
            border: "0.5px solid rgba(26,47,74,0.10)",
          }}
        >
          <div className="mk-two-col">
            <div>
              <div style={{ marginBottom: 14 }}>
                <Kicker>Why we built this differently</Kicker>
              </div>
              <div
                style={{
                  fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em",
                  fontSize: 32,
                  color: "#1A2F4A",
                  lineHeight: 1.18,
                  fontWeight: 400,
                  maxWidth: 480,
                }}
              >
                Shows up <em style={{ color: "#2A6C8E", fontStyle: "italic" }}>having done the work.</em>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 16, color: "#4A6480", lineHeight: 1.8, marginBottom: 28 }}>
                A great chief of staff doesn't show up with a script. They show up having done the work —
                knowing your history, your strengths, and the gaps you haven't noticed yet.{" "}
                <strong style={{ color: "#1A2F4A", fontWeight: 500 }}>That's the standard we built to.</strong>
                <br/><br/>
                There's no shortage of tools that will rewrite your resume in seconds. Most are making
                things up — they know what resumes sound like, but they don't know <em>you</em>.
                CareerChief starts with your actual experience, your actual decisions, your actual
                outcomes. The point isn't to generate your story. The point is to help you{" "}
                <strong style={{ color: "#1A2F4A", fontWeight: 500 }}>
                  uncover and articulate the one you already have.
                </strong>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={point}><div style={dot} />Everything is grounded in what you tell us — no hallucinated achievements</div>
                <div style={point}><div style={dot} />Built and tested with real hiring managers and career coaches</div>
                <div style={point}><div style={dot} />You own your career brief — it travels with you, not locked in a platform</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.HonestSection = HonestSection;
