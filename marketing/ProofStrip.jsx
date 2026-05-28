/* global React */

function ProofStrip() {
  const strip = {
    background: "#1A2F4A",
    padding: "24px 0",
  };
  const inner = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
  };
  const item = { display: "flex", flexDirection: "column", alignItems: "center", gap: 4 };
  const num = {
    fontFamily: "'DM Serif Display', serif",
    letterSpacing: "-0.024em",
    fontSize: 30,
    color: "#fff",
    fontWeight: 300,
    lineHeight: 1,
  };
  const label = {
    fontSize: 11,
    color: "rgba(255,255,255,0.50)",
    fontWeight: 400,
    letterSpacing: "0.04em",
    textAlign: "center",
  };
  const divider = { width: "0.5px", height: 44, background: "rgba(255,255,255,0.1)" };
  const items = [
    ["4.2k", "Stories sharpened"],
    ["38%", "More callbacks"],
    ["91%", "Feel more confident"],
    ["~12 min", "To your first brief"],
  ];
  return (
    <div style={strip}>
      <div className="mk-container" style={inner}>
        {items.map(([n, l], i) => (
          <React.Fragment key={l}>
            <div style={item}>
              <div style={num}>{n}</div>
              <div style={label}>{l}</div>
            </div>
            {i < items.length - 1 && <div style={divider} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

window.ProofStrip = ProofStrip;
