import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og/constants";
import { renderOgImage } from "@/lib/og/render";

export const alt = "Poshet blog authors";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Authors",
    title: "The people behind the writing.",
    description: "Developers and designers who write about what they build.",
  });
}
