import { generateStaticParams, getAppData } from "@/lib/apps";
import { renderAppOgImage } from "@/lib/og/app";
import { appMainOgAlt, ogImageMetadata } from "@/lib/og/image-metadata";

export { generateStaticParams };

export async function generateImageMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getAppData(slug);
  const alt = app ? appMainOgAlt(app) : "Poshet mobile app";
  return ogImageMetadata(alt);
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return renderAppOgImage(slug);
}
