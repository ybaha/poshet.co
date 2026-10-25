import type { BlogPost } from "@/lib/blog";
import { PostCard } from "./post-card";

export function PostGrid({ posts }: { posts: readonly BlogPost[] }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {posts.map((post) => (
        <li key={post.slug}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
