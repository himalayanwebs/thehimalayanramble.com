"use client";

import { useEffect, useRef } from "react";

export function ContactSuccess() {
  const ref = useRef<HTMLDivElement>(null);

  // Matches legacy behavior: move focus to the success panel once it
  // appears, so screen reader / keyboard users land on the confirmation.
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className="form-success" tabIndex={-1} ref={ref}>
      <h3 className="h3">Got it — thank you.</h3>
      <p>
        Your enquiry is in. Someone from The Himalayan Ramble will get back to you shortly,
        usually within one business day. In a hurry? Call or WhatsApp us directly using the
        details alongside.
      </p>
    </div>
  );
}
