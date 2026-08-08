"use client";

import { useEffect, useState } from "react";

// Static export bakes the build-time year into the HTML; this client
// component restores the legacy behavior of always showing the real
// current year, even on a long-cached static page.
export function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span suppressHydrationWarning>{year ?? new Date().getFullYear()}</span>;
}
