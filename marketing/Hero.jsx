/* global React, Kicker, Logomark */

function Hero() {
  const wrap = {
    background: "#fff",
    padding: "72px 32px 64px",
    borderBottom: "0.5px solid rgba(26,47,74,0.10)",
    position: "relative",
    overflow: "hidden",
  };
  const headline = {
    fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em",
    fontSize: 54,
    lineHeight: 1.07,
    color: "#1A2F4A",
    margin: "28px 0 24px",
    maxWidth: 520,
    fontWeight: 400,
  };
  const sub = {
    fontSize: 17,
    lineHeight: 1.7,
    color: "#4A6480",
    maxWidth: 460,
    marginBottom: 12,
  };
  const clar = {
    fontSize: 13,
    color: "#8AA0B4",
    lineHeight: 1.65,
    maxWidth: 420,
    marginBottom: 36,
    fontStyle: "italic",
  };
  const bgMark = {
    position: "absolute",
    right: -32,
    top: "50%",
    transform: "translateY(-50%)",
    opacity: 0.035,
    pointerEvents: "none",
  };
  return (
    <section style={wrap}>
      <Kicker hero>Your career chief of staff</Kicker>
      <h1 style={headline}>
        The career story<br/>you've earned —<br/>
        <em style={{ color: "#2A6C8E", fontStyle: "italic" }}>finally landing.</em>
      </h1>
      <p style={sub}>
        Think of it as your career chief of staff — the strategic partner working
        behind the scenes so you can show up as{" "}
        <strong style={{ color: "#1A2F4A", fontWeight: 500 }}>
          the best version of your professional self.
        </strong>
      </p>
      <p style={clar}>
        Most people are underselling themselves and don't know it. CareerChief finds the gaps
        between what you've done and what you're saying — and helps you close them.
        Not a resume generator. A real thinking partner.
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <button className="mk-btn mk-btn-primary">Start for free</button>
        <button className="mk-btn mk-btn-ghost">See how it works →</button>
      </div>
      <div style={bgMark}>
        <Logomark size={320} />
      </div>
    </section>
  );
}

window.Hero = Hero;
