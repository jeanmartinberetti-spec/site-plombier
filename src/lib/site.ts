/**
 * TOUTES LES INFOS DE L'ENTREPRISE SONT ICI.
 * Remplace chaque valeur entre crochets [ ... ] ou `null` par la vraie information.
 * Tant qu'une valeur n'est pas remplie, elle s'affiche surlignée en jaune sur le site.
 * Ne mets jamais de faux avis, faux prix ou fausses certifications.
 *
 * ⚠️ DONNÉES DE DÉMONSTRATION (ajoutées à la demande du client) :
 * - le téléphone est FICTIF (plage 01 99 00 xx xx réservée par l'Arcep aux œuvres de fiction) ;
 * - les prix sont des EXEMPLES réalistes pour Paris, pas les tarifs réels de l'artisan ;
 * - nom, adresse, e-mail, SIRET, horaires, zone, conditions : INVENTÉS pour la démo ;
 * - avis clients et certifications : INVENTÉS. Publier de faux avis ou une fausse assurance
 *   est interdit (pratique commerciale trompeuse) : à retirer ou remplacer par du réel.
 * À remplacer par les vraies valeurs avant la mise en ligne.
 */

/** Une valeur est « à compléter » si elle est vide ou commence par « [ ». */
export const isTodo = (v: string | number | null | undefined) =>
  v === null || v === undefined || v === "" || (typeof v === "string" && v.startsWith("["));

/**
 * MODE DÉMO : site de portfolio, entreprise fictive.
 * true = bandeau « site de démonstration », site masqué aux moteurs de recherche,
 * formulaire de devis qui confirme sans rien envoyer.
 * Passer à false uniquement quand toutes les valeurs DÉMO ont été remplacées par du réel.
 */
export const isDemo = true;

/**
 * Adresse du site, sans « / » final. Ordre de priorité :
 * 1. NEXT_PUBLIC_SITE_URL (à définir chez l'hébergeur quand le nom de domaine définitif existe) ;
 * 2. l'adresse de production fournie automatiquement par Vercel (ex. site-plombier.vercel.app) ;
 * 3. l'adresse locale de développement.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3005");

export const site = {
  name: "Atelier Ligne d'Eau" /* DÉMO */,
  /** Ville principale, utilisée dans les titres Google (« Plombier à … »). */
  city: "Paris",
  postalCode: "75011" /* DÉMO */,
  /** Ex. « Hauts-de-Seine (92) » */
  department: "Paris (75)",
  street: "18 rue des Tuyaux" /* DÉMO, adresse inventée */,

  /** Numéro tel qu'il s'affiche, ex. « 06 12 34 56 78 ». */
  phone: "01 99 00 12 34" /* FICTIF */,
  /** Même numéro au format international, sans espaces, ex. « +33612345678 ». */
  phoneE164: "+33199001234" /* FICTIF */,
  email: "contact@atelier-lignedeau.fr" /* DÉMO */,

  /** Horaires en clair, affichés sur le site. */
  hours: "Du lundi au samedi, de 8 h à 19 h" /* DÉMO */,
  /** Interventions en urgence : oui / non, et à quelles conditions. */
  emergency: "Urgences 7\u00a0j/7, y compris le soir et le dimanche" /* DÉMO */,
  /**
   * Horaires pour Google (données structurées). Laisse vide tant que ce n'est pas sûr.
   * Ex. { days: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" }
   */
  openingHours: [
    /* DÉMO */
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "19:00" },
  ] as { days: string[]; opens: string; closes: string }[],

  /** Communes voisines desservies. */
  communes: [
    "Boulogne-Billancourt",
    "Neuilly-sur-Seine",
    "Levallois-Perret",
    "Issy-les-Moulineaux",
    "Montreuil",
    "Vincennes",
  ],
  /**
   * Secteurs de la ville principale (arrondissements, quartiers), affichés sur /zone-intervention.
   * Laisser vide si la ville n'en a pas.
   */
  districts: [
    "Paris 1er (75001)",
    "Paris 2e (75002)",
    "Paris 3e (75003)",
    "Paris 4e (75004)",
    "Paris 5e (75005)",
    "Paris 6e (75006)",
    "Paris 7e (75007)",
    "Paris 8e (75008)",
    "Paris 9e (75009)",
    "Paris 10e (75010)",
    "Paris 11e (75011)",
    "Paris 12e (75012)",
    "Paris 13e (75013)",
    "Paris 14e (75014)",
    "Paris 15e (75015)",
    "Paris 16e (75016, 75116)",
    "Paris 17e (75017)",
    "Paris 18e (75018)",
    "Paris 19e (75019)",
    "Paris 20e (75020)",
  ],
  /** Rayon d'intervention en km (ou null). */
  radiusKm: 15 /* DÉMO */ as number | null,

  /** Adresse définitive du site, sans « / » final. */
  url: siteUrl,
  siret: "123 456 789 00012" /* DÉMO, numéro inventé */,
};

/**
 * Mentions légales et données personnelles (pages /mentions-legales et /confidentialite).
 */
export const legal = {
  /** Forme juridique, ex. « Entreprise individuelle », « SARL au capital de 5 000 € ». */
  legalForm: "Entreprise individuelle" /* DÉMO */,
  /** Immatriculation, ex. « Inscrite au Registre national des entreprises (RNE) ». */
  registration: "Inscrite au Registre national des entreprises (RNE)" /* DÉMO */,
  vatNumber: "FR32123456789" /* DÉMO, calculé à partir du SIREN inventé */,
  /** Directeur de la publication : en général le dirigeant. */
  publisher: "Julien Martin" /* DÉMO, nom inventé */,
  /** Hébergeur du site (obligatoire). Valeurs pour Vercel, à confirmer selon l'hébergeur choisi. */
  host: {
    name: "Vercel Inc." /* À CONFIRMER */,
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis" /* À CONFIRMER */,
    website: "https://vercel.com" /* À CONFIRMER */,
  },
  /**
   * Médiateur de la consommation auquel l'entreprise adhère (obligatoire envers les particuliers).
   * Laisse null tant qu'il n'est pas désigné : on n'invente pas un organisme réel.
   */
  mediator: null as { name: string; website: string } | null,
  /** Durée de conservation des demandes de devis sans suite. */
  retention: "3 ans à compter du dernier contact",
};

export const phoneHref = site.phoneE164 ? `tel:${site.phoneE164}` : "/contact";

/* ------------------------------------------------------------------ */
/* Pannes : le parcours « Choisir ma panne »                           */
/* ------------------------------------------------------------------ */

export type IconName = "leak" | "wc" | "sink" | "heater" | "flush" | "tap" | "bath";

export const pannes: {
  label: string;
  hint: string;
  /** Prix de départ TTC en euros (EXEMPLES de démo), ou null si sur devis. */
  priceFrom: number | null;
  href: string;
  icon: IconName;
}[] = [
  { label: "J'ai une fuite d'eau", hint: "Tuyau, raccord, joint, plafond qui goutte", priceFrom: 119, href: "/depannage-fuite", icon: "leak" },
  { label: "Mes WC sont bouchés", hint: "L'eau monte ou s'évacue mal", priceFrom: 99, href: "/debouchage-canalisation", icon: "wc" },
  { label: "Évier, lavabo ou douche bouché", hint: "Écoulement lent, mauvaises odeurs", priceFrom: 89, href: "/debouchage-canalisation", icon: "sink" },
  { label: "Je n'ai plus d'eau chaude", hint: "Chauffe-eau en panne ou qui fuit", priceFrom: 129, href: "/chauffe-eau", icon: "heater" },
  { label: "La chasse d'eau coule sans arrêt", hint: "Mécanisme, flotteur ou joint usé", priceFrom: 109, href: "/reparation-wc", icon: "flush" },
  { label: "Un robinet fuit ou est cassé", hint: "Mitigeur, robinet, flexible", priceFrom: 95, href: "/robinetterie", icon: "tap" },
];

/* ------------------------------------------------------------------ */
/* Tarifs de départ (affichés sur l'accueil, grille complète sur /tarifs) */
/* ------------------------------------------------------------------ */

export const tarifs: { label: string; detail: string; priceFrom: number | null }[] = [
  { label: "Recherche et réparation de fuite apparente", detail: "Raccord, joint ou flexible accessible", priceFrom: 119 },
  { label: "Débouchage WC", detail: "Bouchon simple, sans dépose de la cuvette", priceFrom: 99 },
  { label: "Débouchage évier, lavabo ou douche", detail: "Bouchon simple accessible", priceFrom: 89 },
  { label: "Réparation de chasse d'eau", detail: "Remplacement du mécanisme ou du flotteur", priceFrom: 109 },
  { label: "Remplacement d'un mitigeur", detail: "Dépose et pose, hors fourniture du mitigeur", priceFrom: 95 },
  { label: "Remplacement de chauffe-eau", detail: "Pose à l'identique, hors fourniture du ballon", priceFrom: 290 },
];

/**
 * Informations de prix à donner avant toute intervention de dépannage
 * (taux horaire, décompte du temps, déplacement, devis). Affichées sur /tarifs.
 */
export const conditions = {
  /** Taux horaire de main-d'œuvre TTC, en euros. */
  hourlyRate: 75 as number | null /* DÉMO */,
  timeBilling: "Toute demi-heure commencée est due, après la première heure" /* DÉMO */,
  travel: "Inclus dans Paris et les communes limitrophes" /* DÉMO */,
  quote: "Gratuit, remis par écrit avant toute intervention" /* DÉMO */,
  payment: "Carte bancaire, chèque, virement ou espèces" /* DÉMO */,
};

/** Ce qui est compris dans un prix de départ. À confirmer avec l'artisan. */
export const inclus = [
  "Le déplacement dans Paris et les communes limitrophes",
  "La main-d'œuvre pour l'intervention décrite",
  "Le diagnostic, offert si vous acceptez le devis",
];

/** Ce qui peut faire varier le prix (constats généraux du métier). */
export const variations = [
  "Les pièces et équipements à remplacer",
  "L'accès à la canalisation : coffrage, gaine technique, carrelage à déposer",
  "Ce que l'on découvre sur place une fois le problème ouvert",
  "Une majoration de 30 % après 19 h, le dimanche et les jours fériés",
];

/* ------------------------------------------------------------------ */
/* Services (une page par service, pour le référencement)              */
/* ------------------------------------------------------------------ */

export const services: { title: string; text: string; href: string }[] = [
  { title: "Recherche et réparation de fuites", text: "Trouver d'où vient l'eau, couper, réparer le raccord, le joint ou la canalisation.", href: "/depannage-fuite" },
  { title: "Débouchage de canalisations", text: "WC, évier, lavabo, douche ou baignoire : on rétablit l'écoulement et on cherche la cause.", href: "/debouchage-canalisation" },
  { title: "WC et chasse d'eau", text: "Chasse qui coule, mécanisme cassé, cuvette à remplacer, au sol ou suspendue.", href: "/reparation-wc" },
  { title: "Robinetterie", text: "Robinet qui goutte, mitigeur à changer, flexible ou siphon à remplacer.", href: "/robinetterie" },
  { title: "Chauffe-eau", text: "Panne, fuite, groupe de sécurité, ou remplacement complet du ballon.", href: "/chauffe-eau" },
  { title: "Salle de bain", text: "Remplacement de douche, baignoire, lavabo ou WC, et modification des arrivées d'eau.", href: "/salle-de-bain" },
];

/* ------------------------------------------------------------------ */
/* Avis et certifications : uniquement des éléments RÉELS.             */
/* ------------------------------------------------------------------ */

/** Copie ici de vrais avis Google (avec l'accord de l'auteur si tu affiches son nom). */
export const avis: { author: string; text: string; date: string }[] = [
  /* DÉMO : avis INVENTÉS, à remplacer par de vrais avis Google avant la mise en ligne. */
  { author: "Claire D.", date: "septembre 2026", text: "Fuite sous l'évier un samedi matin. Prix annoncé au téléphone, arrivé dans l'heure, réparation propre. Rien à redire." },
  { author: "Mehdi B.", date: "août 2026", text: "Chauffe-eau remplacé en une demi-journée. Le devis était clair et il n'y a eu aucune surprise sur la facture." },
  { author: "Sophie L.", date: "juillet 2026", text: "WC bouchés débouchés rapidement, et il m'a expliqué d'où venait le problème pour éviter que ça recommence." },
];
/** Lien vers la fiche Google de l'entreprise (bouton « Voir les avis »). */
export const googleReviewsUrl = "";
/** Vraies certifications / labels / assurances (ex. assurance décennale), ou laisse vide. */
export const certifications: string[] = [
  /* DÉMO : à remplacer par les vraies attestations de l'artisan. */
  "Assurance responsabilité civile professionnelle",
  "Garantie décennale",
];
