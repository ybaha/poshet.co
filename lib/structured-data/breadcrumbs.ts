import { absoluteUrl, omitEmpty } from "@/lib/structured-data/utils";
import type { BreadcrumbInput, JsonLdObject } from "@/lib/structured-data/types";

export function buildBreadcrumbList(items: BreadcrumbInput[]): JsonLdObject {
  return omitEmpty({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) =>
      omitEmpty({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      }),
    ),
  });
}
