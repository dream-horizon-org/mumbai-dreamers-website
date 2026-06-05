import type { Metadata } from "next";
import "./globals.css";
import WebsiteWrapper from "@/components/layout/WebsiteWrapper";

export const metadata: Metadata = {
  title: "Mumbai Dreamers Rugby",
  description: "Mumbai Dreamers — RPL Season 2.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Barlow+Condensed:wght@700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/flag-icons@6.11.0/css/flag-icons.min.css"
        />
      </head>
      <body>
        <WebsiteWrapper>{children}</WebsiteWrapper>
      </body>
    </html>
  );
}
