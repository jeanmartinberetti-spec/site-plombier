import Link from "next/link";
import s from "./legal.module.css";

/** En-tête des pages légales : fil d'Ariane et titre, sans boutons commerciaux. */
export function LegalHeader({ title, updated }: { title: string; updated: string }) {
  return (
    <section className={s.head} aria-labelledby="titre">
      <div className="container">
        <nav aria-label="Fil d'Ariane" className={s.crumbs}>
          <ol>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        <h1 id="titre">{title}</h1>
        <p className={s.updated}>Mise à jour : {updated}</p>
      </div>
    </section>
  );
}
