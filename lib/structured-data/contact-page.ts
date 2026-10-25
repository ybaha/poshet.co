import { CONTACT_EMAIL } from "@/data/studio";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { absoluteUrl, omitEmpty } from "@/lib/structured-data/utils";
import type { JsonLdObject } from "@/lib/structured-data/types";

export function buildContactPage(description: string): JsonLdObject {
  return omitEmpty({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact",
    description,
    url: absoluteUrl("/contact"),
    mainEntity: omitEmpty({
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      email: CONTACT_EMAIL,
    }),
  });
}
