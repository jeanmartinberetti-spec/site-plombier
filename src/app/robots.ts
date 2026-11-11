import type { MetadataRoute } from "next";
import { site, isDemo } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // En mode démo, l'exploration reste ouverte exprès : Google doit pouvoir lire la balise « noindex »
  // posée sur chaque page (layout.tsx). Un « Disallow » l'en empêcherait et l'adresse pourrait quand même
  // apparaître dans les résultats.
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: isDemo ? undefined : `${site.url}/sitemap.xml`,
  };
}
