"use client";

import { useState } from "react";

// Static export bakes the build-time year into the HTML; this client
// component restores the legacy behavior of always showing the real
// current year, even on a long-cached static page. suppressHydrationWarning
// covers the resulting server/client text mismatch (build year vs. real year).
export function CurrentYear() {
  const [year] = useState(() => new Date().getFullYear());
  return <span suppressHydrationWarning>{year}</span>;
}
