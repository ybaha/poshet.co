import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { absoluteUrl, omitEmpty } from "@/lib/structured-data/utils";
import type { JsonLdObject } from "@/lib/structured-data/types";

export type OrganizationOptions = {
  description: string;
  sameAs?: string[];
};

export function buildOrganization({ description, sameAs }: OrganizationOptions): JsonLdObject {
  return omitEmpty({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/icon"),
    description,
    sameAs,
  });
}

/** Inline publisher reference used inside other schemas. */
export function organizationReference(): JsonLdObject {
  return {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };
}
