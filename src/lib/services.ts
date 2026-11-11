/**
 * Contenu des pages services (une page par service, pour le référencement local).
 * Le nom de la ville vient de `site.city` : ne pas l'écrire en dur ici.
 * Textes = savoir-faire général du métier. Aucune promesse de délai, aucun chiffre inventé
 * (les prix viennent de la liste `tarifs` de site.ts).
 */
import { tarifs, type IconName } from "./site";

export type Service = {
  slug: string;
  icon: IconName;
  /** Titre court, utilisé dans les liens et le fil d'Ariane. */
  name: string;
  /** Début du H1, la ville est ajoutée après : « Dépannage de fuite d'eau à Paris ». */
  h1: string;
  /** Début de la balise <title>, la ville est ajoutée après. */
  metaTitle: string;
  /** Description Google ; `{ville}` est remplacé par la ville. */
  metaDescription: string;
  intro: string;
  /** « Vous avez besoin de nous si… » */
  signs: string[];
  /** Ce que l'on fait concrètement. */
  work: { title: string; text: string }[];
  /** Libellés exacts de la liste `tarifs` à afficher sur la page. */
  prices: string[];
  /** Gestes utiles en attendant le plombier. */
  meanwhile: string[];
  faq: { q: string; a: string }[];
};

export const servicePages: Service[] = [
  {
    slug: "depannage-fuite",
    icon: "leak",
    name: "Recherche et réparation de fuites",
    h1: "Dépannage de fuite d'eau",
    metaTitle: "Plombier fuite d'eau",
    metaDescription:
      "Fuite d'eau à {ville} : recherche de la fuite, coupure, réparation du raccord, du joint ou de la canalisation. Prix de départ affichés, devis avant travaux.",
    intro:
      "Une fuite ne s'arrête jamais toute seule, et l'eau va souvent plus loin qu'on ne le voit : sous le carrelage, dans le plafond du voisin. On cherche d'abord d'où elle vient, puis on répare la pièce en cause.",
    signs: [
      "De l'eau au sol sous un évier, un lavabo ou près des WC",
      "Une tache ou une auréole au plafond, une peinture qui cloque",
      "Le compteur d'eau tourne alors que tout est fermé",
      "Un raccord, un flexible ou un tuyau qui goutte",
      "Une facture d'eau anormalement élevée",
    ],
    work: [
      { title: "Localiser la fuite", text: "Contrôle des raccords, joints, flexibles et canalisations visibles, test au compteur pour confirmer une fuite cachée." },
      { title: "Sécuriser", text: "Coupure de l'arrivée d'eau concernée pour limiter les dégâts pendant l'intervention." },
      { title: "Réparer", text: "Remplacement du joint, du raccord, du flexible ou du tronçon de canalisation abîmé." },
      { title: "Contrôler", text: "Remise en eau et vérification devant vous qu'il n'y a plus de fuite." },
    ],
    prices: ["Recherche et réparation de fuite apparente"],
    meanwhile: [
      "Fermez le robinet d'arrêt de l'appareil, ou le robinet général près du compteur.",
      "Si l'eau approche des prises ou d'un appareil électrique, coupez le disjoncteur de la pièce.",
      "Épongez et placez une bassine sous la fuite.",
      "Prévenez votre voisin du dessous si l'eau peut passer chez lui.",
      "Prenez des photos des dégâts pour votre assurance.",
    ],
    faq: [
      {
        q: "Où se trouve le robinet d'arrêt général ?",
        a: "En général près du compteur d'eau : dans la cuisine, la salle de bain, un placard technique ou une gaine sur le palier en immeuble. Il suffit de le tourner d'un quart de tour ou jusqu'en butée.",
      },
      {
        q: "Qui paie quand la fuite a abîmé chez le voisin ?",
        a: "C'est un dégât des eaux : on remplit un constat amiable avec le voisin et chacun prévient son assureur. Gardez la facture de réparation, l'assurance la demandera.",
      },
      {
        q: "Et si la fuite est cachée dans un mur ou sous le carrelage ?",
        a: "Le prix de départ concerne une fuite apparente. Une fuite encastrée demande parfois d'ouvrir un coffrage ou de déposer du carrelage : on vous l'explique et le devis le précise avant de commencer.",
      },
    ],
  },
  {
    slug: "debouchage-canalisation",
    icon: "sink",
    name: "Débouchage de canalisations",
    h1: "Débouchage de canalisation",
    metaTitle: "Débouchage WC et canalisation",
    metaDescription:
      "WC, évier, lavabo ou douche bouché à {ville} : débouchage et recherche de la cause. Prix de départ affichés, devis avant intervention.",
    intro:
      "Un écoulement qui ralentit finit presque toujours par se boucher complètement. On rétablit l'écoulement, puis on vous dit d'où venait le bouchon pour éviter qu'il revienne.",
    signs: [
      "L'eau monte dans la cuvette des WC ou s'évacue très lentement",
      "L'évier, le lavabo ou la douche se vide mal",
      "Des gargouillis dans les tuyaux",
      "Des mauvaises odeurs qui remontent des siphons",
      "L'eau remonte dans un autre appareil quand on vide le premier",
    ],
    work: [
      { title: "Diagnostic", text: "On repère où se situe le bouchon : siphon, évacuation de l'appareil ou canalisation commune." },
      { title: "Débouchage", text: "Démontage et nettoyage du siphon, furet manuel ou électrique selon la longueur à traiter." },
      { title: "Vérification", text: "Essai d'écoulement en conditions normales, appareil par appareil." },
      { title: "Conseils", text: "On vous explique la cause (lingettes, graisses, calcaire, pente insuffisante) et comment l'éviter." },
    ],
    prices: ["Débouchage WC", "Débouchage évier, lavabo ou douche"],
    meanwhile: [
      "Arrêtez de tirer la chasse ou de faire couler l'eau : cela fait déborder.",
      "Évitez les déboucheurs chimiques puissants : ils abîment les joints et sont dangereux à manipuler pour la suite.",
      "Pour un évier, une ventouse et de l'eau chaude (pas bouillante sur du PVC) suffisent parfois.",
    ],
    faq: [
      {
        q: "Le déboucheur chimique, c'est une bonne idée ?",
        a: "Rarement. Il agit mal sur un bouchon dense, il peut attaquer les joints et les vieilles canalisations, et le produit reste dans le tuyau, ce qui rend l'intervention plus délicate.",
      },
      {
        q: "En immeuble, qui s'occupe d'une colonne bouchée ?",
        a: "Si le bouchon est dans la canalisation commune, c'est en principe au syndic de faire intervenir. Si c'est dans votre évacuation privative, c'est à vous. On vous le dit dès le diagnostic.",
      },
      {
        q: "Pourquoi mes WC se bouchent souvent ?",
        a: "Les lingettes (même « biodégradables »), le papier en trop grande quantité et le calcaire sont les causes les plus fréquentes. Une pente d'évacuation insuffisante peut aussi être en cause.",
      },
    ],
  },
  {
    slug: "reparation-wc",
    icon: "flush",
    name: "WC et chasse d'eau",
    h1: "Réparation de WC et chasse d'eau",
    metaTitle: "Réparation WC et chasse d'eau",
    metaDescription:
      "Chasse d'eau qui coule, mécanisme cassé, WC qui fuit à {ville} : réparation ou remplacement, WC au sol ou suspendus. Prix de départ affichés.",
    intro:
      "Une chasse d'eau qui coule en continu peut gaspiller plusieurs centaines de litres par jour sans bruit. Le plus souvent, il suffit de changer le mécanisme ou un joint.",
    signs: [
      "La chasse coule en permanence ou se remplit sans arrêt",
      "Le bouton ne déclenche plus, ou il faut appuyer plusieurs fois",
      "De l'eau au pied de la cuvette",
      "Le réservoir met très longtemps à se remplir",
      "La cuvette est fêlée ou bouge",
    ],
    work: [
      { title: "Mécanisme de chasse", text: "Remplacement du mécanisme de chasse, du robinet flotteur ou des joints du réservoir." },
      { title: "Fuites", text: "Remplacement du joint de pipe d'évacuation ou du raccord d'alimentation." },
      { title: "Remplacement de la cuvette", text: "Dépose de l'ancien WC et pose d'un WC au sol ou suspendu, avec raccordements." },
    ],
    prices: ["Réparation de chasse d'eau", "Débouchage WC"],
    meanwhile: [
      "Fermez le petit robinet d'arrêt situé sous ou derrière le réservoir.",
      "Pour une fuite au pied de la cuvette, n'utilisez plus les WC jusqu'à la réparation.",
    ],
    faq: [
      {
        q: "Faut-il changer tout le WC quand la chasse coule ?",
        a: "Non, dans la grande majorité des cas on remplace seulement le mécanisme ou le flotteur. Le remplacement complet se justifie si la cuvette est fêlée ou très ancienne.",
      },
      {
        q: "Vous intervenez sur les WC suspendus ?",
        a: "Oui. Le mécanisme est accessible par la plaque de commande, sans casser le coffrage dans la plupart des cas.",
      },
    ],
  },
  {
    slug: "robinetterie",
    icon: "tap",
    name: "Robinetterie",
    h1: "Plombier robinetterie",
    metaTitle: "Remplacement de robinet et mitigeur",
    metaDescription:
      "Robinet qui goutte, mitigeur à changer, flexible ou siphon à remplacer à {ville}. Prix de départ affichés, devis avant travaux.",
    intro:
      "Un robinet qui goutte, c'est souvent un joint ou une cartouche usés par le calcaire. On répare quand c'est possible, on remplace quand ça ne vaut plus le coup.",
    signs: [
      "Le robinet goutte même bien fermé",
      "Le mitigeur est dur à manœuvrer ou mélange mal le chaud et le froid",
      "De l'eau sous l'évier au niveau des flexibles",
      "Le débit a fortement baissé",
    ],
    work: [
      { title: "Réparation", text: "Remplacement de la cartouche, du joint ou du clapet quand le robinet est en bon état." },
      { title: "Remplacement", text: "Dépose et pose d'un mitigeur d'évier, de lavabo, de douche ou de baignoire." },
      { title: "Flexibles et siphons", text: "Changement des flexibles d'alimentation et des siphons qui fuient." },
    ],
    prices: ["Remplacement d'un mitigeur"],
    meanwhile: [
      "Fermez les robinets d'arrêt sous l'évier ou le lavabo.",
      "Notez la marque du robinet si elle est visible : cela aide à trouver la bonne pièce.",
    ],
    faq: [
      {
        q: "Je peux fournir mon propre mitigeur ?",
        a: "Oui, le prix de départ indiqué est hors fourniture. On vérifie avant la pose qu'il est compatible avec votre installation.",
      },
      {
        q: "Réparer ou remplacer ?",
        a: "Si la cartouche ou le joint se trouve facilement et que le corps du robinet est sain, la réparation suffit. Sinon on vous propose un remplacement, avec le prix avant de commencer.",
      },
    ],
  },
  {
    slug: "chauffe-eau",
    icon: "heater",
    name: "Chauffe-eau",
    h1: "Dépannage et remplacement de chauffe-eau",
    metaTitle: "Plombier chauffe-eau",
    metaDescription:
      "Plus d'eau chaude, chauffe-eau qui fuit ou groupe de sécurité qui goutte à {ville} : dépannage ou remplacement du ballon. Prix de départ affichés.",
    intro:
      "Plus d'eau chaude, ce n'est pas toujours un ballon à changer : un groupe de sécurité, une résistance ou un thermostat peuvent suffire. On fait le point avant de vous proposer quoi que ce soit.",
    signs: [
      "Plus d'eau chaude, ou de l'eau seulement tiède",
      "Le groupe de sécurité goutte en continu",
      "De l'eau au pied du ballon",
      "Le disjoncteur saute quand le chauffe-eau se met en route",
      "Un ballon qui a plus de 10 à 15 ans et chauffe de moins en moins",
    ],
    work: [
      { title: "Diagnostic", text: "Contrôle de l'alimentation, du thermostat, de la résistance et du groupe de sécurité." },
      { title: "Réparation", text: "Remplacement du groupe de sécurité, de la résistance, du thermostat ou des joints." },
      { title: "Remplacement", text: "Vidange et dépose de l'ancien ballon, pose et raccordement du nouveau, mise en chauffe." },
    ],
    prices: ["Remplacement de chauffe-eau"],
    meanwhile: [
      "En cas de fuite, coupez l'alimentation électrique du chauffe-eau au tableau.",
      "Fermez l'arrivée d'eau froide du ballon (robinet sur le groupe de sécurité).",
      "Ne touchez pas aux raccords : l'eau à l'intérieur peut être très chaude.",
    ],
    faq: [
      {
        q: "Le groupe de sécurité goutte, c'est grave ?",
        a: "Quelques gouttes pendant la chauffe sont normales : c'est l'eau qui se dilate. Un écoulement continu indique en revanche un groupe usé ou une pression trop forte, à faire vérifier.",
      },
      {
        q: "Combien de temps pour remplacer un chauffe-eau ?",
        a: "Pour une pose à l'identique, l'intervention se fait en général dans la journée. Le ballon met ensuite plusieurs heures à chauffer complètement.",
      },
    ],
  },
  {
    slug: "salle-de-bain",
    icon: "bath",
    name: "Salle de bain",
    h1: "Plomberie de salle de bain",
    metaTitle: "Plombier salle de bain",
    metaDescription:
      "Remplacement de douche, baignoire, lavabo ou WC à {ville}, modification des arrivées et évacuations d'eau. Devis détaillé après visite.",
    intro:
      "Changer une baignoire pour une douche, remplacer un lavabo par un meuble vasque, déplacer une arrivée d'eau : on s'occupe de toute la partie plomberie de votre salle de bain.",
    signs: [
      "Vous voulez remplacer une baignoire par une douche",
      "Le lavabo, la vasque ou le receveur est abîmé",
      "Les joints de la douche ou de la baignoire laissent passer l'eau",
      "Vous devez déplacer une arrivée ou une évacuation",
    ],
    work: [
      { title: "Visite et devis", text: "On vient voir l'existant, on prend les mesures et on vous remet un devis détaillé." },
      { title: "Dépose", text: "Dépose des anciens équipements et évacuation." },
      { title: "Pose et raccordement", text: "Pose du receveur, de la baignoire, du lavabo ou du WC, raccordement aux arrivées et évacuations." },
      { title: "Essais", text: "Mise en eau, contrôle de l'étanchéité et de l'écoulement." },
    ],
    prices: [],
    meanwhile: [],
    faq: [
      {
        q: "Vous faites aussi le carrelage ?",
        a: "Nous nous occupons de la plomberie. Pour le carrelage et la faïence, on peut se coordonner avec votre carreleur.",
      },
      {
        q: "Pourquoi pas de prix de départ ?",
        a: "Chaque salle de bain est différente : accès aux évacuations, état de l'existant, équipements choisis. Le prix est donné sur devis après visite.",
      },
    ],
  },
];

export const getService = (slug: string) => {
  const s = servicePages.find((p) => p.slug === slug);
  if (!s) throw new Error(`Service inconnu : ${slug}`);
  return s;
};

export const pricesFor = (s: Service) =>
  s.prices.map((label) => {
    const t = tarifs.find((x) => x.label === label);
    if (!t) throw new Error(`Tarif introuvable : ${label}`);
    return t;
  });
