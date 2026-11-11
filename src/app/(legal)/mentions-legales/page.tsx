import type { Metadata } from "next";
import Link from "next/link";
import { site, legal, phoneHref, isTodo } from "@/lib/site";
import { Fill } from "@/components/Fill";
import { LegalHeader } from "../LegalHeader";
import s from "../legal.module.css";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site de ${site.name}, plombier à ${site.city} : éditeur, hébergeur, médiation.`,
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <>
      <LegalHeader title="Mentions légales" updated="novembre 2026" />
      <div className={`container ${s.body}`}>
        <div className={s.prose}>
          <h2>Éditeur du site</h2>
          <dl>
            <dt>Entreprise</dt>
            <dd>
              <Fill value={site.name} />
            </dd>
            <dt>Forme juridique</dt>
            <dd>
              <Fill value={legal.legalForm} />
            </dd>
            <dt>Adresse</dt>
            <dd>
              <Fill value={site.street} />, <Fill value={site.postalCode} /> <Fill value={site.city} />
            </dd>
            <dt>Téléphone</dt>
            <dd>
              <a href={phoneHref}>
                <Fill value={site.phone} />
              </a>
            </dd>
            <dt>E-mail</dt>
            <dd>
              {isTodo(site.email) ? <Fill value={site.email} /> : <a href={`mailto:${site.email}`}>{site.email}</a>}
            </dd>
            <dt>SIRET</dt>
            <dd>
              <Fill value={site.siret} />
            </dd>
            <dt>Immatriculation</dt>
            <dd>
              <Fill value={legal.registration} />
            </dd>
            <dt>N° de TVA</dt>
            <dd>
              <Fill value={legal.vatNumber} />
            </dd>
            <dt>Directeur de la publication</dt>
            <dd>
              <Fill value={legal.publisher} />
            </dd>
          </dl>

          <h2>Hébergeur</h2>
          <dl>
            <dt>Société</dt>
            <dd>
              <Fill value={legal.host.name} />
            </dd>
            <dt>Adresse</dt>
            <dd>
              <Fill value={legal.host.address} />
            </dd>
            <dt>Site</dt>
            <dd>
              {isTodo(legal.host.website) ? (
                <Fill value={legal.host.website} />
              ) : (
                <a href={legal.host.website} rel="noopener">
                  {legal.host.website.replace(/^https?:\/\//, "")}
                </a>
              )}
            </dd>
          </dl>

          <h2>Médiation de la consommation</h2>
          <p>
            En cas de litige avec l&apos;entreprise, et après une réclamation écrite restée sans réponse satisfaisante,
            vous pouvez saisir gratuitement le médiateur de la consommation suivant&nbsp;:
          </p>
          <p>
            {legal.mediator ? (
              <>
                {legal.mediator.name},{" "}
                <a href={legal.mediator.website} rel="noopener">
                  {legal.mediator.website.replace(/^https?:\/\//, "")}
                </a>
              </>
            ) : (
              <span className="todo">[À COMPLÉTER : médiateur de la consommation auquel l&apos;entreprise adhère]</span>
            )}
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, le logo et les illustrations de ce site appartiennent à <Fill value={site.name} />. Toute
            reproduction sans autorisation écrite est interdite.
          </p>

          <h2>Données personnelles et cookies</h2>
          <p>
            Ce site ne dépose aucun cookie de mesure d&apos;audience ni de publicité. Pour savoir comment sont traitées
            les informations envoyées par le formulaire de devis, consultez la{" "}
            <Link href="/confidentialite">politique de confidentialité</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
