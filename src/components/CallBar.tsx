import Link from "next/link";
import { phoneHref } from "@/lib/site";
import { Icon } from "./Icon";

/** Barre fixe en bas de l'écran sur mobile : appeler ou demander un devis, en un pouce. */
export function CallBar() {
  return (
    <div className="callbar" role="region" aria-label="Contact rapide">
      <a href={phoneHref} className="btn btn--accent callbar__call">
        <Icon name="phone" size={20} />
        Appeler le plombier
      </a>
      <Link href="/contact" className="btn btn--ghost-light callbar__quote">
        Devis
      </Link>
    </div>
  );
}
