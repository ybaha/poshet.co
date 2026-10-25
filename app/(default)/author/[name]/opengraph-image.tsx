import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og/constants";
import { authors } from "@/lib/constants";
import { renderOgImage } from "@/lib/og/render";

export const alt = "Author on the Poshet blog";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return authors.map((author) => ({ name: author.slug }));
}

export default function Image({ params }: { params: { name: string } }) {
  const author = authors.find((candidate) => candidate.slug === params.name);
  return renderOgImage({
    eyebrow: author?.role ?? "Authors",
    title: author?.name ?? "The people behind the writing.",
    description: author?.bio,
  });
}
