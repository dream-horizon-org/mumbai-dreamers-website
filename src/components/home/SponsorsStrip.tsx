"use client";

import type { Sponsor } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity";

interface SponsorsStripProps {
  sponsors: Sponsor[];
}

export default function SponsorsStrip({ sponsors }: SponsorsStripProps) {
  if (sponsors.length === 0) return null;

  return (
    <section
      aria-label="Our sponsors"
      style={{
        backgroundColor: "#F5F5F5",
        paddingTop: 56,
        paddingBottom: 56,
        borderTop: "1px solid #DDDDDD",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
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
            OUR PARTNERS
          </span>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: 38,
              color: "#1A3A6B",
              textTransform: "uppercase",
              lineHeight: 1,
              margin: 0,
            }}
          >
            BACKED BY THE BEST
          </h2>
        </div>

        {/* Sponsor logos */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 32,
          }}
        >
          {sponsors.map((sponsor) => (
            <SponsorSlot key={sponsor._id} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SponsorSlot({ sponsor }: { sponsor: Sponsor }) {
  const logoSrc = sponsor.logo ? urlFor(sponsor.logo).width(320).url() : null;

  const inner = (
    <div
      title={sponsor.name}
      style={{
        width: 160,
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: "grayscale(100%) opacity(0.55)",
        transition: "filter 0.25s ease",
        cursor: sponsor.linkUrl ? "pointer" : "default",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.filter = "grayscale(0%) opacity(1)";
        const label = (e.currentTarget as HTMLDivElement).querySelector<HTMLSpanElement>("[data-label]");
        if (label) label.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.filter = "grayscale(100%) opacity(0.55)";
        const label = (e.currentTarget as HTMLDivElement).querySelector<HTMLSpanElement>("[data-label]");
        if (label) label.style.opacity = "0";
      }}
    >
      {logoSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoSrc}
          alt={sponsor.name}
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#DDDDDD",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Barlow', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 11,
              color: "#555555",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            {sponsor.name}
          </span>
        </div>
      )}

      {/* Fade-in name + category on hover */}
      <span
        data-label
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -20,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Barlow', system-ui, sans-serif",
          fontWeight: 600,
          fontSize: 10,
          color: "#555555",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          whiteSpace: "nowrap",
          opacity: 0,
          transition: "opacity 0.2s ease",
          pointerEvents: "none",
        }}
      >
        {sponsor.categoryLabel ? `${sponsor.name} · ${sponsor.categoryLabel}` : sponsor.name}
      </span>
    </div>
  );

  if (sponsor.linkUrl) {
    return (
      <a href={sponsor.linkUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        {inner}
      </a>
    );
  }

  return inner;
}
