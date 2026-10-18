import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thehimalayanramble.com"),
  title: {
    default: "The Himalayan Ramble — Shimla-Based Himalayan Tours Since 2000",
    template: "%s | The Himalayan Ramble",
  },
  description:
    "The Himalayan Ramble is a Shimla-based, government-approved travel operator running customized Himalayan trips since 2000 — trekking, rafting, and winter expeditions planned by licensed local guides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) — Google Analytics 4, property G-0MF9NZ26EP.
            Placed first in <head> per Google's install instructions. Raw
            tags (not next/script) to match the other head scripts here and
            keep the snippet identical to what the GA console provides; this
            single root layout renders on every statically exported page. */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0MF9NZ26EP"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-0MF9NZ26EP');",
          }}
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* Preload the two above-the-fold brand faces (self-hosted, @font-face
            in globals.css). Started at HTML-parse time rather than after CSS
            parse + font discovery, which shortens the fallback-font window
            (less CLS from the swap) and flattens the network dependency
            chain that previously ran api.fontshare.com CSS -> cdn.fontshare
            font files. */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/clash-display-700.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/general-sans-400.woff2"
          crossOrigin="anonymous"
        />
        {/* Synchronous, pre-hydration flag for the [data-reveal] CSS gate in
            globals.css. Must run before first paint (not in a "use client"
            useEffect, which fires after paint/hydration) — otherwise
            above-the-fold reveal content (trust strip, founder block) paints
            visible, then immediately snaps hidden once JS catches up, which
            both flickers and registers as a layout shift. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
