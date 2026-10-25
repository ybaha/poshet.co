import { getAppDisplayName } from "@/lib/app-presentation";
import type { AppData } from "@/lib/types/app";
import { privacyPolicyDescription, termsDescription } from "@/lib/seo";
import { buildBreadcrumbList } from "@/lib/structured-data/breadcrumbs";
import { absoluteUrl, omitEmpty, toIsoDateTime } from "@/lib/structured-data/utils";
import type { JsonLdObject } from "@/lib/structured-data/types";

export type AppLegalKind = "privacy" | "terms";

function legalPath(slug: string, kind: AppLegalKind): string {
  return `/projects/${slug}/${kind}`;
}

function legalPageName(appName: string, kind: AppLegalKind): string {
  return kind === "privacy" ? `${appName} privacy policy` : `${appName} terms of service`;
}

function legalDescription(appName: string, kind: AppLegalKind): string {
  return kind === "privacy" ? privacyPolicyDescription(appName) : termsDescription(appName);
}

function breadcrumbLabel(kind: AppLegalKind): string {
  return kind === "privacy" ? "Privacy policy" : "Terms of service";
}

export function buildAppLegalStructuredData(
  app: AppData,
  slug: string,
  kind: AppLegalKind,
): JsonLdObject[] {
  const appName = getAppDisplayName(app);
  const path = legalPath(slug, kind);
  const legal = kind === "privacy" ? app.privacy : app.terms;

  return [
    omitEmpty({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: legalPageName(appName, kind),
      description: legalDescription(appName, kind),
      url: absoluteUrl(path),
      isPartOf: {
        "@type": "WebPage",
        name: appName,
        url: absoluteUrl(`/projects/${slug}`),
      },
      dateModified: toIsoDateTime(legal.lastUpdated),
    }),
    buildBreadcrumbList([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: appName, path: `/projects/${slug}` },
      { name: breadcrumbLabel(kind), path },
    ]),
  ];
}
