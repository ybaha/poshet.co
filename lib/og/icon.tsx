import { ImageResponse } from "next/og";
import { gradientBackground } from "./background";
import { loadOgFonts } from "./fonts";
import { BRAND_PALETTE } from "@/lib/shader-gradient/palette";

const ACCENT = BRAND_PALETTE[BRAND_PALETTE.length - 1];

/**
 * The "p." monogram on the brand gradient. The favicon is rounded; the Apple touch icon must be a
 * full-bleed square because iOS applies its own corner mask.
 */
export async function renderBrandIcon(size: number, { rounded = true }: { rounded?: boolean } = {}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: rounded ? size * 0.22 : 0,
          color: "white",
          fontFamily: "Mona Sans",
          fontSize: size * 0.78,
          fontWeight: 600,
          letterSpacing: "-0.06em",
          paddingBottom: size * 0.08,
          ...gradientBackground(BRAND_PALETTE),
        }}
      >
        p<span style={{ color: ACCENT }}>.</span>
      </div>
    ),
    { width: size, height: size, fonts: await loadOgFonts() }
  );
}
