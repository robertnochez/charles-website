import fs from "fs"
import path from "path"

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"])

/**
 * Returns an array of public-relative URLs for every image in
 * /public/media/<dir>.  Safe to call from Server Components only.
 */
export function getPhotosForCategory(dir: string): string[] {
  const absDir = path.join(process.cwd(), "public", "media", dir)

  if (!fs.existsSync(absDir)) return []

  return fs
    .readdirSync(absDir)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()                                          // deterministic order
    .map((file) => `/media/${dir}/${file}`)
}