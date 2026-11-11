import type { ReactNode } from "react";
import Link from "next/link";
import { site, phoneHref } from "@/lib/site";
import { Fill } from "./Fill";
import s from "./CallSection.module.css";

/** Bloc final des pages intérieures : grand numéro de téléphone + bouton devis, sur fond anthracite. */
export function CallSection({ title, text }: { title: ReactNode; text: ReactNode }) {
  return (
    <section className={s.call} aria-labelledby="titre-appel">
      <div className="container">
        <h2 id="titre-appel" className="fitting-title">
          {title}
        </h2>
        <a href={phoneHref} className={s.bigPhone}>
          <Fill value={site.phone} />
        </a>
        <p className={s.text}>{text}</p>
        <Link href="/contact" className={`btn btn--accent ${s.after}`}>
          Demander un devis en ligne
        </Link>
      </div>
    </section>
  );
}
