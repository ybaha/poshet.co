import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ShaderGradient } from "./shader-gradient";

const SCRIMS = {
  /** Darkens the lower part so headline text stays readable. */
  bottom: "bg-gradient-to-t from-studio-deep/55 via-studio-deep/5 to-transparent",
  /** Darkens top and bottom edges, for content pinned to both. */
  edges:
    "bg-[linear-gradient(to_bottom,rgba(0,6,31,0.5)_0%,rgba(0,6,31,0.3)_30%,rgba(0,6,31,0)_55%,rgba(0,6,31,0)_62%,rgba(0,6,31,0.55)_100%)]",
  /** Heavier at the bottom, where inner-page titles and actions sit. */
  page:
    "bg-[linear-gradient(to_bottom,rgba(0,6,31,0.45)_0%,rgba(0,6,31,0)_30%,rgba(0,6,31,0.3)_50%,rgba(0,6,31,0.7)_100%)]",
  /** Even tint for centered content. */
  uniform: "bg-studio-deep/30",
  none: null,
} as const;

type GradientPanelProps = {
  children: ReactNode;
  className?: string;
  colors?: readonly string[];
  seed?: number;
  speed?: number;
  startTime?: number;
  /** Overlay that keeps light text readable over bright parts of the gradient. */
  scrim?: keyof typeof SCRIMS;
};

/** Rounded, inset panel with the animated brand gradient behind its content. */
export function GradientPanel({
  children,
  className,
  colors,
  seed,
  speed,
  startTime,
  scrim = "bottom",
}: GradientPanelProps) {
  return (
    <div
      className={cn(
        "relative isolate mx-auto w-full max-w-[1400px] overflow-hidden rounded-[28px] bg-studio-void md:rounded-panel",
        className
      )}
    >
      <ShaderGradient colors={colors} seed={seed} speed={speed} startTime={startTime} />
      {SCRIMS[scrim] && (
        <div
          aria-hidden="true"
          className={cn("pointer-events-none absolute inset-0", SCRIMS[scrim])}
        />
      )}
      {children}
    </div>
  );
}
