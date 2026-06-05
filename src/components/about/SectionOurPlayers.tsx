"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { SanityImage } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity";

interface SectionOurPlayersProps {
  content?: any;
  playersPhoto?: SanityImage;
}

export default function SectionOurPlayers({ content, playersPhoto }: SectionOurPlayersProps) {
  const textRef = useScrollReveal<HTMLDivElement>({ direction: "right" });

  const heading = content?.playersHeading || "OUR PLAYERS";
  const title = content?.playersTitle || "THE DREAMERS";
  const description = content?.playersDescription || "Men and women who represent Mumbai with pride. Local talent, international stars — united by the Dreamers badge.";

  const imageSrc = content?.playersPhoto
    ? urlFor(content.playersPhoto).width(1080).url()
    : playersPhoto
    ? urlFor(playersPhoto).width(1080).url()
    : "/assets/about-players.png";

  return (
    <section
      aria-label="Our Players"
      style={{ display: "flex", minHeight: 480 }}
    >
      {/* Left panel — photography */}
      <div style={{ flex: "0 0 54%", position: "relative", overflow: "hidden" }}>
        <Image
          src={imageSrc}
          alt="Mumbai Dreamers players in action"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="54vw"
        />
      </div>

      {/* Right panel — Red */}
      <div
        style={{
          flex: "0 0 46%",
          backgroundColor: "#C8102E",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          ref={textRef}
          style={{
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
              maxWidth: 360,
              margin: 0,
              marginBottom: 32,
            }}
          >
            {description}
          </p>
          <Link
            href="/squad"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "'Barlow', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#C8102E",
              backgroundColor: "#FFFFFF",
              padding: "14px 28px",
              borderRadius: 0,
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            VIEW SQUAD →
          </Link>
        </div>
      </div>
    </section>
  );
}
