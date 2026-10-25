import { ReactNode } from "react";
import { BOOKING_URL, faqs } from "@/data/studio";
import { ButtonLink } from "./button-link";
import { Container, Section } from "./container";
import { FaqList } from "./faq-list";
import { SectionHeading } from "./section-heading";

type FaqSectionProps = {
  items: readonly { question: string; answer: string }[];
  title: ReactNode;
  description: ReactNode;
  action?: ReactNode;
  id?: string;
};

export function FaqSection({ items, title, description, action, id }: FaqSectionProps) {
  return (
    <Section id={id} className="bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <SectionHeading eyebrow="FAQ" title={title} description={description} />
            {action && <div className="mt-8">{action}</div>}
          </div>
          <FaqList items={items} />
        </div>
      </Container>
    </Section>
  );
}

export function Faq() {
  return (
    <FaqSection
      id="faq"
      items={faqs}
      title="Questions? Answers."
      description="The things people usually ask before we start."
      action={
        <ButtonLink href={BOOKING_URL} external>
          Still curious? Book a call
        </ButtonLink>
      }
    />
  );
}
