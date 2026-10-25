import Image from "next/image";
import { getTintBackground } from "@/lib/app-presentation";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import { FOCUS_RING } from "../styles";

type AppScreenshotsProps = {
  name: string;
  screenshots: readonly string[];
  tint?: string;
};

const SCREENSHOT_WIDTH = 1290;
const SCREENSHOT_HEIGHT = 2796;

/** Phone screenshots: a scroll-snap row on small screens, a centered row from md up. */
export function AppScreenshots({ name, screenshots, tint }: AppScreenshotsProps) {
  return (
    <Container>
      <div
        className="overflow-hidden rounded-[28px] px-5 pt-8 md:px-12 md:pt-14 lg:rounded-panel"
        style={{ background: getTintBackground(tint) }}
      >
        {/* Focusable so keyboard users can scroll the row. */}
        <div
          role="region"
          aria-label={`${name} screenshots`}
          tabIndex={0}
          className={cn(
            "flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 md:justify-center md:gap-8 md:overflow-visible md:pb-0",
            FOCUS_RING
          )}
        >
          {screenshots.map((src, index) => (
            <div
              key={src}
              className="w-[62%] shrink-0 snap-center overflow-hidden rounded-[1.75rem] shadow-[0_24px_48px_-16px_rgb(14_40_93/0.45)] ring-1 ring-studio-navy/10 md:w-[min(30%,300px)] md:rounded-b-none"
            >
              <Image
                src={src}
                alt={`${name} screenshot ${index + 1}`}
                width={SCREENSHOT_WIDTH}
                height={SCREENSHOT_HEIGHT}
                sizes="(min-width: 768px) 300px, 62vw"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
