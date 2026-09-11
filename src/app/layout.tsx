import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const FONTSHARE_HREF =
  "https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500,400,1&f[]=cabinet-grotesk@800,900,700,500,400,1&f[]=general-sans@400,500,600,1&display=swap";

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
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        {/* Non-render-blocking stylesheet load: media="print" (browsers still
            fetch print-media sheets, just don't block first paint on them)
            swaps to "all" once loaded via the inline script below. React
            auto-hoists a preload for this <link> on its own, so no manual
            one is needed. Fixes the render-blocking request / network-
            dependency-chain PageSpeed findings without changing when fonts
            visually swap in (display=swap already governs that, unchanged). */}
        <link id="fontshare-css" rel="stylesheet" href={FONTSHARE_HREF} media="print" suppressHydrationWarning />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(l){if(!l)return;var s=function(){l.media='all';l.removeEventListener('load',s);};l.addEventListener('load',s);})(document.getElementById('fontshare-css'));",
          }}
        />
        <noscript>
          <link rel="stylesheet" href={FONTSHARE_HREF} />
        </noscript>
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
