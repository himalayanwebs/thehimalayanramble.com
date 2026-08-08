"use client";

import { useEffect, useRef, useState } from "react";

const SCROLLED_AT = 40;
const HIDE_AFTER = 120;

/**
 * Header hide-on-scroll-down / reveal-on-scroll-up, solid past the hero.
 * Never hides while `suspend` is true (a dropdown or the mobile sheet is open),
 * so nothing goes orphaned mid-interaction. Direct port of legacy initHeaderScroll.
 */
export function useScrollHeader(suspend: boolean) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const suspendRef = useRef(suspend);
  suspendRef.current = suspend;

  useEffect(() => {
    function update() {
      const y = window.scrollY;
      setScrolled(y > SCROLLED_AT);

      if (!suspendRef.current) {
        if (y > lastY.current && y > HIDE_AFTER) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      }
      lastY.current = y;
      ticking.current = false;
    }

    lastY.current = window.scrollY;
    update();

    function onScroll() {
      if (!ticking.current) {
        requestAnimationFrame(update);
        ticking.current = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (suspend) setHidden(false);
  }, [suspend]);

  return { scrolled, hidden };
}
