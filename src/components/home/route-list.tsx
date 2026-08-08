import Link from "next/link";
import { Reveal } from "@/components/blocks/reveal";

export interface SignatureRoute {
  title: string;
  duration: string;
  body: string;
  href: string;
  linkLabel: string;
}

export function SignatureRoutes({ routes }: { routes: SignatureRoute[] }) {
  return (
    <div className="route-list">
      {routes.map((route) => (
        <Reveal key={route.title} group="signature-routes" asChild>
          <div>
            <p className="meta meta--on-dark">{route.duration}</p>
            <h3 className="h3" style={{ marginTop: "var(--space-2xs)" }}>
              {route.title}
            </h3>
            <p className="stone-on-dark" style={{ marginTop: "var(--space-xs)" }}>
              {route.body}
            </p>
            <Link
              href={route.href}
              className="link-accent"
              style={{ display: "inline-block", marginTop: "var(--space-sm)" }}
            >
              {route.linkLabel} &rarr;
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
