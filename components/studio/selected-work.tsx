import { featuredWork } from "@/data/studio";
import { ButtonLink } from "./button-link";
import { Container, Section } from "./container";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

export function SelectedWork() {
  return (
    <Section id="work" className="pt-12 md:pt-16 lg:pt-20">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Products we have designed, built and shipped."
          description="Products and apps from our own portfolio, live today."
          action={
            <ButtonLink href="/projects" variant="outline">
              Explore our projects
            </ButtonLink>
          }
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          {featuredWork.map((work) => (
            <li key={work.slug}>
              <ProjectCard work={work} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
