import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { servicePages } from "@/lib/services";

// Ajoute ici chaque nouvelle page dès qu'elle est créée.
const pages = [
  { path: "", priority: 1 },
  { path: "/tarifs", priority: 0.9 },
  { path: "/zone-intervention", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/mentions-legales", priority: 0.2 },
  { path: "/confidentialite", priority: 0.2 },
  ...servicePages.map((s) => ({ path: `/${s.slug}`, priority: 0.8 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${site.url}${p.path}`,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
