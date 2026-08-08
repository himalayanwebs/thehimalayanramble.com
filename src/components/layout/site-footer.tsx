import Image from "next/image";
import Link from "next/link";
import { NAV_REGIONS, CONTACT } from "@/data/nav";
import { CurrentYear } from "./current-year";

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/himalayanramble/",
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
    href: "https://www.facebook.com/himalayanramble/",
    path: <path d="M15 8h2V4h-2a5 5 0 0 0-5 5v2H8v4h2v7h4v-7h3l1-4h-4V9a1 1 0 0 1 1-1Z" />,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/HimalayanRamble",
    path: <path d="M4 4l16 16M20 4 4 20" />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCp5h3rPKeYI9ciOJAjCWQ2g",
    path: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="3" />
        <path d="M11 10l4 2-4 2Z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "WhatsApp",
    href: CONTACT.whatsappHref,
    path: (
      <>
        <path d="M4 20l1.3-3.9A8 8 0 1 1 8.9 19L4 20Z" />
        <path d="M8.5 9.5c0 3.5 2.5 6 6 6" />
      </>
    ),
  },
  {
    label: "TripAdvisor",
    href: "https://www.tripadvisor.in/Attraction_Review-g304552-d33060623-Reviews-The_Himalayan_Ramble-Shimla_Shimla_District_Himachal_Pradesh.html",
    path: (
      <>
        <circle cx="8.5" cy="13" r="3.2" />
        <circle cx="15.5" cy="13" r="3.2" />
        <path d="M2 9.5h5M17 9.5h5M11.7 9.5c-.6-1-1.7-1.6-2.9-1.6M12.3 9.5c.6-1 1.7-1.6 2.9-1.6" />
      </>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="section-dark">
      <div className="container grid grid-cols-1 gap-x-8 gap-y-10 border-b border-rule-on-dark pb-16 pt-24 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-3">
            <Image src="/assets/logo.webp" alt="" width={40} height={40} />
            <span className="font-display font-semibold">
              The Himalayan
              <br />
              Ramble
            </span>
          </Link>
          <p className="mb-6 max-w-[34ch] stone-text">
            Shimla-based, government-approved Himalayan travel operator, guiding customized trips
            across Northern India since 2000.
          </p>
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                className="flex size-11 items-center justify-center rounded-full border border-rule-on-dark transition-colors hover:border-brand-accent"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="size-4">
                  {s.path}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Destinations">
          <h3 className="mb-4 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] stone-text">
            Destinations
          </h3>
          <ul className="flex flex-col gap-2">
            {NAV_REGIONS.map((region) => (
              <li key={region.slug}>
                <Link href={`/${region.slug}/`} className="font-semibold hover:text-brand-accent">
                  {region.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h3 className="mb-4 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] stone-text">
            Company
          </h3>
          <ul className="flex flex-col gap-2">
            <li><Link href="/" className="font-semibold hover:text-brand-accent">Home</Link></li>
            <li><Link href="/blog/" className="font-semibold hover:text-brand-accent">Blog</Link></li>
            <li><Link href="/contact/" className="font-semibold hover:text-brand-accent">Contact Us</Link></li>
            <li><Link href="/terms/" className="font-semibold hover:text-brand-accent">Terms &amp; Conditions</Link></li>
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] stone-text">
            Contact
          </h3>
          <p className="mb-2"><a href={CONTACT.phoneHref} className="hover:text-brand-accent">{CONTACT.phone}</a></p>
          <p className="mb-2"><a href={`mailto:${CONTACT.email}`} className="hover:text-brand-accent">{CONTACT.email}</a></p>
          <address className="not-italic stone-text">{CONTACT.address}</address>
          <p className="mt-4 stone-text">{CONTACT.hours}</p>
        </div>
      </div>

      <div className="container flex flex-wrap items-center gap-6 border-b border-rule-on-dark py-6">
        <Image src="/assets/hpt.webp" alt="Approved by Himachal Pradesh Tourism" width={120} height={46} loading="lazy" style={{ height: "46px", width: "auto" }} />
        <Image src="/assets/mit.webp" alt="Approved by Ministry of Tourism, Government of India" width={140} height={46} loading="lazy" style={{ height: "46px", width: "auto" }} />
        <span className="meta meta--on-dark">Est. 2000 &middot; Shimla, Himachal Pradesh</span>
      </div>

      <div className="container flex flex-wrap justify-between gap-3 py-6 text-[0.8rem] stone-text">
        <p>&copy; <CurrentYear /> The Himalayan Ramble. All rights reserved.</p>
        <p><Link href="/terms/" className="hover:text-brand-accent">Terms &amp; Conditions</Link></p>
      </div>
    </footer>
  );
}
