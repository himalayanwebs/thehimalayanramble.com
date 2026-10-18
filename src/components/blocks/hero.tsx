import Link from "next/link";
import { Media, type ImageRef } from "./media";

export interface Breadcrumb {
  label: string;
  href?: string;
}

export function Hero({
  variant = "home",
  image,
  eyebrow,
  breadcrumbs,
  title,
  lede,
  actions,
}: {
  variant?: "home" | "place";
  image: ImageRef;
  eyebrow?: string;
  breadcrumbs?: Breadcrumb[];
  title: React.ReactNode;
  lede: string;
  actions?: React.ReactNode;
}) {
  return (
    <section className={variant === "place" ? "hero hero--place" : "hero"}>
      <div className="hero__media">
        <Media image={image} aspect="21x9" priority sizes="100vw" />
      </div>
      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__content on-dark">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <p className="meta meta--on-dark hero__breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label}>
                {i > 0 && " / "}
                {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}
              </span>
            ))}
          </p>
        )}
        {eyebrow && <p className="meta meta--on-dark hero__eyebrow">{eyebrow}</p>}
        <h1 className="h1">{title}</h1>
        <p className="lede hero__lede">{lede}</p>
        {actions && <div className="hero__actions">{actions}</div>}
      </div>
    </section>
  );
}
