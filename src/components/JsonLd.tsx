import { site, isTodo } from "@/lib/site";

/**
 * Données structurées schema.org « Plumber » pour Google.
 * Seuls les champs réellement remplis dans site.ts sont envoyés : jamais d'info inventée.
 */
export function JsonLd() {
  const filled = (v: string) => (isTodo(v) ? undefined : v);
  const areas = [site.city, ...site.communes].filter((c) => !isTodo(c));

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${site.url}/#entreprise`,
    url: site.url,
    name: filled(site.name),
    telephone: site.phoneE164 || undefined,
    email: filled(site.email),
    image: `${site.url}/opengraph-image`,
    address:
      !isTodo(site.city) || !isTodo(site.street)
        ? {
            "@type": "PostalAddress",
            streetAddress: filled(site.street),
            postalCode: filled(site.postalCode),
            addressLocality: filled(site.city),
            addressCountry: "FR",
          }
        : undefined,
    areaServed: areas.length ? areas.map((name) => ({ "@type": "City", name })) : undefined,
    openingHoursSpecification: site.openingHours.length
      ? site.openingHours.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.days,
          opens: h.opens,
          closes: h.closes,
        }))
      : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
