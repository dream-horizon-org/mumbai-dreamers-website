import Link from "next/link";
import StaticPlayerGrid from "@/components/squad/StaticPlayerGrid";
import { mensPlayers, womensPlayers } from "@/lib/data/players";

export const metadata = { title: "Full Squad — Mumbai Dreamers" };

export default function AllSquad() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Back button — paddingTop clears accent stripe (3px) + nav (62px) */}
      <div style={{ paddingTop: 65, paddingLeft: 24, backgroundColor: "#FFFFFF" }}>
        <Link
          href="/squad/mens"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "'Barlow', system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            color: "#C8102E",
            textDecoration: "none",
            padding: "12px 0",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          ← BACK TO SQUAD
        </Link>
      </div>

      {/* Page Header */}
      <div
        style={{
          backgroundColor: "#1A3A6B",
          paddingTop: 48,
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
          FULL SQUAD
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
          Mumbai Dreamers — Men&apos;s &amp; Women&apos;s
        </p>
      </div>

      {/* Player grids */}
      <StaticPlayerGrid label="MEN'S SQUAD" players={mensPlayers} />
      <div style={{ height: 1, backgroundColor: "#DDDDDD", margin: "0 24px" }} />
      <StaticPlayerGrid label="WOMEN'S SQUAD" players={womensPlayers} />
    </div>
  );
}
