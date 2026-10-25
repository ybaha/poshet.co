import { generateStaticParams, getAppData } from "@/lib/apps";
import { getAppDisplayName } from "@/lib/app-presentation";
import { renderAppOgImage } from "@/lib/og/app";
import { appDeleteAccountOgAlt, ogImageMetadata } from "@/lib/og/image-metadata";

export { generateStaticParams };

export async function generateImageMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getAppData(slug);
  const alt = app ? appDeleteAccountOgAlt(getAppDisplayName(app)) : "App account deletion";
  return ogImageMetadata(alt);
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return renderAppOgImage(slug, { eyebrow: "Support", title: "Delete your account" });
}
