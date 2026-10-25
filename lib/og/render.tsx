import { ImageResponse } from "next/og";
import { ReactNode } from "react";
import { BRAND_PALETTE, paletteFromTint } from "@/lib/shader-gradient/palette";
import { gradientBackground } from "./background";
import { OG_COLORS, OG_SIZE } from "./constants";
import { loadOgFonts } from "./fonts";

export type OgImageOptions = {
  /** Small label in the top-right chip, e.g. "Article". */
  eyebrow: string;
  title: string;
  /** Optional first line of the title in the accent color, as on the home hero. */
  accentLine?: string;
  description?: string;
  /** Brand color to derive the gradient from; defaults to the studio blues. */
  tint?: string;
  /** Artwork on the right: an app icon, phone screenshots, etc. */
  art?: ReactNode;
};

const MAX_TITLE_CHARS = 90;
const MAX_DESCRIPTION_CHARS = 140;
/** Text column width; narrower when artwork sits on the right so nothing collides. */
const TEXT_WIDTH = { full: 960, withArt: 560 } as const;
const MAX_TITLE_SIZE_WITH_ART = 72;

const truncate = (text: string, max: number) =>
  text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;

/** Longer titles step down so they stay within three lines. */
function titleFontSize(text: string) {
  if (text.length <= 22) return 88;
  if (text.length <= 44) return 72;
  if (text.length <= 70) return 58;
  return 50;
}

export async function renderOgImage(options: OgImageOptions) {
  const { eyebrow, accentLine, tint, art } = options;
  const title = truncate(options.title, MAX_TITLE_CHARS);
  const description = options.description && truncate(options.description, MAX_DESCRIPTION_CHARS);
  const palette = tint ? paletteFromTint(tint) : BRAND_PALETTE;
  const accent = palette[palette.length - 1];
  const fitted = titleFontSize(`${accentLine ?? ""}${title}`);
  const size = art ? Math.min(fitted, MAX_TITLE_SIZE_WITH_ART) : fitted;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 22,
          background: OG_COLORS.canvas,
          fontFamily: "Mona Sans",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            position: "relative",
            borderRadius: 44,
            overflow: "hidden",
            ...gradientBackground(palette),
            color: OG_COLORS.white,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, padding: 56 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", fontSize: 44, fontWeight: 600, letterSpacing: "-0.05em" }}>
                poshet<span style={{ color: accent }}>.</span>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "10px 22px",
                  borderRadius: 999,
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.12)",
                  fontSize: 24,
                  fontWeight: 500,
                }}
              >
                {eyebrow}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", maxWidth: art ? TEXT_WIDTH.withArt : TEXT_WIDTH.full }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: size,
                  fontWeight: 500,
                  lineHeight: 1.04,
                  letterSpacing: "-0.045em",
                }}
              >
                {accentLine && <span style={{ color: OG_COLORS.sky }}>{accentLine}</span>}
                <span>{title}</span>
              </div>
              {description && (
                <div style={{ display: "flex", marginTop: 24, fontSize: 28, lineHeight: 1.3, opacity: 0.9 }}>
                  {description}
                </div>
              )}
            </div>
          </div>
          {art}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await loadOgFonts() }
  );
}
