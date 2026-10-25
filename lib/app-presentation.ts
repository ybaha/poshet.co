import type { FeaturedWork, WorkPreview } from "@/data/studio";
import type { AppData, AppDownloadLink } from "@/lib/types/app";

export const PLATFORM_LABELS: Record<AppDownloadLink["platform"], string> = {
  ios: "App Store",
  android: "Google Play",
  web: "Web",
};

const DEFAULT_TINT = "#1556D6";
const PREVIEW_SCREENSHOT_COUNT = 2;

/** The app's own name without a store-style suffix, e.g. "Grip: Last Longer in Bed" → "Grip". */
export function getAppDisplayName({ hero }: AppData): string {
  return hero.title.split(/:\s|\s[-–—]\s/)[0].trim();
}

export function getLiveDownloads({ downloads }: AppData): AppDownloadLink[] {
  return downloads.filter((download) => download.available);
}

export function isLive(app: AppData): boolean {
  return getLiveDownloads(app).length > 0;
}

/** Soft two-stop wash derived from the app's brand color. */
export function getTintBackground(tint: string = DEFAULT_TINT): string {
  return `linear-gradient(160deg, color-mix(in srgb, ${tint} 30%, white) 0%, color-mix(in srgb, ${tint} 8%, white) 80%)`;
}

/** Preview artwork for listing cards: phone screenshots when we have them, otherwise the icon. */
export function getAppPreview(app: AppData): WorkPreview {
  const name = getAppDisplayName(app);
  const { screenshots, imagePath, tint } = app.hero;
  const background = getTintBackground(tint);

  if (screenshots?.length) {
    return {
      kind: "screens",
      background,
      images: screenshots.slice(0, PREVIEW_SCREENSHOT_COUNT).map((src, index) => ({
        src,
        alt: `${name} screenshot ${index + 1}`,
      })),
    };
  }

  return {
    kind: "icon",
    icon: imagePath ?? "",
    alt: `${name} app icon`,
    background,
  };
}

/** Listing-card model for an app, so apps can reuse the homepage project card. */
export function toFeaturedWork(slug: string, app: AppData): FeaturedWork {
  return {
    slug,
    title: getAppDisplayName(app),
    category: app.hero.subtitle,
    href: `/projects/${slug}`,
    preview: getAppPreview(app),
  };
}

/** Stable per-app seed so each hero gradient looks different but never changes between visits. */
export function getAppSeed(slug: string): number {
  return Array.from(slug).reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) % 997, 7);
}
