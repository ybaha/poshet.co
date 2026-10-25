import { type BlogPost, formatPostDate } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { AuthorAvatar } from "./author-avatar";

type PostMetaProps = {
  post: Pick<BlogPost, "author" | "date" | "readingMinutes">;
  /** Show the author's avatar and name before the date. */
  showAuthor?: boolean;
  className?: string;
};

/** Author, date and reading time on one line. */
export function PostMeta({ post, showAuthor = true, className }: PostMetaProps) {
  const { author, date, readingMinutes } = post;

  return (
    <div className={cn("flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] text-studio-muted", className)}>
      {showAuthor && (
        <span className="inline-flex items-center gap-2.5 font-medium text-studio-navy">
          <AuthorAvatar name={author.name} image={author.image} className="text-xs" />
          {author.name}
        </span>
      )}
      <span className="whitespace-nowrap">
        <time dateTime={date}>{formatPostDate(date, "medium")}</time>
        <span aria-hidden="true"> · </span>
        {readingMinutes} min read
      </span>
    </div>
  );
}
