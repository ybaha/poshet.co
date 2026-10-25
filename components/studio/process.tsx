import { processSteps } from "@/data/studio";
import { Card } from "./card";
import { Container, Section } from "./container";
import { SectionHeading } from "./section-heading";

export function Process() {
  return (
    <Section id="process">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <SectionHeading
            eyebrow="How we work"
            title="Simple from the first conversation."
            description="A clear path from idea to launch, with no surprises along the way."
          />
          <ol className="space-y-4">
            {processSteps.map(({ number, title, description }) => (
              <Card as="li" key={number} elevated padding="sm" className="flex gap-6 md:gap-8">
                <span className="w-8 shrink-0 font-display text-card font-medium tabular-nums text-studio-blue">
                  {number}
                </span>
                <div>
                  <h3 className="font-display text-card font-medium text-studio-navy">
                    {title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-studio-muted">
                    {description}
                  </p>
                </div>
              </Card>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
