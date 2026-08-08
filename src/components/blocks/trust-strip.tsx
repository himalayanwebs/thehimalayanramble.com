import Image from "next/image";
import { Reveal } from "./reveal";

export interface TrustStat {
  num: string;
  label: string;
}

export function TrustStrip({
  stats,
  badges,
}: {
  stats: TrustStat[];
  badges?: { src: string; alt: string; width: number; height: number }[];
}) {
  return (
    <section className="trust">
      <div className="container trust__row">
        {stats.map((stat) => (
          <Reveal key={stat.label} group="trust" className="trust__item">
            <span className="trust__num">{stat.num}</span>
            <span className="trust__label">{stat.label}</span>
          </Reveal>
        ))}
        {badges && badges.length > 0 && (
          <Reveal group="trust" className="trust__item">
            <span className="trust__label" style={{ marginBottom: "var(--space-2xs)" }}>
              Approved by
            </span>
            <div className="trust__badges">
              {badges.map((badge) => (
                <Image
                  key={badge.src}
                  src={badge.src}
                  alt={badge.alt}
                  width={badge.width}
                  height={badge.height}
                  loading="lazy"
                  style={{ height: "44px", width: "auto" }}
                />
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
