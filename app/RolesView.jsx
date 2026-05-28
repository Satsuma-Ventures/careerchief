/* global React, Kicker, Icons */

const ROLES = [
  { co: "Notion", role: "Director of Product", loc: "Remote · US", match: 92, status: "Brief tailored", saved: true },
  { co: "Linear", role: "Senior PM, Platform", loc: "Hybrid · SF", match: 88, status: "Reviewing fit", saved: true },
  { co: "Vercel", role: "Group PM", loc: "Remote · Global", match: 81, status: "Brief tailored", saved: false },
  { co: "Stripe", role: "Lead PM, Growth", loc: "Hybrid · NYC", match: 76, status: "Open thread: scale story", saved: true },
  { co: "Figma", role: "Principal PM, Editor", loc: "Onsite · SF", match: 71, status: "Not started", saved: false },
];

function MatchBar({ value }) {
  const gold = value < 75;
  return (
    <div style={{ width: 80 }}>
      <div style={{ fontSize: 11, color: "#1A2F4A", fontWeight: 600, marginBottom: 4, fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em", fontSize: 16, lineHeight: 1 }}>
        {value}%
      </div>
      <div style={{ height: 3, background: "#E8EEF4", borderRadius: 9999, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${value}%`, background: gold ? "#C4962A" : "#6AB0CC" }} />
      </div>
    </div>
  );
}

function RolesView() {
  return (
    <>
      <div className="app-page-head">
        <div>
          <Kicker>Tailor for roles · 12 active</Kicker>
          <div className="app-page-title" style={{ marginTop: 8 }}>
            Roles worth your<br />
            <em style={{ color: "#2A6C8E", fontStyle: "italic" }}>actual</em> attention.
          </div>
          <div className="app-page-sub" style={{ marginTop: 6, maxWidth: 460 }}>
            Match is calculated against your brief — not your resume. Open one to see exactly which parts of your story to lead with.
          </div>
        </div>
        <button className="app-btn app-btn-primary">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Icons.Plus size={12} /> Add role
          </span>
        </button>
      </div>

      <div className="app-card" style={{ padding: 0 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 0.8fr 1.2fr 100px 130px",
            gap: 16,
            padding: "12px 20px",
            borderBottom: "0.5px solid rgba(26,47,74,0.10)",
            fontSize: 10,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#8AA0B4",
            fontWeight: 600,
          }}
        >
          <div>Role</div>
          <div>Where</div>
          <div>Status</div>
          <div>Match</div>
          <div></div>
        </div>
        {ROLES.map((r, i) => (
          <div
            key={r.co + r.role}
            style={{
              display: "grid",
              gridTemplateColumns: "1.6fr 0.8fr 1.2fr 100px 130px",
              gap: 16,
              alignItems: "center",
              padding: "16px 20px",
              borderBottom: i === ROLES.length - 1 ? "0" : "0.5px solid rgba(26,47,74,0.10)",
            }}
          >
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#1A2F4A" }}>{r.role}</div>
              <div style={{ fontSize: 12, color: "#8AA0B4", marginTop: 2 }}>{r.co}</div>
            </div>
            <div style={{ fontSize: 12, color: "#4A6480" }}>{r.loc}</div>
            <div>
              <span
                className={
                  "app-tag " +
                  (r.status.startsWith("Open") ? "app-tag-gold" : r.status === "Not started" ? "app-tag-navy" : "app-tag-steel")
                }
              >
                {r.status}
              </span>
            </div>
            <MatchBar value={r.match} />
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 6 }}>
              <button className="app-btn app-btn-secondary" style={{ padding: "6px 12px", fontSize: 12 }}>Open</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

window.RolesView = RolesView;
