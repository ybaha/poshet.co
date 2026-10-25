import { formatPostDate, getPost, getPostSlugs } from "@/lib/blog";
import { renderOgImage } from "@/lib/og/render";
import { blogPostOgAlt, ogImageMetadata } from "@/lib/og/image-metadata";

export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}

export async function generateImageMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const alt = post ? blogPostOgAlt(post.title) : "Poshet blog article";
  return ogImageMetadata(alt);
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return renderOgImage({ eyebrow: "Blog", title: "Notes on building for the web." });

  return renderOgImage({
    eyebrow: "Article",
    title: post.title,
    description: `${post.author.name} · ${formatPostDate(post.date, "medium")} · ${post.readingMinutes} min read`,
  });
}
