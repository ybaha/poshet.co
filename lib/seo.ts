import type { Metadata } from "next";

export const SITE_URL = "https://poshet.co";
export const SITE_NAME = "Poshet";

export const NOINDEX_ROBOTS: Metadata["robots"] = { index: false, follow: true };

type PageMetadataOptions = {
  title: string;
  description: string;
  /** Site-relative path, e.g. `/projects/math`. Resolved against `metadataBase`. */
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
};

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
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: NOINDEX_ROBOTS } : {}),
    openGraph: { title, description, url: path, siteName: SITE_NAME, type, locale: "en_US" },
    twitter: { card: "summary_large_image", title, description },
  };
}
