import { BOOKING_URL } from "@/data/studio";
import { ButtonLink } from "./button-link";
import { GlassPill } from "./glass-pill";
import { GradientPanel } from "./gradient-panel";

export function ContactCta() {
  return (
    <div className="px-3 pb-3 pt-[72px] md:px-5 md:pb-5 md:pt-24 lg:pt-[120px]">
      <GradientPanel seed={211} speed={0.8} startTime={60} scrim="uniform">
        <div className="relative z-10 flex flex-col items-center px-6 py-20 text-center md:py-28 lg:py-36">
          <GlassPill>Have something in mind?</GlassPill>
          <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.25rem,1.4rem+3.8vw,5rem)] font-medium leading-[1.02] tracking-[-0.045em] text-white">
            Let&apos;s build it properly.
          </h2>
          <p className="mt-6 max-w-lg text-lead text-white/85">
            Tell us what you are working on. We reply with honest thoughts, not a
            sales script.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={BOOKING_URL} external variant="light">
              Book a call
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline-light" arrow={false}>
              Send a message
            </ButtonLink>
          </div>
        </div>
      </GradientPanel>
    </div>
  );
}
