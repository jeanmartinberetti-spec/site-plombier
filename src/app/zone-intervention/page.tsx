import type { Metadata } from "next";
import Link from "next/link";
import { site, phoneHref, conditions } from "@/lib/site";
import { servicePages } from "@/lib/services";
import { Fill } from "@/components/Fill";
import { Icon } from "@/components/Icon";
import { PageHero, BreadcrumbJsonLd } from "@/components/PageHero";
import { CallSection } from "@/components/CallSection";
import s from "./zone.module.css";

export const metadata: Metadata = {
  title: `Zone d'intervention : plombier à ${site.city} et alentours`,
  description: `Plombier à ${site.city}, dans tous les arrondissements, et à ${site.communes.slice(0, 3).join(", ")} et alentours. Dépannage de fuite, débouchage, chauffe-eau.`,
  alternates: { canonical: "/zone-intervention" },
};

export default function ZonePage() {
  return (
    <>
      <BreadcrumbJsonLd name="Zone d'intervention" path="/zone-intervention" />
      <PageHero
        crumb="Zone d'intervention"
        icon="pin"
        title={
          <>
            Plombier à <Fill value={site.city} /> et alentours
          </>
        }
        intro={
          <>
            Nous intervenons à domicile dans tout <Fill value={site.city} /> et dans les communes voisines, dans un
            rayon d&apos;environ <Fill value={site.radiusKm} fallback="rayon" /> km. Un doute sur votre adresse&nbsp;?
            Appelez, on vous répond tout de suite.
          </>
        }
      />

      <div className="rail">
        {/* ============ Ville principale ============ */}
        {site.districts.length > 0 && (
          <section className={s.section} aria-labelledby="titre-ville">
            <div className="container">
              <h2 id="titre-ville" className="fitting-title">
                Tous les arrondissements de <Fill value={site.city} />
              </h2>
              <p className={s.sub}>
                Du centre aux arrondissements périphériques, nous nous déplaçons partout dans la ville.
              </p>
              <ul className={s.districts}>
                {site.districts.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ============ Communes voisines ============ */}
        <section className={`${s.section} ${s.paper}`} aria-labelledby="titre-communes">
          <div className={`container ${s.split}`}>
            <div>
              <h2 id="titre-communes" className="fitting-title">
                Communes voisines
              </h2>
              <p className={s.sub}>
                Nous intervenons aussi autour de <Fill value={site.city} />. Votre commune n&apos;apparaît pas&nbsp;?{" "}
                <a href={phoneHref}>Appelez pour vérifier</a>, elle est peut-être dans notre rayon.
              </p>
            </div>
            <ul className={s.communes}>
              {site.communes.map((c) => (
                <li key={c}>
                  <Icon name="pin" size={20} />
                  <Fill value={c} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Déplacement ============ */}
        <section className={s.section} aria-labelledby="titre-deplacement">
          <div className="container">
            <h2 id="titre-deplacement" className="fitting-title">
              Déplacement et horaires
            </h2>
            <dl className={s.facts}>
              <div>
                <dt>Frais de déplacement</dt>
                <dd>
                  <Fill value={conditions.travel} />
                </dd>
              </div>
              <div>
                <dt>Horaires</dt>
                <dd>
                  <Fill value={site.hours} />
                </dd>
              </div>
              <div>
                <dt>Urgences</dt>
                <dd>
                  <Fill value={site.emergency} />
                </dd>
              </div>
            </dl>
            <p className={s.note}>
              Au téléphone, on vous indique le prochain créneau disponible pour votre adresse et le prix de départ de
              l&apos;intervention. <Link href="/tarifs">Voir les tarifs</Link>
            </p>
          </div>
        </section>

        {/* ============ Services ============ */}
        <section className={`${s.section} ${s.paper}`} aria-labelledby="titre-services">
          <div className="container">
            <h2 id="titre-services" className="fitting-title">
              Ce que nous faisons à <Fill value={site.city} />
            </h2>
            <ul className={s.services}>
              {servicePages.map((sv) => (
                <li key={sv.slug}>
                  <Link href={`/${sv.slug}`}>
                    <Icon name={sv.icon} size={24} />
                    {sv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CallSection
          title={
            <>
              Un plombier à <Fill value={site.city} />
              &nbsp;? Appelez-nous
            </>
          }
          text="Donnez votre adresse : on vous dit tout de suite si et quand on peut venir."
        />
      </div>
    </>
  );
}
