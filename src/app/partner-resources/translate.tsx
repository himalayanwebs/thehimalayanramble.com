"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: {
          new (config: unknown, container: string): unknown;
          InlineLayout: { HORIZONTAL: number };
          VerticalLayout: { SIDE: number };
        };
      };
    };
  }
}

export default function Translate() {
  useEffect(() => {
    const host = document.getElementById("google_translate_element");
    if (!host || host.childElementCount > 0) return;

    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        const g = window.google;
        if (!g) return;
        new g.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout: g.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    }

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      aria-label="Translate this page to your language"
    />
  );
}