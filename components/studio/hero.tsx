import { BOOKING_URL } from "@/data/studio";
import { ButtonLink } from "./button-link";
import { GlassPill } from "./glass-pill";
import { GradientPanel } from "./gradient-panel";

export function Hero() {
  return (
    <div className="px-3 pb-3 md:px-5 md:pb-5">
      <GradientPanel
        scrim="edges"
        className="h-[calc(100svh-5.5rem)] min-h-[640px] max-h-[900px]"
      >
        <div className="relative z-10 flex h-full flex-col p-6 md:p-10 lg:p-14">
          <GlassPill className="animate-fade-up motion-reduce:animate-none">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-studio-cyan" />
            Based in Türkiye, available worldwide
          </GlassPill>

          <h1 className="mt-6 animate-fade-up font-display text-display font-medium text-white [animation-delay:120ms] motion-reduce:animate-none lg:mt-auto lg:max-w-[1100px]">
            <span className="block text-studio-sky">Websites &amp; apps</span>
            <span className="block">built to move you forward.</span>
          </h1>

          <div className="mt-auto max-w-sm animate-fade-up pt-10 [animation-delay:240ms] motion-reduce:animate-none lg:absolute lg:right-14 lg:top-14 lg:mt-0 lg:w-[360px] lg:pt-0">
            <p className="text-lead text-white">
              We design and build websites and apps for businesses and founders
              who want something thoughtful, fast and made to last.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ButtonLink href={BOOKING_URL} external variant="light">
                Book a call
              </ButtonLink>
              <ButtonLink href="/#work" variant="outline-light" arrow={false}>
                See our work
              </ButtonLink>
            </div>
          </div>
        </div>
      </GradientPanel>
    </div>
  );
}
