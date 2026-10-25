import { PostCard } from "@/components/studio/blog/post-card";
import { PostGrid } from "@/components/studio/blog/post-grid";
import { Container, Section } from "@/components/studio/container";
import { ContactCta } from "@/components/studio/contact-cta";
import { GlassPill } from "@/components/studio/glass-pill";
import { PageHero } from "@/components/studio/page-hero";
import { SectionHeading } from "@/components/studio/section-heading";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tech Insights & Trends | Poshet Digital Blog",
  description:
    "Explore the latest in technology trends, insights, and innovations on Poshet Digital's blog. Stay updated with expert analysis and discussions.",
  path: "/blog",
});

export default async function BlogPage() {
  const [featured, ...rest] = await getAllPosts();

  return (
    <>
      <PageHero
        seed={587}
        startTime={90}
        badge={
          <GlassPill>
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-studio-cyan" />
            {rest.length + (featured ? 1 : 0)} articles
          </GlassPill>
        }
        title="Notes on building for the web."
        description="Practical writing on design, development and shipping products, from the people who build them."
      />

      {featured && (
        <Section className="pt-12 md:pt-16 lg:pt-20">
          <Container>
            <SectionHeading eyebrow="Latest" title="Fresh from the studio." className="mb-12 lg:mb-16" />
            <PostCard post={featured} featured />
          </Container>
        </Section>
      )}

      {rest.length > 0 && (
        <Section className="pt-0 md:pt-0 lg:pt-0">
          <Container>
            <SectionHeading eyebrow="More to read" title="Earlier articles." className="mb-12 lg:mb-16" />
            <PostGrid posts={rest} />
          </Container>
        </Section>
      )}

      <ContactCta />
    </>
  );
}
