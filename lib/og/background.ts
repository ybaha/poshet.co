import { OG_COLORS } from "./constants";

const deep = (alpha: number) => OG_COLORS.deep.replace("ALPHA", String(alpha));

/**
 * Soft, layered stand-in for the animated hero gradient. Palette is dark → bright;
 * a darker scrim along the bottom keeps the title readable on every hue.
 */
export function gradientBackground(palette: readonly string[]) {
  const [darkest, shade, mid, accent] = palette;
  const backgroundImage = [
    `linear-gradient(to bottom, ${deep(0.3)} 0%, ${deep(0)} 28%, ${deep(0.12)} 55%, ${deep(0.6)} 100%)`,
    `radial-gradient(circle at 22% 24%, ${mid} 0%, transparent 62%)`,
    `radial-gradient(circle at 88% 14%, ${accent} 0%, transparent 42%)`,
    `radial-gradient(circle at 55% 62%, ${shade} 0%, transparent 62%)`,
  ].join(", ");

  return { backgroundColor: darkest, backgroundImage };
}
