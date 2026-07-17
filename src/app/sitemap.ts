import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

/**
 * Served at /sitemap.xml. Article and category routes are added here as each
 * page ships — the homepage anchors are intentionally not listed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
