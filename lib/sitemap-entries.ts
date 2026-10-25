import type { MetadataRoute } from "next";
import { getAllAppSlugs, getAppData } from "@/lib/apps";
import { getPostSlugs, getPost } from "@/lib/blog";
import { authors } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";

type SitemapEntry = MetadataRoute.Sitemap[number];

const STATIC_PATHS = ["/", "/projects", "/contact", "/blog", "/authors"];

function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}

function parseDate(isoDate: string | undefined): Date | undefined {
  if (!isoDate) return undefined;
  const parsed = new Date(isoDate);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

/** `lastModified` is only set when the source has a real date; a guessed one misleads crawlers. */
function entry(path: string, lastModified?: Date): SitemapEntry {
  return lastModified ? { url: absoluteUrl(path), lastModified } : { url: absoluteUrl(path) };
}

function staticPageEntries(): SitemapEntry[] {
  return STATIC_PATHS.map((path) => entry(path));
}

function appPageEntries(): SitemapEntry[] {
  return getAllAppSlugs().flatMap((slug) => {
    const app = getAppData(slug);
    if (!app) return [];

    return [
      entry(`/projects/${slug}`),
      entry(`/projects/${slug}/privacy`, parseDate(app.privacy.lastUpdated)),
      entry(`/projects/${slug}/terms`, parseDate(app.terms.lastUpdated)),
    ];
  });
}

/** Posts marked `noindex` are left out so the sitemap never contradicts the page. */
async function blogEntries(): Promise<SitemapEntry[]> {
  const posts = await Promise.all((await getPostSlugs()).map((slug) => getPost(slug)));

  return posts.flatMap((post) =>
    post && !post.noindex ? [entry(`/blog/${post.slug}`, parseDate(post.date))] : []
  );
}

function authorEntries(): SitemapEntry[] {
  return authors.map((author) => entry(`/author/${author.slug}`));
}

/** Merge by URL; first occurrence wins (stable order). */
export function dedupeSitemapEntries(entries: SitemapEntry[]): SitemapEntry[] {
  const seen = new Set<string>();

  return entries.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
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
