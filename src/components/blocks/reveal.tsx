"use client";

import { useEffect, useRef } from "react";
import { Slot } from "radix-ui";

// Module-scoped so stagger order (and the single shared IntersectionObserver)
// is consistent across every Reveal instance on the page, matching legacy's
// single global observer over all [data-reveal] elements.
const groupOrder = new Map<string, Element[]>();
let sharedObserver: IntersectionObserver | null = null;

function getObserver() {
  if (sharedObserver || typeof IntersectionObserver === "undefined") return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const group = groupOrder.get(el.dataset.revealGroup || "default") || [];
        const index = group.indexOf(el);
        const delay = Math.min(Math.max(index, 0) * 70, 420);
        window.setTimeout(() => el.classList.add("is-visible"), delay);
        obs.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  return sharedObserver;
}

/**
 * Attaches scroll-reveal behavior (data-reveal + is-visible, staggered
 * within `group`) to its child. Defaults to a wrapping <div>; pass `asChild`
 * to attach directly to the child instead — required whenever the child
 * itself needs to be a CSS Grid item (grid-column only respects direct
 * children) or needs a specific tag for a structural selector (e.g.
 * `a.mosaic__tile:hover`).
 */
export function Reveal({
  group = "default",
  asChild,
  className,
  children,
}: {
  group?: string;
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const list = groupOrder.get(group) ?? [];
    list.push(el);
    groupOrder.set(group, list);

    const observer = getObserver();
    if (!observer) {
      el.classList.add("is-visible");
      return;
    }
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [group]);

  const Comp = asChild ? Slot.Root : "div";

  return (
    <Comp
      ref={ref as React.Ref<HTMLDivElement>}
      data-reveal=""
      data-reveal-group={group}
      className={className}
    >
      {children}
    </Comp>
  );
}
