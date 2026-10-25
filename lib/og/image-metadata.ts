import { getAppDisplayName } from "@/lib/app-presentation";
import type { AppData } from "@/lib/types/app";
import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og/constants";

export const OG_IMAGE_ID = "default";

export type OgImageMetadataItem = {
  id: string;
  alt: string;
  size: typeof OG_SIZE;
  contentType: typeof OG_CONTENT_TYPE;
};

/** Single default OG/Twitter image entry for `generateImageMetadata`. */
export function ogImageMetadata(alt: string): OgImageMetadataItem[] {
  return [{ id: OG_IMAGE_ID, alt, size: OG_SIZE, contentType: OG_CONTENT_TYPE }];
}

export function appMainOgAlt(app: AppData): string {
  const name = getAppDisplayName(app);
  const tagline = app.metadata.tagline.trim() || app.hero.subtitle;
  return `${name} — ${tagline}`;
}

export function appPrivacyOgAlt(appName: string): string {
  return `${appName} privacy policy`;
}

export function appTermsOgAlt(appName: string): string {
  return `${appName} terms of service`;
}

export function appSupportOgAlt(appName: string): string {
  return `${appName} app support`;
}

export function appDeleteAccountOgAlt(appName: string): string {
  return `${appName} account deletion`;
}

export function authorOgAlt(name: string, role: string): string {
  return `${name}, ${role}`;
}

export function blogPostOgAlt(title: string): string {
  return title;
}
