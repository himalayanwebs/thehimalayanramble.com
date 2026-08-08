// One-time (re-runnable) compression pass over public/graphics/.
//
// Source photos are full camera-resolution Pexels/Unsplash originals (some
// 8000px+ wide, several MB each) — nothing in this site's layout renders
// them anywhere near that size. Resizing down to a realistic display
// ceiling and re-encoding is where nearly all the savings come from; format
// stays JPEG (not WebP) specifically so every existing `src` path in the
// data files keeps working unchanged — only the on-disk bytes shrink.
//
// Safe to re-run: images already at/under MAX_DIMENSION and already smaller
// than a fresh re-encode are left untouched (skips genuinely tiny/already-
// optimized files rather than re-compressing them again).
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.join(import.meta.dirname, "..", "public", "graphics");
const MAX_DIMENSION = 1920;
const JPEG_QUALITY = 78;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) files.push(full);
  }
  return files;
}

async function optimize(file) {
  const before = (await fs.stat(file)).size;
  const meta = await sharp(file).metadata();

  // Dimensions, not output byte size, are the right "already done" signal.
  // Re-encoding a JPEG that's already at MAX_DIMENSION and already quality-78
  // still yields a marginally smaller file every time (lossy re-compression
  // always finds a little more to shave), so comparing before/after bytes
  // would silently re-compress — and generationally degrade — every image
  // on every re-run instead of skipping the ones already done.
  if (meta.width <= MAX_DIMENSION && meta.height <= MAX_DIMENSION) {
    return { file, before, after: before, skipped: true };
  }

  const buffer =
    meta.format === "png"
      ? await sharp(file)
          .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: "inside", withoutEnlargement: true })
          .png({ quality: 82, compressionLevel: 9 })
          .toBuffer()
      : await sharp(file)
          .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: "inside", withoutEnlargement: true })
          .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
          .toBuffer();

  // Write-then-rename instead of overwriting `file` directly — on Windows,
  // sharp/libvips can still hold the source file handle open at this point,
  // and writing straight to the same path intermittently fails with an
  // UNKNOWN/EBUSY-style error. Renaming over it after the handle is free
  // (post-buffer) is atomic and avoids the race entirely.
  const tmp = `${file}.tmp`;
  await fs.writeFile(tmp, buffer);
  await fs.rename(tmp, file);
  return { file, before, after: buffer.length, skipped: false };
}

const files = await walk(ROOT);
console.log(`Found ${files.length} images under public/graphics\n`);

let totalBefore = 0;
let totalAfter = 0;
let optimizedCount = 0;

for (const file of files) {
  const result = await optimize(file);
  totalBefore += result.before;
  totalAfter += result.after;
  const rel = path.relative(ROOT, result.file);
  if (result.skipped) {
    console.log(`skip   ${rel} (${Math.round(result.before / 1024)}KB, already optimal)`);
  } else {
    optimizedCount++;
    const pct = Math.round((1 - result.after / result.before) * 100);
    console.log(
      `${Math.round(result.before / 1024)}KB -> ${Math.round(result.after / 1024)}KB (-${pct}%)  ${rel}`
    );
  }
}

console.log(
  `\nDone. ${optimizedCount}/${files.length} files re-encoded. ` +
    `${Math.round(totalBefore / 1024 / 1024)}MB -> ${Math.round(totalAfter / 1024 / 1024)}MB ` +
    `(-${Math.round((1 - totalAfter / totalBefore) * 100)}%)`
);
