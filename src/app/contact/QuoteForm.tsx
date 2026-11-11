"use client";

import { useActionState } from "react";
import Link from "next/link";
import { requestQuote, type QuoteState } from "./actions";
import s from "./contact.module.css";

const initial: QuoteState = { status: "idle" };

/** Formulaire de demande de devis. Fonctionne aussi sans JavaScript (action serveur). */
export function QuoteForm({
  problems,
  phone,
  phoneHref,
  demo = false,
}: {
  problems: string[];
  phone: string;
  phoneHref: string;
  /** Site de démonstration : la confirmation précise que rien n'a été envoyé. */
  demo?: boolean;
}) {
  const [state, action, pending] = useActionState(requestQuote, initial);
  const v = state.values ?? {};
  const err = state.errors ?? {};

  if (state.status === "ok") {
    return (
      <div className={s.done} role="status">
        <h2>Demande envoyée, merci&nbsp;!</h2>
        <p>Nous vous recontactons au numéro indiqué pour fixer l&apos;intervention et vous remettre le devis.</p>
        {demo && (
          <p className={s.demoNote}>Site de démonstration&nbsp;: aucune demande n&apos;a réellement été envoyée.</p>
        )}
        <p>
          C&apos;est urgent&nbsp;? <a href={phoneHref}>Appelez le {phone}</a>.
        </p>
      </div>
    );
  }

  const describedBy = (k: keyof typeof err) => (err[k] ? `err-${k}` : undefined);
  const error = (k: keyof typeof err) =>
    err[k] && (
      <p id={`err-${k}`} className={s.error}>
        {err[k]}
      </p>
    );

  return (
    // React vide le formulaire après l'envoi : on le recrée (clé) avec les valeurs saisies pour ne rien perdre.
    <form key={state.attempt ?? 0} action={action} className={s.form} noValidate>
      {state.status === "invalid" && (
        <p className={s.alert} role="alert">
          Certains champs sont à corriger.
        </p>
      )}
      {state.status === "error" && (
        <p className={s.alert} role="alert">
          La demande n&apos;a pas pu être envoyée. Appelez-nous directement au <a href={phoneHref}>{phone}</a>.
        </p>
      )}

      <div className={s.row}>
        <div className={s.field}>
          <label htmlFor="name">Nom</label>
          <input id="name" name="name" autoComplete="name" required defaultValue={v.name}
            aria-invalid={!!err.name} aria-describedby={describedBy("name")} />
          {error("name")}
        </div>
        <div className={s.field}>
          <label htmlFor="phone">Téléphone</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required defaultValue={v.phone}
            aria-invalid={!!err.phone} aria-describedby={describedBy("phone")} />
          {error("phone")}
        </div>
      </div>

      <div className={s.row}>
        <div className={s.field}>
          <label htmlFor="email">
            E-mail <span className={s.optional}>(facultatif)</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" defaultValue={v.email}
            aria-invalid={!!err.email} aria-describedby={describedBy("email")} />
          {error("email")}
        </div>
        <div className={s.field}>
          <label htmlFor="address">Adresse ou commune</label>
          <input id="address" name="address" autoComplete="street-address" required defaultValue={v.address}
            placeholder="Ex. Paris 11e" aria-invalid={!!err.address} aria-describedby={describedBy("address")} />
          {error("address")}
        </div>
      </div>

      <div className={s.field}>
        <label htmlFor="problem">Votre problème</label>
        <select id="problem" name="problem" required defaultValue={v.problem ?? ""}
          aria-invalid={!!err.problem} aria-describedby={describedBy("problem")}>
          <option value="" disabled>
            Choisir…
          </option>
          {problems.map((p) => (
            <option key={p}>{p}</option>
          ))}
          <option>Travaux de salle de bain</option>
          <option>Autre</option>
        </select>
        {error("problem")}
      </div>

      <div className={s.field}>
        <label htmlFor="message">
          Détails <span className={s.optional}>(facultatif)</span>
        </label>
        <textarea id="message" name="message" rows={5} defaultValue={v.message}
          placeholder="Ce qui se passe, depuis quand, l'étage, l'accès…" />
      </div>

      {/* Champ piège pour les robots, invisible pour les visiteurs */}
      <div className={s.trap} aria-hidden="true">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <p className={s.privacy}>
        Vos coordonnées servent uniquement à vous recontacter au sujet de cette demande.{" "}
        <Link href="/confidentialite">Politique de confidentialité</Link>
      </p>

      <button type="submit" className="btn btn--accent" disabled={pending} aria-busy={pending}>
        {pending ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
