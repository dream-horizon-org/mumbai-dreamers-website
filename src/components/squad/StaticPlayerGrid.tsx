"use client";

import Image from "next/image";
import type { Player } from "@/lib/data/players";
import { GlowCard } from "@/components/ui/SpotlightCard";

function FlagOrPlaceholder({ countryCode }: { countryCode: string }) {
  if (!countryCode || countryCode === "tbc") {
    return (
      <div
        style={{
          width: 28,
          height: 20,
          backgroundColor: "#DDDDDD",
          borderRadius: 2,
          flexShrink: 0,
        }}
      />
    );
  }
  return (
    <span
      className={`fi fi-${countryCode}`}
      style={{
        width: 28,
        height: 20,
        display: "inline-block",
        borderRadius: 2,
        flexShrink: 0,
        backgroundSize: "cover",
      }}
      aria-label={countryCode}
    />
  );
}

function StaticPlayerCard({ player }: { player: Player }) {
  return (
    <div
      style={{
        borderRadius: 12,
        border: "1px solid #DDDDDD",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.10)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Photo area */}
      <div
        style={{
          position: "relative",
          height: 182,
          backgroundColor: "#F0F0F0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(45deg, #C8102E 0px, #C8102E 1.5px, transparent 1.5px, transparent 14px)",
            opacity: 0.08,
          }}
        />
        <Image
          src={player.photoUrl}
          alt={player.name}
          fill
          style={{ objectFit: "cover", objectPosition: "top center" }}
          sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 200px"
        />
      </div>

      {/* Info bar */}
      <div
        style={{
          borderTop: "2.5px solid #C8102E",
          padding: "10px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: 56,
        }}
      >
        <span
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 13,
            color: "#1A3A6B",
            textTransform: "uppercase",
            letterSpacing: "0.03em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            marginRight: 6,
          }}
        >
          {player.name}
        </span>
        <FlagOrPlaceholder countryCode={player.countryCode} />
      </div>
    </div>
  );
}

interface StaticPlayerGridProps {
  label: string;
  players: Player[];
}

export default function StaticPlayerGrid({ label, players }: StaticPlayerGridProps) {
  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 48,
        paddingBottom: 48,
      }}
    >
      <span
        style={{
          display: "block",
          fontFamily: "'Barlow Condensed', system-ui, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          color: "#C8102E",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          marginBottom: 24,
        }}
      >
        {label}
      </span>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 24,
        }}
      >
        {players.map((p) => (
          <GlowCard
            key={p.id}
            customSize={true}
            className="!block !p-0 !gap-0 !shadow-none !backdrop-blur-none"
          >
            <StaticPlayerCard player={p} />
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
