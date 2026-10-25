import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og/constants";
import { renderOgImage } from "@/lib/og/render";

export const alt = "Contact Poshet — tell us what you're building";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Contact",
    title: "Tell us what you're building.",
    description: "Send a few details or book a 30-minute intro call.",
  });
}
