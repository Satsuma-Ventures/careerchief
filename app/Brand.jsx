/* global React */

const MARK_RATIO = 426 / 390;
const LOCKUP_RATIO = 2281 / 390;

function Logomark({ size = 24, variant = "color" }) {
  const src =
    variant === "white"
      ? "../assets/careerchief-logomark-white.svg"
      : "../assets/careerchief-logomark.svg";
  return (
    <img
      src={src}
      alt="Meritous"
      width={Math.round(size * MARK_RATIO)}
      height={size}
      style={{ display: "block" }}
    />
  );
}

function Lockup({ height = 20, variant = "color" }) {
  let src = "../assets/careerchief-lockup.svg";
  if (variant === "mono") src = "../assets/careerchief-lockup-mono.svg";
  if (variant === "white") src = "../assets/careerchief-lockup-white.svg";
  return (
    <img
      src={src}
      alt="Meritous"
      width={Math.round(height * LOCKUP_RATIO)}
      height={height}
      style={{ display: "block" }}
    />
  );
}

function Kicker({ children, onDark = false }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <div style={{ width: 22, height: 1.5, background: "#C4962A", borderRadius: 1 }} />
      <div
        style={{
          fontSize: 10,
          fontWeight: 500,
          color: onDark ? "rgba(255,255,255,0.50)" : "#8AA0B4",
          letterSpacing: "0.10em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </div>
    </div>
  );
}

window.Logomark = Logomark;
window.Lockup = Lockup;
window.Kicker = Kicker;
