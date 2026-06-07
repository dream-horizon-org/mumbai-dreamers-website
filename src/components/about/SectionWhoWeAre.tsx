"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { SanityImage } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity";

interface SectionWhoWeAreProps {
  content?: {
    whoWeAreHeading?: string;
    whoWeAreTitle?: string;
    whoWeAreDescription?: string;
    whoWeArePhoto?: SanityImage;
  };
  whoWeArePhoto?: SanityImage;
}

export default function SectionWhoWeAre({ content, whoWeArePhoto }: SectionWhoWeAreProps) {
  const textRef = useScrollReveal<HTMLDivElement>({ direction: "left" });

  const heading = content?.whoWeAreHeading || "WHO WE ARE";
  const title = content?.whoWeAreTitle || "BORN TO DREAM";
  const description = content?.whoWeAreDescription || "Mumbai Dreamers is Mumbai's rugby team — backed by Dream Sports, built for fans, and driven by a city that never stops dreaming. We compete in the Rugby Premier League representing the spirit, energy, and ambition of Aamchi Mumbai.";

  const imageSrc = content?.whoWeArePhoto
    ? urlFor(content.whoWeArePhoto).width(1040).url()
    : whoWeArePhoto
    ? urlFor(whoWeArePhoto).width(1040).url()
    : "/assets/about-who-we-are.png";

  return (
    <section
      aria-label="Who We Are"
      style={{ display: "flex", minHeight: 480 }}
    >
      {/* Left panel — Red */}
      <div
        style={{
          flex: "0 0 48%",
          backgroundColor: "#C8102E",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Ghost watermark */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          <span
            style={{
              fontFamily: "'Barlow Condensed', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: 220,
              color: "rgba(255,255,255,0.06)",
              lineHeight: 1,
              letterSpacing: "-0.05em",
            }}
          >
            MD
          </span>
        </div>

        {/* Text content */}
        <div
          ref={textRef}
          style={{
            position: "relative",
            zIndex: 1,
            paddingLeft: 48,
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
              color: "rgba(255,255,255,0.70)",
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
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
              maxWidth: 380,
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Right panel — photography */}
      <div style={{ flex: "0 0 52%", position: "relative", overflow: "hidden" }}>
        <Image
          src={imageSrc}
          alt="Mumbai Dreamers team"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="52vw"
        />
      </div>
    </section>
  );
}
