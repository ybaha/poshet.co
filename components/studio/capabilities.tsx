import { Code2, PenTool, Smartphone, type LucideIcon } from "lucide-react";
import { capabilities } from "@/data/studio";
import { Card } from "./card";
import { Container, Section } from "./container";
import { SectionHeading } from "./section-heading";

const ICONS: Record<(typeof capabilities)[number]["icon"], LucideIcon> = {
  design: PenTool,
  code: Code2,
  mobile: Smartphone,
};

export function Capabilities() {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need to launch and grow."
          description="One small team across design, development and product, so nothing gets lost between handoffs."
        />
        <ul className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {capabilities.map(({ icon, title, description, tags }) => {
            const Icon = ICONS[icon];
            return (
              <Card as="li" key={title} tone="canvas" className="flex flex-col">
                <span
                  aria-hidden="true"
                  className="grid h-12 w-12 place-items-center rounded-full bg-studio-blue/10 text-studio-blue"
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-14 font-display text-card font-medium text-studio-navy">
                  {title}
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-studio-muted">
                  {description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-studio-line bg-white px-3 py-1.5 text-sm text-studio-navy"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
