import { readFile } from "node:fs/promises";
import { getCollection, type CollectionEntry } from "astro:content";

export type PostEntry = CollectionEntry<"posts">;

/** Drafts render in dev and disappear from production builds. */
export async function getPublished(): Promise<PostEntry[]> {
  const entries = await getCollection("posts", ({ data }) => {
    return import.meta.env.DEV || data.draft !== true;
  });

  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const postDateFormat = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeZone: "UTC",
});

export async function readingTime(entry: PostEntry): Promise<string> {
  let text = entry.body;
  if (!text && entry.filePath) {
    const raw = await readFile(entry.filePath, "utf8");
    text = raw.replace(/^---[\s\S]*?---/, "");
  }
  const words = (text ?? "").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}
