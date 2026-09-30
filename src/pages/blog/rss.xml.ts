import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { site } from "../../config/site";
import { getPublished } from "../../lib/posts";

export const GET: APIRoute = async (context) => {
  const entries = await getPublished();

  return rss({
    title: `Blog | ${site.name}`,
    description: "Notes on designing and building websites that have a lot to explain.",
    site: context.site ?? site.url,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `/blog/${entry.id}/`,
    })),
  });
};
