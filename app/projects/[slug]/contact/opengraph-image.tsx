import { generateStaticParams, getAppData } from "@/lib/apps";
import { getAppDisplayName } from "@/lib/app-presentation";
import { renderAppOgImage } from "@/lib/og/app";
import { appSupportOgAlt, ogImageMetadata } from "@/lib/og/image-metadata";

export { generateStaticParams };

export function generateImageMetadata({ params }: { params: { slug: string } }) {
  const app = getAppData(params.slug);
  const alt = app ? appSupportOgAlt(getAppDisplayName(app)) : "App support";
  return ogImageMetadata(alt);
}

export default function Image({ params }: { params: { slug: string } }) {
  return renderAppOgImage(params.slug, { eyebrow: "Support", title: "How can we help?" });
}
