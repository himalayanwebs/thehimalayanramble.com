import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { JsFlag } from "@/components/js-flag";
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
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500,400,1&f[]=cabinet-grotesk@800,900,700,500,400,1&f[]=general-sans@400,500,600,1&display=swap"
        />
      </head>
      <body>
        <JsFlag />
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
