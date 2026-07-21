/* global React, Kicker, Logomark */

function HeroVisual() {
  // A static, lightly-stylized "brief preview" — visual weight for the hero,
  // not a working component. Mirrors the dark feature card pattern.
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          background: "#1A2F4A",
          borderRadius: 18,
          padding: 28,
          color: "#fff",
          boxShadow: "0 24px 60px -20px rgba(15,30,48,0.35)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.50)",
            marginBottom: 8,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div style={{ width: 22, height: 1.5, background: "#C4962A", borderRadius: 1 }} />
          A glimpse of your brief
        </div>
        <div
          style={{
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-0.024em",
            fontSize: 22,
            color: "#fff",
            lineHeight: 1.3,
            fontStyle: "italic",
            fontWeight: 400,
            marginBottom: 22,
          }}
        >
          "Here's what you've built — and here's how to say it."
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
          {[
            ["87", "Story score", true],
            ["3", "Open threads", false],
            ["Top 12%", "In your field", false],
          ].map(([v, l, gold]) => (
            <div
              key={l}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.07)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
                padding: "12px 12px",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  letterSpacing: "-0.024em",
                  fontSize: 24,
                  color: gold ? "#C4962A" : "#fff",
                  lineHeight: 1,
                  fontWeight: 300,
                }}
              >
                {v}
              </div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
        {[
          ["Narrative clarity", 91, false],
          ["Impact quantification", 62, true],
        ].map(([l, v, gold]) => (
          <div key={l} style={{ marginTop: 10 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                color: "rgba(255,255,255,0.55)",
                marginBottom: 6,
              }}
            >
              <span>{l}</span>
              <span>{v}%</span>
            </div>
            <div style={{ height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2 }}>
              <div style={{ height: "100%", width: v + "%", background: gold ? "#C4962A" : "#6AB0CC", borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>
      {/* watermark moved to the hero section */}
    </div>
  );
}

function Hero() {
  const wrap = {
    background: "#fff",
    padding: "96px 0 88px",
    borderBottom: "0.5px solid rgba(26,47,74,0.10)",
    position: "relative",
    overflow: "hidden",
  };
  const headline = {
    fontFamily: "'DM Serif Display', serif",
    letterSpacing: "-0.024em",
    fontSize: 60,
    lineHeight: 1.04,
    color: "#1A2F4A",
    margin: "28px 0 24px",
    maxWidth: 560,
    fontWeight: 400,
  };
  const sub = {
    fontSize: 17,
    lineHeight: 1.7,
    color: "#4A6480",
    maxWidth: 520,
    marginBottom: 14,
  };
  const clar = {
    fontSize: 13,
    color: "#8AA0B4",
    lineHeight: 1.65,
    maxWidth: 460,
    marginBottom: 36,
    fontStyle: "italic",
  };
  return (
    <section style={wrap}>
      {/* Watermark — bottom edge aligns with the CTA button (88px above hero base), ~90% of hero height */}
      <div
        style={{
          position: "absolute",
          right: "-6%",
          bottom: 88,
          height: "90%",
          aspectRatio: "426 / 390",
          opacity: 0.05,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <img
          src="./assets/careerchief-logomark.svg"
          alt=""
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </div>
      <div className="mk-container mk-hero-grid" style={{ position: "relative", zIndex: 1 }}>
        <div>
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
            Most people are underselling themselves and don't know it. Meritous finds the gaps
            between what you've done and what you're saying — and helps you close them.
            Not a resume generator. A real thinking partner.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a className="mk-btn mk-btn-primary" href="./app/">Start for free</a>
            <a className="mk-btn mk-btn-ghost" href="./app/">See how it works →</a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

window.Hero = Hero;
