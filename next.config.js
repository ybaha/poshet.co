/**
 * "Apps" became "Projects". App Store listings and shared links still point at the
 * old URLs, so every page that used to live under /apps redirects permanently.
 * Static assets under /apps/<slug>/*.png are deliberately not matched.
 */
const LEGACY_APP_PAGES = ["privacy", "terms", "contact", "delete-account"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/apps", destination: "/projects", permanent: true },
      { source: "/apps/:slug", destination: "/projects/:slug", permanent: true },
      {
        source: `/apps/:slug/:page(${LEGACY_APP_PAGES.join("|")})`,
        destination: "/projects/:slug/:page",
        permanent: true,
      },
      // "Support" was folded into the per-app contact page.
      { source: "/apps/:slug/support", destination: "/projects/:slug/contact", permanent: true },
      { source: "/projects/:slug/support", destination: "/projects/:slug/contact", permanent: true },
    ];
  },
};

module.exports = nextConfig;
