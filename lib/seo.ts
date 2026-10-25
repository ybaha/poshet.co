import type { Metadata } from "next";
import type { AppData } from "@/lib/types/app";
import { getAppDisplayName } from "@/lib/app-presentation";

export const SITE_URL = "https://poshet.co";
export const SITE_NAME = "Poshet";
export const SITE_PUBLISHER = "Poshet";
export const BRAND_SUFFIX = " | Poshet";

/** Matches Tailwind `studio-blue` (primary brand CTA colour). */
export const BRAND_THEME_COLOR = "#1556D6";

export const SITE_DESCRIPTION =
  "Poshet is an independent digital studio that designs and builds websites and mobile apps. Book a 30-minute intro call to talk through your project.";

export const INDEX_ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export const SITE_FORMAT_DETECTION: Metadata["formatDetection"] = {
  telephone: false,
  email: false,
  address: false,
};
export const TITLE_MAX_LENGTH = 60;
export const DESCRIPTION_MIN_LENGTH = 120;
export const DESCRIPTION_MAX_LENGTH = 160;

/** Home document title (includes brand; does not use the layout title template). */
export const HOME_ABSOLUTE_TITLE = "Poshet | Websites and mobile apps, designed and built";

export const NOINDEX_ROBOTS: Metadata["robots"] = {
  index: false,
  follow: true,
  googleBot: { index: false, follow: true },
};

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

type PageMetadataArticle = {
  publishedTime: string;
  modifiedTime?: string;
  /** Absolute profile URLs for article authors. */
  authors: string[];
  section?: string;
};

type PageMetadataOptions = {
  /** Page title without brand suffix (layout template adds ` | Poshet`). */
  title: string;
  description: string;
  /** Site-relative path, e.g. `/projects/math`. Resolved against `metadataBase`. */
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
  article?: PageMetadataArticle;
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
  article,
}: PageMetadataOptions): Metadata {
  const brandedTitle = withBrand(title);
  const openGraphArticle =
    type === "article" && article
      ? omitEmptyArticle({
          publishedTime: article.publishedTime,
          modifiedTime: article.modifiedTime,
          authors: article.authors,
          section: article.section,
        })
      : undefined;

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
      ...openGraphArticle,
    },
    twitter: { card: "summary_large_image", title: brandedTitle, description },
  };
}

function omitEmptyArticle<T extends Record<string, unknown>>(value: T): T {
  const out: Record<string, unknown> = {};
  for (const [key, entry] of Object.entries(value)) {
    if (entry !== undefined && entry !== null && entry !== "") {
      out[key] = entry;
    }
  }
  return out as T;
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
