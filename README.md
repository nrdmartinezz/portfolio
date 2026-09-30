# Nate Martinez portfolio

Static site built with [Astro](https://astro.build). The home page keeps the existing layout. Blog posts are MDX files in `src/content/posts/`.

```bash
npm run dev
npm run build
npm run preview
npm run verify
npm run format
npm run new:entry -- "Post title"
```

`npm run verify` rebuilds design tokens, then runs `astro check` and `prettier --check`. GitHub Actions runs it before every Firebase Hosting deploy.

`site` in `astro.config.mjs` and `url` in `src/config/site.ts` must stay the same production origin. Firebase Hosting serves `dist/` for project `portfolio-dd896`.
