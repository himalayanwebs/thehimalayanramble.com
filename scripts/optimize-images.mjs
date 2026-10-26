// One-time (re-runnable) compression pass over the two image trees the site
// actually ships: public/graphics (page/hero photography) and
// public/assets/testimonials (Google-review avatars + trip photos).
//
// graphics/: source photos are full camera-resolution Pexels/Unsplash
// originals — nothing in this layout renders them anywhere near that size.
// Resizing to a realistic display ceiling and re-encoding is where nearly
// all the savings come from; format stays JPEG (not WebP) specifically so
// every existing `src` path in the data files keeps working unchanged —
// only the on-disk bytes shrink. Files that are already within the
// dimension ceiling but still heavyweight (> JPEG_SIZE_THRESHOLD) get a
// re-encode too, otherwise the first run's leftovers would never shrink.
//
// testimonials/: avatars render at 40px and trip photos at ~120px, but the
// originals are multi-hundred-KB (up to 2.8MB) PNG/WebP scans. These are
// always converted to WebP at role-appropriate sizes — `-000` suffix =
// avatar (small square), anything else = photo. The old source file is
// removed after a successful write so the huge originals stop shipping;
// testimonials.ts paths are updated from .png to .webp by the same run's
// follow-up edit (the script prints the renames it caused).
//
// Safe to re-run: images already at/under the target dimensions (and, for
// graphics JPEGs, under the size threshold) are left untouched rather
// than being lossily re-encoded again on every run.
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.join(import.meta.dirname, "..");
const GRAPHICS_DIR = path.join(ROOT, "public", "graphics");
const TESTIMONIALS_DIR = path.join(ROOT, "public", "assets", "testimonials");

const GRAPHICS_MAX_DIMENSION = 1600;
const GRAPHICS_JPEG_QUALITY = 72;
const GRAPHICS_SIZE_THRESHOLD = 250 * 1024;

// Responsive variant widths for public/graphics. Each source jpg/png gets
// sibling WebP files (same basename + "-<width>.webp") so the Media
// component can ship a real srcSet instead of one fixed-size JPEG for
// every viewport. The source file stays on disk as the plain-`src`
// fallback for the (now unsupported-by-browserslist) no-WebP case, and
// as the source of truth for future re-runs.
const VARIANT_WIDTHS = [640, 960, 1600];
const VARIANT_WEBP_QUALITY = 75;
const MANIFEST_FILE = path.join(ROOT, "src", "data", "image-manifest.json");

const AVATAR_MAX_DIMENSION = 160;
const PHOTO_MAX_DIMENSION = 480;
const AVATAR_WEBP_QUALITY = 80;
const PHOTO_WEBP_QUALITY = 75;

// Variant files (foo-640.webp …) match the image extension test, so the
// graphics walk filters them out by name: they are outputs, never inputs.
const VARIANT_SUFFIX_RE = new RegExp(`-(?:${VARIANT_WIDTHS.join("|")})\\.webp$`, "i");

async function walk(dir, { skipVariants = false } = {}) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full, { skipVariants })));
    else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) {
      if (skipVariants && VARIANT_SUFFIX_RE.test(entry.name)) continue;
      files.push(full);
    }
  }
  return files;
}

// Write-then-swap instead of renaming over the destination directly — on
// Windows, a rename onto an existing path that anything (antivirus,
// indexer, the previous crashed run's libvips handle) still holds open
// fails with EPERM, and sharp/libvips can keep the source handle open
// even after toBuffer(). Removing the destination first turns the
// rename into a plain create, which doesn't care what held the old file.
// Windows Defender briefly locks freshly written files while it scans
// them, so the whole write/rm/rename sequence is retried with backoff;
// if it still fails the caller logs and moves on rather than aborting
// the batch.
async function retryWindowsLock(fn) {
  for (let attempt = 1; ; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if ((err.code === "EPERM" || err.code === "EBUSY") && attempt < 10) {
        await new Promise((resolve) => setTimeout(resolve, 250));
        continue;
      }
      throw err;
    }
  }
}

async function writeAtomic(file, buffer) {
  await retryWindowsLock(async () => {
    const tmp = `${file}.tmp`;
    await fs.writeFile(tmp, buffer);
    await fs.rm(file, { force: true });
    await fs.rename(tmp, file);
  });
}

async function optimizeGraphics(file) {
  // Buffer up front — see the note in optimizeTestimonial: sharp(path)
  // keeps the source handle open on Windows and blocks the swap.
  const input = await fs.readFile(file);
  const before = input.length;
  const meta = await sharp(input).metadata();
  const withinDimensions =
    meta.width <= GRAPHICS_MAX_DIMENSION && meta.height <= GRAPHICS_MAX_DIMENSION;
  const withinSize = before <= GRAPHICS_SIZE_THRESHOLD;

  if (withinDimensions && withinSize) {
    return { file, before, after: before, skipped: true };
  }

  const pipeline = sharp(input).resize({
    width: GRAPHICS_MAX_DIMENSION,
    height: GRAPHICS_MAX_DIMENSION,
    fit: "inside",
    withoutEnlargement: true,
  });

  const buffer =
    meta.format === "png"
      ? await pipeline.png({ quality: 82, compressionLevel: 9 }).toBuffer()
      : await pipeline.jpeg({ quality: GRAPHICS_JPEG_QUALITY, mozjpeg: true }).toBuffer();

  // Never keep a "compression" that made the file bigger — and don't
  // rewrite files the encoder only "saves" a few percent on: a
  // lossily re-encoded 1600px JPEG often lands within a hair of its
  // input, and writing those every run both churns bytes and drifts
  // quality down over time (this pass is re-runnable by design).
  if (withinDimensions && buffer.length >= before * 0.95) {
    return { file, before, after: before, skipped: true };
  }

  await writeAtomic(file, buffer);
  return { file, before, after: buffer.length, skipped: false };
}

// Emit width-limited WebP siblings for one graphics source and return the
// public path + available widths for the manifest. Existing variants are
// trusted as-is (re-runs stay cheap and never fight open file handles on
// Windows); missing ones are generated from the source buffer in one pass
// per width. A source narrower than every target width yields an empty
// width list — the Media component then renders a plain single-src img.
async function generateVariants(file) {
  const base = file.replace(/\.(?:jpe?g|png|webp)$/i, "");
  const relSrc = "/" + path.relative(path.join(ROOT, "public"), file).split(path.sep).join("/");
  const input = await fs.readFile(file);
  const meta = await sharp(input).metadata();
  const widths = [];
  for (const width of VARIANT_WIDTHS) {
    if (!meta.width || width > meta.width) continue;
    const variant = `${base}-${width}.webp`;
    try {
      await fs.access(variant);
      widths.push(width);
      continue;
    } catch {}
    const buffer = await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: VARIANT_WEBP_QUALITY })
      .toBuffer();
    await writeAtomic(variant, buffer);
    widths.push(width);
  }
  return { src: relSrc, widths };
}

async function optimizeTestimonial(file) {
  const base = path.basename(file);
  const match = /^(.+)-(\d{3})\.(?:png|jpe?g|webp)$/i.exec(base);
  if (!match) return null;

  const isAvatar = match[2] === "000";
  const maxDimension = isAvatar ? AVATAR_MAX_DIMENSION : PHOTO_MAX_DIMENSION;
  const quality = isAvatar ? AVATAR_WEBP_QUALITY : PHOTO_WEBP_QUALITY;

  // Read fully into a buffer up front and decode only from the buffer:
  // passing the path to sharp() makes libvips keep the source file open
  // in its input cache on Windows, which then blocks the rm/rename in
  // writeAtomic with EBUSY no matter how long we retry.
  const input = await fs.readFile(file);
  const before = input.length;
  const meta = await sharp(input).metadata();
  const isAlreadySizedWebp =
    meta.format === "webp" && meta.width <= maxDimension && meta.height <= maxDimension;
  if (isAlreadySizedWebp) {
    return { kind: "skip", file, before };
  }

  const buffer = await sharp(input)
    .resize({ width: maxDimension, height: maxDimension, fit: "inside", withoutEnlargement: true })
    .webp({ quality })
    .toBuffer();

  const webpFile = file.replace(/\.(?:png|jpe?g|webp)$/i, ".webp");
  await writeAtomic(webpFile, buffer);

  // Same-path replacement (webp -> webp) is done once the new bytes are
  // safely in place; a PNG/JPEG source is removed only after its .webp
  // sibling exists, so a crash mid-run never loses an image that the data
  // files still reference.
  if (path.resolve(webpFile) !== path.resolve(file)) {
    await retryWindowsLock(() => fs.rm(file, { force: true }));
  }

  return {
    kind: path.resolve(webpFile) === path.resolve(file) ? "resize" : "convert",
    file,
    webpFile,
    before,
    after: buffer.length,
  };
}

// Optional first argument limits the pass: `node scripts/optimize-images.mjs
// testimonials` runs only the testimonials tree (useful when the graphics
// pass already finished and must not be lossily re-encoded again).
const only = process.argv[2];

console.log("— public/graphics —");
const graphicsFiles = only === "testimonials" ? [] : await walk(GRAPHICS_DIR, { skipVariants: true });
let gBefore = 0;
let gAfter = 0;
let gOptimized = 0;
let gFailed = 0;
for (const file of graphicsFiles) {
  try {
    const r = await optimizeGraphics(file);
    gBefore += r.before;
    gAfter += r.after;
    const rel = path.relative(GRAPHICS_DIR, r.file);
    if (r.skipped) {
      console.log(`skip   ${rel} (${Math.round(r.before / 1024)}KB, already optimal)`);
    } else {
      gOptimized++;
      const pct = Math.round((1 - r.after / r.before) * 100);
      console.log(`${Math.round(r.before / 1024)}KB -> ${Math.round(r.after / 1024)}KB (-${pct}%)  ${rel}`);
    }
  } catch (err) {
    gFailed++;
    console.log(`FAIL   ${path.relative(GRAPHICS_DIR, file)} (${err.code || err.message}) — re-run to retry`);
  }
}

console.log("\n— graphics responsive variants (WebP) —");
const manifest = {};
let vFailed = 0;
for (const file of graphicsFiles) {
  try {
    const { src, widths } = await generateVariants(file);
    manifest[src] = widths.sort((a, b) => a - b);
    console.log(`ok     ${src} (${manifest[src].join(", ") || "no variants"})`);
  } catch (err) {
    vFailed++;
    console.log(
      `FAIL   ${path.relative(GRAPHICS_DIR, file)} (${err.code || err.message}) — re-run to retry`
    );
  }
}
// Manifest is rewritten every successful run from actual disk state; a run
// with every variant already present is a no-op write (content identical).
if (Object.keys(manifest).length > 0) {
  const nextJson = JSON.stringify(manifest, null, 2) + "\n";
  const prevJson = await fs.readFile(MANIFEST_FILE, "utf8").catch(() => null);
  if (prevJson !== nextJson) {
    await fs.writeFile(MANIFEST_FILE, nextJson);
    console.log(`wrote  ${path.relative(ROOT, MANIFEST_FILE)}`);
  } else {
    console.log(`skip   ${path.relative(ROOT, MANIFEST_FILE)} (unchanged)`);
  }
}

console.log("\n— public/assets/testimonials —");
const testimonialFiles = await walk(TESTIMONIALS_DIR);
let tBefore = 0;
let tAfter = 0;
let tTouched = 0;
const renamedPaths = [];
let tFailed = 0;
for (const file of testimonialFiles) {
  let r;
  try {
    r = await optimizeTestimonial(file);
  } catch (err) {
    tFailed++;
    console.log(
      `FAIL   ${path.relative(TESTIMONIALS_DIR, file)} (${err.code || err.message}) — re-run to retry`
    );
    continue;
  }
  if (!r) continue;
  const rel = path.relative(TESTIMONIALS_DIR, r.file);
  if (r.kind === "skip") {
    tBefore += r.before;
    tAfter += r.before;
    console.log(`skip   ${rel} (${Math.round(r.before / 1024)}KB, already sized)`);
  } else {
    tTouched++;
    tBefore += r.before;
    tAfter += r.after;
    const pct = Math.round((1 - r.after / r.before) * 100);
    console.log(
      `${Math.round(r.before / 1024)}KB -> ${Math.round(r.after / 1024)}KB (-${pct}%)  ${rel}` +
        (r.kind === "convert" ? ` => ${path.basename(r.webpFile)}` : "")
    );
    if (r.kind === "convert") {
      renamedPaths.push({
        from: `/assets/testimonials/${path.basename(r.file)}`,
        to: `/assets/testimonials/${path.basename(r.webpFile)}`,
      });
    }
  }
}

console.log(
  `\nDone. graphics: ${gOptimized}/${graphicsFiles.length} re-encoded` +
    (gFailed ? `, ${gFailed} FAILED` : "") +
    ` (${Math.round(gBefore / 1024 / 1024)}MB -> ${Math.round(gAfter / 1024 / 1024)}MB). ` +
    `variants: ${vFailed ? `${vFailed} FAILED` : "ok"} across ${graphicsFiles.length} sources. ` +
    `testimonials: ${tTouched}/${testimonialFiles.length} resized/converted` +
    (tFailed ? `, ${tFailed} FAILED` : "") +
    ` (${Math.round(tBefore / 1024 / 1024)}MB -> ${Math.round(tAfter / 1024 / 1024)}MB).`
);

if (renamedPaths.length > 0) {
  console.log("\nPath renames to apply in src/data/testimonials.ts:");
  for (const { from, to } of renamedPaths) console.log(`  ${from}  ->  ${to}`);
}
