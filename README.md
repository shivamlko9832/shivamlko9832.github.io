# shivamlko9832.github.io

Personal technical blog of **Shivam** — write-ups on AI architecture, agent systems,
Azure infrastructure, and building with models in production.

**Live site:** <https://shivamlko9832.github.io>

---

## Stack

| Piece | Choice |
| --- | --- |
| Generator | [Jekyll](https://jekyllrb.com) |
| Theme | [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) (gem), with a custom design layer |
| Hosting | GitHub Pages, deployed by GitHub Actions (`.github/workflows/pages-deploy.yml`) |
| Type | Newsreader (headings) · Inter (body) · JetBrains Mono (code) |

## The custom layer

The theme is untouched upstream; everything bespoke lives in files that override the gem:

```
assets/css/jekyll-theme-chirpy.scss   design tokens + all custom styling
assets/js/custom.js                   reading progress, reveal-on-scroll, link hardening
assets/img/favicons/                  monogram favicon set
assets/img/og-default.png             site-wide social card
_includes/head.html                   head with custom-tab title fix
_includes/metadata-hook.html          webfonts, JSON-LD person schema, custom script
_includes/footer.html                 footer with quick links
_layouts/home.html                    hero section + richer post cards
_data/hero.yml                        home page hero copy (edit this, not the layout)
_tabs/                                about, work
```

Colour, spacing and typography are driven by CSS custom properties defined once per
theme mode in `assets/css/jekyll-theme-chirpy.scss` (`ink-light` / `ink-dark`). Change a
token there and it propagates across the site.

## Writing a post

Create `_posts/YYYY-MM-DD-slug.md`:

```yaml
---
title: "Post title"
description: "One or two sentences — used for SEO, the card summary and the social card."
date: 2026-09-21 10:00:00 +0530
categories: [AI Engineering, Model Architecture]
tags: [agents, azure, mcp]
toc: true
mermaid: false   # true if the post contains mermaid diagrams
math: false      # true if the post contains LaTeX
pin: false       # pin to the top of the home page
image:
  path: /assets/img/your-og.png
  alt: "Describe the image"
---
```

Useful Chirpy blocks:

```markdown
> A tip callout.
{: .prompt-tip }

> An informational callout.
{: .prompt-info }
```

## Running it locally

```bash
bundle install
bundle exec jekyll serve --livereload   # http://127.0.0.1:4000
```

Build exactly as CI does:

```bash
JEKYLL_ENV=production bundle exec jekyll b
bundle exec htmlproofer _site --disable-external
```

## Deploying

Push to `main`. The workflow builds the site and publishes it to GitHub Pages.
`README.md`, `LICENSE` and `.gitignore` are excluded from triggering a deploy.

## Optional next steps

- **Comments** — set `comments.provider: giscus` in `_config.yml` and fill `repo_id` /
  `category_id` from <https://giscus.app>.
- **Analytics** — add an ID under `analytics:` in `_config.yml` (GoatCounter also enables
  per-post pageviews).
- **Search Console** — paste the verification token into `webmaster_verifications.google`.

## License

Content © Shivam. Theme released under the [MIT License](LICENSE).
