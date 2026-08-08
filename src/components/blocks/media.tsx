import Image from "next/image";
import { cn } from "@/lib/utils";

export type MediaAspect = "21x9" | "16x9" | "4x5" | "3x4" | "1x1" | "3x2" | "4x3";

export interface ImageRef {
  src: string;
  alt: string;
}

export function Media({
  image,
  aspect,
  halftone,
  priority,
  sizes,
  className,
}: {
  image: ImageRef;
  aspect: MediaAspect;
  halftone?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className={cn("media", `media--${aspect}`, halftone && "halftone", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes ?? "(max-width: 860px) 100vw, 50vw"}
        priority={priority}
        loading={priority ? undefined : "lazy"}
      />
    </div>
  );
}
