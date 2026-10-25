import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og/constants";
import { renderOgImage } from "@/lib/og/render";

export const alt = "Poshet: websites and apps built to move you forward";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Independent digital studio",
    accentLine: "Websites & apps",
    title: "built to move you forward.",
  });
}
