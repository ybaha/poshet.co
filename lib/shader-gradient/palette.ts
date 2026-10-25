import { hexToHsl, hslToHex, relativeLuminance } from "./color";

/** Brand palette, ordered dark → bright. Mirrors studio-void / studio-blue / studio-cyan in tailwind.config.ts. */
export const BRAND_PALETTE = ["#00001A", "#0043FA", "#005EFF", "#00DDFF"] as const;

type Stop = {
  /** Starting lightness; reduced until the stop fits `maxLuminance`. */
  lightness: number;
  /** Ceiling on perceived brightness, so white text stays readable on every hue. */
  maxLuminance: number;
};

/** Dark → bright. Yellows and greens are far brighter than blues at equal lightness, hence the caps. */
const STOPS: readonly Stop[] = [
  { lightness: 0.16, maxLuminance: 0.02 },
  { lightness: 0.34, maxLuminance: 0.07 },
  { lightness: 0.5, maxLuminance: 0.17 },
  { lightness: 0.68, maxLuminance: 0.36 },
];

/** The brightest stop drifts slightly warmer/cooler than the logo color, like blue → cyan. */
const ACCENT_HUE_SHIFT = 18;
const MIN_SATURATION = 0.5;
const MAX_SATURATION = 0.88;
const LIGHTNESS_STEP = 0.02;
const MIN_LIGHTNESS = 0.05;

/** Builds a four-stop gradient palette in the hue of a brand color, e.g. an app icon's. */
export function paletteFromTint(tint: string): string[] {
  const { h, s } = hexToHsl(tint);
  const saturation = Math.min(Math.max(s, MIN_SATURATION), MAX_SATURATION);

  return STOPS.map(({ lightness, maxLuminance }, index) => {
    const hue = index === STOPS.length - 1 ? h + ACCENT_HUE_SHIFT : h;
    let l = lightness;
    let color = hslToHex({ h: hue, s: saturation, l });
    while (relativeLuminance(color) > maxLuminance && l > MIN_LIGHTNESS) {
      l -= LIGHTNESS_STEP;
      color = hslToHex({ h: hue, s: saturation, l });
    }
    return color;
  });
}
