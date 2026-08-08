"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MegaNav } from "./mega-nav";
import { MobileNav } from "./mobile-nav";
import { useScrollHeader } from "@/hooks/use-scroll-header";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { scrolled, hidden } = useScrollHeader(mobileNavOpen);

  return (
    <header
      className={cn(
        "site-header",
        scrolled && "site-header--scrolled",
        hidden && "is-hidden"
      )}
    >
      <div className="container flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" className="wordmark">
          <Image src="/assets/logo.webp" alt="The Himalayan Ramble" width={40} height={40} />
          <span>
            The Himalayan
            <br />
            Ramble
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden nav:flex">
          <MegaNav />
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild variant="accent" size="brand-sm" className="hidden nav:inline-flex">
            <Link href="/contact/">Plan Your Trip</Link>
          </Button>
          <MobileNav onOpenChange={setMobileNavOpen} />
        </div>
      </div>
    </header>
  );
}
