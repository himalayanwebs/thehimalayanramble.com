"use client";

import { useEffect, useState } from "react";
import { Topography } from "./topography";

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
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotionOk(!query.matches);
    const onChange = () => setMotionOk(!query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  if (!motionOk) return null;

  return <Topography {...BRAND_CONFIG} className="absolute inset-0" />;
}
