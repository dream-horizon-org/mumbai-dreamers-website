"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { HeroSlide } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity";

interface HeroCarouselProps {
  slides: HeroSlide[];
  defaultCtaLabel: string;
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

export default function HeroCarousel({ slides, defaultCtaLabel }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  if (slides.length === 0) {
    return (
      <section
        className="relative h-screen w-full overflow-hidden"
        style={{ backgroundColor: "#0D1B3E" }}
        aria-label="Hero"
      >
        <Image
          src="/assets/hero-men.png"
          alt="Mumbai Dreamers"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(13,27,62,0.88) 0%, rgba(13,27,62,0.65) 40%, rgba(13,27,62,0.20) 70%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-12">
            <div className="w-full space-y-6 lg:max-w-[55%]">
              <div className="flex items-center gap-3">
                <span
                  className="flex-shrink-0 bg-red"
                  style={{ width: 3, height: 18 }}
                  aria-hidden="true"
                />
                <span
                  className="font-barlow font-semibold uppercase text-white"
                  style={{ fontSize: 12, letterSpacing: "0.2em" }}
                >
                  RPL SEASON 2
                </span>
              </div>
              <h2
                className="font-barlow-condensed font-extrabold uppercase text-white leading-none"
                style={{ fontSize: "clamp(48px, 6vw, 72px)" }}
              >
                DREAM BIG.<br />PLAY BOLD.
              </h2>
              <p
                className="font-barlow font-normal text-white/65"
                style={{ fontSize: 16 }}
              >
                Mumbai&apos;s finest take the field. Season 2 is coming.
              </p>
              <Link
                href="/squad"
                className="inline-flex items-center gap-3 bg-red text-white font-barlow font-semibold uppercase transition-opacity hover:opacity-90"
                style={{ fontSize: 14, letterSpacing: "0.08em", padding: "18px 32px", borderRadius: 0 }}
              >
                {defaultCtaLabel}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const goTo = (index: number) => setCurrent(index);
  const goPrev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#0D1B3E" }}
      aria-label="Hero carousel"
    >
      {slides.map((slide, i) => {
        const ctaLabel = slide.ctaLabel || defaultCtaLabel;
        const imageSrc = urlFor(slide.image).width(1920).url();

        return (
          <div
            key={slide._id}
            aria-hidden={i !== current}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Background image */}
            <Image
              src={imageSrc}
              alt={slide.imageAlt || slide.headline}
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="100vw"
            />

            {/* Gradient overlay: dark on left → transparent on right */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(13,27,62,0.88) 0%, rgba(13,27,62,0.65) 40%, rgba(13,27,62,0.20) 70%, transparent 100%)",
              }}
            />

            {/* Slide content — vertically centred, left-aligned, left 55% */}
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-12">
                <div className="w-full space-y-6 lg:max-w-[55%]">
                  {/* Tag line with vertical red bar prefix */}
                  <div className="flex items-center gap-3">
                    <span
                      className="flex-shrink-0 bg-red"
                      style={{ width: 3, height: 18 }}
                      aria-hidden="true"
                    />
                    <span
                      className="font-barlow font-semibold uppercase text-white"
                      style={{ fontSize: 12, letterSpacing: "0.2em" }}
                    >
                      {slide.tagLine}
                    </span>
                  </div>

                  {/* Headline */}
                  <h2
                    className="font-barlow-condensed font-extrabold uppercase text-white leading-none"
                    style={{ fontSize: "clamp(48px, 6vw, 72px)" }}
                  >
                    {slide.headline}
                  </h2>

                  {/* Sub-line */}
                  <p
                    className="font-barlow font-normal text-white/65"
                    style={{ fontSize: 16 }}
                  >
                    {slide.subLine}
                  </p>

                  {/* CTA button */}
                  <Link
                    href={slide.ctaHref}
                    className="inline-flex items-center gap-3 bg-red text-white font-barlow font-semibold uppercase transition-opacity hover:opacity-90"
                    style={{
                      fontSize: 14,
                      letterSpacing: "0.08em",
                      padding: "18px 32px",
                      borderRadius: 0,
                    }}
                  >
                    {ctaLabel}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Dot/dash indicators — bottom-left */}
      <div
        className="absolute left-10 flex items-center"
        style={{ bottom: 40, gap: 6 }}
        role="tablist"
        aria-label="Carousel slides"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className="transition-all duration-300 ease-in-out p-0 border-0 cursor-pointer"
            style={{
              width: i === current ? 24 : 8,
              height: 3,
              backgroundColor:
                i === current ? "#C8102E" : "rgba(255,255,255,0.40)",
              borderRadius: 0,
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      {/* Prev/Next arrow buttons — bottom-right */}
      <div
        className="absolute flex items-center"
        style={{ bottom: 40, right: 40, gap: 12 }}
      >
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="flex h-12 w-12 items-center justify-center rounded-none text-white transition-colors bg-white/15 hover:bg-white/30"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={goNext}
          aria-label="Next slide"
          className="flex h-12 w-12 items-center justify-center rounded-none text-white transition-colors bg-white/15 hover:bg-white/30"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Featured Stories hint — bottom-centre */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ bottom: 32, gap: 4 }}
      >
        <span
          className="font-barlow font-semibold uppercase"
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.15em",
          }}
        >
          Featured Stories →
        </span>
        <span
          className="chevron-bounce"
          aria-hidden="true"
          style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}
        >
          ↓
        </span>
      </div>
    </section>
  );
}
