import type { MetadataRoute } from "next";
import { getAllAppSlugs, getAppData } from "@/lib/apps";
import { getPostSlugs, getPost } from "@/lib/blog";
import { authors } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";

/** Fallback when a page has no content-specific last-updated date. */
const STATIC_PAGE_LAST_MODIFIED = new Date("2024-06-01T00:00:00.000Z");

type SitemapEntry = MetadataRoute.Sitemap[number];

function absoluteUrl(path: string): string {
  const href = new URL(path, SITE_URL).href;
  return path === "/" ? SITE_URL : href;
}

function parseLastUpdated(isoDate: string | undefined): Date | undefined {
  if (!isoDate) return undefined;
  const parsed = new Date(isoDate);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

function entry(path: string, lastModified: Date): SitemapEntry {
  return { url: absoluteUrl(path), lastModified };
}

function staticPageEntries(): SitemapEntry[] {
  const paths = ["/", "/projects", "/contact", "/blog", "/authors"];
  return paths.map((path) => entry(path, STATIC_PAGE_LAST_MODIFIED));
}

function appPageEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  for (const slug of getAllAppSlugs()) {
    const app = getAppData(slug);
    if (!app) continue;

    const privacyUpdated = parseLastUpdated(app.privacy.lastUpdated);
    const termsUpdated = parseLastUpdated(app.terms.lastUpdated);
    const projectLastMod =
      privacyUpdated && termsUpdated
        ? new Date(Math.max(privacyUpdated.getTime(), termsUpdated.getTime()))
        : privacyUpdated ?? termsUpdated ?? STATIC_PAGE_LAST_MODIFIED;

    entries.push(entry(`/projects/${slug}`, projectLastMod));

    entries.push(
      entry(`/projects/${slug}/privacy`, privacyUpdated ?? STATIC_PAGE_LAST_MODIFIED),
      entry(`/projects/${slug}/terms`, termsUpdated ?? STATIC_PAGE_LAST_MODIFIED)
    );
  }

  return entries;
}

async function blogEntries(): Promise<SitemapEntry[]> {
  const slugs = await getPostSlugs();
  const entries: SitemapEntry[] = [];

  for (const slug of slugs) {
    const post = await getPost(slug);
    const lastModified = parseLastUpdated(post?.date) ?? STATIC_PAGE_LAST_MODIFIED;
    entries.push(entry(`/blog/${slug}`, lastModified));
  }

  return entries;
}

function authorEntries(): SitemapEntry[] {
  return authors.map((author) => entry(`/author/${author.slug}`, STATIC_PAGE_LAST_MODIFIED));
}

/** Merge by URL; first occurrence wins (stable order). */
export function dedupeSitemapEntries(entries: SitemapEntry[]): SitemapEntry[] {
  const seen = new Set<string>();
  const result: SitemapEntry[] = [];

  for (const item of entries) {
    if (seen.has(item.url)) continue;
    seen.add(item.url);
    result.push(item);
  }

  return result;
}

export async function buildSitemapEntries(): Promise<MetadataRoute.Sitemap> {
  const entries = [
    ...staticPageEntries(),
    ...appPageEntries(),
    ...authorEntries(),
    ...(await blogEntries()),
  ];

  return dedupeSitemapEntries(entries);
}
