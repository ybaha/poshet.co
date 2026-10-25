"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { BRAND_PALETTE } from "@/lib/shader-gradient/palette";
import { useShaderGradient } from "./use-shader-gradient";

type ShaderGradientProps = {
  colors?: readonly string[];
  seed?: number;
  speed?: number;
  startTime?: number;
  interactive?: boolean;
  className?: string;
};

/**
 * Decorative animated WebGL gradient that fills its positioned parent.
 * A static CSS gradient renders first and stays as the no-WebGL fallback.
 */
export function ShaderGradient({
  colors = BRAND_PALETTE,
  seed = 689,
  speed = 1,
  startTime = 300,
  interactive = true,
  className,
}: ShaderGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useShaderGradient(canvasRef, { colors, seed, speed, startTime, interactive });

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ background: fallbackGradient(colors) }}
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full opacity-0 transition-opacity duration-1000 data-[ready=true]:opacity-100"
      />
    </div>
  );
}

function fallbackGradient(colors: readonly string[]) {
  const [darkest, mid = darkest, accent = mid] = colors;
  return `radial-gradient(110% 100% at 25% 0%, ${accent} 0%, ${mid} 45%, ${darkest} 90%)`;
}
