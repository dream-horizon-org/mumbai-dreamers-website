"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionOurIdentityProps {
  content?: {
    identityHeading?: string;
    identityTitle?: string;
    identityDescription?: string;
  };
}

export default function SectionOurIdentity({ content }: SectionOurIdentityProps) {
  const textRef = useScrollReveal<HTMLDivElement>({ direction: "up" });

  const heading = content?.identityHeading || "OUR IDENTITY";
  const title = content?.identityTitle || "MORE THAN A TEAM";
  const description = content?.identityDescription || "We are the heartbeat of Mumbai rugby. A team that carries the dreams of a city, the backing of India's greatest sports platform, and the ambition to put Indian rugby on the world map.";

  return (
    <section aria-label="Our Identity">
      {/* Centred copy block */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          paddingTop: 80,
          paddingBottom: 80,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <div
          ref={textRef}
          style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}
        >
          <span
            style={{
              display: "block",
              fontFamily: "'Barlow Condensed', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: 11,
              color: "#C8102E",
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
              color: "#1A3A6B",
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
              fontSize: 16,
              color: "#1A1A1A",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Full-width skyline band */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/mumbai-skyline.png"
        alt="Mumbai skyline"
        style={{ display: "block", width: "100%", height: "auto" }}
      />
    </section>
  );
}
