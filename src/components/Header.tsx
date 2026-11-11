import Link from "next/link";
import { site, phoneHref } from "@/lib/site";
import { Fill } from "./Fill";
import { Icon } from "./Icon";

const nav = [
  { href: "/#pannes", label: "Choisir ma panne" },
  { href: "/#services", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/zone-intervention", label: "Zone d'intervention" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand">
          <svg className="brand__mark" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M4 10h12a6 6 0 0 1 6 6v12" fill="none" stroke="currentColor" strokeWidth="5" />
            <rect x="18" y="20" width="8" height="4" fill="var(--accent-light)" />
            <rect x="9" y="8" width="4" height="8" fill="var(--accent-light)" />
          </svg>
          <span className="brand__text">
            <span className="brand__name">
              <Fill value={site.name} />
            </span>
            <span className="brand__tag">
              Plombier à <Fill value={site.city} />
            </span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Navigation principale">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <a href={phoneHref} className="btn btn--accent btn--sm header-call">
          <Icon name="phone" size={18} />
          <span>
            <Fill value={site.phone} />
          </span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Ouvrir le menu">
            <span className="burger" aria-hidden="true" />
            Menu
          </summary>
          <nav aria-label="Navigation mobile">
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
