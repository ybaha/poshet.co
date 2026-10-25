#!/usr/bin/env node
/**
 * SEO metadata audit: sitemap URLs + per-app noindex support/delete-account pages.
 * Usage: node scripts/seo-audit.mjs [baseUrl]
 */

const BASE = (process.argv[2] || "http://localhost:3111").replace(/\/$/, "");
const SITE = "https://poshet.co";
const APP_SLUGS = [
  "pico", "math", "picu", "vidgen", "grip", "glb", "rooma", "clean", "viralty",
];
const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 160;

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#(?:39|x27);/gi, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();

function pick(html, re) {
  const m = html.match(re);
  return m ? m[1] : "";
}

function meta(html, key, val) {
  const re = new RegExp(
    `<meta[^>]+(?:name|property)=["']${key}["'][^>]+content=["']([^"']*)["']|<meta[^>]+content=["']([^"']*)["'][^>]+(?:name|property)=["']${val ?? key}["']`,
    "i"
  );
  const m = html.match(re);
  return m ? decode(m[1] || m[2] || "") : "";
}

function linkRel(html, rel) {
  const re = new RegExp(`<link[^>]+rel=["']${rel}["'][^>]+href=["']([^"']+)["']`, "i");
  const re2 = new RegExp(`<link[^>]+href=["']([^"']+)["'][^>]+rel=["']${rel}["']`, "i");
  return decode(pick(html, re) || pick(html, re2));
}

function analyze(html, expectedCanonical, { requireNoindex = false } = {}) {
  const issues = [];
  const titles = [...html.matchAll(/<title[^>]*>([^<]*)<\/title>/gi)].map((m) => decode(m[1]));
  if (titles.length !== 1) issues.push(`title count ${titles.length}`);
  const title = titles[0] || "";
  if (title.length > TITLE_MAX) issues.push(`title len ${title.length}`);

  const desc = meta(html, "description");
  if (!desc) issues.push("missing description");
  else if (desc.length < DESC_MIN || desc.length > DESC_MAX)
    issues.push(`desc len ${desc.length}`);

  const canonical = linkRel(html, "canonical");
  if (canonical !== expectedCanonical) issues.push(`canonical mismatch`);

  const ogTitle = meta(html, "og:title");
  const ogDesc = meta(html, "og:description");
  if (ogTitle && ogTitle !== title) issues.push("og:title mismatch");
  if (ogDesc && ogDesc !== desc) issues.push("og:description mismatch");

  const ogImg = meta(html, "og:image");
  const twImg = meta(html, "twitter:image");
  if (!ogImg?.startsWith("http")) issues.push("og:image");
  if (!twImg?.startsWith("http")) issues.push("twitter:image");

  const h1s = [...html.matchAll(/<h1[\s>]/gi)];
  if (h1s.length !== 1) issues.push(`h1 count ${h1s.length}`);

  const lang = pick(html, /<html[^>]+lang=["']([^"']+)["']/i);
  if (!lang) issues.push("html lang");

  const robots = meta(html, "robots").toLowerCase();
  const noindex = robots.includes("noindex");
  if (requireNoindex && !noindex) issues.push("missing noindex");
  if (!requireNoindex && noindex) issues.push("unexpected noindex");

  for (const block of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(block[1].trim());
    } catch {
      issues.push("invalid JSON-LD");
      break;
    }
  }

  return { title, desc, issues };
}

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

async function sitemapUrls() {
  const xml = await fetchText(`${BASE}/sitemap.xml`);
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

function pathFromSitemapUrl(url) {
  return new URL(url).pathname;
}

async function main() {
  const rows = [];
  const titles = new Map();
  const descs = new Map();
  let failures = 0;

  const urls = await sitemapUrls();
  for (const abs of urls) {
    const path = pathFromSitemapUrl(abs);
    const local = `${BASE}${path === "/" ? "" : path}`;
    const html = await fetchText(local);
    const r = analyze(html, abs);
    if (r.title) {
      if (titles.has(r.title)) r.issues.push("duplicate title");
      titles.set(r.title, path);
    }
    if (r.desc) {
      if (descs.has(r.desc)) r.issues.push("duplicate description");
      descs.set(r.desc, path);
    }
    if (r.issues.length) failures++;
    rows.push({ path, ok: !r.issues.length, issues: r.issues.join(", ") || "ok" });
  }

  for (const slug of APP_SLUGS) {
    for (const sub of ["contact", "delete-account"]) {
      const path = `/projects/${slug}/${sub}`;
      const abs = `${SITE}${path}`;
      const html = await fetchText(`${BASE}${path}`);
      const r = analyze(html, abs, { requireNoindex: true });
      if (r.issues.length) failures++;
      rows.push({ path: `${path} (noindex)`, ok: !r.issues.length, issues: r.issues.join(", ") || "ok" });
    }
  }

  const w = Math.max(8, ...rows.map((r) => r.path.length));
  for (const { path, ok, issues } of rows) {
    console.log(`${ok ? "PASS" : "FAIL"} ${path.padEnd(w)} ${issues}`);
  }
  const passed = rows.filter((r) => r.ok).length;
  console.log(`\nSummary: ${passed}/${rows.length} passed, ${failures} failed (base ${BASE})`);
  process.exit(failures ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
