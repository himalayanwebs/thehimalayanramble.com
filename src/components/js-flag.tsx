"use client";

import { useEffect } from "react";

// Mirrors legacy script.js's `document.documentElement.classList.add("js")`:
// content stays visible by default (no-JS / crawlers see it unconditionally),
// and only becomes eligible for the scroll-reveal hide/animate treatment
// once this confirms script actually executed.
export function JsFlag() {
  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);
  return null;
}
