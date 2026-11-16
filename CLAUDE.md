# CLAUDE.md

template-docs-site: __DESCRIPTION__

`docs/*.md` holds the content; `site/` turns it into an Astro + Starlight site.

## Rules

- Every page in `docs/` needs an entry in `PAGES` in
  `site/scripts/lib/docs.mjs` (slug, source, sidebar group, title,
  description). The array order is the sidebar order.
- Link between pages with relative `.md` links (`[x](other.md)`); the sync
  step rewrites them for the site and the build fails on a broken one.
- Branding and URLs live in `site/src/site.config.mjs`; colours in
  `site/src/theme.yml`. The theme generator rejects text below WCAG AA.
- Never commit `site/src/generated/`, `site/src/content/docs/` or
  `site/src/styles/tokens.css`: the build generates them.

## Commands

```bash
cd site
pnpm install --frozen-lockfile
pnpm test
pnpm build    # sync + theme + astro build + link check
```

`pages.yml` deploys `main` to GitHub Pages; `ci.yml` builds pull requests.
