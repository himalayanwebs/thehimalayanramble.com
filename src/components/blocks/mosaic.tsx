import Link from "next/link";
import { cn } from "@/lib/utils";
import { Media, type ImageRef, type MediaAspect } from "./media";
import { Reveal } from "./reveal";

export interface MosaicTile {
  href: string;
  name: string;
  meta?: string;
  hook?: string;
  image: ImageRef;
  large?: boolean;
  aspect?: MediaAspect;
}

export function Mosaic({ tiles, group = "mosaic" }: { tiles: MosaicTile[]; group?: string }) {
  return (
    <div className="mosaic">
      {tiles.map((tile) => (
        <Reveal key={tile.href} group={group} asChild>
          <Link href={tile.href} className={cn("mosaic__tile", tile.large && "mosaic__tile--lg")}>
            {/* No priority here, even for the large tile: these tiles sit
                well below the fold, and a priority preload for one of them
                competes with the hero image for LCP bandwidth (shows up as
                an "LCP request discovery" finding). Lazy by default. */}
            <Media image={tile.image} aspect={tile.aspect ?? (tile.large ? "16x9" : "4x5")} />
            <div className="mosaic__name">
              <h3 className="h3">{tile.name}</h3>
              {tile.meta && <span className="meta">{tile.meta}</span>}
            </div>
            {tile.hook && <p className="mosaic__hook">{tile.hook}</p>}
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
