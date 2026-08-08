import type { Metadata } from "next";
import { Reveal } from "@/components/blocks/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { CONTACT, SOCIAL_LINKS } from "@/data/nav";

export const metadata: Metadata = {
  title: { absolute: "Contact Us | The Himalayan Ramble" },
  description:
    "Plan your Himalayan trip with The Himalayan Ramble — Shimla-based, government-approved operator since 2000. Send your destination and dates, we'll build the route.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Us | The Himalayan Ramble",
    description:
      "Plan your Himalayan trip with The Himalayan Ramble — Shimla-based, government-approved operator since 2000.",
    url: "/contact/",
  },
};

// Icons for the 3 socials the original contact page surfaces alongside the
// office details (footer shows all 6; this "Follow Along" card is a subset).
const FOLLOW_LINKS = [
  {
    label: "Instagram",
    href: SOCIAL_LINKS.find((s) => s.label === "Instagram")!.href,
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: SOCIAL_LINKS.find((s) => s.label === "Facebook")!.href,
    path: <path d="M15 8h2V4h-2a5 5 0 0 0-5 5v2H8v4h2v7h4v-7h3l1-4h-4V9a1 1 0 0 1 1-1Z" />,
  },
  {
    label: "TripAdvisor",
    href: SOCIAL_LINKS.find((s) => s.label === "TripAdvisor")!.href,
    path: (
      <>
        <circle cx="8.5" cy="13" r="3.2" />
        <circle cx="15.5" cy="13" r="3.2" />
        <path d="M2 9.5h5M17 9.5h5M11.7 9.5c-.6-1-1.7-1.6-2.9-1.6M12.3 9.5c.6-1 1.7-1.6 2.9-1.6" />
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <main id="main">
      <section className="section section--tight" style={{ paddingBottom: 0 }}>
        <div className="container">
          <h1 className="h2">Let&rsquo;s plan your Himalayan trip.</h1>
          <p className="lede" style={{ marginTop: "var(--space-sm)" }}>
            Tell us roughly where and when — we&rsquo;ll come back with a route built from
            twenty-five years of actually running these trips, not a template.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal>
              <div className="info-grid" style={{ gridTemplateColumns: "1fr" }}>
                <div className="info-card">
                  <h4>Call or WhatsApp</h4>
                  <p>
                    <a href={CONTACT.phoneHref} className="link-accent">
                      {CONTACT.phone}
                    </a>
                  </p>
                  <p style={{ marginTop: "var(--space-2xs)" }}>
                    <a
                      href={CONTACT.whatsappHref}
                      target="_blank"
                      rel="noopener"
                      className="link-accent"
                    >
                      Message on WhatsApp &rarr;
                    </a>
                  </p>
                </div>
                <div className="info-card">
                  <h4>Email</h4>
                  <p>
                    <a href={`mailto:${CONTACT.email}`} className="link-accent">
                      {CONTACT.email}
                    </a>
                  </p>
                </div>
                <div className="info-card">
                  <h4>Office</h4>
                  <p>{CONTACT.address}</p>
                  <p style={{ marginTop: "var(--space-2xs)" }}>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Rathore+Complex+Dhalli+Bypass+Sanjauli+Shimla+Himachal+Pradesh+171006"
                      target="_blank"
                      rel="noopener"
                      className="link-accent"
                    >
                      Get Directions &rarr;
                    </a>
                  </p>
                </div>
                <div className="info-card">
                  <h4>Hours</h4>
                  <p>{CONTACT.hours}</p>
                </div>
                <div className="info-card">
                  <h4>Follow Along</h4>
                  <div className="flex flex-wrap gap-3" style={{ marginTop: "var(--space-2xs)" }}>
                    {FOLLOW_LINKS.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener"
                        aria-label={social.label}
                        className="flex size-9 items-center justify-center rounded-full border border-rule transition-colors hover:border-brand-accent"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.6}
                          className="size-4"
                        >
                          {social.path}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
