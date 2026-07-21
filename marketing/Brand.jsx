/* global React */

// Brand assets — use the formal SVG lockups instead of inline drawings.
// Aspect ratios:
//   Mark / favicon   ~426 × 390  (≈ 1.09 : 1)
//   Full lockup      ~2281 × 390 (≈ 5.85 : 1)

const MARK_RATIO = 426 / 390;
const LOCKUP_RATIO = 2281 / 390;

function Logomark({ size = 28, variant = "color" }) {
  // variant: "color" (gradient navy + steel), "white" (single-color for dark bg)
  const src =
    variant === "white"
      ? "./assets/careerchief-logomark-white.svg"
      : "./assets/careerchief-logomark.svg";
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

function Lockup({ height = 22, variant = "color" }) {
  // variant: "color" (default), "mono" (single navy), "white" (for dark bg)
  let src = "./assets/careerchief-lockup-sm.svg";
  if (variant === "mono") src = "./assets/careerchief-lockup-mono.svg";
  if (variant === "white") src = "./assets/careerchief-lockup-white.svg";
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

function Kicker({ children, hero = false }) {
  return (
    <div className="mk-kicker">
      <div className="mk-kicker-line" />
      <div className={"mk-kicker-text" + (hero ? " hero" : "")}>{children}</div>
    </div>
  );
}

window.Logomark = Logomark;
window.Lockup = Lockup;
window.Kicker = Kicker;
