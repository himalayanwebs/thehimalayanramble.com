import { cn } from "@/lib/utils";
import { Media, type ImageRef, type MediaAspect } from "./media";
import { Reveal } from "./reveal";

export interface FeatureListItem {
  title: string;
  body: string;
}

export interface FeatureBlockData {
  kind: "prose" | "list";
  reverse?: boolean;
  dark?: boolean;
  tight?: boolean;
  eyebrow?: string;
  heading: string;
  media: ImageRef & { aspect?: MediaAspect };
  halftone?: boolean;
  body?: string[];
  items?: FeatureListItem[];
}

export function FeatureBlock({ data, group }: { data: FeatureBlockData; group: string }) {
  return (
    <section className={cn("section", data.tight && "section--tight", data.dark && "section-dark")}>
      <div className="container">
        <div className={cn("feature", data.reverse && "feature--reverse")}>
          <Reveal group={group} asChild>
            <div className="feature__media">
              <Media image={data.media} aspect={data.media.aspect ?? "4x5"} halftone={data.halftone} />
            </div>
          </Reveal>
          <Reveal group={group}>
            {data.eyebrow && <p className="meta">{data.eyebrow}</p>}
            <h2 className="h2">{data.heading}</h2>
            {data.kind === "prose" && data.body && (
              <div className="prose" style={{ marginTop: "var(--space-md)" }}>
                {data.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}
            {data.kind === "list" && data.items && (
              <ul className="feature__list">
                {data.items.map((item, i) => (
                  <li key={item.title}>
                    <span className="num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{item.title}</strong>
                      {item.body}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
