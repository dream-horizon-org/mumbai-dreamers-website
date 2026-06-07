"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { SanityImage } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity";

interface SectionCoachingLeadershipProps {
  content?: {
    coachingHeading?: string;
    coachingTitle?: string;
    coachingDescription?: string;
    coachingCtaText?: string;
    coachingCtaLink?: string;
    coachingPhoto?: SanityImage;
  };
  coachingPhoto?: SanityImage;
}

export default function SectionCoachingLeadership({ content, coachingPhoto }: SectionCoachingLeadershipProps) {
  const textRef = useScrollReveal<HTMLDivElement>({ direction: "left" });

  const heading = content?.coachingHeading || "COACHING LEADERSHIP";
  const title = content?.coachingTitle || "LED BY THE BEST";
  const description = content?.coachingDescription || "Our coaching staff bring international experience and a deep understanding of what it takes to win at the highest level. Olympic medallists & World Champions - Phillip Snyman & Renfred Dazel from South Africa will be guiding Mumbai Dreamers on and off the field.";
  const ctaText = content?.coachingCtaText || "VIEW SQUAD →";

  const imageSrc = content?.coachingPhoto
    ? urlFor(content.coachingPhoto).width(1080).url()
    : coachingPhoto
    ? urlFor(coachingPhoto).width(1080).url()
    : "/assets/about-coaching.png";

  return (
    <section
      aria-label="Coaching Leadership"
      style={{ display: "flex", minHeight: 480 }}
    >
      {/* Left panel — Navy */}
      <div
        style={{
          flex: "0 0 46%",
          backgroundColor: "#1A3A6B",
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
              color: "rgba(255,255,255,0.80)",
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
              color: "#1A3A6B",
              backgroundColor: "#FFFFFF",
              padding: "14px 28px",
              borderRadius: 0,
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            {ctaText}
          </Link>
        </div>
      </div>

      {/* Right panel — photography */}
      <div style={{ flex: "0 0 54%", position: "relative", overflow: "hidden" }}>
        <Image
          src={imageSrc}
          alt="Mumbai Dreamers coaching staff"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="54vw"
        />
      </div>
    </section>
  );
}
