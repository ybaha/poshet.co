import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { omitEmpty } from "@/lib/structured-data/utils";
import type { JsonLdObject } from "@/lib/structured-data/types";

export function buildWebSite(): JsonLdObject {
  return omitEmpty({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  });
}
