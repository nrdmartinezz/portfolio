# Nate Martinez portfolio

Static site built with [Astro](https://astro.build). The home page keeps the existing layout. Blog posts are MDX files in `src/content/posts/`.

```bash
npm run dev
npm run build
npm run preview
npm run new:entry -- "Post title"
```

`site` in `astro.config.mjs` and `url` in `src/config/site.ts` must stay the same production origin. Firebase Hosting serves `dist/` for project `portfolio-dd896`.
