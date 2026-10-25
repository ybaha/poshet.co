import { MAX_COLORS } from "./shaders";

/** Parses `#rgb` / `#rrggbb` into 0–1 sRGB components. */
export function hexToRgb(hex: string): [number, number, number] {
  const digits = hex.replace("#", "");
  const full =
    digits.length === 3
      ? digits
          .split("")
          .map((char) => char + char)
          .join("")
      : digits;
  const value = Number.parseInt(full, 16);
  if (full.length !== 6 || Number.isNaN(value)) {
    throw new Error(`Invalid hex color: ${hex}`);
  }
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255].map(
    (channel) => channel / 255
  ) as [number, number, number];
}

/** Flattens a palette into the `vec3[MAX_COLORS]` uniform layout. */
export function packPalette(colors: readonly string[]): Float32Array {
  if (colors.length < 2 || colors.length > MAX_COLORS) {
    throw new Error(`Palette needs 2–${MAX_COLORS} colors, received ${colors.length}`);
  }
  const packed = new Float32Array(MAX_COLORS * 3);
  colors.forEach((color, index) => packed.set(hexToRgb(color), index * 3));
  return packed;
}

type Hsl = { h: number; s: number; l: number };

/** Hue in degrees (0–360), saturation and lightness in 0–1. */
export function hexToHsl(hex: string): Hsl {
  const [r, g, b] = hexToRgb(hex);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  const l = (max + min) / 2;
  if (delta === 0) return { h: 0, s: 0, l };

  const s = delta / (1 - Math.abs(2 * l - 1));
  const sector =
    max === r ? ((g - b) / delta) % 6 : max === g ? (b - r) / delta + 2 : (r - g) / delta + 4;
  return { h: (sector * 60 + 360) % 360, s, l };
}

export function hslToHex({ h, s, l }: Hsl): string {
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const x = chroma * (1 - Math.abs(((h / 60) % 2) - 1));
  const offset = l - chroma / 2;
  const sector = Math.floor(((h % 360) + 360) % 360 / 60);
  const [r, g, b] = [
    [chroma, x, 0],
    [x, chroma, 0],
    [0, chroma, x],
    [0, x, chroma],
    [x, 0, chroma],
    [chroma, 0, x],
  ][sector];

  return `#${[r, g, b]
    .map((channel) =>
      Math.round((channel + offset) * 255)
        .toString(16)
        .padStart(2, "0")
    )
    .join("")}`.toUpperCase();
}

const toLinear = (channel: number) =>
  channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;

/** WCAG relative luminance (0 = black, 1 = white) of a hex color. */
export function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map(toLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
