import type { Metadata } from "next";
import Link from "next/link";
import { site, inclus, variations, conditions } from "@/lib/site";
import { servicePages, pricesFor } from "@/lib/services";
import { Fill, Price } from "@/components/Fill";
import { Icon } from "@/components/Icon";
import { CallSection } from "@/components/CallSection";
import { PageHero, BreadcrumbJsonLd } from "@/components/PageHero";
import s from "./tarifs.module.css";

export const metadata: Metadata = {
  title: `Tarifs plombier à ${site.city}`,
  description: `Prix de départ TTC d'un plombier à ${site.city} : fuite, débouchage, chasse d'eau, mitigeur, chauffe-eau. Taux horaire, déplacement et devis expliqués avant toute intervention.`,
  alternates: { canonical: "/tarifs" },
};

const steps = [
  { title: "Au téléphone", text: "Vous décrivez la panne, on vous annonce le prix de départ correspondant." },
  { title: "Sur place", text: "Diagnostic, puis devis écrit avec le montant exact. Vous êtes libre de refuser." },
  { title: "Après accord", text: "On intervient. La facture reprend le devis, sans ligne ajoutée sans votre accord." },
];

const faq = [
  {
    q: "Pourquoi des prix « dès » ?",
    a: "Le prix de départ correspond à une intervention simple et accessible. Si l'accès est difficile ou si une pièce est à remplacer, le devis le précise avant de commencer.",
  },
  {
    q: "Le devis est-il payant ?",
    a: `${conditions.quote}.`,
  },
  {
    q: "Les prix sont-ils TTC ?",
    a: "Oui, tous les prix affichés sur ce site sont toutes taxes comprises.",
  },
  {
    q: "Et le soir ou le week-end ?",
    a: variations.find((v) => v.toLowerCase().includes("majoration")) ?? "Le tarif vous est annoncé au téléphone avant le déplacement.",
  },
];

export default function TarifsPage() {
  // Un tarif cité par deux services (ex. « Débouchage WC ») n'apparaît qu'une fois, sous le premier.
  const seen = new Set<string>();
  const groups = servicePages
    .map((sv) => {
      const rows = pricesFor(sv).filter((r) => !seen.has(r.label));
      rows.forEach((r) => seen.add(r.label));
      return { sv, rows };
    })
    .filter((g) => g.rows.length > 0 || g.sv.prices.length === 0);

  return (
    <>
      <BreadcrumbJsonLd name="Tarifs" path="/tarifs" />
      <PageHero
        crumb="Tarifs"
        title={
          <>
            Tarifs plombier à <Fill value={site.city} />
          </>
        }
        intro="Nos prix de départ pour les interventions courantes, et tout ce qui peut faire varier le montant. Le prix exact est toujours donné sur devis, avant de commencer."
      />

      <div className="rail">
        {/* ============ Grille ============ */}
        <section className={s.section} aria-labelledby="titre-grille">
          <div className="container">
            <h2 id="titre-grille" className="fitting-title">
              Prix de départ par intervention
            </h2>
            <p className={s.sub}>Prix TTC, main-d&apos;œuvre comprise, pour une intervention simple et accessible.</p>

            <table className={s.grid}>
              <caption className="sr-only">Prix de départ TTC par intervention</caption>
              <thead>
                <tr>
                  <th scope="col">Intervention</th>
                  <th scope="col">Prix TTC</th>
                </tr>
              </thead>
              {groups.map(({ sv, rows }) => (
                <tbody key={sv.slug}>
                  <tr className={s.group}>
                    <th scope="colgroup" colSpan={2}>
                      <Link href={`/${sv.slug}`}>
                        <Icon name={sv.icon} size={22} />
                        {sv.name}
                      </Link>
                    </th>
                  </tr>
                  {rows.length > 0 ? (
                    rows.map((r) => (
                      <tr key={r.label}>
                        <th scope="row">
                          {r.label}
                          <span>{r.detail}</span>
                        </th>
                        <td>
                          <Price value={r.priceFrom} />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <th scope="row">
                        Travaux de salle de bain
                        <span>Remplacement d&apos;équipements, modification des arrivées et évacuations</span>
                      </th>
                      <td>Sur devis</td>
                    </tr>
                  )}
                </tbody>
              ))}
            </table>
          </div>
        </section>

        {/* ============ Conditions ============ */}
        <section className={`${s.section} ${s.paper}`} aria-labelledby="titre-conditions">
          <div className="container">
            <h2 id="titre-conditions" className="fitting-title">
              Main-d&apos;œuvre, déplacement, devis
            </h2>
            <dl className={s.conditions}>
              <div>
                <dt>Taux horaire</dt>
                <dd>
                  {conditions.hourlyRate !== null ? (
                    <>
                      <strong>{conditions.hourlyRate} €</strong> TTC de l&apos;heure
                    </>
                  ) : (
                    <Fill value={null} fallback="taux horaire" />
                  )}
                </dd>
                <dd className={s.note}>
                  <Fill value={conditions.timeBilling} />
                </dd>
              </div>
              <div>
                <dt>Déplacement</dt>
                <dd>
                  <Fill value={conditions.travel} />
                </dd>
              </div>
              <div>
                <dt>Devis</dt>
                <dd>
                  <Fill value={conditions.quote} />
                </dd>
              </div>
              <div>
                <dt>Paiement</dt>
                <dd>
                  <Fill value={conditions.payment} />
                </dd>
              </div>
            </dl>

            <div className={s.terms}>
              <div>
                <h3>Compris dans les prix de départ</h3>
                <ul className={s.checks}>
                  {inclus.map((i) => (
                    <li key={i}>
                      <Fill value={i} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Ce qui peut faire varier le prix</h3>
                <ul className={s.plus}>
                  {variations.map((v) => (
                    <li key={v}>
                      <Fill value={v} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Comment le prix est fixé ============ */}
        <section className={s.section} aria-labelledby="titre-etapes">
          <div className="container">
            <h2 id="titre-etapes" className="fitting-title">
              Comment le prix est fixé
            </h2>
            <ol className={s.steps}>
              {steps.map((st) => (
                <li key={st.title}>
                  <h3>{st.title}</h3>
                  <p>{st.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ Questions ============ */}
        <section className={`${s.section} ${s.paper}`} aria-labelledby="titre-faq">
          <div className="container">
            <h2 id="titre-faq" className="fitting-title">
              Questions sur les prix
            </h2>
            <div className={s.faq}>
              {faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CallSection
          title={<>Un prix pour votre panne&nbsp;? Appelez-nous</>}
          text="On vous annonce le prix de départ au téléphone, avant de se déplacer."
        />
      </div>
    </>
  );
}
