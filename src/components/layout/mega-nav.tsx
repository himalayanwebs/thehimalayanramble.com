"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NAV_REGIONS } from "@/data/nav";
import { NavLink } from "@/components/layout/nav-link";
import { cn } from "@/lib/utils";

function RegionColumn({
  region,
  isOpen,
  onOpen,
  onToggle,
}: {
  region: (typeof NAV_REGIONS)[number];
  isOpen: boolean;
  onOpen: () => void;
  onToggle: () => void;
}) {
  return (
    <li className="min-w-[11rem]">
      <div className="flex items-center justify-between gap-2">
        <NavigationMenuLink asChild>
          <Link
            href={`/${region.slug}/`}
            className="p-0! flex-1 font-display text-sm font-semibold text-ink"
          >
            {region.name}
          </Link>
        </NavigationMenuLink>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={`Show ${region.name} places`}
          onMouseEnter={() => {
            if (window.matchMedia("(hover: hover)").matches) onOpen();
          }}
          onClick={onToggle}
          className="flex size-6 shrink-0 items-center justify-center text-stone"
        >
          <ChevronDown
            className={cn("size-3.5 transition-transform duration-200", isOpen && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      </div>
      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out-quart motion-reduce:transition-none",
          isOpen ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"
        )}
      >
        <ul className="flex min-h-0 flex-col gap-1">
          {region.places.map((place) => (
            <li key={place.slug}>
              <NavigationMenuLink asChild>
                <Link
                  href={`/${region.slug}/${place.slug}/`}
                  className="p-1.5! text-sm text-stone hover:text-ink!"
                >
                  {place.name}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export function MegaNav() {
  const [openRegion, setOpenRegion] = useState<string | null>(null);

  return (
    <NavigationMenu viewport={false} className="max-w-none">
      <NavigationMenuList className="gap-8">
        <NavigationMenuItem>
          <NavLink href="/" className="nav-link">
            Home
          </NavLink>
        </NavigationMenuItem>

        <NavigationMenuItem onFocus={() => setOpenRegion((r) => r ?? NAV_REGIONS[0].slug)}>
          <NavigationMenuPrimitive.Trigger asChild>
            <Link href="/blog/" className="nav-link group">
              Destinations
              <ChevronDown
                className="size-[9px] transition-transform duration-160 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </Link>
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuContent className="border-rule! shadow-[0_24px_48px_-16px_rgba(0,0,0,0.22)]!">
            <ul className="grid grid-cols-4 gap-x-6 gap-y-4 p-2 md:w-[52rem]">
              {NAV_REGIONS.map((region) => (
                <RegionColumn
                  key={region.slug}
                  region={region}
                  isOpen={openRegion === region.slug}
                  onOpen={() => setOpenRegion(region.slug)}
                  onToggle={() => setOpenRegion((r) => (r === region.slug ? null : region.slug))}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavLink href="/contact/" className="nav-link">
            Contact Us
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink href="/terms/" className="nav-link">
            Terms &amp; Conditions
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
