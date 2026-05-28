/* global React, Kicker */

function StatTile({ value, label, gold }) {
  return (
    <div
      style={{
        flex: 1,
        background: "rgba(255,255,255,0.07)",
        borderRadius: 12,
        padding: "20px 18px",
        border: "0.5px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em",
          fontSize: 36,
          color: gold ? "#C4962A" : "#fff",
          lineHeight: 1,
          marginBottom: 8,
          fontWeight: 300,
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em" }}>{label}</div>
    </div>
  );
}

function BarRow({ label, value, gold }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 13,
          color: "rgba(255,255,255,0.55)",
          marginBottom: 8,
        }}
      >
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div style={{ height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: `${value}%`,
            background: gold ? "#C4962A" : "#6AB0CC",
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
}

function ScoreCard() {
  return (
    <section style={{ padding: "0 0 88px" }}>
      <div className="mk-container">
        <div
          style={{
            background: "#1A2F4A",
            borderRadius: 22,
            padding: "44px 48px",
            color: "#fff",
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          <div style={{ marginBottom: 10 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.50)", fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase" }}>
              <div style={{ width: 22, height: 1.5, background: "#C4962A", borderRadius: 1 }} />
              Your career brief
            </div>
          </div>
          <div
            style={{
              fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em",
              fontSize: 30,
              color: "#fff",
              marginBottom: 32,
              lineHeight: 1.25,
              fontWeight: 400,
              fontStyle: "italic",
              maxWidth: 460,
            }}
          >
            "Here's what you've built — and here's how to say it."
          </div>
          <div style={{ display: "flex", gap: 14, marginBottom: 32 }}>
            <StatTile value="87" label="Story score" gold />
            <StatTile value="3" label="Gaps to close" />
            <StatTile value="Top 12%" label="In your field" />
          </div>
          <BarRow label="Narrative clarity" value={91} />
          <BarRow label="Keyword alignment" value={74} />
          <BarRow label="Impact quantification" value={62} gold />
        </div>
      </div>
    </section>
  );
}

window.ScoreCard = ScoreCard;
