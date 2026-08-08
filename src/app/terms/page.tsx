import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/blocks/cta-band";
import { Reveal } from "@/components/blocks/reveal";
import { LEGAL_SECTIONS, LEGAL_UPDATED } from "@/data/legal";
import { CONTACT } from "@/data/nav";

export const metadata: Metadata = {
  title: { absolute: "Terms & Conditions | The Himalayan Ramble" },
  description:
    "Booking, payment, cancellation, and liability terms for trips arranged by The Himalayan Ramble, Shimla.",
  alternates: { canonical: "/terms/" },
  openGraph: {
    title: "Terms & Conditions | The Himalayan Ramble",
    description:
      "Booking, payment, cancellation, and liability terms for trips arranged by The Himalayan Ramble, Shimla.",
    url: "/terms/",
  },
};

export default function TermsPage() {
  return (
    <main id="main">
      <section className="section section--tight" style={{ paddingBottom: 0 }}>
        <div className="container">
          <h1 className="h2">Terms &amp; Conditions</h1>
          <p className="lede legal-updated" style={{ marginTop: "var(--space-sm)" }}>
            {LEGAL_UPDATED}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature feature--legal">
            <Reveal>
              <nav aria-label="Sections">
                <p className="meta" style={{ marginBottom: "var(--space-sm)" }}>
                  On this page
                </p>
                <ol className="legal-toc">
                  {LEGAL_SECTIONS.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>{section.title}</a>
                    </li>
                  ))}
                  <li>
                    <a href="#contact">10. Contact</a>
                  </li>
                </ol>
              </nav>
            </Reveal>

            <Reveal className="legal prose">
              {LEGAL_SECTIONS.map((section) => (
                <Fragment key={section.id}>
                  <h2 id={section.id}>{section.title}</h2>
                  {section.blocks.map((block, i) =>
                    "p" in block ? (
                      <p key={i}>{block.p}</p>
                    ) : (
                      <ul key={i}>
                        {block.ul.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )
                  )}
                </Fragment>
              ))}

              <h2 id="contact">10. Contact</h2>
              <p>
                Questions about these terms or an existing booking: call or WhatsApp{" "}
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>, or email{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Questions before you book?"
        actions={
          <Button asChild variant="accent" size="brand">
            <Link href="/contact/">Get In Touch</Link>
          </Button>
        }
      />
    </main>
  );
}
