/* global React */

function StatTile({ value, label, gold }) {
  return (
    <div
      style={{
        flex: 1,
        background: "rgba(255,255,255,0.07)",
        borderRadius: 10,
        padding: "16px 14px",
        border: "0.5px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em",
          fontSize: 30,
          color: gold ? "#C4962A" : "#fff",
          lineHeight: 1,
          marginBottom: 5,
          fontWeight: 300,
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.04em" }}>{label}</div>
    </div>
  );
}

function BarRow({ label, value, gold }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          color: "rgba(255,255,255,0.5)",
          marginBottom: 7,
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
    <section style={{ padding: "0 32px 56px" }}>
      <div style={{ background: "#1A2F4A", borderRadius: 18, padding: 32, color: "#fff" }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: 8,
          }}
        >
          Your career brief
        </div>
        <div
          style={{
            fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.024em",
            fontSize: 24,
            color: "#fff",
            marginBottom: 28,
            lineHeight: 1.3,
            fontWeight: 400,
            fontStyle: "italic",
            maxWidth: 340,
          }}
        >
          "Here's what you've built — and here's how to say it."
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
          <StatTile value="87" label="Story score" gold />
          <StatTile value="3" label="Gaps to close" />
          <StatTile value="Top 12%" label="In your field" />
        </div>
        <BarRow label="Narrative clarity" value={91} />
        <BarRow label="Keyword alignment" value={74} />
        <BarRow label="Impact quantification" value={62} gold />
      </div>
    </section>
  );
}

window.ScoreCard = ScoreCard;
