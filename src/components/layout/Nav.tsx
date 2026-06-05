"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Club" },
  { href: "/squad", label: "Squad" },
  { href: "/results", label: "Fixtures & Results" },
];

function InstagramIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" style={{ color }}>
      <path
        fill="currentColor"
        d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.72 3.72 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.32.8.74 1.48 1.38 2.13.65.64 1.33 1.06 2.13 1.38.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z"
      />
    </svg>
  );
}

function YouTubeIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" style={{ color }}>
      <path
        fill="currentColor"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.4.53A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.9.53 9.4.53 9.4.53s7.5 0 9.4-.53a3 3 0 0 0 2.1-2.12A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.24 3.6Z"
      />
    </svg>
  );
}

function XIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{ color }}>
      <path
        fill="currentColor"
        d="M18.24 2.25h3.31l-7.23 8.26L22.83 21.75H16.17l-5.21-6.82L4.99 21.75H1.67l7.74-8.84L1.25 2.25H8.08l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12L17.08 19.77Z"
      />
    </svg>
  );
}

function HamburgerIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" style={{ color }}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        d="M3 6h18M3 12h18M3 18h18"
      />
    </svg>
  );
}

function SponsorPill({ label, scrolled }: { label: string; scrolled: boolean }) {
  return (
    <span
      className="flex items-center justify-center font-barlow font-semibold transition-colors duration-300 ease-out"
      style={{
        width: 80,
        height: 28,
        borderRadius: 6,
        fontSize: 11,
        letterSpacing: "0.05em",
        backgroundColor: scrolled ? "rgba(26,58,107,0.08)" : "rgba(255,255,255,0.16)",
        color: scrolled ? "#555555" : "rgba(255,255,255,0.9)",
      }}
    >
      {label}
    </span>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "#1A1A1A" : "#FFFFFF";
  const dividerColor = scrolled ? "rgba(26,26,26,0.3)" : "rgba(255,255,255,0.3)";

  return (
    <nav
      className="fixed left-0 right-0 z-50 h-[62px] transition-[background-color,border-color] duration-300 ease-out"
      style={{
        top: 3,
        backgroundColor: scrolled ? "#FFFFFF" : "transparent",
        borderBottom: scrolled ? "1px solid #DDDDDD" : "1px solid transparent",
      }}
    >
      <div
        className="mx-auto h-full max-w-[1280px] px-6"
        style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center" }}
      >
        {/* Column 1 — Logo, left-aligned */}
        <div style={{ justifySelf: "start", display: "flex", alignItems: "center" }}>
          <Link href="/" aria-label="Mumbai Dreamers — Home" className="flex items-center">
            <Image
              src="/assets/md-logo.png"
              alt="Mumbai Dreamers"
              width={100}
              height={56}
              priority
              className="block h-[52px] w-auto"
            />
          </Link>
          {/* Mobile hamburger sits in col 1 on small screens */}
          <button
            type="button"
            aria-label="Open menu"
            className="lg:hidden ml-auto"
            style={{
              color: textColor,
              transition: "color 0.3s ease-out",
              padding: 4,
            }}
          >
            <HamburgerIcon color={textColor} />
          </button>
        </div>

        {/* Column 2 — Nav links, true centre */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-barlow font-semibold uppercase transition-colors duration-200 hover:!text-red"
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    color: isActive ? "#C8102E" : textColor,
                    transition: "color 0.3s ease-out",
                    paddingBottom: 4,
                    borderBottom: isActive ? "2px solid #C8102E" : "2px solid transparent",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Column 3 — Social icons + sponsor pills, right-aligned */}
        <div
          className="hidden items-center gap-4 lg:flex"
          style={{ justifySelf: "end" }}
        >
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/mumbaidreamersrugby/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-opacity hover:opacity-80"
              style={{ transition: "color 0.3s ease-out" }}
            >
              <InstagramIcon color={textColor} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="transition-opacity hover:opacity-80"
              style={{ transition: "color 0.3s ease-out" }}
            >
              <YouTubeIcon color={textColor} />
            </a>
            <a
              href="#"
              aria-label="X"
              className="transition-opacity hover:opacity-80"
              style={{ transition: "color 0.3s ease-out" }}
            >
              <XIcon color={textColor} />
            </a>
          </div>

          <span
            aria-hidden="true"
            className="block h-5 w-px"
            style={{
              backgroundColor: dividerColor,
              transition: "background-color 0.3s ease-out",
            }}
          />

          <div className="flex items-center gap-2">
            <SponsorPill label="Dream11" scrolled={scrolled} />
            <SponsorPill label="FanCode" scrolled={scrolled} />
          </div>
        </div>
      </div>
    </nav>
  );
}
