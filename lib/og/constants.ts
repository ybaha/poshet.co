export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

/** Studio colors, mirrored from tailwind.config.ts because OG images render outside Tailwind. */
export const OG_COLORS = {
  canvas: "#F7F7F7",
  void: "#00001A",
  deep: "rgba(0, 6, 31, ALPHA)",
  sky: "#A9C8FF",
  white: "#FFFFFF",
} as const;
