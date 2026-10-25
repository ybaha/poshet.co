#!/usr/bin/env node
/**
 * SEO metadata audit: sitemap URLs + per-app noindex support/delete-account pages.
 * Usage: node scripts/seo-audit.mjs [baseUrl]
 */

const BASE = (process.argv[2] || "http://localhost:3111").replace(/\/$/, "");
const CANONICAL = "https://poshet.co";
const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 160;
const MIN_SITEMAP_URLS = 10;

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

function meta(html, key) {
  const re = new RegExp(
    `<meta[^>]+(?:name|property)=["']${key}["'][^>]+content=["']([^"']*)["']|<meta[^>]+content=["']([^"']*)["'][^>]+(?:name|property)=["']${key}["']`,
    "i"
  );
  const m = html.match(re);
  return m ? decode(m[1] || m[2] || "") : "";
}

function linkRel(html, rel) {
  const re = new RegExp(`<link[^>]+rel=["']${rel}["'][^>]+href=["']([^"']*)["']`, "i");
  const re2 = new RegExp(`<link[^>]+href=["']([^"']*)["'][^>]+rel=["']${rel}["']`, "i");
  return decode(pick(html, re) || pick(html, re2));
}

function requiredSchemaTypes(path) {
  if (path === "/") return ["Organization", "WebSite"];
  if (path === "/projects" || path === "/blog") return ["BreadcrumbList"];
  if (/^\/projects\/[^/]+$/.test(path)) return ["MobileApplication", "BreadcrumbList"];
  if (/^\/blog\/[^/]+$/.test(path)) return ["BlogPosting", "BreadcrumbList"];
  if (/^\/author\/[^/]+$/.test(path)) return ["ProfilePage", "BreadcrumbList"];
  return [];
}

function collectJsonLdTypes(html) {
  const types = new Set();
  const add = (node) => {
    if (node == null) return;
    if (Array.isArray(node)) return node.forEach(add);
    if (typeof node !== "object") return;
    if (node["@graph"]) add(node["@graph"]);
    const t = node["@type"];
    if (typeof t === "string") types.add(t);
    else if (Array.isArray(t)) t.forEach((x) => typeof x === "string" && types.add(x));
    for (const v of Object.values(node)) if (v && typeof v === "object") add(v);
  };
  for (const block of html.matchAll(
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  )) {
    try {
      add(JSON.parse(block[1].trim()));
    } catch {
      return { types, invalid: true };
    }
  }
  return { types, invalid: false };
}

function analyze(html, expectedCanonical, path, { requireNoindex = false, checkSchema = true } = {}) {
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
  if (canonical !== expectedCanonical) issues.push("canonical mismatch");

  const ogTitle = meta(html, "og:title");
  const ogDesc = meta(html, "og:description");
  if (!ogTitle) issues.push("missing og:title");
  else if (ogTitle !== title) issues.push("og:title mismatch");
  if (!ogDesc) issues.push("missing og:description");
  else if (ogDesc !== desc) issues.push("og:description mismatch");

  const ogImg = meta(html, "og:image");
  if (!ogImg?.startsWith("http")) issues.push("og:image");

  const twCard = meta(html, "twitter:card");
  if (twCard !== "summary_large_image") issues.push("twitter:card");
  const twTitle = meta(html, "twitter:title");
  const twDesc = meta(html, "twitter:description");
  if (!twTitle) issues.push("missing twitter:title");
  else if (twTitle !== title) issues.push("twitter:title mismatch");
  if (!twDesc) issues.push("missing twitter:description");
  else if (twDesc !== desc) issues.push("twitter:description mismatch");
  const twImg = meta(html, "twitter:image");
  if (!twImg?.startsWith("http")) issues.push("twitter:image");

  const h1s = [...html.matchAll(/<h1[\s>]/gi)];
  if (h1s.length !== 1) issues.push(`h1 count ${h1s.length}`);

  const lang = pick(html, /<html[^>]+lang=["']([^"']+)["']/i);
  if (!lang) issues.push("html lang");

  const robots = meta(html, "robots").toLowerCase();
  const noindex = robots.includes("noindex");
  if (requireNoindex && !noindex) issues.push("missing noindex");
  if (!requireNoindex && noindex) issues.push("unexpected noindex");

  const { types, invalid } = collectJsonLdTypes(html);
  if (invalid) issues.push("invalid JSON-LD");
  else if (checkSchema)
    for (const need of requiredSchemaTypes(path)) {
      if (!types.has(need)) issues.push(`schema ${need}`);
    }

  return { title, desc, issues };
}

async function fetchPage(url, { okOnly = true } = {}) {
  const res = await fetch(url);
  const html = await res.text();
  if (okOnly && !res.ok) throw new Error(`${res.status} ${url}`);
  return { status: res.status, html };
}

async function sitemapUrls() {
  const { html: xml } = await fetchPage(`${BASE}/sitemap.xml`);
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

function canonicalUrl(path) {
  return `${CANONICAL}${path === "/" ? "" : path}`;
}

function validateSitemap(urls) {
  const issues = [];
  if (urls.length === 0) issues.push("sitemap has 0 URLs");
  if (urls.length > 0 && urls.length < MIN_SITEMAP_URLS)
    issues.push(`sitemap has ${urls.length} URLs (<${MIN_SITEMAP_URLS})`);
  const seen = new Set();
  for (const url of urls) {
    let origin;
    try {
      origin = new URL(url).origin;
    } catch {
      issues.push(`sitemap invalid URL ${url}`);
      continue;
    }
    if (origin !== CANONICAL) issues.push(`sitemap non-canonical host ${url}`);
    if (seen.has(url)) issues.push(`sitemap duplicate ${url}`);
    seen.add(url);
  }
  return issues;
}

function appSlugsFromSitemap(urls) {
  const slugs = [];
  for (const url of urls) {
    const path = new URL(url).pathname;
    const m = path.match(/^\/projects\/([^/]+)$/);
    if (m) slugs.push(m[1]);
  }
  return slugs;
}

async function main() {
  const rows = [];
  const titles = new Map();
  const descs = new Map();
  let failures = 0;

  const urls = await sitemapUrls();
  for (const msg of validateSitemap(urls)) {
    failures++;
    rows.push({ path: "sitemap.xml", ok: false, issues: msg });
  }

  for (const abs of urls) {
    const path = new URL(abs).pathname || "/";
    const local = `${BASE}${path === "/" ? "" : path}`;
    const { html } = await fetchPage(local);
    const r = analyze(html, canonicalUrl(path), path);
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

  for (const slug of appSlugsFromSitemap(urls)) {
    for (const sub of ["contact", "delete-account"]) {
      const path = `/projects/${slug}/${sub}`;
      const { html } = await fetchPage(`${BASE}${path}`);
      const r = analyze(html, canonicalUrl(path), path, { requireNoindex: true, checkSchema: false });
      if (r.issues.length) failures++;
      rows.push({ path: `${path} (noindex)`, ok: !r.issues.length, issues: r.issues.join(", ") || "ok" });
    }
  }

  const missingPath = "/__audit_missing_page__";
  const missing = await fetchPage(`${BASE}${missingPath}`, { okOnly: false });
  const missIssues = [];
  if (missing.status !== 404) missIssues.push(`status ${missing.status}`);
  const titleCount = [...missing.html.matchAll(/<title[^>]*>/gi)].length;
  if (titleCount !== 1) missIssues.push(`title count ${titleCount}`);
  if (!meta(missing.html, "robots").toLowerCase().includes("noindex")) missIssues.push("missing noindex");
  if (missIssues.length) failures++;
  rows.push({
    path: `${missingPath} (404)`,
    ok: !missIssues.length,
    issues: missIssues.join(", ") || "ok",
  });

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
