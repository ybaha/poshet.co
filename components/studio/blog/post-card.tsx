import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { CARD_HOVER_CLASSES, CardMedia, cardClasses } from "../card";
import { FOCUS_RING } from "../styles";
import { PostMeta } from "./post-meta";

type PostCardProps = {
  post: BlogPost;
  /** Wide, image-left layout for the lead story. */
  featured?: boolean;
};

const COVER_SIZES = {
  default: "(min-width: 1024px) 380px, (min-width: 768px) 45vw, 92vw",
  featured: "(min-width: 1024px) 560px, 92vw",
} as const;

export function PostCard({ post, featured = false }: PostCardProps) {
  const sizes = COVER_SIZES[featured ? "featured" : "default"];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex h-full p-2",
        featured ? "flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-4" : "flex-col",
        CARD_HOVER_CLASSES,
        cardClasses({ elevated: true, padding: "none" }),
        FOCUS_RING
      )}
    >
      <CardMedia
        aspect={featured ? "4/3" : "16/10"}
        className="w-full bg-gradient-to-br from-studio-ice to-studio-sky/40"
      >
        {post.image && (
          <Image
            src={post.image}
            // Decorative: title is in the same link; non-empty alt would duplicate it for screen readers.
            alt=""
            fill
            sizes={sizes}
            priority={featured}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
          />
        )}
      </CardMedia>

      <div className={cn("flex flex-1 flex-col px-4 pb-4 pt-5 md:px-5", featured && "lg:p-10")}>
        <PostMeta post={post} showAuthor={false} />
        <h2
          className={cn(
            "mt-3 font-display font-medium text-studio-navy",
            featured ? "text-section" : "line-clamp-3 text-card"
          )}
        >
          {post.title}
        </h2>
        <p className={cn("mt-3 text-[16px] leading-relaxed text-studio-muted", featured ? "line-clamp-4" : "line-clamp-2")}>
          {post.description}
        </p>
        <span className="mt-auto flex items-center justify-between gap-4 pt-6 text-[15px] font-medium text-studio-navy">
          {post.author.name}
          <span
            aria-hidden="true"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-studio-ice text-studio-blue transition-colors duration-200 group-hover:bg-studio-blue group-hover:text-white"
          >
            <ArrowUpRight className="h-[18px] w-[18px]" />
          </span>
        </span>
      </div>
    </Link>
  );
}
