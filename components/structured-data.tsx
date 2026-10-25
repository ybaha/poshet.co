import type { JsonLdObject } from "@/lib/structured-data/types";

type StructuredDataProps = {
  data: JsonLdObject | JsonLdObject[];
};

function serializeJsonLd(data: JsonLdObject | JsonLdObject[]): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Server-only JSON-LD script tags (one array payload when multiple graphs). */
export function StructuredData({ data }: StructuredDataProps) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(payload) }}
    />
  );
}
