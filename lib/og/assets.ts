import fs from "fs/promises";
import path from "path";

const MIME_TYPES: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
};

/** Reads a file from /public as a data URI, so the OG renderer never makes a network request. */
export async function publicImageDataUri(publicPath: string): Promise<string> {
  const absolute = path.join(process.cwd(), "public", publicPath);
  const mime = MIME_TYPES[path.extname(publicPath).toLowerCase()] ?? "application/octet-stream";
  const data = await fs.readFile(absolute);
  return `data:${mime};base64,${data.toString("base64")}`;
}
