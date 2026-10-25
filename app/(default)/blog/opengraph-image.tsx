import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og/constants";
import { renderOgImage } from "@/lib/og/render";

export const alt = "The Poshet blog";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Blog",
    title: "Notes on building for the web.",
    description: "Practical writing on design, development and shipping products.",
  });
}
