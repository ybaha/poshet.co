import { getAppData } from "@/lib/apps";
import { getAppDisplayName } from "@/lib/app-presentation";
import type { AppData } from "@/lib/types/app";
import { AppIconArt, PhonesArt } from "./art";
import { renderOgImage } from "./render";

async function appArt({ hero }: AppData) {
  if (hero.screenshots?.length) return PhonesArt({ screenshots: hero.screenshots });
  return hero.imagePath ? AppIconArt({ icon: hero.imagePath }) : undefined;
}

type AppPage = {
  /** Sub-page such as "Privacy policy"; omit for the app's main page. */
  eyebrow: string;
  title: string;
};

/** OG image for an app's main page, or for one of its support and legal pages. */
export async function renderAppOgImage(slug: string, page?: AppPage) {
  const app = getAppData(slug);
  if (!app) return renderOgImage({ eyebrow: "Projects", title: "Projects we ship and run." });

  const name = getAppDisplayName(app);
  return renderOgImage({
    eyebrow: page?.eyebrow ?? "Mobile app",
    title: page?.title ?? name,
    description: page ? name : app.hero.subtitle,
    tint: app.hero.tint,
    art: await appArt(app),
  });
}
