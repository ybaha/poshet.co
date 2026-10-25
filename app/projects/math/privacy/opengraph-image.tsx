import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og/constants";
import { renderAppOgImage } from "@/lib/og/app";

export const alt = "Privacy policy for Math Help AI";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderAppOgImage("math", { eyebrow: "Legal", title: "Privacy policy" });
}
