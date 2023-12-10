import { getServerSideSitemapIndex } from "next-sitemap";
import fs from "fs/promises";

export async function GET(request: Request) {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const allposts = await fs.readdir(process.cwd() + "/_posts");

  const urls = allposts.map((post) => {
    return "https://example.com/blog/" + post.replace(".mdx", "");
  });

  return getServerSideSitemapIndex([...urls]);
}
