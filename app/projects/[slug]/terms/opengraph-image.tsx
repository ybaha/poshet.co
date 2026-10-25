import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og/constants";
import { generateStaticParams } from "@/lib/apps";
import { renderAppOgImage } from "@/lib/og/app";

export const alt = "Terms of service for a Poshet app";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export { generateStaticParams };

export default function Image({ params }: { params: { slug: string } }) {
  return renderAppOgImage(params.slug, { eyebrow: "Legal", title: "Terms of service" });
}
