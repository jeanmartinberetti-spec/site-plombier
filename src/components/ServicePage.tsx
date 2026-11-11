import type { Metadata } from "next";
import Link from "next/link";
import { site, inclus } from "@/lib/site";
import { servicePages, getService, pricesFor } from "@/lib/services";
import { Fill, Price } from "./Fill";
import { Icon } from "./Icon";
import { CallSection } from "./CallSection";
import { PageHero, BreadcrumbJsonLd } from "./PageHero";
import s from "./ServicePage.module.css";

/** Métadonnées SEO d'une page service (titre, description, URL canonique). */
export function serviceMetadata(slug: string): Metadata {
  const sv = getService(slug);
  return {
    title: `${sv.metaTitle} à ${site.city}`,
    description: sv.metaDescription.replaceAll("{ville}", site.city),
    alternates: { canonical: `/${sv.slug}` },
  };
}

/** Gabarit commun aux pages services. Le contenu vient de src/lib/services.ts. */
export function ServicePage({ slug }: { slug: string }) {
  const sv = getService(slug);
  const prices = pricesFor(sv);
  const others = servicePages.filter((o) => o.slug !== sv.slug);

  return (
    <>
      <BreadcrumbJsonLd name={sv.name} path={`/${sv.slug}`} />
      <PageHero
        crumb={sv.name}
        icon={sv.icon}
        title={
          <>
            {sv.h1} à <Fill value={site.city} />
          </>
        }
        intro={sv.intro}
      />

      <div className="rail">
        {/* ============ Signes + travaux ============ */}
        <section className={s.section} aria-labelledby="titre-signes">
          <div className={`container ${s.split}`}>
            <div>
              <h2 id="titre-signes" className="fitting-title">
                Vous avez besoin de nous si…
              </h2>
              <ul className={s.signs} data-reveal>
                {sv.signs.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={s.h2Small}>Ce que l&apos;on fait</h2>
              <ol className={s.work} data-reveal>
                {sv.work.map((w) => (
                  <li key={w.title}>
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ============ Prix ============ */}
        <section className={`${s.section} ${s.paper}`} aria-labelledby="titre-prix">
          <div className="container">
            <h2 id="titre-prix" className="fitting-title">
              Prix
            </h2>
            {prices.length > 0 ? (
              <>
                <p className={s.sub}>Prix TTC pour une intervention simple. Le montant exact figure sur le devis, à valider avant de commencer.</p>
                <ul className={s.prices} data-reveal>
                  {prices.map((p) => (
                    <li key={p.label}>
                      <span>
                        <strong>{p.label}</strong>
                        <span>{p.detail}</span>
                      </span>
                      <Price value={p.priceFrom} />
                    </li>
                  ))}
                </ul>
                <ul className={s.included}>
                  {inclus.map((i) => (
                    <li key={i}>
                      <Fill value={i} />
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className={s.sub}>
                Sur devis après visite : chaque chantier est différent. La visite et le devis sont à demander par
                téléphone ou en ligne.
              </p>
            )}
            <Link href="/tarifs" className={`btn btn--outline ${s.after}`}>
              Voir tous les tarifs
            </Link>
          </div>
        </section>

        {/* ============ En attendant ============ */}
        {sv.meanwhile.length > 0 && (
          <section className={s.section} aria-labelledby="titre-attente">
            <div className="container">
              <div className={s.meanwhile} data-reveal>
                <h2 id="titre-attente" className={s.h2Small}>
                  En attendant le plombier
                </h2>
                <ol>
                  {sv.meanwhile.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        )}

        {/* ============ Questions ============ */}
        <section className={`${s.section} ${sv.meanwhile.length > 0 ? s.tight : ""}`} aria-labelledby="titre-faq">
          <div className="container">
            <h2 id="titre-faq" className="fitting-title">
              Questions fréquentes
            </h2>
            <div className={s.faq}>
              {sv.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Zone + autres services ============ */}
        <section className={`${s.section} ${s.paper}`} aria-labelledby="titre-zone">
          <div className={`container ${s.split}`}>
            <div>
              <h2 id="titre-zone" className="fitting-title">
                Où nous intervenons
              </h2>
              <p className={s.sub}>
                <Fill value={site.city} /> et les communes voisines&nbsp;:{" "}
                {site.communes.map((c, i) => (
                  <span key={c}>
                    <Fill value={c} />
                    {i < site.communes.length - 1 ? ", " : "."}
                  </span>
                ))}
              </p>
              <Link href="/zone-intervention" className={s.more}>
                Voir la zone d&apos;intervention
              </Link>
            </div>
            <nav aria-labelledby="titre-autres">
              <h2 id="titre-autres" className={s.h2Small}>
                Nos autres services
              </h2>
              <ul className={s.others}>
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/${o.slug}`}>
                      <Icon name={o.icon} size={22} />
                      {o.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <CallSection
          title={
            <>
              {sv.name} à <Fill value={site.city} />
              &nbsp;: appelez-nous
            </>
          }
          text="Le prix est annoncé avant de commencer. Rien n'est fait sans votre accord."
        />
      </div>
    </>
  );
}
