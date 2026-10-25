import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og/constants";
import { formatPostDate, getPost, getPostSlugs } from "@/lib/blog";
import { renderOgImage } from "@/lib/og/render";

export const alt = "Article on the Poshet blog";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return renderOgImage({ eyebrow: "Blog", title: "Notes on building for the web." });

  return renderOgImage({
    eyebrow: "Article",
    title: post.title,
    description: `${post.author.name} · ${formatPostDate(post.date, "medium")} · ${post.readingMinutes} min read`,
  });
}
