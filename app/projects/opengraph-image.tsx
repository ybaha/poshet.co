import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og/constants";
import { IconGridArt } from "@/lib/og/art";
import { renderOgImage } from "@/lib/og/render";

export const alt = "Poshet projects — web products and mobile apps";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const ICONS = ["/apps/pico/icon.png", "/apps/filter/icon.png", "/apps/viralty/icon.png", "/apps/glb/icon.png"];

export default async function Image() {
  return renderOgImage({
    eyebrow: "Projects",
    title: "Projects we ship and run.",
    description: "Web products and mobile apps from the Poshet studio.",
    art: await IconGridArt({ icons: ICONS }),
  });
}
