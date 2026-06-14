"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Diagonal line pattern — fills the panel at very low opacity
function DiagonalPattern() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="diag" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <line x1="0" y1="20" x2="20" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diag)" />
    </svg>
  );
}

interface SectionVisionProps {
  content?: {
    visionHeading?: string;
    visionTitle?: string;
    visionDescription?: string;
  } | null;
}

export default function SectionVision({ content }: SectionVisionProps) {
  const leftRef  = useScrollReveal<HTMLDivElement>({ direction: "left" });
  const rightRef = useScrollReveal<HTMLDivElement>({ direction: "right" });

  const heading = content?.visionHeading || "OUR VISION";
  const title = content?.visionTitle || "DREAM BIGGER";
  const description = content?.visionDescription || "To be the team that puts Mumbai and India on the global rugby map. To inspire the next generation of Indian rugby players. To build something that lasts beyond any single season.";

  const ctaBase: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "'Barlow', system-ui, sans-serif",
    fontWeight: 600,
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    padding: "14px 28px",
    borderRadius: 0,
    textDecoration: "none",
    transition: "opacity 0.2s ease",
  };

  return (
    <section
      aria-label="Our Vision and Dream Big With Us"
      className="flex flex-col lg:flex-row"
      style={{ minHeight: 360 }}
    >
      {/* Left panel — Navy */}
      <div
        className="w-full lg:flex-[0_0_50%]"
        style={{
          backgroundColor: "#1A3A6B",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          minHeight: 300,
        }}
      >
        <DiagonalPattern />
        <div
          ref={leftRef}
          style={{
            position: "relative",
            zIndex: 1,
            paddingLeft: 56,
            paddingRight: 40,
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
              color: "rgba(255,255,255,0.50)",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: 14,
            }}
          >
            {heading}
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
              marginBottom: 20,
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontFamily: "'Barlow', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: 15,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
              maxWidth: 400,
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Right panel — Red */}
      <div
        className="w-full lg:flex-[0_0_50%]"
        style={{
          backgroundColor: "#C8102E",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          minHeight: 300,
        }}
      >
        <DiagonalPattern />
        <div
          ref={rightRef}
          style={{
            position: "relative",
            zIndex: 1,
            paddingLeft: 56,
            paddingRight: 40,
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
              color: "rgba(255,255,255,0.50)",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: 14,
            }}
          >
            PARTNER WITH US
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
              marginBottom: 20,
            }}
          >
            DREAM BIG WITH US
          </h2>
          <p
            style={{
              fontFamily: "'Barlow', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: 15,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
              maxWidth: 400,
              margin: 0,
              marginBottom: 32,
            }}
          >
            Join the Mumbai Dreamers family as a partner. Reach millions of
            passionate rugby and sports fans across India. Be part of the dream
            from the very beginning.
          </p>
          <Link
            href="/contact"
            style={{ ...ctaBase, color: "#C8102E", backgroundColor: "#FFFFFF" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            GET IN TOUCH →
          </Link>
        </div>
      </div>
    </section>
  );
}
