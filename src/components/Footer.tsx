import Link from "next/link";
import { site, phoneHref, services } from "@/lib/site";
import { Fill } from "./Fill";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__name">
            <Fill value={site.name} />
          </p>
          <p>
            Plombier à <Fill value={site.city} /> et alentours
          </p>
          <address>
            <Fill value={site.street} />
            <br />
            <Fill value={site.postalCode} /> <Fill value={site.city} />
            <br />
            <a href={phoneHref}>
              <Fill value={site.phone} />
            </a>
            <br />
            <Fill value={site.email} />
          </address>
          <p className="site-footer__small">
            <Fill value={site.hours} />
          </p>
        </div>

        <nav aria-label="Services">
          <p className="site-footer__title">Services</p>
          <ul>
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Informations">
          <p className="site-footer__title">Informations</p>
          <ul>
            <li><Link href="/tarifs">Tarifs</Link></li>
            <li><Link href="/zone-intervention">Zone d&apos;intervention</Link></li>
            <li><Link href="/contact">Contact et devis</Link></li>
            <li><Link href="/mentions-legales">Mentions légales</Link></li>
            <li><Link href="/confidentialite">Politique de confidentialité</Link></li>
          </ul>
        </nav>
      </div>
      <div className="container site-footer__legal">
        <p>
          © <Fill value={site.name} /> · SIRET <Fill value={site.siret} />
        </p>
      </div>
    </footer>
  );
}
