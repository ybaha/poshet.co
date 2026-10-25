import type { Metadata } from "next";
import type { AppData } from "@/lib/types/app";
import { getAppDisplayName } from "@/lib/app-presentation";

export const SITE_URL = "https://poshet.co";
export const SITE_NAME = "Poshet";
export const BRAND_SUFFIX = " | Poshet";
export const TITLE_MAX_LENGTH = 60;
export const DESCRIPTION_MIN_LENGTH = 120;
export const DESCRIPTION_MAX_LENGTH = 160;

/** Home document title (includes brand; does not use the layout title template). */
export const HOME_ABSOLUTE_TITLE = "Poshet | Websites and mobile apps, designed and built";

export const NOINDEX_ROBOTS: Metadata["robots"] = { index: false, follow: true };

/** Full title for Open Graph, Twitter, and audits. Page `title` fields omit the suffix; the layout template adds it. */
export function withBrand(pageTitle: string): string {
  const trimmed = pageTitle.trim();
  if (trimmed.endsWith(BRAND_SUFFIX) || trimmed.startsWith("Poshet |")) {
    return trimmed.length <= TITLE_MAX_LENGTH ? trimmed : trimmed.slice(0, TITLE_MAX_LENGTH);
  }
  const branded = `${trimmed}${BRAND_SUFFIX}`;
  return branded.length <= TITLE_MAX_LENGTH ? branded : branded.slice(0, TITLE_MAX_LENGTH);
}

/** Whether a page title segment fits after the root layout adds `BRAND_SUFFIX`. */
function fitsDocumentTitle(pageTitle: string): boolean {
  return pageTitle.trim().length + BRAND_SUFFIX.length <= TITLE_MAX_LENGTH;
}

/** Length-safe app listing title (short segment only; layout adds brand suffix). */
export function appSeoTitle(app: AppData): string {
  const name = getAppDisplayName(app);
  const tagline = app.metadata.tagline;
  const withTagline = `${name}: ${tagline}`;
  if (fitsDocumentTitle(withTagline)) return withTagline;

  const categoryWord = app.hero.subtitle.split("·")[0]?.trim() || "App";
  const withCategory = `${name} · ${categoryWord}`;
  if (fitsDocumentTitle(withCategory)) return withCategory;

  return name;
}

type PageMetadataOptions = {
  /** Page title without brand suffix (layout template adds ` | Poshet`). */
  title: string;
  description: string;
  /** Site-relative path, e.g. `/projects/math`. Resolved against `metadataBase`. */
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
};

type HomePageMetadataOptions = Omit<PageMetadataOptions, "title">;

export function homePageMetadata({
  description,
  path,
  type = "website",
  noindex,
}: HomePageMetadataOptions): Metadata {
  return {
    title: { absolute: HOME_ABSOLUTE_TITLE },
    description,
    alternates: { canonical: path === "/" ? SITE_URL : path },
    ...(noindex ? { robots: NOINDEX_ROBOTS } : {}),
    openGraph: {
      title: HOME_ABSOLUTE_TITLE,
      description,
      url: path,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title: HOME_ABSOLUTE_TITLE, description },
  };
}

/**
 * Title, description, canonical, Open Graph and Twitter tags from one source, so a page
 * can never share one description with search engines and another with social previews.
 * The preview image comes from the route's `opengraph-image` file.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  noindex,
}: PageMetadataOptions): Metadata {
  const brandedTitle = withBrand(title);
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: NOINDEX_ROBOTS } : {}),
    openGraph: {
      title: brandedTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title: brandedTitle, description },
  };
}

export function privacyPolicyDescription(appName: string): string {
  return `Privacy policy for ${appName}: what data the app collects, how Poshet uses and protects it, retention choices, and how to reach us with privacy questions.`;
}

export function termsDescription(appName: string): string {
  return `Terms of service for ${appName}: usage rules, licenses, billing where applicable, and your responsibilities when you download or use the app from Poshet.`;
}

export function deleteAccountDescription(appName: string): string {
  return `How to request deletion of your ${appName} account and data, what is removed, and what to expect after Poshet processes your request.`;
}

function clampMetaDescription(text: string): string {
  let out = text.trim();
  if (out.length > DESCRIPTION_MAX_LENGTH) {
    out = out.slice(0, DESCRIPTION_MAX_LENGTH).replace(/\s+\S*$/, "").trimEnd();
    if (!/[.!?]$/.test(out)) out += ".";
    if (out.length > DESCRIPTION_MAX_LENGTH) out = out.slice(0, DESCRIPTION_MAX_LENGTH).trimEnd();
  }
  return out;
}

export function appSupportDescription(appName: string, supportLine: string): string {
  const prefix = `Get help with ${appName}. `;
  let combined = clampMetaDescription(`${prefix}${supportLine.trim()}`);
  if (combined.length < DESCRIPTION_MIN_LENGTH) {
    const suffix = " Contact Poshet support by email from the app listing or this page.";
    combined = clampMetaDescription(`${combined}${suffix}`);
  }
  return combined;
}
