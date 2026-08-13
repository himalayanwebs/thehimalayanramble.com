"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

// ogl (WebGL) only ever paints inside the final CTA band, far below the
// fold — dynamic + ssr:false keeps its bundle out of the homepage's initial
// JS entirely, only fetching it once a client actually needs to render it.
const Topography = dynamic(() => import("./topography").then((m) => m.Topography), {
  ssr: false,
});

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Matches the pre-hydration default: assume reduced motion until the real
// client preference is known, so SSR/static HTML never bakes in the canvas.
function getReducedMotionServerSnapshot() {
  return true;
}

// Brand-tuned config, carried over from the hand-ported vanilla-WebGL version
// used before this rebuild (glacier navy rising to sunrise orange at "peak
// elevation", subtly reactive to the cursor).
const BRAND_CONFIG = {
  lowColor: "#010d1d",
  midColor: "#2d669e",
  highColor: "#e8611a",
  bands: 7.0,
  thickness: 0.02,
  scale: 1.3,
  glow: 0.3,
  contrast: 3.0,
  brightness: 0.85,
  opacity: 0.55,
  grainIntensity: 0.05,
  mouseRadius: 0.3,
  mouseStrength: 0.35,
} as const;

// reactbits' Topography has no built-in prefers-reduced-motion handling —
// PRODUCT.md bans motion-gated content, so this gate is required, not optional.
export function TopographyBackground() {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  if (reducedMotion) return null;

  return <Topography {...BRAND_CONFIG} className="absolute inset-0" />;
}
