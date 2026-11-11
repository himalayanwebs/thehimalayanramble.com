import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested does not exist or has moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main">
      <section className="section">
        <div className="container">
          <p className="meta">404</p>
          <h1 className="h2">Page not found</h1>
          <p className="lede">
            The page you requested does not exist or has moved. The homepage
            links to every region and destination we cover.
          </p>
          <p style={{ marginTop: "var(--space-md)" }}>
            <Button asChild variant="accent" size="brand">
              <Link href="/">Back to the homepage</Link>
            </Button>
          </p>
        </div>
      </section>
    </main>
  );
}
