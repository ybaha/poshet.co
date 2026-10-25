import { getAppDisplayName, getLiveDownloads } from "@/lib/app-presentation";
import type { AppData } from "@/lib/types/app";
import { organizationReference } from "@/lib/structured-data/organization";
import { absoluteUrl, omitEmpty } from "@/lib/structured-data/utils";
import type { JsonLdObject } from "@/lib/structured-data/types";

const PLATFORM_OS: Record<"ios" | "android" | "web", string> = {
  ios: "iOS",
  android: "Android",
  web: "Web",
};

function appImageUrl(app: AppData): string | undefined {
  const hasScreenshots = Boolean(app.hero.screenshots?.length);
  const path = hasScreenshots ? app.hero.screenshots![0] : app.hero.imagePath;
  return path ? absoluteUrl(path) : undefined;
}

function primaryStoreUrl(app: AppData): string | undefined {
  const live = getLiveDownloads(app);
  const ios = live.find((entry) => entry.platform === "ios");
  if (ios?.url) {
    return ios.url;
  }
  const android = live.find((entry) => entry.platform === "android");
  return android?.url;
}

export function buildMobileApplication(app: AppData, slug: string): JsonLdObject {
  const live = getLiveDownloads(app);
  const operatingSystem = live.map((entry) => PLATFORM_OS[entry.platform]);
  const storeUrl = primaryStoreUrl(app);
  const pageUrl = absoluteUrl(`/projects/${slug}`);

  return omitEmpty({
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: getAppDisplayName(app),
    description: app.metadata.description,
    operatingSystem: operatingSystem.length > 0 ? operatingSystem : undefined,
    url: pageUrl,
    image: appImageUrl(app),
    downloadUrl: storeUrl,
    installUrl: storeUrl,
    publisher: organizationReference(),
  });
}
