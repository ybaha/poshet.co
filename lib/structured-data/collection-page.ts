import { authors } from "@/lib/constants";
import { authorSchemaType } from "@/lib/structured-data/author";
import { absoluteUrl, omitEmpty } from "@/lib/structured-data/utils";
import type { JsonLdObject } from "@/lib/structured-data/types";

export function buildAuthorsCollectionPage(description: string): JsonLdObject {
  return omitEmpty({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Authors",
    description,
    url: absoluteUrl("/authors"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: authors.map((author, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: omitEmpty({
          "@type": authorSchemaType(author),
          name: author.name,
          url: absoluteUrl(`/author/${author.slug}`),
        }),
      })),
    },
  });
}
