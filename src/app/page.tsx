import type { Metadata } from "next";
import Link from "next/link";
import {
  site, phoneHref, pannes, tarifs, inclus, variations, services,
  avis, googleReviewsUrl, certifications,
} from "@/lib/site";
import { Fill, Price } from "@/components/Fill";
import { Icon } from "@/components/Icon";
import { HeroSchematic } from "@/components/HeroSchematic";
import s from "./page.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const steps = [
  { title: "Vous appelez", text: "Décrivez la panne et donnez l'adresse. On vous dit si on peut venir, et quand." },
  { title: "Vous validez le devis", text: "Le prix est annoncé avant de commencer. Rien n'est fait sans votre accord." },
  { title: "On répare", text: "Intervention chez vous, puis essai de l'installation devant vous." },
];

export default function Home() {
  return (
    <>
      {/* ============ Accroche ============ */}
      <section className={s.hero} aria-labelledby="titre">
        <div className={`container ${s.heroGrid}`}>
          <div className={s.heroText}>
            <h1 id="titre">
              Plombier à <Fill value={site.city} />
            </h1>
            <p className={s.lead}>
              Fuite d&apos;eau, WC bouché, plus d&apos;eau chaude&nbsp;? Appelez&nbsp;: on vous donne le prix de départ et
              le prochain créneau, puis un devis à valider avant toute intervention.
            </p>

            <div className={s.heroActions}>
              <a href={phoneHref} className={`btn btn--accent ${s.bigCall}`}>
                <Icon name="phone" size={26} />
                <span>
                  <span className={s.bigCallLabel}>Appeler maintenant</span>
                  <span className={s.bigCallNumber}>
                    <Fill value={site.phone} />
                  </span>
                </span>
              </a>
              <Link href="/contact" className="btn btn--ghost-light">
                Demander un devis
              </Link>
            </div>

            <ul className={s.heroFacts}>
              <li>
                <Icon name="clock" size={20} />
                <Fill value={site.hours} />
              </li>
              <li>
                <Icon name="phone" size={20} />
                <Fill value={site.emergency} />
              </li>
            </ul>
          </div>

          <div className={s.heroVisual}>
            <HeroSchematic />
          </div>
        </div>
      </section>

      <div className="rail">
        {/* ============ Choisir ma panne ============ */}
        <section id="pannes" className={s.section} aria-labelledby="titre-pannes">
          <div className="container">
            <div className={s.head}>
              <h2 id="titre-pannes" className="fitting-title">Choisir ma panne</h2>
              <p>Touchez ce qui vous arrive&nbsp;: vous verrez ce que l&apos;on fait et à partir de quel prix.</p>
            </div>

            <ul className={s.pannes} data-reveal>
              {pannes.map((p) => (
                <li key={p.label}>
                  <Link href={p.href} className={s.panne}>
                    <span className={s.panneIcon}>
                      <Icon name={p.icon} size={30} />
                    </span>
                    <span className={s.panneText}>
                      <span className={s.panneLabel}>{p.label}</span>
                      <span className={s.panneHint}>{p.hint}</span>
                    </span>
                    <span className={s.pannePrice}>
                      <Price value={p.priceFrom} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className={s.other}>
              Autre problème&nbsp;?{" "}
              <a href={phoneHref}>
                Appelez le <Fill value={site.phone} />
              </a>
              , on vous oriente.
            </p>
          </div>
        </section>

        {/* ============ Tarifs ============ */}
        <section id="tarifs" className={`${s.section} ${s.paper}`} aria-labelledby="titre-tarifs">
          <div className="container">
            <div className={s.head}>
              <h2 id="titre-tarifs" className="fitting-title">Prix de départ</h2>
              <p>
                Des prix TTC pour une intervention simple, pour savoir à quoi vous attendre avant d&apos;appeler. Le
                montant exact figure sur le devis.
              </p>
            </div>

            <table className={s.tarifs} data-reveal>
              <caption className="sr-only">Prix de départ des interventions courantes</caption>
              <thead>
                <tr>
                  <th scope="col">Intervention</th>
                  <th scope="col">Prix</th>
                </tr>
              </thead>
              <tbody>
                {tarifs.map((t) => (
                  <tr key={t.label}>
                    <th scope="row">
                      {t.label}
                      <span>{t.detail}</span>
                    </th>
                    <td>
                      <Price value={t.priceFrom} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={s.terms} data-reveal>
              <div>
                <h3>Compris dans le prix</h3>
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

            <Link href="/tarifs" className={`btn btn--outline ${s.after}`}>
              Voir tous les tarifs
            </Link>
          </div>
        </section>

        {/* ============ Services ============ */}
        <section id="services" className={s.section} aria-labelledby="titre-services">
          <div className="container">
            <div className={s.head}>
              <h2 id="titre-services" className="fitting-title">
                Nos services de plomberie à <Fill value={site.city} />
              </h2>
              <p>Réparation, remplacement ou petite installation, chez les particuliers.</p>
            </div>
            <ul className={s.services} data-reveal>
              {services.map((sv) => (
                <li key={sv.href}>
                  <h3>
                    <Link href={sv.href}>{sv.title}</Link>
                  </h3>
                  <p>{sv.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ 3 étapes ============ */}
        <section className={`${s.section} ${s.ink}`} aria-labelledby="titre-etapes">
          <div className="container">
            <div className={s.head}>
              <h2 id="titre-etapes" className="fitting-title">Comment ça se passe</h2>
              <p>Un appel, un devis, une réparation. Vous savez à chaque étape ce qui va se passer.</p>
            </div>
            <ol className={s.steps} data-reveal>
              {steps.map((st, i) => (
                <li key={st.title}>
                  <span className={s.stepNum} aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3>{st.title}</h3>
                  <p>{st.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ Zone ============ */}
        <section id="zone" className={`${s.section} ${s.paper}`} aria-labelledby="titre-zone">
          <div className={`container ${s.zone}`}>
            <div className={s.head}>
              <h2 id="titre-zone" className="fitting-title">
                Zone d&apos;intervention&nbsp;: <Fill value={site.city} /> et alentours
              </h2>
              <p>
                Nous intervenons à domicile à <Fill value={site.city} /> et dans les communes voisines, dans un rayon de{" "}
                <Fill value={site.radiusKm} fallback="rayon" /> km.
              </p>
              <p className={s.small}>
                Votre commune n&apos;est pas dans la liste&nbsp;? <a href={phoneHref}>Appelez pour vérifier.</a>{" "}
                <Link href="/zone-intervention">Voir toute la zone</Link>
              </p>
            </div>
            <ul className={s.communes} data-reveal>
              <li className={s.mainCity}>
                <Icon name="pin" size={20} />
                <Fill value={site.city} />
              </li>
              {site.communes.map((c) => (
                <li key={c}>
                  <Icon name="pin" size={20} />
                  <Fill value={c} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ Avis et certifications (réels uniquement) ============ */}
        <section id="avis" className={s.section} aria-labelledby="titre-avis">
          <div className="container">
            <div className={s.head}>
              <h2 id="titre-avis" className="fitting-title">Avis clients</h2>
            </div>
            {avis.length > 0 ? (
              <ul className={s.reviews}>
                {avis.map((a) => (
                  <li key={a.author + a.date}>
                    <blockquote>
                      <p>{a.text}</p>
                    </blockquote>
                    <p className={s.small}>
                      {a.author}, {a.date}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className={s.slot}>
                <span className="todo">[À COMPLÉTER : vrais avis Google]</span>
                <p>
                  Emplacement réservé aux avis Google réels de l&apos;entreprise. À remplir dans{" "}
                  <code>src/lib/site.ts</code> (liste <code>avis</code>). Aucun avis n&apos;est inventé.
                </p>
              </div>
            )}
            {googleReviewsUrl && (
              <a href={googleReviewsUrl} className={`btn btn--outline ${s.after}`} rel="noopener" target="_blank">
                Voir tous les avis sur Google
              </a>
            )}

            <h3 className={s.certTitle}>Certifications et assurances</h3>
            {certifications.length > 0 ? (
              <ul className={s.certs}>
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            ) : (
              <div className={s.slot}>
                <span className="todo">[À COMPLÉTER : certifications, labels, assurance décennale réels]</span>
                <p>Emplacement réservé. Si l&apos;entreprise n&apos;en a pas, cette partie peut être supprimée.</p>
              </div>
            )}
          </div>
        </section>

        {/* ============ Contact ============ */}
        <section id="contact" className={`${s.section} ${s.ink}`} aria-labelledby="titre-contact">
          <div className="container">
            <h2 id="titre-contact" className="fitting-title">Une fuite, un bouchon, une question&nbsp;?</h2>
            <a href={phoneHref} className={s.contactPhone}>
              <Fill value={site.phone} />
            </a>
            <ul className={s.contactList}>
              <li>
                <Icon name="mail" size={20} />
                <Fill value={site.email} />
              </li>
              <li>
                <Icon name="clock" size={20} />
                <Fill value={site.hours} />
              </li>
              <li>
                <Icon name="pin" size={20} />
                <span>
                  <Fill value={site.city} /> et communes voisines
                </span>
              </li>
            </ul>
            <Link href="/contact" className={`btn btn--accent ${s.after}`}>
              Demander un devis en ligne
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
