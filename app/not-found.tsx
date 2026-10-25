import type { Metadata } from "next";
import { Container, Section } from "@/components/studio/container";
import { PageHeader } from "@/components/studio/page-header";
import { ButtonLink } from "@/components/studio/button-link";
import { NOINDEX_ROBOTS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Page not found",
  robots: NOINDEX_ROBOTS,
};

export default function NotFound() {
  return (
    <Section className="pt-32">
      <Container>
        <PageHeader
          eyebrow="404"
          title="This page doesn't exist."
          description="The link may be old or mistyped. Head back to the homepage or see what we've built."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/projects" variant="outline">
            View projects
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
