"use client";

import { GlowCard } from "@/components/ui/SpotlightCard";
import type { InstagramPost } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity";

interface InstagramStripProps {
  posts: InstagramPost[];
}

const PLACEHOLDER_POSTS = [
  { id: "ig-ph-1", caption: "Training camp day one — the Dreamers are ready. 🏉", date: "MAY 22, 2026" },
  { id: "ig-ph-2", caption: "Our women's squad making history in WRPL Season 1.", date: "MAY 20, 2026" },
  { id: "ig-ph-3", caption: "Aamchi Mumbai! Packing Gachibowli this June.", date: "MAY 18, 2026" },
];

export default function InstagramStrip({ posts }: InstagramStripProps) {
  return (
    <section
      aria-label="Instagram feed"
      style={{
        backgroundColor: "#FFFFFF",
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
            FOLLOW ALONG
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
              marginBottom: 8,
            }}
          >
            LATEST FROM INSTAGRAM
          </h2>
          <span
            style={{
              fontFamily: "'Barlow', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              color: "#555555",
            }}
          >
            @mumbaidreamersrugby
          </span>
        </div>

        {/* Post cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {posts.length > 0
            ? posts.map((post) => (
                <GlowCard
                  key={post._id}
                  customSize={true}
                  className="!block !p-0 !gap-0 !shadow-none !backdrop-blur-none !rounded-[10px]"
                >
                  <PostCard
                    imageSrc={urlFor(post.thumbnail).width(400).url()}
                    caption={post.caption}
                    date={post.postDate}
                    href={post.postUrl}
                  />
                </GlowCard>
              ))
            : PLACEHOLDER_POSTS.map((p) => (
                <GlowCard
                  key={p.id}
                  customSize={true}
                  className="!block !p-0 !gap-0 !shadow-none !backdrop-blur-none !rounded-[10px]"
                >
                  <PostCard imageSrc="" caption={p.caption} date={p.date} href="#" />
                </GlowCard>
              ))}
        </div>
      </div>
    </section>
  );
}

interface PostCardProps {
  imageSrc: string;
  caption: string;
  date: string;
  href: string;
}

function PostCard({ imageSrc, caption, date, href }: PostCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "block" }}
    >
      <div
        style={{
          borderRadius: 10,
          overflow: "hidden",
          border: "1px solid #DDDDDD",
          backgroundColor: "#FFFFFF",
          cursor: "pointer",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = "scale(1.02)";
          el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.10)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = "scale(1)";
          el.style.boxShadow = "none";
        }}
      >
        {/* Square image area */}
        <div
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            backgroundColor: "#F0F0F0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {imageSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={caption}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
          {/* Instagram logo watermark */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              width: 28,
              height: 28,
              borderRadius: 6,
              backgroundColor: "rgba(0,0,0,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="white" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </div>
        </div>

        {/* Caption + date */}
        <div style={{ padding: "14px 16px", minHeight: 92, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <p
            style={{
              fontFamily: "'Barlow', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: 13,
              color: "#1A1A1A",
              lineHeight: 1.55,
              margin: 0,
              marginBottom: 8,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {caption}
          </p>
          <span
            style={{
              fontFamily: "'Barlow', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: 11,
              color: "#555555",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {date}
          </span>
        </div>
      </div>
    </a>
  );
}
