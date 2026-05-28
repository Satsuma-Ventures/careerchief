# CareerChief — GitHub Pages export

Static, self-contained build of the CareerChief marketing site and product-app kit. No build step required.

## Deploy

1. Create a new public GitHub repo (e.g. `careerchief-site`).
2. Push the contents of **this folder** to the repo's `main` branch — the file tree should look like:
   ```
   .
   ├── index.html
   ├── .nojekyll
   ├── assets/
   ├── styles/
   ├── marketing/
   └── app/
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `(root)`
5. Save. Your site will be live within a minute at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```
6. The product-app kit will be at:
   ```
   https://<your-username>.github.io/<repo-name>/app/
   ```

The `.nojekyll` file is included so GitHub Pages skips Jekyll processing — folders and files that start with `_` will be served as-is.

## File layout

```
index.html              Marketing landing page (default front door)
app/index.html          Product-app kit (workspace recreation)

assets/                 Brand SVGs — lockups, logomark, favicon
styles/                 CSS tokens + per-kit stylesheets
  colors_and_type.css   Tokens + semantic element styles
  marketing.css         Marketing-only styles
  app.css               App-only styles
marketing/              Marketing JSX components
app/                    Product-app JSX components
```

## Notes

- **React + Babel run in the browser.** No build step. The unpkg URLs are pinned with integrity hashes — they will not silently change.
- **Fonts** come from Google Fonts (DM Serif Display + Plus Jakarta Sans + JetBrains Mono).
- **Editing** — open any `.jsx` or `.css` file in your editor; refresh the browser; you're done.
- **Custom domain** — if you point a domain at the site, add a `CNAME` file at the root with the domain on a single line.
- **Performance** — the in-browser Babel transformer is fine for marketing-scale traffic. If you need to scale up, pre-compile the JSX with `npx babel marketing/ --out-dir marketing/` and swap the `<script type="text/babel">` tags for plain `<script>`.

## Updating from the design-system source

This folder is generated from the parent `CareerChief Design System` project. If the source updates (new tokens, new components), regenerate `dist/` rather than hand-editing — that keeps the system and the live site in sync.
