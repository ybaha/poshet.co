import { cn } from "@/lib/utils";

/** Row of small outlined labels, e.g. services or a tech stack. */
export function TagList({ tags, className }: { tags: readonly string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-studio-line bg-white px-3 py-1.5 text-sm text-studio-navy"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
