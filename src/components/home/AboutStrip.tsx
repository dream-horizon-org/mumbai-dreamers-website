import Image from "next/image";
import Link from "next/link";
import type { SanityImage } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity";

interface PanelProps {
  imageSrc: string;
  imageAlt: string;
  label: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: "red" | "white";
}

interface AboutStripProps {
  mensPhoto?: SanityImage;
  womensPhoto?: SanityImage;
}

function Panel({
  imageSrc,
  imageAlt,
  label,
  headline,
  body,
  ctaLabel,
  ctaHref,
  ctaVariant,
}: PanelProps) {
  return (
    <div className="relative flex min-h-[480px] items-center overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        sizes="50vw"
      />

      {/* Gradient: dark at bottom-left, transparent toward top-right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top right, rgba(13,27,62,0.85) 0%, rgba(13,27,62,0.55) 45%, rgba(13,27,62,0.10) 100%)",
        }}
      />

      {/* Text content — left side, vertically centred */}
      <div
        className="relative z-10 py-16"
        style={{ paddingLeft: 48, paddingRight: 24 }}
      >
        <span
          className="mb-3 block font-barlow-condensed font-bold uppercase text-red"
          style={{ fontSize: 11, letterSpacing: "0.2em" }}
        >
          {label}
        </span>
        <h2
          className="mb-4 font-barlow-condensed font-extrabold uppercase text-white"
          style={{ fontSize: 40, lineHeight: 1 }}
        >
          {headline}
        </h2>
        <p
          className="mb-8 font-barlow font-normal text-white/75"
          style={{ fontSize: 14, maxWidth: 300, lineHeight: 1.65 }}
        >
          {body}
        </p>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 font-barlow font-semibold uppercase transition-opacity hover:opacity-90"
          style={{
            fontSize: 13,
            letterSpacing: "0.06em",
            padding: "14px 24px",
            borderRadius: 0,
            backgroundColor: ctaVariant === "red" ? "#C8102E" : "#FFFFFF",
            color: ctaVariant === "red" ? "#FFFFFF" : "#1A3A6B",
          }}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}

export default function AboutStrip({ mensPhoto, womensPhoto }: AboutStripProps) {
  const mensImageSrc = mensPhoto
    ? urlFor(mensPhoto).width(960).url()
    : "/assets/about-mens.png";
  const womensImageSrc = womensPhoto
    ? urlFor(womensPhoto).width(960).url()
    : "/assets/about-womens.png";

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2"
      aria-label="Men's and Women's squad introduction"
    >
      <Panel
        imageSrc={mensImageSrc}
        imageAlt="Mumbai Dreamers Men's Squad"
        label="Men's Squad"
        headline="THE DREAMERS"
        body="Mumbai's men in red. Built to dream, trained to win."
        ctaLabel="MEET THE SQUAD →"
        ctaHref="/squad/mens"
        ctaVariant="red"
      />
      <Panel
        imageSrc={womensImageSrc}
        imageAlt="Mumbai Dreamers Women's Squad"
        label="Women's Squad"
        headline="THE WOMEN RISE"
        body="Making history in Season 1. Mumbai's women are here."
        ctaLabel="MEET THE SQUAD →"
        ctaHref="/squad/womens"
        ctaVariant="white"
      />
    </section>
  );
}
