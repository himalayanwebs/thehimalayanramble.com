"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { NAV_REGIONS, CONTACT } from "@/data/nav";
import { NavLink } from "@/components/layout/nav-link";

// Sheet + accordion payload, split out of MobileNav and loaded on first
// open via next/dynamic so the Dialog/Accordion/Radix machinery (and this
// nav markup) leaves every page's initial JS: on most sessions nobody
// opens the mobile menu, yet it used to ship on desktop AND mobile loads.
export function MobileNavPanel({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  function closeAndGo() {
    onOpenChange(false);
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
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
