"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

// Loaded on first menu open, not on page load — see mobile-nav-panel.tsx.
const MobileNavPanel = dynamic(
  () => import("./mobile-nav-panel").then((m) => m.MobileNavPanel),
  { ssr: false }
);

export function MobileNav({ onOpenChange }: { onOpenChange?: (open: boolean) => void }) {
  const [open, setOpen] = useState(false);
  // Stay mounted after the first open so Radix's exit animation still runs
  // on close; before that the (heavy) panel code isn't in the page at all.
  const [everOpened, setEverOpened] = useState(false);

  useEffect(() => {
    onOpenChange?.(open);
  }, [open, onOpenChange]);

  // Close automatically if resized past the desktop breakpoint, matching
  // legacy behavior so the sheet never gets stranded open on rotate/resize.
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 900) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="nav:hidden size-11"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => {
          setEverOpened(true);
          setOpen((o) => !o);
        }}
      >
        <Menu className="size-5" aria-hidden="true" />
      </Button>
      {everOpened && <MobileNavPanel open={open} onOpenChange={setOpen} />}
    </>
  );
}
