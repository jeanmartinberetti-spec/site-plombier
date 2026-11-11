import type { Metadata } from "next";
import Link from "next/link";
import { site, legal, isTodo } from "@/lib/site";
import { Fill } from "@/components/Fill";
import { LegalHeader } from "../LegalHeader";
import s from "../legal.module.css";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Comment ${site.name} traite les informations envoyées par le formulaire de demande de devis, et comment exercer vos droits.`,
  alternates: { canonical: "/confidentialite" },
};

export default function Confidentialite() {
  const contact = isTodo(site.email) ? (
    <Fill value={site.email} />
  ) : (
    <a href={`mailto:${site.email}`}>{site.email}</a>
  );

  return (
    <>
      <LegalHeader title="Politique de confidentialité" updated="novembre 2026" />
      <div className={`container ${s.body}`}>
        <div className={s.prose}>
          <h2>En bref</h2>
          <p>
            Nous ne collectons que ce qui est nécessaire pour vous rappeler et vous faire un devis. Vos informations ne
            sont ni vendues, ni louées, ni utilisées pour de la publicité.
          </p>

          <h2>Responsable du traitement</h2>
          <p>
            <Fill value={site.name} />, <Fill value={site.street} />, <Fill value={site.postalCode} />{" "}
            <Fill value={site.city} />. Contact&nbsp;: {contact}.
          </p>

          <h2>Données collectées</h2>
          <p>Lorsque vous remplissez le formulaire de demande de devis&nbsp;:</p>
          <ul>
            <li>votre nom et votre numéro de téléphone&nbsp;;</li>
            <li>votre adresse e-mail, si vous la donnez&nbsp;;</li>
            <li>l&apos;adresse ou la commune de l&apos;intervention&nbsp;;</li>
            <li>la description de votre problème.</li>
          </ul>
          <p>Merci de ne pas indiquer d&apos;informations sensibles (santé, coordonnées bancaires…) dans le message.</p>

          <h2>Pourquoi et sur quelle base</h2>
          <p>
            Ces informations servent uniquement à vous recontacter, à préparer le devis et à organiser
            l&apos;intervention. Ce traitement est nécessaire à des mesures précontractuelles prises à votre demande
            (article 6.1.b du RGPD).
          </p>

          <h2>Qui y a accès</h2>
          <p>
            Seule l&apos;entreprise <Fill value={site.name} /> les consulte. Elles transitent par nos prestataires
            techniques, qui n&apos;ont pas le droit de les utiliser pour leur propre compte&nbsp;: l&apos;hébergeur du
            site (<Fill value={legal.host.name} />) et le service d&apos;envoi d&apos;e-mails qui nous transmet la
            demande. Ces prestataires peuvent être situés hors de l&apos;Union européenne&nbsp;; les transferts sont alors
            encadrés par les garanties prévues par le RGPD (clauses contractuelles types de la Commission européenne ou
            cadre de protection des données UE–États-Unis).
          </p>

          <h2>Combien de temps</h2>
          <p>
            Si la demande n&apos;aboutit pas à une intervention, les informations sont conservées{" "}
            <Fill value={legal.retention} />, puis supprimées. Si une intervention a lieu, la facture est conservée
            pendant la durée imposée par la loi (10 ans).
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous pouvez demander à consulter, corriger ou supprimer vos informations, vous opposer à leur utilisation,
            en limiter l&apos;usage ou les récupérer. Écrivez à {contact} en précisant votre demande&nbsp;; nous vous
            répondons dans un délai d&apos;un mois au plus.
          </p>
          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL&nbsp;:{" "}
            <a href="https://www.cnil.fr/fr/plaintes" rel="noopener">
              cnil.fr/fr/plaintes
            </a>
            .
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site ne dépose aucun cookie de mesure d&apos;audience, de publicité ou de réseau social. Aucun bandeau de
            consentement n&apos;est donc nécessaire. Les polices de caractères sont hébergées sur notre propre site&nbsp;:
            aucune donnée n&apos;est envoyée à un service tiers lors de votre visite.
          </p>

          <p>
            Voir aussi les <Link href="/mentions-legales">mentions légales</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
