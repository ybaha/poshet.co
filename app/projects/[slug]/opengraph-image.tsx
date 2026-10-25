import { generateStaticParams, getAppData } from "@/lib/apps";
import { renderAppOgImage } from "@/lib/og/app";
import { appMainOgAlt, ogImageMetadata } from "@/lib/og/image-metadata";

export { generateStaticParams };

export function generateImageMetadata({ params }: { params: { slug: string } }) {
  const app = getAppData(params.slug);
  const alt = app ? appMainOgAlt(app) : "Poshet mobile app";
  return ogImageMetadata(alt);
}

export default function Image({ params }: { params: { slug: string } }) {
  return renderAppOgImage(params.slug);
}
