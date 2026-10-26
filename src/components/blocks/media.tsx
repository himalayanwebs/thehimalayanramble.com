import { cn } from "@/lib/utils";
import imageManifest from "@/data/image-manifest.json";

export type MediaAspect = "21x9" | "16x9" | "4x5" | "3x4" | "1x1" | "3x2" | "4x3";

export interface ImageRef {
  src: string;
  alt: string;
}

// Maps public path -> generated WebP variant widths, written by
// scripts/optimize-images.mjs (public/graphics/foo.jpg -> foo-640.webp …).
// With next/images.unoptimized the next/image component emits a single
// fixed src for every viewport; serving pre-generated width variants from
// a plain <img> is what lets phones download a ~60KB 640w WebP instead of
// a ~270KB desktop JPEG.
const manifest = imageManifest as Record<string, number[]>;

const DEFAULT_SIZES = "(max-width: 859px) 100vw, 55vw";

function buildSrcSet(src: string): string | undefined {
  const widths = manifest[src];
  if (!widths || widths.length === 0) return undefined;
  const base = src.replace(/\.(?:jpe?g|png|webp)$/i, "");
  return widths.map((w) => `${base}-${w}.webp ${w}w`).join(", ");
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
  const srcSet = buildSrcSet(image.src);
  const sizesAttr = srcSet ? (sizes ?? DEFAULT_SIZES) : undefined;

  return (
    <div className={cn("media", `media--${aspect}`, halftone && "halftone", className)}>
      {/* Priority images get a hoisted <link rel="preload"> for the srcSet
          itself (not the fallback src), so the LCP request starts at HTML
          parse instead of waiting on the <img> to be discovered. React 19
          hoists this link into <head>. */}
      {priority && srcSet && (
        <link
          rel="preload"
          as="image"
          imageSrcSet={srcSet}
          imageSizes={sizesAttr}
          fetchPriority="high"
        />
      )}
      <img
        src={image.src}
        srcSet={srcSet}
        sizes={sizesAttr}
        alt={image.alt}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? undefined : "lazy"}
        decoding="async"
      />
    </div>
  );
}
