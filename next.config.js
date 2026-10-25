/**
 * "Apps" became "Projects". App Store listings and shared links still point at the
 * old URLs, so every page that used to live under /apps redirects permanently.
 * Static assets under /apps/<slug>/*.png are deliberately not matched.
 */
const LEGACY_APP_PAGES = ["privacy", "terms", "contact", "support", "delete-account"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"],
  },
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      { source: "/apps", destination: "/projects", permanent: true },
      { source: "/apps/:slug", destination: "/projects/:slug", permanent: true },
      {
        source: `/apps/:slug/:page(${LEGACY_APP_PAGES.join("|")})`,
        destination: "/projects/:slug/:page",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
