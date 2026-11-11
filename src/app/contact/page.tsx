import type { Metadata } from "next";
import Link from "next/link";
import { site, phoneHref, pannes, isTodo, isDemo } from "@/lib/site";
import { Fill } from "@/components/Fill";
import { Icon } from "@/components/Icon";
import { PageHero, BreadcrumbJsonLd } from "@/components/PageHero";
import { QuoteForm } from "./QuoteForm";
import s from "./contact.module.css";

export const metadata: Metadata = {
  title: `Contact et devis plombier à ${site.city}`,
  description: `Appelez le ${site.phone} ou demandez un devis en ligne pour une fuite, un débouchage, un chauffe-eau ou des travaux de plomberie à ${site.city}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Contact et devis" path="/contact" />
      <PageHero
        crumb="Contact et devis"
        quoteButton={false}
        title="Contact et demande de devis"
        intro={
          <>
            Pour une urgence, appelez&nbsp;: c&apos;est le plus rapide. Pour des travaux ou une question, laissez votre
            demande ci-dessous, nous vous rappelons pour en parler et vous remettre un devis.
          </>
        }
      />

      <div className="rail">
        <section className={s.section} aria-labelledby="titre-formulaire">
          <div className={`container ${s.layout}`}>
            <div className={s.card}>
              <h2 id="titre-formulaire" className="fitting-title">
                Demander un devis
              </h2>
              <p className={s.sub}>Devis gratuit. Les champs sans mention «&nbsp;facultatif&nbsp;» sont nécessaires pour vous recontacter.</p>
              <QuoteForm
                problems={pannes.map((p) => p.label)}
                phone={isTodo(site.phone) ? "" : site.phone}
                phoneHref={phoneHref}
                demo={isDemo}
              />
            </div>

            <aside className={s.aside} aria-label="Coordonnées">
              <div className={s.urgent}>
                <p className={s.urgentLabel}>Urgence, fuite, dégât des eaux</p>
                <a href={phoneHref} className={s.phone}>
                  <Icon name="phone" size={26} />
                  <Fill value={site.phone} />
                </a>
                <p className={s.small}>
                  <Fill value={site.emergency} />
                </p>
              </div>

              <dl className={s.details}>
                <div>
                  <dt>
                    <Icon name="mail" size={20} /> E-mail
                  </dt>
                  <dd>
                    {isTodo(site.email) ? <Fill value={site.email} /> : <a href={`mailto:${site.email}`}>{site.email}</a>}
                  </dd>
                </div>
                <div>
                  <dt>
                    <Icon name="clock" size={20} /> Horaires
                  </dt>
                  <dd>
                    <Fill value={site.hours} />
                  </dd>
                </div>
                <div>
                  <dt>
                    <Icon name="pin" size={20} /> Adresse
                  </dt>
                  <dd>
                    <address>
                      <Fill value={site.name} />
                      <br />
                      <Fill value={site.street} />
                      <br />
                      <Fill value={site.postalCode} /> <Fill value={site.city} />
                    </address>
                  </dd>
                </div>
              </dl>
              <p className={s.small}>
                Nous intervenons à <Fill value={site.city} /> et dans les communes voisines.{" "}
                <Link href="/zone-intervention">Voir la zone d&apos;intervention</Link>
              </p>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
