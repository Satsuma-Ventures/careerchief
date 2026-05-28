/* global React, Logomark, Wordmark */

function Nav() {
  const navWrap = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 32px",
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "0.5px solid rgba(26,47,74,0.10)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  };
  const links = { display: "flex", alignItems: "center", gap: 24 };
  const link = {
    fontSize: 13,
    color: "#4A6480",
    fontWeight: 400,
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.15s",
  };
  return (
    <nav style={navWrap}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Lockup height={26} />
      </div>
      <div style={links}>
        <a style={link} href="#how">How it works</a>
        <a style={link} href="#honest">Why it's different</a>
        <a style={link} href="#pricing">Pricing</a>
        <button className="mk-btn mk-btn-nav">Get started</button>
      </div>
    </nav>
  );
}

window.Nav = Nav;
