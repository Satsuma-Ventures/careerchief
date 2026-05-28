/* global React, Icons */
const { useState, useRef, useEffect } = React;

const SEED = [
  {
    from: "chief",
    body: (
      <>
        I went through your work history. <strong>Three things stood out</strong> —
        the 2021 → 2022 transition to strategy, the team you grew from 4 to 11,
        and a customer outcome you've barely mentioned anywhere.
      </>
    ),
  },
  {
    from: "chief",
    body: <>Where do you want to start?</>,
  },
];

const SUGGESTIONS = [
  "Tell me about the 2021 transition.",
  "Why is the team growth important?",
  "Which customer outcome did I miss?",
];

function Bubble({ from, children }) {
  const isYou = from === "you";
  return (
    <div style={{ display: "flex", justifyContent: isYou ? "flex-end" : "flex-start" }}>
      <div
        style={{
          maxWidth: "85%",
          padding: "10px 14px",
          borderRadius: 14,
          background: isYou ? "#E8EEF4" : "#fff",
          border: isYou ? "0" : "0.5px solid rgba(26,47,74,0.10)",
          boxShadow: isYou ? "none" : "0 1px 4px rgba(26,47,74,0.06)",
          fontSize: 13,
          lineHeight: 1.6,
          color: "#1A2F4A",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Conversation() {
  const [msgs, setMsgs] = useState(SEED);
  const [draft, setDraft] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs]);

  function send(text) {
    const t = (text ?? draft).trim();
    if (!t) return;
    setMsgs((m) => [...m, { from: "you", body: t }]);
    setDraft("");
    setTimeout(() => {
      setMsgs((m) => [
        ...m,
        {
          from: "chief",
          body: (
            <>
              Good — let's anchor it. When you stepped into strategy in mid-2021,
              what was the first decision that <em>only you</em> could have made?
            </>
          ),
        },
      ]);
    }, 700);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, minHeight: 0, flex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 9999,
              background: "#1A2F4A",
              display: "grid",
              placeItems: "center",
              color: "#fff",
            }}
          >
            <Icons.Sparkle size={14} />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#1A2F4A" }}>Your chief of staff</div>
            <div style={{ fontSize: 11, color: "#8AA0B4" }}>Grounded in your real work history</div>
          </div>
        </div>
        <button
          className="app-btn app-btn-secondary"
          style={{ fontSize: 11, padding: "5px 10px", borderRadius: 6 }}
        >
          New thread
        </button>
      </div>

      <div
        ref={scrollRef}
        style={{
          background: "#F6F9FB",
          border: "0.5px solid rgba(26,47,74,0.10)",
          borderRadius: 14,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          overflowY: "auto",
          maxHeight: 360,
          minHeight: 200,
        }}
      >
        {msgs.map((m, i) => (
          <Bubble key={i} from={m.from}>{m.body}</Bubble>
        ))}
      </div>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={() => send(s)}
            style={{
              fontSize: 11,
              fontWeight: 500,
              padding: "5px 10px",
              border: "1px solid rgba(26,47,74,0.15)",
              borderRadius: 9999,
              background: "#fff",
              color: "#4A6480",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "#fff",
          border: "1px solid rgba(26,47,74,0.10)",
          borderRadius: 10,
          padding: "8px 8px 8px 14px",
        }}
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Talk through your story…"
          style={{
            flex: 1,
            border: 0,
            outline: 0,
            fontFamily: "inherit",
            fontSize: 13,
            background: "transparent",
            color: "#1A2F4A",
          }}
        />
        <button
          onClick={() => send()}
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: "#1A2F4A",
            color: "#fff",
            border: 0,
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
          }}
        >
          <Icons.Send size={14} />
        </button>
      </div>
    </div>
  );
}

window.Conversation = Conversation;
