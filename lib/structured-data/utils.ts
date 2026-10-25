import { SITE_URL } from "@/lib/seo";

/** Site-relative or absolute path → absolute URL on the site origin. */
export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  // `new URL` percent-encodes spaces, e.g. "Screenshot 01.png".
  return new URL(path, SITE_URL).href;
}

/** Drop null, undefined, and empty strings so JSON-LD stays valid for crawlers. */
export function omitEmpty<T extends Record<string, unknown>>(value: T): T {
  const out: Record<string, unknown> = {};

  for (const [key, entry] of Object.entries(value)) {
    if (entry === undefined || entry === null || entry === "") {
      continue;
    }

    if (Array.isArray(entry)) {
      const items = entry
        .map((item) => (isPlainObject(item) ? omitEmpty(item) : item))
        .filter((item) => item !== undefined && item !== null && item !== "");
      if (items.length > 0) {
        out[key] = items;
      }
      continue;
    }

    if (isPlainObject(entry)) {
      const nested = omitEmpty(entry);
      if (Object.keys(nested).length > 0) {
        out[key] = nested;
      }
      continue;
    }

    out[key] = entry;
  }

  return out as T;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function toIsoDateTime(date: string): string | undefined {
  if (!date) {
    return undefined;
  }
  if (date.includes("T")) {
    return date;
  }
  return `${date}T00:00:00.000Z`;
}
