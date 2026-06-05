"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import RugbyBallToggle from "@/components/squad/RugbyBallToggle";
import PlayerCarousel from "@/components/squad/PlayerCarousel";
import type { Player } from "@/lib/sanity.queries";

interface SquadPageProps {
  team: "mens" | "womens";
  mensPlayers: Player[];
  womensPlayers: Player[];
}

export default function SquadPage({ team, mensPlayers, womensPlayers }: SquadPageProps) {
  const router = useRouter();
  const players = team === "mens" ? mensPlayers : womensPlayers;
  const subLine =
    team === "mens"
      ? "Mumbai Dreamers Men's Squad"
      : "Mumbai Dreamers Women's Squad";

  const handleToggle = (t: "mens" | "womens") => {
    if (t !== team) router.push(`/squad/${t}`);
  };

  return (
    <>
      {/* Page Header — navy band; paddingTop accounts for fixed nav (62px) + accent stripe (3px) + 72px design spacing */}
      <div
        style={{
          backgroundColor: "#1A3A6B",
          paddingTop: 137,
          paddingBottom: 48,
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "block",
            fontFamily: "'Barlow', system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            color: "#C8102E",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: 12,
          }}
        >
          SEASON 2 · 2026
        </span>
        <h1
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 64,
            color: "#FFFFFF",
            textTransform: "uppercase",
            lineHeight: 1,
            margin: 0,
            marginBottom: 14,
          }}
        >
          OUR SQUAD
        </h1>
        <p
          style={{
            fontFamily: "'Barlow', system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            color: "rgba(255,255,255,0.65)",
            margin: 0,
          }}
        >
          {subLine}
        </p>
      </div>

      {/* Toggle */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          textAlign: "center",
          paddingTop: 48,
          paddingBottom: 48,
        }}
      >
        <RugbyBallToggle value={team} onChange={handleToggle} />
      </div>

      {/* Player Carousel */}
      <div style={{ backgroundColor: "#FFFFFF", paddingBottom: 40 }}>
        <PlayerCarousel key={team} players={players} />
      </div>

      {/* See All Players CTA */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          textAlign: "center",
          paddingBottom: 72,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <Link
          href="/squad/all"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "'Barlow', system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#FFFFFF",
            backgroundColor: "#C8102E",
            padding: "16px 32px",
            borderRadius: 0,
            textDecoration: "none",
          }}
        >
          SEE ALL PLAYERS →
        </Link>
      </div>
    </>
  );
}
