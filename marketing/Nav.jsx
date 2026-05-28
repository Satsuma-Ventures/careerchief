/* global React, Logomark, Lockup */

function Nav() {
  const navWrap = {
    padding: "14px 0",
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "0.5px solid rgba(26,47,74,0.10)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  };
  return (
    <nav style={navWrap}>
      <div className="mk-container mk-nav-inner">
        <Lockup height={26} />
        <div className="mk-nav-links">
          <a className="mk-nav-link" href="#how">How it works</a>
          <a className="mk-nav-link" href="#honest">Why it's different</a>
          <a className="mk-nav-link" href="#pricing">Pricing</a>
          <a className="mk-btn mk-btn-nav" href="./app/">Get started</a>
        </div>
      </div>
    </nav>
  );
}

window.Nav = Nav;
