import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const title = process.argv.slice(2).join(' ').trim();

if (!title) {
  console.error('Usage: npm run new:entry -- "Post title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/['"]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const today = new Date().toISOString().slice(0, 10);
const dir = path.join('src', 'content', 'posts');
const file = path.join(dir, `${slug}.mdx`);

await mkdir(dir, { recursive: true });
await writeFile(
  file,
  `---
title: ${title}
description: 
date: ${today}
draft: true
---

`,
);
console.log(`Created ${file}`);
