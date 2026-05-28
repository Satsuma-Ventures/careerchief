/* global React, Kicker, Icons */

function StatTile({ value, label, gold }) {
  return (
    <div
      style={{
        flex: 1,
        background: "rgba(255,255,255,0.07)",
        border: "0.5px solid rgba(255,255,255,0.08)",
        borderRadius: 10,
        padding: "14px 14px",
      }}
    >
      <div
        style={{
          fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em",
          fontSize: 30,
          color: gold ? "#C4962A" : "#fff",
          lineHeight: 1,
          marginBottom: 6,
          fontWeight: 300,
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em" }}>{label}</div>
    </div>
  );
}

function BarRow({ label, value, gold }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div style={{ height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${value}%`, background: gold ? "#C4962A" : "#6AB0CC", borderRadius: 2 }} />
      </div>
    </div>
  );
}

function Thread({ tag, tagVariant, title, hint, action }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 16,
        padding: "16px 18px",
        background: "#fff",
        border: "0.5px solid rgba(26,47,74,0.10)",
        borderRadius: 12,
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <span className={"app-tag app-tag-" + (tagVariant || "navy")}>{tag}</span>
          <span style={{ fontSize: 11, color: "#8AA0B4" }}>{hint}</span>
        </div>
        <div style={{ fontSize: 14, color: "#1A2F4A", fontWeight: 500, lineHeight: 1.5 }}>{title}</div>
      </div>
      <button
        className="app-btn app-btn-secondary"
        style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "7px 12px" }}
      >
        {action || "Open"} <Icons.Arrow size={12} />
      </button>
    </div>
  );
}

function BriefView() {
  return (
    <>
      <div className="app-page-head">
        <div>
          <Kicker>Career brief · Updated 2 hrs ago</Kicker>
          <div className="app-page-title" style={{ marginTop: 8 }}>
            Where you've been<br />
            making <em style={{ color: "#2A6C8E", fontStyle: "italic" }}>real</em> impact.
          </div>
          <div className="app-page-sub" style={{ marginTop: 6, maxWidth: 440 }}>
            A living document — yours to own. Drafted from your actual experience, sharpened in conversation.
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="app-btn app-btn-secondary">Export brief</button>
          <button className="app-btn app-btn-primary">Tailor for a role</button>
        </div>
      </div>

      {/* Score card — dark feature */}
      <div className="app-card-dark">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <Kicker onDark>Your score</Kicker>
        </div>
        <div
          style={{
            fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em",
            fontSize: 22,
            color: "#fff",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: 1.3,
            maxWidth: 460,
            marginBottom: 22,
          }}
        >
          "Here's what you've built — and here's how to say it."
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
          <StatTile value="87" label="Story score" gold />
          <StatTile value="3" label="Open threads" />
          <StatTile value="Top 12%" label="In your field" />
          <StatTile value="+14" label="This week" />
        </div>
        <BarRow label="Narrative clarity" value={91} />
        <BarRow label="Keyword alignment" value={74} />
        <BarRow label="Impact quantification" value={62} gold />
      </div>

      {/* Open threads */}
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <Kicker>Open threads · 3 to close</Kicker>
          <button
            style={{
              background: "transparent",
              border: 0,
              color: "#2A6C8E",
              fontSize: 12,
              fontWeight: 500,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            View all <Icons.Arrow size={12} />
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Thread
            tag="Gap"
            tagVariant="gold"
            hint="2021 → 2022"
            title="The strategy transition is missing the decision that justified it. One detail and the whole arc lands."
            action="Talk through"
          />
          <Thread
            tag="Buried impact"
            tagVariant="steel"
            hint="From your resume"
            title="You grew the team from 4 to 11. Right now it reads as a line item — it should anchor the story."
          />
          <Thread
            tag="Underclaimed"
            tagVariant="navy"
            hint="Customer outcome"
            title="A retention win in Q3 isn't in your brief at all. We should add it before the next interview."
          />
        </div>
      </div>

      {/* Recent activity */}
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <Kicker>Recent activity</Kicker>
        </div>
        <div className="app-card" style={{ padding: 0 }}>
          {[
            ["Drafted positioning for Senior PM, growth-stage", "2 hrs ago", "steel"],
            ["Closed open thread — team scale story", "Yesterday", "navy"],
            ["Tailored brief for Notion, Director of Product", "Tue", "steel"],
          ].map(([t, w, v], i, arr) => (
            <div
              key={t}
              style={{
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: i === arr.length - 1 ? "0" : "0.5px solid rgba(26,47,74,0.10)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span className={"app-tag app-tag-" + v}>{v === "steel" ? "Draft" : "Closed"}</span>
                <span style={{ fontSize: 13, color: "#1A2F4A" }}>{t}</span>
              </div>
              <span style={{ fontSize: 11, color: "#8AA0B4" }}>{w}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

window.BriefView = BriefView;
