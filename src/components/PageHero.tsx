import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { site, phoneHref } from "@/lib/site";
import { Fill } from "./Fill";
import { Icon } from "./Icon";
import s from "./PageHero.module.css";

/** Accroche des pages intérieures : fil d'Ariane, H1, intro, boutons d'appel et de devis. */
export function PageHero({
  crumb,
  title,
  intro,
  icon,
  quoteButton = true,
}: {
  /** Nom de la page dans le fil d'Ariane. */
  crumb: string;
  title: ReactNode;
  intro: ReactNode;
  icon?: ComponentProps<typeof Icon>["name"];
  /** Masquer le bouton « Demander un devis » (inutile sur la page contact elle-même). */
  quoteButton?: boolean;
}) {
  return (
    <section className={s.hero} aria-labelledby="titre">
      <div className="container">
        <nav aria-label="Fil d'Ariane" className={s.crumbs}>
          <ol>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
        <div className={s.heroRow}>
          {icon && (
            <span className={s.heroIcon} aria-hidden="true">
              <Icon name={icon} size={40} />
            </span>
          )}
          <h1 id="titre">{title}</h1>
        </div>
        <p className={s.lead}>{intro}</p>
        <div className={s.actions}>
          <a href={phoneHref} className="btn btn--accent">
            <Icon name="phone" size={22} />
            <span>
              Appeler le <Fill value={site.phone} />
            </span>
          </a>
          {quoteButton && (
            <Link href="/contact" className="btn btn--ghost-light">
              Demander un devis
            </Link>
          )}
        </div>
        <p className={s.facts}>
          <Icon name="clock" size={18} />
          <span>
            <Fill value={site.hours} /> · <Fill value={site.emergency} />
          </span>
        </p>
      </div>
    </section>
  );
}

/** Fil d'Ariane pour Google (données structurées). */
export function BreadcrumbJsonLd({ name, path }: { name: string; path: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
