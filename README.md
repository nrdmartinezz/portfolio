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

`npm run verify` rebuilds design tokens, then runs `astro check` and `prettier --check`. A push to `master` runs that check, builds, and deploys the live Firebase Hosting site and the contact function.

`site` in `astro.config.mjs` and `url` in `src/config/site.ts` must stay the same production origin. Firebase Hosting serves `dist/` for project `portfolio-dd896`. The contact form posts to `/api/contact/`, which Hosting rewrites to the `contact` function in `us-west1`.

The contact function reads `RESEND_API_KEY` from Secret Manager. Keep that value in `.env.dev` or `functions/.secret.local` for local use, and never commit it. `webnrd.me` is verified in Resend, so mail sends from `hello@webnrd.me` to `nrd.martinezz@gmail.com`, with reply-to set to the visitor.
