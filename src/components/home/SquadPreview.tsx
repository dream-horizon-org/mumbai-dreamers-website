"use client";

import Link from "next/link";
import { useState } from "react";
import PlayerCarousel from "@/components/squad/PlayerCarousel";
import RugbyBallToggle from "@/components/squad/RugbyBallToggle";
import type { Player } from "@/lib/sanity.queries";

interface SquadPreviewProps {
  mensPlayers: Player[];
  womensPlayers: Player[];
}

export default function SquadPreview({ mensPlayers, womensPlayers }: SquadPreviewProps) {
  const [team, setTeam] = useState<"mens" | "womens">("mens");
  const players = team === "mens" ? mensPlayers : womensPlayers;

  return (
    <section
      aria-label="Squad preview"
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: 72,
        paddingBottom: 72,
      }}
    >
      {/* Section header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 40,
          paddingLeft: 24,
          paddingRight: 24,
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
            marginBottom: 10,
          }}
        >
          OUR SQUAD
        </span>
        <h2
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 42,
            color: "#1A3A6B",
            textTransform: "uppercase",
            lineHeight: 1,
            margin: 0,
            marginBottom: 28,
          }}
        >
          MEET THE DREAMERS
        </h2>

        <RugbyBallToggle value={team} onChange={setTeam} />
      </div>

      {/* Player carousel — key forces remount on team switch to reset scroll */}
      <div style={{ marginBottom: 40 }}>
        <PlayerCarousel key={team} players={players} />
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", paddingLeft: 24, paddingRight: 24 }}>
        <Link
          href="/squad"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "'Barlow', system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#1A3A6B",
            border: "2px solid #1A3A6B",
            padding: "14px 28px",
            borderRadius: 0,
            textDecoration: "none",
            transition: "background-color 0.2s ease, color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "#1A3A6B";
            el.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "transparent";
            el.style.color = "#1A3A6B";
          }}
        >
          SEE ALL PLAYERS →
        </Link>
      </div>
    </section>
  );
}
