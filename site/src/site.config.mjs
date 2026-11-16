// Single source of truth for branding and URLs. Plain .mjs so build scripts,
// the Astro config, and pages all read the same values.
//
// SITE_URL and BASE_PATH override siteUrl and basePath at build time. Use
// BASE_PATH=/ for a custom domain at the root.

export const site = {
  name: 'template-docs-site',
  tagline: '__DESCRIPTION__',
  description: '__DESCRIPTION__',
  repoUrl: 'https://github.com/bcmyguest/template-docs-site',
  /** Branch that source links in the docs point at. */
  branch: 'main',
  siteUrl: 'https://bcmyguest.github.io',
  basePath: '/template-docs-site/',
};
