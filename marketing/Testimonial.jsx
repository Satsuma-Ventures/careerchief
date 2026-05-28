/* global React */

function Testimonial() {
  return (
    <section style={{ padding: "0 0 96px" }}>
      <div className="mk-container">
        <div
          style={{
            background: "#fff",
            borderRadius: 22,
            padding: "48px 56px",
            border: "0.5px solid rgba(26,47,74,0.10)",
            maxWidth: 820,
            margin: "0 auto",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em",
              fontSize: 72,
              color: "#E8EEF4",
              lineHeight: 0.7,
              marginBottom: 18,
              display: "block",
            }}
            aria-hidden
          >
            "
          </span>
          <div
            style={{
              fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em",
              fontSize: 26,
              color: "#1A2F4A",
              lineHeight: 1.45,
              marginBottom: 32,
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            I've been a hiring manager for 12 years. CareerChief is the first tool that actually
            teaches candidates how to think about their story — not just format it.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#E8EEF4",
                display: "grid",
                placeItems: "center",
                fontSize: 13,
                fontWeight: 600,
                color: "#1A2F4A",
              }}
            >
              SR
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#1A2F4A" }}>Sarah R.</div>
              <div style={{ fontSize: 13, color: "#8AA0B4", marginTop: 2 }}>VP of Talent, Series B startup</div>
            </div>
            <div
              style={{
                marginLeft: "auto",
                background: "rgba(196,150,42,0.1)",
                color: "#8B6B1A",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "5px 12px",
                borderRadius: 20,
              }}
            >
              Verified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Testimonial = Testimonial;
