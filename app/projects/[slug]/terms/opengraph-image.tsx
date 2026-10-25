import { generateStaticParams, getAppData } from "@/lib/apps";
import { getAppDisplayName } from "@/lib/app-presentation";
import { renderAppOgImage } from "@/lib/og/app";
import { appTermsOgAlt, ogImageMetadata } from "@/lib/og/image-metadata";

export { generateStaticParams };

export function generateImageMetadata({ params }: { params: { slug: string } }) {
  const app = getAppData(params.slug);
  const alt = app ? appTermsOgAlt(getAppDisplayName(app)) : "App terms of service";
  return ogImageMetadata(alt);
}

export default function Image({ params }: { params: { slug: string } }) {
  return renderAppOgImage(params.slug, { eyebrow: "Legal", title: "Terms of service" });
}
