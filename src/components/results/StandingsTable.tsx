"use client";

import Image from "next/image";
import type { StandingsEntry } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity";

interface StandingsTableProps {
  entries: StandingsEntry[];
}

export default function StandingsTable({ entries }: StandingsTableProps) {
  if (entries.length === 0) {
    return (
      <div style={{ border: "1px solid #DDDDDD", overflow: "hidden" }}>
        <p
          style={{
            textAlign: "center",
            fontFamily: "'Barlow', system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            color: "#555555",
            padding: "40px 16px",
            margin: 0,
          }}
        >
          Standings will be published once the season begins.
        </p>
      </div>
    );
  }

  const gridColumns = "52px 1fr 80px 110px 80px 80px 80px";

  const headerCellBase: React.CSSProperties = {
    fontFamily: "'Barlow', system-ui, sans-serif",
    fontWeight: 600,
    fontSize: 11,
    color: "#FFFFFF",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  };

  return (
    <div className="lg:border lg:border-gray-300" style={{ border: "1px solid #DDDDDD", overflow: "hidden" }}>
      {/* Mobile scroll wrapper */}
      <div className="lg:hidden overflow-x-auto">
        <div style={{ minWidth: "600px" }}>
          {/* Header row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: gridColumns,
              backgroundColor: "#C8102E",
              padding: "14px 16px",
              alignItems: "center",
            }}
          >
            <div style={{ ...headerCellBase, textAlign: "left" }}>POS</div>
            <div style={{ ...headerCellBase, textAlign: "left" }}>TEAM</div>
            <div style={{ ...headerCellBase, textAlign: "center" }}>MP</div>
            <div style={{ ...headerCellBase, textAlign: "center" }}>W-D-L</div>
            <div style={{ ...headerCellBase, textAlign: "center" }}>SD</div>
            <div style={{ ...headerCellBase, textAlign: "center" }}>BP</div>
            <div style={{ ...headerCellBase, textAlign: "center" }}>PT</div>
          </div>

          {/* Data rows */}
          {entries.map((entry) => {
            const isMumbai =
              entry.teamName?.toLowerCase().includes("mumbai dreamers");

            const sdColor =
              entry.scoreDifference > 0
                ? "#1A6B1A"
                : entry.scoreDifference < 0
                ? "#C8102E"
                : "#1A1A1A";

            const sdLabel =
              entry.scoreDifference > 0
                ? `+${entry.scoreDifference}`
                : String(entry.scoreDifference);

            return (
              <div
                key={entry._id}
                style={{
                  display: "grid",
                  gridTemplateColumns: gridColumns,
                  alignItems: "center",
                  padding: "16px 16px",
                  backgroundColor: isMumbai ? "#FFF5F5" : "#FFFFFF",
                  borderLeft: isMumbai
                    ? "3px solid #C8102E"
                    : "3px solid transparent",
                  borderBottom: "1px solid #DDDDDD",
                }}
              >
                {/* POS */}
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#1A3A6B",
                  }}
                >
                  {entry.position}
                </div>

                {/* TEAM */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    alignItems: "center",
                  }}
                >
                  {entry.teamLogo ? (
                    <div
                      style={{
                        position: "relative",
                        width: 40,
                        height: 36,
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={urlFor(entry.teamLogo).width(80).url()}
                        alt={entry.teamName ?? "Team logo"}
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="40px"
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        width: 40,
                        height: 36,
                        flexShrink: 0,
                        backgroundColor: "#F0F0F0",
                      }}
                    />
                  )}
                  <span
                    style={{
                      fontFamily: "'Barlow', system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      textTransform: "uppercase",
                      letterSpacing: "0.02em",
                      color: isMumbai ? "#C8102E" : "#1A1A1A",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {entry.teamName}
                  </span>
                </div>

                {/* MP */}
                <div
                  style={{
                    fontFamily: "'Barlow', system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    color: "#1A1A1A",
                    textAlign: "center",
                  }}
                >
                  {entry.matchesPlayed}
                </div>

                {/* W-D-L */}
                <div
                  style={{
                    fontFamily: "'Barlow', system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    color: "#1A1A1A",
                    textAlign: "center",
                  }}
                >
                  {entry.wins}-{entry.draws}-{entry.losses}
                </div>

                {/* SD */}
                <div
                  style={{
                    fontFamily: "'Barlow', system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    color: sdColor,
                    textAlign: "center",
                  }}
                >
                  {sdLabel}
                </div>

                {/* BP */}
                <div
                  style={{
                    fontFamily: "'Barlow', system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    color: "#1A1A1A",
                    textAlign: "center",
                  }}
                >
                  {entry.bonusPoints}
                </div>

                {/* PT */}
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "#1A3A6B",
                    textAlign: "center",
                  }}
                >
                  {entry.points}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop version (non-scrollable) */}
      <div className="hidden lg:block">
        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridColumns,
            backgroundColor: "#C8102E",
            padding: "14px 16px",
            alignItems: "center",
          }}
        >
          <div style={{ ...headerCellBase, textAlign: "left" }}>POS</div>
          <div style={{ ...headerCellBase, textAlign: "left" }}>TEAM</div>
          <div style={{ ...headerCellBase, textAlign: "center" }}>MP</div>
          <div style={{ ...headerCellBase, textAlign: "center" }}>W-D-L</div>
          <div style={{ ...headerCellBase, textAlign: "center" }}>SD</div>
          <div style={{ ...headerCellBase, textAlign: "center" }}>BP</div>
          <div style={{ ...headerCellBase, textAlign: "center" }}>PT</div>
        </div>

        {/* Data rows */}
        {entries.map((entry) => {
        const isMumbai =
          entry.teamName?.toLowerCase().includes("mumbai dreamers");

        const sdColor =
          entry.scoreDifference > 0
            ? "#1A6B1A"
            : entry.scoreDifference < 0
            ? "#C8102E"
            : "#1A1A1A";

        const sdLabel =
          entry.scoreDifference > 0
            ? `+${entry.scoreDifference}`
            : String(entry.scoreDifference);

        return (
          <div
            key={entry._id}
            style={{
              display: "grid",
              gridTemplateColumns: gridColumns,
              alignItems: "center",
              padding: "16px 16px",
              backgroundColor: isMumbai ? "#FFF5F5" : "#FFFFFF",
              borderLeft: isMumbai
                ? "3px solid #C8102E"
                : "3px solid transparent",
              borderBottom: "1px solid #DDDDDD",
            }}
          >
            {/* POS */}
            <div
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#1A3A6B",
              }}
            >
              {entry.position}
            </div>

            {/* TEAM */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              {entry.teamLogo ? (
                <div
                  style={{
                    position: "relative",
                    width: 40,
                    height: 36,
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={urlFor(entry.teamLogo).width(80).url()}
                    alt={entry.teamName ?? "Team logo"}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="40px"
                  />
                </div>
              ) : (
                <div
                  style={{
                    width: 40,
                    height: 36,
                    flexShrink: 0,
                    backgroundColor: "#F0F0F0",
                  }}
                />
              )}
              <span
                style={{
                  fontFamily: "'Barlow', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  color: isMumbai ? "#C8102E" : "#1A1A1A",
                }}
              >
                {entry.teamName}
              </span>
            </div>

            {/* MP */}
            <div
              style={{
                fontFamily: "'Barlow', system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                color: "#1A1A1A",
                textAlign: "center",
              }}
            >
              {entry.matchesPlayed}
            </div>

            {/* W-D-L */}
            <div
              style={{
                fontFamily: "'Barlow', system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                color: "#1A1A1A",
                textAlign: "center",
              }}
            >
              {entry.wins}-{entry.draws}-{entry.losses}
            </div>

            {/* SD */}
            <div
              style={{
                fontFamily: "'Barlow', system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                color: sdColor,
                textAlign: "center",
              }}
            >
              {sdLabel}
            </div>

            {/* BP */}
            <div
              style={{
                fontFamily: "'Barlow', system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                color: "#1A1A1A",
                textAlign: "center",
              }}
            >
              {entry.bonusPoints}
            </div>

            {/* PT */}
            <div
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: "#1A3A6B",
                textAlign: "center",
              }}
            >
              {entry.points}
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
