import { OpenAIApi, Configuration } from "openai";
import axios from "axios";
import fs from "fs/promises";
import matter from "gray-matter";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY || "",
});

const api = new OpenAIApi(config);

export async function GET(request: Request) {
  // if building the site, return nothing
  if (request.headers.get("x-nf-request-id"))
    return new Response(null, { status: 200 });

  const postText = await generatePost();
  if (!postText) return new Response("Error generating post");

  const post = await parsePost(postText!);

  if (!post || !post.frontMatter.image)
    return new Response(
      "Error parsing post:\n " + post + "\n" + "posttext: " + "\n" + postText
    );

  writePost(postText, post.frontMatter.slug);

  const res = {
    title: post.frontMatter.title,
    slug: post.frontMatter.slug,
    date: post.frontMatter.date,
    description: post.frontMatter.description,
    postUrlDev: "http://localhost:3000/blog/" + post.frontMatter.slug,
    postUrlProd: "https://poshet.co/blog/" + post.frontMatter.slug,
  };

  return new Response(JSON.stringify(res));
}

const prompt = (postImageUrl: string, title: string) => `
poshet.co a software development agency, description from their website:
In a world of generic enterprise software, we use our proven process to uncover your business needs, craft a tailored software solution, and transform your company into a digital leader.

Our team of expert designers, developers and copywriters will guide you through every step of the process to ensure that your website not only looks great, but delivers results.

generate a blog post idea for the title ${title}. and write it following this mdx template.
don't add any words or sentences to your response just return the mdx content.
make use of the markdown properties (don't use the biggest heading #. instead use ## for each title)
Only give the mdx content as a response! no other words or sentences!
template:
---
title: ...
slug: ... (title.toLoweCase().replaceAll(' ','-'))
date: "..." (ex: 2022-04-24. random date between 2022-01-01 and 2022-04-24 ${new Date()
  .toISOString()
  .slice(0, 10)}})
description: "..."
image: ${postImageUrl}
---
(content here)        
`;

async function writePost(postText: string, title: string) {
  const filename = title + ".mdx";

  await fs.writeFile(process.cwd() + "/_posts/" + filename, postText);

  return true;
}

async function parsePost(post: string) {
  const { data: frontMatter, content } = matter(post);

  return {
    frontMatter,
    content,
  };
}

async function generatePost() {
  const allposts = await fs.readdir(process.cwd() + "/_posts");

  const res0 = await api.createChatCompletion({
    model: "gpt-3.5-turbo-16k",
    messages: [
      {
        role: "system",
        content: `poshet.co a software development agency, description from their website: In a world of generic enterprise software, we use our proven process to uncover your business needs, craft a tailored software solution, and transform your company into a digital leader. Our team of expert designers, developers and copywriters will guide you through every step of the process to ensure that your website not only looks great, but delivers results.
            Generate a blog post idea that is useful for people to read. Select a specific title on a very specific topic. Return only the title of the post as a response no other comments or words.
            These are the posts that are already on the website:
            ${allposts}
            Make sure the title is not already in the list above and it is distinct from the other titles.
          `,
      },
    ],
  });

  const title = res0.data.choices[0].message?.content;

  if (!title) return;

  const imageUrl = await generateImage(title);

  const response = await api.createChatCompletion({
    model: "gpt-3.5-turbo-16k",
    messages: [
      {
        role: "system",
        content: prompt(imageUrl, title),
      },
    ],
  });

  if (!response) return;

  const text1 = response.data.choices[0].message?.content;
  let textMerged = text1 || "";

  // if finish reason is not stop then call again
  if (response.data.choices[0].finish_reason !== "stop") {
    const response2 = await api.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: prompt(imageUrl, title),
        },
        {
          role: "assistant",
          content: response.data.choices[0].message?.content,
        },
      ],
    });

    const text2 = response2.data.choices[0].message?.content;
    textMerged = text1! + text2!;
  }

  return textMerged;
}

const generateImage = async (title: string) => {
  const response = await api.createImage({
    size: "512x512",
    prompt: "Photo about: " + title + ". No text in the image.",
    n: 1,
  });

  const url = response.data.data[0].url!;

  // dowmload image from url and save it to the public folder using fs
  // return the path to the image

  let imgbbRes;

  try {
    imgbbRes = await axios.get("https://api.imgbb.com/1/upload", {
      params: {
        key: process.env.IMGBB_API_KEY,
        image: url,
      },
    });
  } catch (e: any) {
    console.log(e.error);
    console.log(e.response.data);
    console.log(e.response.error);
  }

  if (!imgbbRes) return;

  const url2 = imgbbRes.data.data.url;

  return url2;
};
