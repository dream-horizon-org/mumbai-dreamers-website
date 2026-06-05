"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Player } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity";
import { GlowCard } from "@/components/ui/SpotlightCard";

const CARD_WIDTH = 200;
const CARD_GAP = 24;
const CARD_SLOT = CARD_WIDTH + CARD_GAP; // 224px per card
const PLACEHOLDER = "/assets/placeholder-player.png";

const STARBURST_BG =
  "repeating-linear-gradient(45deg, #C8102E 0px, #C8102E 1.5px, transparent 1.5px, transparent 14px)";

interface PlayerCardProps {
  player: Player;
  isFlipped: boolean;
  isDimmed: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function FlagOrPlaceholder({ countryCode }: { countryCode: string }) {
  if (!countryCode || countryCode === "tbc") {
    return (
      <div
        style={{
          width: 28,
          height: 20,
          backgroundColor: "#DDDDDD",
          borderRadius: 2,
          flexShrink: 0,
        }}
      />
    );
  }
  return (
    <span
      className={`fi fi-${countryCode}`}
      style={{
        width: 28,
        height: 20,
        display: "inline-block",
        borderRadius: 2,
        flexShrink: 0,
        backgroundSize: "cover",
      }}
      aria-label={countryCode}
    />
  );
}

function PlayerCard({ player, isFlipped, isDimmed, onMouseEnter, onMouseLeave }: PlayerCardProps) {
  const photoSrc = player.photo ? urlFor(player.photo).width(400).url() : (player.photoUrl || PLACEHOLDER);
  const cartoonSrc = player.cartoon ? urlFor(player.cartoon).width(400).url() : (player.cartoonUrl || PLACEHOLDER);

  return (
    <div
      style={{
        width: CARD_WIDTH,
        flexShrink: 0,
        marginRight: CARD_GAP,
        perspective: 1000,
        cursor: "pointer",
        transition: "transform 0.3s ease, opacity 0.3s ease",
        transform: isDimmed ? "scale(0.91)" : "scale(1)",
        opacity: isDimmed ? 0.45 : 1,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* SpotlightCard wraps the flip container — glow follows cursor */}
      <GlowCard
        customSize={true}
        width={CARD_WIDTH}
        height={280}
        className="!block !p-0 !gap-0 !shadow-none !backdrop-blur-none !rounded-none"
      >
      {/* 3D flip wrapper */}
      <div
        style={{
          position: "relative",
          width: CARD_WIDTH,
          height: 280,
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          borderRadius: 12,
        }}
      >
        {/* ── FRONT FACE ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: 12,
            border: "1px solid #DDDDDD",
            backgroundColor: "#FFFFFF",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Upper area: photo + starburst pattern */}
          <div style={{ position: "relative", flex: "0 0 65%", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, backgroundColor: "#F0F0F0" }} />
            {/* Starburst at 8% opacity */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: STARBURST_BG,
                opacity: 0.08,
              }}
            />
            {/* Player photo */}
            <Image
              src={photoSrc}
              alt={player.name}
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="200px"
            />
          </div>

          {/* Bottom info bar */}
          <div
            style={{
              flex: "0 0 35%",
              borderTop: "2.5px solid #C8102E",
              padding: "10px 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: "#1A3A6B",
                textTransform: "uppercase",
                letterSpacing: "0.03em",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                marginRight: 6,
              }}
            >
              {player.name}
            </span>
            <FlagOrPlaceholder countryCode={player.countryCode} />
          </div>
        </div>

        {/* ── BACK FACE ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 12,
            backgroundColor: "#1A3A6B",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Cartoon illustration area */}
          <div style={{ flex: "1 1 0%", position: "relative", overflow: "hidden" }}>
            <Image
              src={cartoonSrc}
              alt={`${player.name} illustration`}
              fill
              style={{ objectFit: "cover" }}
              sizes="200px"
            />
          </div>

          {/* Horizontal divider */}
          <div
            style={{
              height: 1,
              backgroundColor: "rgba(255,255,255,0.18)",
              marginLeft: 12,
              marginRight: 12,
            }}
          />

          {/* Stats row: AGE | POSITION */}
          <div
            style={{
              flex: "0 0 96px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* AGE */}
            <div style={{ flex: 1, padding: "10px 8px", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Barlow', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 10,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: 6,
                }}
              >
                AGE
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 22,
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}
              >
                {player.age > 0 ? player.age : "—"}
              </div>
            </div>

            {/* Vertical divider */}
            <div
              style={{
                width: 1,
                height: 40,
                backgroundColor: "rgba(255,255,255,0.18)",
              }}
            />

            {/* POSITION */}
            <div style={{ flex: 1, padding: "10px 8px", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Barlow', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 10,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: 6,
                }}
              >
                POSITION
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}
              >
                {player.position || "TBC"}
              </div>
            </div>
          </div>
        </div>
      </div>
      </GlowCard>
    </div>
  );
}

interface PlayerCarouselProps {
  players: Player[];
}

export default function PlayerCarousel({ players }: PlayerCarouselProps) {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const translateX = useRef(0);
  const isPaused = useRef(false);
  const touchStartX = useRef(0);
  const setWidthRef = useRef(players.length * CARD_SLOT);

  // Keep setWidth in sync if player count ever changes
  useEffect(() => {
    setWidthRef.current = players.length * CARD_SLOT;
  }, [players.length]);

  // rAF conveyor belt — direct DOM mutation for smooth 60fps
  useEffect(() => {
    let rafId: number;
    const loop = () => {
      if (!isPaused.current && trackRef.current) {
        translateX.current -= 0.5;
        if (translateX.current <= -setWidthRef.current) {
          translateX.current += setWidthRef.current;
        }
        trackRef.current.style.transform = `translateX(${translateX.current}px)`;
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  if (players.length === 0) return null;

  const cardIndices = Array.from({ length: players.length }, (_, i) => i);

  const handleEnter = (key: string) => {
    isPaused.current = true;
    setHoveredKey(key);
  };

  const handleLeave = () => {
    isPaused.current = false;
    setHoveredKey(null);
  };

  return (
    <div
      className="w-full overflow-hidden"
      aria-label="Player squad carousel"
    >
      <div
        ref={trackRef}
        className="flex"
        style={{ willChange: "transform" }}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
          isPaused.current = true;
        }}
        onTouchMove={(e) => {
          const currentX = e.touches[0].clientX;
          const delta = touchStartX.current - currentX;
          translateX.current -= delta;
          touchStartX.current = currentX;
          const sw = setWidthRef.current;
          if (translateX.current <= -sw) translateX.current += sw;
          if (translateX.current > 0) translateX.current -= sw;
          if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${translateX.current}px)`;
          }
        }}
        onTouchEnd={() => {
          isPaused.current = false;
        }}
      >
        {/* Triple-duplicated sets for seamless infinite loop */}
        {[0, 1, 2].flatMap((copyIdx) =>
          cardIndices.map((cardIdx) => {
            const key = `${cardIdx}-${copyIdx}`;
            return (
              <PlayerCard
                key={key}
                player={players[cardIdx]}
                isFlipped={hoveredKey === key}
                isDimmed={hoveredKey !== null && hoveredKey !== key}
                onMouseEnter={() => handleEnter(key)}
                onMouseLeave={handleLeave}
              />
            );
          }),
        )}
      </div>
    </div>
  );
}
