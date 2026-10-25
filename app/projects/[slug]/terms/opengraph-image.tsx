import { generateStaticParams, getAppData } from "@/lib/apps";
import { getAppDisplayName } from "@/lib/app-presentation";
import { renderAppOgImage } from "@/lib/og/app";
import { appTermsOgAlt, ogImageMetadata } from "@/lib/og/image-metadata";

export { generateStaticParams };

export async function generateImageMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getAppData(slug);
  const alt = app ? appTermsOgAlt(getAppDisplayName(app)) : "App terms of service";
  return ogImageMetadata(alt);
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return renderAppOgImage(slug, { eyebrow: "Legal", title: "Terms of service" });
}
