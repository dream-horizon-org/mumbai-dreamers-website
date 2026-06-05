"use client";

interface RugbyBallToggleProps {
  value: "mens" | "womens";
  onChange: (team: "mens" | "womens") => void;
}

function SeamOverlay() {
  return (
    <svg
      viewBox="0 0 48 24"
      width="48"
      height="24"
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <line x1="24" y1="3" x2="24" y2="21" stroke="rgba(255,255,255,0.30)" strokeWidth="1" />
      <path d="M16 12 Q24 5 32 12" fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="1" />
      <path d="M16 12 Q24 19 32 12" fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="1" />
    </svg>
  );
}

export default function RugbyBallToggle({ value, onChange }: RugbyBallToggleProps) {
  return (
    <div
      role="group"
      aria-label="Select squad"
      style={{
        display: "inline-flex",
        position: "relative",
        backgroundColor: "#1A3A6B",
        borderRadius: 999,
        padding: 4,
        overflow: "hidden",
      }}
    >
      {/* Sliding red indicator */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 4,
          left: 4,
          width: "calc(50% - 4px)",
          bottom: 4,
          backgroundColor: "#C8102E",
          borderRadius: 999,
          transition: "transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: value === "womens" ? "translateX(100%)" : "translateX(0%)",
        }}
      >
        <SeamOverlay />
      </div>

      {(["mens", "womens"] as const).map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          aria-pressed={value === t}
          style={{
            position: "relative",
            zIndex: 1,
            fontFamily: "'Barlow', system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: value === t ? "#FFFFFF" : "rgba(255,255,255,0.55)",
            padding: "10px 28px",
            background: "none",
            border: "none",
            cursor: "pointer",
            borderRadius: 999,
            transition: "color 0.2s ease",
            whiteSpace: "nowrap",
          }}
        >
          {t === "mens" ? "MEN'S" : "WOMEN'S"}
        </button>
      ))}
    </div>
  );
}
