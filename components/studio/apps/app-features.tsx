import { Check } from "lucide-react";
import type { AppFeature } from "@/lib/types/app";
import { cn } from "@/lib/utils";
import { Card } from "../card";
import { Container, Section } from "../container";
import { SectionHeading } from "../section-heading";

type AppFeaturesProps = {
  name: string;
  features: readonly AppFeature[];
  premiumFeatures?: readonly AppFeature[];
};

export function AppFeatures({ name, features, premiumFeatures }: AppFeaturesProps) {
  // Multiples of three fill a three-column row; anything else reads better two across.
  const columns = features.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <Section className="pt-12 md:pt-16 lg:pt-20">
      <Container>
        <SectionHeading eyebrow="Features" title={`What ${name} does.`} />
        <ol className={cn("mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8", columns)}>
          {features.map(({ title, description }, index) => (
            <Card as="li" key={title} className="flex flex-col">
              <span className="font-display text-sm font-medium tabular-nums text-studio-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-10 font-display text-card font-medium text-studio-navy">
                {title}
              </h3>
              <p className="mt-3 text-[16px] leading-relaxed text-studio-muted">
                {description}
              </p>
            </Card>
          ))}
        </ol>

        {premiumFeatures && premiumFeatures.length > 0 && (
          <Card tone="ice" padding="xl" className="mt-6 lg:mt-8">
            <h3 className="font-display text-card font-medium text-studio-navy">
              With a subscription
            </h3>
            <ul className="mt-6 grid gap-5 md:grid-cols-3">
              {premiumFeatures.map(({ title, description }) => (
                <li key={title} className="flex gap-3">
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-studio-blue"
                    strokeWidth={2.25}
                  />
                  <div>
                    <p className="font-medium text-studio-navy">{title}</p>
                    <p className="mt-1 text-[15px] text-studio-muted">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </Container>
    </Section>
  );
}
