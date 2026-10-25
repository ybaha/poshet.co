import { Metadata } from "next";
import { AppGrid } from "@/components/studio/apps/app-grid";
import { Container, Section } from "@/components/studio/container";
import { ContactCta } from "@/components/studio/contact-cta";
import { GlassPill } from "@/components/studio/glass-pill";
import { ProductGrid } from "@/components/studio/products/product-grid";
import { PageHero } from "@/components/studio/page-hero";
import { SectionHeading } from "@/components/studio/section-heading";
import { products } from "@/data/products";
import { getAllApps } from "@/lib/apps";
import { pageMetadata } from "@/lib/seo";
import { isLive } from "@/lib/app-presentation";

export const metadata: Metadata = pageMetadata({
  title: "Projects | Poshet",
  description:
    "Web products and mobile apps built and run by Poshet: Karardex, Postmixr, and a portfolio of apps on the App Store.",
  path: "/projects",
});

export default function ProjectsPage() {
  const apps = getAllApps();
  const live = apps.filter(({ data }) => isLive(data));
  const upcoming = apps.filter(({ data }) => !isLive(data));

  return (
    <>
      <PageHero
        seed={433}
        startTime={140}
        badge={
          <GlassPill>
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-studio-cyan" />
            {products.length} products, {apps.length} apps
          </GlassPill>
        }
        title="Projects we ship and run."
        description="Web products and mobile apps from the Poshet studio. Each one solves a real problem, and we maintain every one of them ourselves."
      />

      <Section className="pt-12 md:pt-16 lg:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="Software people use every day."
            description="Two web products we design, build and operate end to end."
            className="mb-12 lg:mb-16"
          />
          <ProductGrid products={products} />
        </Container>
      </Section>

      <Section className="pt-0 md:pt-0 lg:pt-0">
        <Container>
          <SectionHeading
            eyebrow="Mobile apps"
            title="On the App Store."
            description="Every app below is released and supported."
            className="mb-12 lg:mb-16"
          />
          <AppGrid apps={live} />
        </Container>
      </Section>

      {upcoming.length > 0 && (
        <Section className="pt-0 md:pt-0 lg:pt-0">
          <Container>
            <SectionHeading
              eyebrow="In the works"
              title="Coming soon."
              className="mb-12 lg:mb-16"
            />
            <AppGrid apps={upcoming} badge="Coming soon" />
          </Container>
        </Section>
      )}

      <ContactCta />
    </>
  );
}
