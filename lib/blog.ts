import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { authors } from "@/lib/constants";

const POSTS_DIR = path.join(process.cwd(), "_posts");
const POST_EXTENSION = /\.mdx?$/;
const WORDS_PER_MINUTE = 220;

export type PostAuthor = { name: string; slug: string; image?: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** Shorter title for `<title>` and social cards when the headline exceeds search limits. */
  seoTitle?: string;
  description: string;
  /** ISO date, `YYYY-MM-DD`. */
  date: string;
  image?: string;
  /** Override for hero `alt`; defaults via {@link postHeroImageAlt}. */
  imageAlt?: string;
  /** Keeps off-topic legacy posts reachable but out of search results. */
  noindex?: boolean;
  author: PostAuthor;
  readingMinutes: number;
};

export type BlogPostWithContent = BlogPost & { content: string };

const slugify = (value: string) => value.trim().toLowerCase().replace(/\s+/g, "-");

function resolveAuthor(name: string): PostAuthor {
  const known = authors.find((author) => author.slug === slugify(name));
  return known
    ? { name: known.name, slug: known.slug, image: known.image }
    : { name, slug: slugify(name) };
}

function readingMinutes(content: string) {
  return Math.max(1, Math.round(content.split(/\s+/).length / WORDS_PER_MINUTE));
}

async function readPost(slug: string): Promise<BlogPostWithContent | null> {
  let file: string;
  try {
    file = await fs.readFile(path.join(POSTS_DIR, `${slug}.mdx`), "utf8");
  } catch {
    return null;
  }

  const { data, content } = matter(file);
  const date = new Date(data.date);

  return {
    slug,
    title: String(data.title ?? slug),
    seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
    description: String(data.description ?? ""),
    date: Number.isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 10),
    image: data.image || undefined,
    imageAlt: data.imageAlt ? String(data.imageAlt) : undefined,
    noindex: data.noindex === true || undefined,
    author: resolveAuthor(String(data.author ?? "Poshet")),
    readingMinutes: readingMinutes(content),
    content,
  };
}

export async function getPostSlugs(): Promise<string[]> {
  const files = await fs.readdir(POSTS_DIR);
  return files.filter((file) => POST_EXTENSION.test(file)).map((file) => file.replace(POST_EXTENSION, ""));
}

export async function getPost(slug: string) {
  return readPost(slug);
}

/** All posts, newest first. */
export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map(readPost));

  return posts
    .filter((post): post is BlogPostWithContent => post !== null)
    .map(({ content: _content, ...post }) => post)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function postDocumentTitle(post: BlogPost): string {
  return post.seoTitle ?? post.title;
}

export function postHeroImageAlt(post: BlogPost): string {
  return post.imageAlt ?? post.title;
}

export function formatPostDate(date: string, style: "long" | "medium" = "long") {
  return new Date(date).toLocaleDateString("en-US", { dateStyle: style, timeZone: "UTC" });
}
