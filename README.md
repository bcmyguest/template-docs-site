# template-docs-site

__DESCRIPTION__

Docs: https://bcmyguest.github.io/template-docs-site/

<!-- template:start -->
## Using this template

```bash
gh repo create my-docs --template bcmyguest/template-docs-site --private --clone
cd my-docs
scripts/init.sh my-docs "One-line description"
git add -A && git commit -m "chore: init from template-docs-site"
pre-commit install --install-hooks --hook-type pre-commit --hook-type commit-msg
```

`init.sh` renames `template-docs-site` everywhere, fills the description, sets
the owner from the `origin` remote, removes this section and deletes itself.

To add the site to an existing repo, copy `site/`, `docs/` and
`.github/workflows/pages.yml` into it.

Deploying needs a public repo (your plan has no Pages for private repos).
The workflow token cannot turn Pages on, so do it once with yours:

```bash
gh api -X POST repos/OWNER/REPO/pages -f build_type=workflow
```

Until then `pages.yml` fails at its Pages setup step; `ci.yml` still builds
every pull request.
<!-- template:end -->

## Layout

- `docs/*.md`: the pages, readable on GitHub as they are.
- `site/`: Astro + Starlight. `pnpm build` copies `docs/` in, rewrites links,
  generates the theme from `site/src/theme.yml`, builds, then fails on any
  broken link or a text colour below WCAG AA contrast.
- The build also emits `llms.txt` and `llms-full.txt`.

```bash
cd site
pnpm install
pnpm dev     # http://localhost:4321/template-docs-site/
pnpm test
pnpm build
```

## License

Apache-2.0
