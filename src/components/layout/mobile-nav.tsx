"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_REGIONS, CONTACT } from "@/data/nav";
import { NavLink } from "@/components/layout/nav-link";

export function MobileNav({ onOpenChange }: { onOpenChange?: (open: boolean) => void }) {
  const [open, setOpen] = useState(false);

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

  function closeAndGo() {
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="icon"
        className="nav:hidden size-11"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <Menu className="size-5" aria-hidden="true" />
      </Button>
      <SheetContent side="right" className="flex w-[85vw] flex-col gap-0 border-rule bg-paper p-0 sm:max-w-sm">
        <SheetTitle className="sr-only">Site navigation</SheetTitle>
        <nav aria-label="Mobile" className="flex flex-1 flex-col overflow-y-auto p-4">
          <NavLink href="/" onClick={closeAndGo} className="border-b border-rule py-3 font-display font-semibold text-ink">
            Home
          </NavLink>

          <Accordion type="single" collapsible>
            <AccordionItem value="destinations" className="border-rule">
              <AccordionTrigger className="font-display font-semibold text-ink hover:no-underline">
                Destinations
              </AccordionTrigger>
              <AccordionContent>
                <Accordion type="single" collapsible>
                  {NAV_REGIONS.map((region) => (
                    <AccordionItem key={region.slug} value={region.slug} className="border-rule/60">
                      <div className="flex items-center justify-between">
                        <Link
                          href={`/${region.slug}/`}
                          onClick={closeAndGo}
                          className="flex-1 py-2 text-sm font-medium text-ink"
                        >
                          {region.name}
                        </Link>
                        <AccordionTrigger
                          className="w-auto shrink-0 py-2 hover:no-underline"
                          aria-label={`Show ${region.name} places`}
                        />
                      </div>
                      <AccordionContent>
                        <ul className="flex flex-col gap-1 pb-2 pl-3">
                          {region.places.map((place) => (
                            <li key={place.slug}>
                              <Link
                                href={`/${region.slug}/${place.slug}/`}
                                onClick={closeAndGo}
                                className="block py-1.5 text-sm text-stone"
                              >
                                {place.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <NavLink href="/blog/" onClick={closeAndGo} className="border-b border-rule py-3 font-display font-semibold text-ink">
            Blog
          </NavLink>
          <NavLink href="/contact/" onClick={closeAndGo} className="border-b border-rule py-3 font-display font-semibold text-ink">
            Contact Us
          </NavLink>
          <NavLink href="/terms/" onClick={closeAndGo} className="border-b border-rule py-3 font-display font-semibold text-ink">
            Terms &amp; Conditions
          </NavLink>
        </nav>

        <div className="flex flex-col gap-3 border-t border-rule p-4">
          <Button asChild variant="accent" size="brand">
            <Link href="/contact/" onClick={closeAndGo}>
              Plan Your Trip
            </Link>
          </Button>
          <Button asChild variant="brand-ghost" size="brand">
            <a href={CONTACT.phoneHref}>Call {CONTACT.phone}</a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
