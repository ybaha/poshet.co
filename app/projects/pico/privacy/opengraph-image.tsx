import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og/constants";
import { renderAppOgImage } from "@/lib/og/app";

export const alt = "Privacy policy for Pico Cards";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderAppOgImage("pico", { eyebrow: "Legal", title: "Privacy policy" });
}
