import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BackLink } from "@/components/studio/back-link";
import { PostMeta } from "@/components/studio/blog/post-meta";
import { Container, Section } from "@/components/studio/container";
import { ContactCta } from "@/components/studio/contact-cta";
import { PageHeader } from "@/components/studio/page-header";
import { getPost, getPostSlugs, postDocumentTitle, postHeroImageAlt } from "@/lib/blog";
import { StructuredData } from "@/components/structured-data";
import { buildBlogPosting } from "@/lib/structured-data/article";
import { buildBreadcrumbList } from "@/lib/structured-data/breadcrumbs";
import { absoluteUrl, toIsoDateTime } from "@/lib/structured-data/utils";
import { NOINDEX_ROBOTS, pageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

/** Typography plugin tuned to the studio palette and display font. */
const ARTICLE_PROSE =
  "prose prose-lg max-w-none prose-headings:font-display prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-studio-navy prose-p:text-studio-ink/80 prose-li:text-studio-ink/80 prose-li:marker:text-studio-blue prose-strong:text-studio-navy prose-a:text-studio-blue prose-a:underline-offset-4 prose-img:rounded-[20px] prose-blockquote:border-studio-blue prose-blockquote:text-studio-navy";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Article not found", robots: NOINDEX_ROBOTS };

  const publishedTime = toIsoDateTime(post.date);
  const modifiedTime = post.modified ? toIsoDateTime(post.modified) : undefined;

  return {
    ...pageMetadata({
      title: postDocumentTitle(post),
      description: post.description,
      path: `/blog/${slug}`,
      type: "article",
      noindex: post.noindex,
      article: publishedTime
        ? {
            publishedTime,
            modifiedTime,
            authors: [absoluteUrl(`/author/${post.author.slug}`)],
          }
        : undefined,
    }),
    authors: [{ name: post.author.name }],
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <StructuredData
        data={[
          buildBlogPosting(post),
          buildBreadcrumbList([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${slug}` },
          ]),
        ]}
      />
      <Section className="pb-10 pt-10 md:pb-12 md:pt-16 lg:pb-12 lg:pt-16">
        <Container className="max-w-[880px]">
          <BackLink href="/blog">All articles</BackLink>
          <PageHeader
            className="mt-8"
            eyebrow="Article"
            size="section"
            title={post.title}
            description={post.description}
          />
          <PostMeta post={post} className="mt-8" />
        </Container>
      </Section>

      {post.image && (
        <Container className="max-w-[1080px]">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] bg-gradient-to-br from-studio-ice to-studio-sky/40 lg:rounded-card">
            <Image
              src={post.image}
              alt={postHeroImageAlt(post)}
              fill
              priority
              sizes="(min-width: 1080px) 1000px, 92vw"
              className="object-cover"
            />
          </div>
        </Container>
      )}

      <Section className="pb-24 pt-12 md:pb-28 md:pt-16 lg:pb-28 lg:pt-16">
        <Container className="max-w-[760px]">
          <article className={ARTICLE_PROSE}>
            <MDXRemote source={post.content} />
          </article>
        </Container>
      </Section>

      <ContactCta />
    </>
  );
}
