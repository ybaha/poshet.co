import { ReactNode } from "react";
import { GradientPanel } from "./gradient-panel";

type PageHeroProps = {
  /** Small element pinned to the top, such as a status chip or back link. */
  badge?: ReactNode;
  /** Shown above the title, e.g. an app icon. */
  leading?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  /** Gradient palette, dark → bright. Defaults to the brand blues. */
  colors?: readonly string[];
  seed?: number;
  startTime?: number;
};

/** Inset gradient panel that opens an inner page; the home page has its own taller hero. */
export function PageHero({
  badge,
  leading,
  title,
  description,
  actions,
  colors,
  seed,
  startTime,
}: PageHeroProps) {
  return (
    <div className="px-3 pb-3 md:px-5 md:pb-5">
      <GradientPanel
        scrim="page"
        colors={colors}
        seed={seed}
        startTime={startTime}
        className="min-h-[480px] md:min-h-[540px]"
      >
        <div className="relative z-10 flex min-h-[inherit] flex-col p-6 md:p-10 lg:p-14">
          {badge && (
            <div className="animate-fade-up motion-reduce:animate-none">{badge}</div>
          )}
          <div className="mt-auto animate-fade-up pt-20 [animation-delay:120ms] motion-reduce:animate-none">
            {leading && <div className="mb-6">{leading}</div>}
            <h1 className="max-w-[900px] font-display text-title font-medium text-white">
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-xl text-lead text-white/90">{description}</p>
            )}
            {actions && (
              <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>
            )}
          </div>
        </div>
      </GradientPanel>
    </div>
  );
}
