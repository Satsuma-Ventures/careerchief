/* global React, Logomark */

function FooterCTA() {
  return (
    <section
      id="pricing"
      style={{
        background: "#1A2F4A",
        padding: "104px 0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <Logomark size={560} variant="white" />
      </div>
      <div className="mk-container" style={{ position: "relative" }}>
        <div
          style={{
            fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em",
            fontSize: 52,
            color: "#fff",
            marginBottom: 18,
            fontWeight: 400,
            lineHeight: 1.1,
          }}
        >
          Your story is<br/>
          <em style={{ fontStyle: "italic", color: "#6AB0CC" }}>already worth telling.</em>
        </div>
        <div
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.55)",
            marginBottom: 36,
            lineHeight: 1.7,
            maxWidth: 540,
            marginInline: "auto",
          }}
        >
          Let's make sure it sounds like it.<br/>
          Your career chief of staff is ready when you are — free to start, no credit card required.
        </div>
        <a className="mk-btn mk-btn-inverse" href="./app/">
          Start your career brief →
        </a>
      </div>
    </section>
  );
}

window.FooterCTA = FooterCTA;
