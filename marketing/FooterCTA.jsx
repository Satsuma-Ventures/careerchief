/* global React, Logomark */

function FooterCTA() {
  return (
    <section
      id="pricing"
      style={{
        background: "#1A2F4A",
        padding: "56px 32px",
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
        <Logomark size={460} variant="white" />
      </div>
      <div
        style={{
          fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em",
          fontSize: 36,
          color: "#fff",
          marginBottom: 14,
          fontWeight: 400,
          lineHeight: 1.15,
          position: "relative",
        }}
      >
        Your story is<br/>
        <em style={{ fontStyle: "italic", color: "#6AB0CC" }}>already worth telling.</em>
      </div>
      <div
        style={{
          fontSize: 15,
          color: "rgba(255,255,255,0.5)",
          marginBottom: 32,
          lineHeight: 1.7,
          position: "relative",
        }}
      >
        Let's make sure it sounds like it.<br/>
        Your career chief of staff is ready when you are — free to start, no credit card required.
      </div>
      <button className="mk-btn mk-btn-inverse" style={{ position: "relative" }}>
        Start your career brief →
      </button>
    </section>
  );
}

window.FooterCTA = FooterCTA;
