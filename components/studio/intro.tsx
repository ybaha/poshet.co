import { Container, Eyebrow, Section } from "./container";

export function Intro() {
  return (
    <Section id="about" className="pb-12 md:pb-16 lg:pb-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-16">
          <Eyebrow>Independent digital studio</Eyebrow>
          <div>
            <p className="font-display text-statement font-medium text-studio-navy">
              A small studio for thoughtful websites, useful apps, and the
              details that make them <span className="text-studio-blue">work</span>.
            </p>
            <p className="mt-8 max-w-xl text-lead text-studio-muted">
              We design and build digital products end to end, and we ship our
              own apps to real users. That is why we care about more than launch
              day.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
