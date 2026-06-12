"use client";

import { useState } from "react";
import Image from "next/image";
import RugbyBallToggle from "@/components/squad/RugbyBallToggle";
import type { Fixture } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity";

// ─── Utilities ───────────────────────────────────────────────────────────────

function groupByDate(fixtures: Fixture[]): { date: string; matches: Fixture[] }[] {
  const map = new Map<string, Fixture[]>();
  for (const f of fixtures) {
    if (!map.has(f.date)) map.set(f.date, []);
    map.get(f.date)!.push(f);
  }
  return Array.from(map.entries()).map(([date, matches]) => ({ date, matches }));
}

function parseDateLabel(dateStr: string): { dayName: string; rest: string } {
  const idx = dateStr.indexOf(" ");
  return {
    dayName: dateStr.slice(0, idx).toUpperCase(),
    rest: dateStr.slice(idx + 1),
  };
}

function getEmbedUrl(url: string): string {
  const m = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}?autoplay=1` : "";
}

// ─── Small reusable pieces ────────────────────────────────────────────────────

const CHIP_BASE: React.CSSProperties = {
  display: "inline-block",
  border: "1px solid #DDDDDD",
  backgroundColor: "#FFFFFF",
  fontFamily: "'Barlow', system-ui, sans-serif",
  fontWeight: 600,
  fontSize: 11,
  color: "#555555",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  padding: "6px 12px",
  borderRadius: 0,
  whiteSpace: "nowrap",
};

function UpcomingChip() {
  return <span style={CHIP_BASE}>UPCOMING</span>;
}

function ResultChip() {
  return <span style={CHIP_BASE}>RESULT</span>;
}

function ScoreDisplay({ scoreA, scoreB }: { scoreA?: number; scoreB?: number }) {
  if (scoreA === undefined || scoreB === undefined) {
    return (
      <span
        style={{
          fontFamily: "'Barlow Condensed', system-ui, sans-serif",
          fontWeight: 700,
          fontSize: 18,
          color: "#DDDDDD",
        }}
      >
        VS
      </span>
    );
  }

  const aWins = scoreA > scoreB;
  const bWins = scoreB > scoreA;

  const boxStyle = (winner: boolean): React.CSSProperties => ({
    backgroundColor: winner ? "#1A3A6B" : "#D6E4F0",
    color: winner ? "#FFFFFF" : "#1A3A6B",
    fontFamily: "'Barlow Condensed', system-ui, sans-serif",
    fontWeight: 800,
    fontSize: 22,
    padding: "8px 14px",
    lineHeight: 1,
    display: "inline-block",
  });

  return (
    <div style={{ display: "flex", gap: 4, justifyContent: "center" }}>
      <div style={boxStyle(aWins)}>{scoreA}</div>
      <div style={boxStyle(bWins)}>{scoreB}</div>
    </div>
  );
}

// Slightly smaller score boxes for the expand panel (on navy bg)
function PanelScoreDisplay({ scoreA, scoreB }: { scoreA: number; scoreB: number }) {
  const aWins = scoreA > scoreB;
  const bWins = scoreB > scoreA;

  const boxStyle = (winner: boolean): React.CSSProperties => ({
    backgroundColor: winner ? "#FFFFFF" : "#D6E4F0",
    color: "#1A3A6B",
    fontFamily: "'Barlow Condensed', system-ui, sans-serif",
    fontWeight: 800,
    fontSize: 18,
    padding: "6px 12px",
    lineHeight: 1,
    display: "inline-block",
  });

  return (
    <div style={{ display: "flex", gap: 4 }}>
      <div style={boxStyle(aWins)}>{scoreA}</div>
      <div style={boxStyle(bWins)}>{scoreB}</div>
    </div>
  );
}

// ─── Expand panel ─────────────────────────────────────────────────────────────

function ExpandPanel({ fixture, onClose }: { fixture: Fixture; onClose: () => void }) {
  const embedUrl = fixture.highlightUrl ? getEmbedUrl(fixture.highlightUrl) : "";

  return (
    <div
      style={{
        backgroundColor: "#1A3A6B",
        padding: 24,
        display: "flex",
        gap: 24,
        position: "relative",
        alignItems: "flex-start",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close highlights"
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          width: 32,
          height: 32,
          backgroundColor: "rgba(255,255,255,0.15)",
          border: "none",
          color: "#FFFFFF",
          fontSize: 15,
          cursor: "pointer",
          borderRadius: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "background-color 0.15s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.30)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.15)";
        }}
      >
        ✕
      </button>

      {/* Left: YouTube embed — 60% width */}
      <div style={{ flex: "0 0 60%", position: "relative" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%", // 16:9 aspect ratio
            overflow: "hidden",
          }}
        >
          <iframe
            src={embedUrl}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${fixture.teamA} vs Mumbai Dreamers highlights`}
          />
        </div>
      </div>

      {/* Right: match meta — 40% width, with extra right padding to clear close button */}
      <div style={{ flex: "0 0 40%", paddingRight: 48, paddingTop: 4 }}>
        <span
          style={{
            display: "block",
            fontFamily: "'Barlow', system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 10,
            color: "#C8102E",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            marginBottom: 12,
          }}
        >
          MATCH HIGHLIGHTS
        </span>

        <h3
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: "#FFFFFF",
            textTransform: "uppercase",
            lineHeight: 1.1,
            margin: 0,
            marginBottom: 12,
          }}
        >
          {fixture.teamA === "TBC" ? "TBC" : fixture.teamA} VS MUMBAI DREAMERS
        </h3>

        <p
          style={{
            fontFamily: "'Barlow', system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            color: "rgba(255,255,255,0.65)",
            margin: 0,
            marginBottom: 16,
          }}
        >
          {fixture.date} · {fixture.time}
        </p>

        {fixture.scoreA !== undefined && fixture.scoreB !== undefined && (
          <div style={{ marginBottom: 12 }}>
            <PanelScoreDisplay scoreA={fixture.scoreA} scoreB={fixture.scoreB} />
          </div>
        )}

        <span
          style={{
            fontFamily: "'Barlow', system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            color: "rgba(255,255,255,0.40)",
          }}
        >
          {fixture.matchId}
        </span>
      </div>
    </div>
  );
}

// ─── Match row ────────────────────────────────────────────────────────────────

interface MatchRowProps {
  fixture: Fixture;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

function MatchRow({ fixture, isExpanded, onToggleExpand }: MatchRowProps) {
  const isPlayed = fixture.scoreA !== undefined && fixture.scoreB !== undefined;
  const isDimmed = fixture.isKnockout && !fixture.opponentConfirmed;

  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        opacity: isDimmed ? 0.45 : 1,
        borderBottom: "1px solid #DDDDDD",
      }}
    >
      {/* Grid row — 7 cols: [id] [team A name] [team A logo] [score] [team B logo] [team B name] [actions] */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px 1fr 64px 130px 64px 1fr 150px",
          alignItems: "center",
          padding: "20px 16px",
          backgroundColor: hovered ? "#FAFAFA" : "#FFFFFF",
          transition: "background-color 0.15s ease",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Col 1: ID + time */}
        <div>
          <div
            style={{
              fontFamily: "'Barlow', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 11,
              color: "#555555",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 4,
            }}
          >
            {fixture.matchId}
          </div>
          <div
            style={{
              fontFamily: "'Barlow', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: 13,
              color: "#1A1A1A",
            }}
          >
            {fixture.time}
          </div>
        </div>

        {/* Col 2: Team A name — right-aligned */}
        <div style={{ textAlign: "right", paddingRight: 12 }}>
          <span
            style={{
              fontFamily: "'Barlow', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              color: "#1A1A1A",
              textTransform: "uppercase",
            }}
          >
            {fixture.teamA}
          </span>
        </div>

        {/* Col 3: Team A logo — centred */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {fixture.teamALogo && (
            <div style={{ position: "relative", width: 48, height: 44, flexShrink: 0 }}>
              <Image
                src={urlFor(fixture.teamALogo).width(120).url()}
                alt={fixture.teamA}
                fill
                style={{ objectFit: "contain" }}
                sizes="48px"
              />
            </div>
          )}
        </div>

        {/* Col 4: Score — centred */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ScoreDisplay scoreA={fixture.scoreA} scoreB={fixture.scoreB} />
        </div>

        {/* Col 5: Team B logo — centred */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {fixture.teamBLogo && (
            <div style={{ position: "relative", width: 48, height: 44, flexShrink: 0 }}>
              <Image
                src={urlFor(fixture.teamBLogo).width(120).url()}
                alt={fixture.teamB}
                fill
                style={{ objectFit: "contain" }}
                sizes="48px"
              />
            </div>
          )}
        </div>

        {/* Col 6: Team B name — left-aligned, Mumbai Dreamers in red */}
        <div style={{ textAlign: "left", paddingLeft: 12 }}>
          <span
            style={{
              fontFamily: "'Barlow', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              color: fixture.teamB === "Mumbai Dreamers" ? "#C8102E" : "#1A1A1A",
              textTransform: "uppercase",
            }}
          >
            {fixture.teamB}
          </span>
        </div>

        {/* Col 7: Actions — right-aligned */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {isPlayed && fixture.highlightUrl ? (
            <button
              onClick={onToggleExpand}
              style={{
                backgroundColor: isExpanded ? "#0A1F45" : "#C8102E",
                color: "#FFFFFF",
                fontFamily: "'Barlow', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: "6px 14px",
                borderRadius: 0,
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background-color 0.15s ease",
              }}
            >
              ▶ HIGHLIGHTS
            </button>
          ) : isPlayed ? (
            <ResultChip />
          ) : (
            <UpcomingChip />
          )}
        </div>
      </div>

      {/* Inline expand panel — max-height animation */}
      <div
        style={{
          maxHeight: isExpanded ? 600 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        {isExpanded && <ExpandPanel fixture={fixture} onClose={onToggleExpand} />}
      </div>
    </div>
  );
}

// ─── Date group ───────────────────────────────────────────────────────────────

interface DateGroupProps {
  date: string;
  matches: Fixture[];
  expandedId: string | null;
  onToggle: (id: string) => void;
}

function DateGroup({ date, matches, expandedId, onToggle }: DateGroupProps) {
  const { dayName, rest } = parseDateLabel(date);

  return (
    <div>
      {/* Date header */}
      <div
        style={{
          backgroundColor: "#F5F5F5",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 13,
            color: "#1A3A6B",
            textTransform: "uppercase",
          }}
        >
          {dayName}
        </span>
        <span
          style={{
            fontFamily: "'Barlow', system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            color: "#555555",
          }}
        >
          · {rest}
        </span>
      </div>

      {/* Matches */}
      {matches.map((m) => (
        <MatchRow
          key={m._id}
          fixture={m}
          isExpanded={expandedId === m._id}
          onToggleExpand={() => onToggle(m._id)}
        />
      ))}
    </div>
  );
}

// ─── Main exported component ──────────────────────────────────────────────────

interface FixturesContentProps {
  mensFixtures: Fixture[];
  womensFixtures: Fixture[];
}

export default function FixturesContent({ mensFixtures, womensFixtures }: FixturesContentProps) {
  const [activeTeam, setActiveTeam] = useState<"mens" | "womens">("mens");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fixtures = activeTeam === "mens" ? mensFixtures : womensFixtures;
  const groups = groupByDate(fixtures);

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleTeamChange = (team: "mens" | "womens") => {
    setActiveTeam(team);
    setExpandedId(null); // close any open panel when switching teams
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Page Header — paddingTop: 72 design + 65 nav clearance = 137 */}
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
          RPL SEASON 2
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
            marginBottom: 16,
          }}
        >
          FIXTURES &amp; RESULTS
        </h1>

        <p
          style={{
            fontFamily: "'Barlow', system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            margin: 0,
          }}
        >
          16–28 June 2026 · Gachibowli Stadium, Hyderabad · All times IST
        </p>
      </div>

      {/* Rugby Ball Toggle */}
      <div
        style={{
          textAlign: "center",
          marginTop: 40,
          marginBottom: 40,
        }}
      >
        <RugbyBallToggle value={activeTeam} onChange={handleTeamChange} />
      </div>

      {/* Fixture list */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 0,
          paddingBottom: 48,
        }}
      >
        {groups.length > 0 ? (
          <div
            style={{
              border: "1px solid #DDDDDD",
              borderRadius: 0,
              overflow: "hidden",
            }}
          >
            {groups.map((g) => (
              <DateGroup
                key={g.date}
                date={g.date}
                matches={g.matches}
                expandedId={expandedId}
                onToggle={handleToggle}
              />
            ))}
          </div>
        ) : (
          <p
            style={{
              textAlign: "center",
              fontFamily: "'Barlow', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: 15,
              color: "#555555",
              paddingTop: 40,
            }}
          >
            Fixtures will be published closer to the season.
          </p>
        )}
      </div>
    </div>
  );
}
