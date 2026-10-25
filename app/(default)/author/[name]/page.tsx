import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuthorAvatar } from "@/components/studio/blog/author-avatar";
import { PostGrid } from "@/components/studio/blog/post-grid";
import { BackLink } from "@/components/studio/back-link";
import { Container, Section } from "@/components/studio/container";
import { ContactCta } from "@/components/studio/contact-cta";
import { PageHeader } from "@/components/studio/page-header";
import { SectionHeading } from "@/components/studio/section-heading";
import { getAllPosts } from "@/lib/blog";
import { authors } from "@/lib/constants";
import { StructuredData } from "@/components/structured-data";
import { buildBreadcrumbList } from "@/lib/structured-data/breadcrumbs";
import { buildProfilePage } from "@/lib/structured-data/profile-page";
import { NOINDEX_ROBOTS, pageMetadata } from "@/lib/seo";

type PageProps = { params: { name: string } };

const findAuthor = (slug: string) => authors.find((author) => author.slug === slug);

export function generateStaticParams() {
  return authors.map((author) => ({ name: author.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const author = findAuthor(params.name);
  if (!author) return { title: "Author not found", robots: NOINDEX_ROBOTS };

  return pageMetadata({
    title: author.name,
    description: `${author.bio} Articles by ${author.name} on the Poshet blog.`,
    path: `/author/${author.slug}`,
  });
}

export default async function AuthorPage({ params }: PageProps) {
  const author = findAuthor(params.name);
  if (!author) notFound();

  const posts = (await getAllPosts()).filter((post) => post.author.slug === author.slug);

  return (
    <>
      <StructuredData
        data={[
          buildProfilePage(author),
          buildBreadcrumbList([
            { name: "Home", path: "/" },
            { name: "Authors", path: "/authors" },
            { name: author.name, path: `/author/${author.slug}` },
          ]),
        ]}
      />
      <Section className="pb-12 pt-10 md:pb-12 md:pt-16 lg:pb-16 lg:pt-16">
        <Container>
          <BackLink href="/authors">All authors</BackLink>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <AuthorAvatar name={author.name} image={author.image} className="h-24 w-24 text-2xl md:h-32 md:w-32 md:text-3xl" />
            <PageHeader eyebrow={author.role} title={author.name} description={author.bio} />
          </div>
        </Container>
      </Section>

      {posts.length > 0 && (
        <Section className="pt-0 md:pt-0 lg:pt-0">
          <Container>
            <SectionHeading eyebrow="Articles" title={`Written by ${author.name.split(" ")[0]}.`} className="mb-12 lg:mb-16" />
            <PostGrid posts={posts} />
          </Container>
        </Section>
      )}

      <ContactCta />
    </>
  );
}
