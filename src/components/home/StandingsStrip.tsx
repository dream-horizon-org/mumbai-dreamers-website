"use client";

import Link from "next/link";
import { useState } from "react";
import RugbyBallToggle from "@/components/squad/RugbyBallToggle";
import StandingsTable from "@/components/results/StandingsTable";
import type { StandingsEntry } from "@/lib/sanity.queries";

interface StandingsStripProps {
  mensStandings: StandingsEntry[];
  womensStandings: StandingsEntry[];
}

export default function StandingsStrip({
  mensStandings,
  womensStandings,
}: StandingsStripProps) {
  const [activeTeam, setActiveTeam] = useState<"mens" | "womens">("mens");

  return (
    <div
      style={{
        backgroundColor: "#0D1B3E",
        padding: "72px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          {/* Left: eyebrow + heading */}
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "'Barlow', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 11,
                color: "#C8102E",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: 10,
              }}
            >
              RPL SEASON 2
            </span>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontWeight: 800,
                fontSize: 48,
                color: "#FFFFFF",
                textTransform: "uppercase",
                lineHeight: 1,
                margin: 0,
              }}
            >
              STANDINGS
            </h2>
          </div>

          {/* Right: toggle */}
          <RugbyBallToggle value={activeTeam} onChange={setActiveTeam} />
        </div>

        {/* Table */}
        <StandingsTable
          entries={activeTeam === "mens" ? mensStandings : womensStandings}
        />

        {/* CTA */}
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <Link
            href="/results"
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
            VIEW FULL STANDINGS →
          </Link>
        </div>
      </div>
    </div>
  );
}
