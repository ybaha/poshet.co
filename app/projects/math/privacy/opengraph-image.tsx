import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og/constants";
import { renderAppOgImage } from "@/lib/og/app";

export const alt = "Math Help AI privacy policy";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderAppOgImage("math", { eyebrow: "Legal", title: "Privacy policy" });
}
