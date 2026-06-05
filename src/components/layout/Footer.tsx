import FooterCanvas from "./FooterCanvas";

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.72 3.72 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.32.8.74 1.48 1.38 2.13.65.64 1.33 1.06 2.13 1.38.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z"
      />
    </svg>
  );
}

function FacebookGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.77l-.44 2.9h-2.33V22c4.78-.75 8.44-4.91 8.44-9.93Z"
      />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  glyph,
}: {
  href: string;
  label: string;
  glyph: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3"
    >
      <span className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/65 transition-colors duration-200 group-hover:border-red group-hover:bg-red group-hover:text-white">
        {glyph}
      </span>
      <span
        className="font-barlow font-semibold text-white/65 transition-colors duration-200 group-hover:text-white"
        style={{ fontSize: 13 }}
      >
        {label}
      </span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-barlow-condensed font-bold uppercase text-red"
      style={{ fontSize: 11, letterSpacing: "0.18em" }}
    >
      {children}
    </span>
  );
}

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: "#0D1B3E",
        borderTop: "3px solid #C8102E",
        paddingTop: 56,
        paddingBottom: 36,
      }}
    >
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-6">
          <div className="flex flex-col items-start gap-3 md:flex-1">
            <SectionLabel>Our Home</SectionLabel>
            <address
              className="not-italic font-barlow font-normal text-white/65"
              style={{ fontSize: 13, lineHeight: 1.7 }}
            >
              7th Floor, Ascent
              <br />
              Sudam Kalu Ahire Marg
              <br />
              Worli Colony, Worli
              <br />
              Mumbai, Maharashtra 400030
            </address>
          </div>

          <div className="flex items-center justify-center md:flex-1">
            <FooterCanvas />
          </div>

          <div className="flex flex-col items-start gap-4 md:flex-1 md:items-end">
            <SectionLabel>Follow Us</SectionLabel>
            <div className="flex flex-col gap-3">
              <SocialLink
                href="https://www.instagram.com/mumbaidreamersrugby/"
                label="Instagram"
                glyph={<InstagramGlyph />}
              />
              <SocialLink
                href="https://www.facebook.com/mumbaidreamersrugby/"
                label="Facebook"
                glyph={<FacebookGlyph />}
              />
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="w-full"
          style={{
            height: 1,
            backgroundColor: "rgba(255,255,255,0.08)",
            marginTop: 24,
            marginBottom: 24,
          }}
        />

        <div className="flex flex-col items-center gap-2">
          <p
            className="text-center font-barlow font-normal"
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.30)",
            }}
          >
            © 2026 Mumbai Dreamers Rugby. All rights reserved. RPL Season 2.
          </p>
          <a
            href="https://mumbaidreamers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-barlow font-normal no-underline hover:underline"
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.25)",
            }}
          >
            Season 1 Archive → mumbaidreamers.com
          </a>
        </div>
      </div>
    </footer>
  );
}
