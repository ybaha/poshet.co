import { generateStaticParams, getAppData } from "@/lib/apps";
import { getAppDisplayName } from "@/lib/app-presentation";
import { renderAppOgImage } from "@/lib/og/app";
import { appDeleteAccountOgAlt, ogImageMetadata } from "@/lib/og/image-metadata";

export { generateStaticParams };

export function generateImageMetadata({ params }: { params: { slug: string } }) {
  const app = getAppData(params.slug);
  const alt = app ? appDeleteAccountOgAlt(getAppDisplayName(app)) : "App account deletion";
  return ogImageMetadata(alt);
}

export default function Image({ params }: { params: { slug: string } }) {
  return renderAppOgImage(params.slug, { eyebrow: "Support", title: "Delete your account" });
}
