@AGENTS.md

# Site vitrine — artisan plombier

## Objectif
Être bien référencé sur Google en recherche locale (« plombier [ville] », « dépannage fuite [ville] »)
et transformer les visiteurs en **appels** ou **demandes de devis**. Mobile d'abord (clients en urgence).

## Choix validés par le client
- **Direction artistique « Le plan de l'installateur », palette sobre** (le client a rejeté le cuivre / bleu encre, trop coloré) :
  esprit schéma technique, couleurs neutres, un seul accent.
  - Anthracite `#1D2125` (texte, fond de l'en-tête, du hero, du pied de page)
  - Papier `#F4F4F2` (fonds de section), blanc `#FFFFFF`
  - Accent bleu pétrole `#1F5A6B` (boutons d'appel, prix ; 7,7:1 avec le blanc) ; pétrole clair `#9CC6D2` (accents sur fond anthracite)
  - Gris `#555B61` (texte secondaire), filets `#D8D9D6`. Tuyau en acier brossé (`--pipe-*`).
  - Rester sobre : pas de nouvelle couleur vive, pas de dégradé décoratif.
  - Polices : **Archivo** (titres, largeur étendue ~112) + **Source Sans 3** (texte), via `next/font` (auto-hébergées, rapides).
  - Élément mémorable unique : un **tuyau** (rail vertical à gauche sur ordinateur, avec un manchon à chaque titre de section)
    + le schéma qui se dessine une seule fois dans le hero. Pas d'autres effets.
- Animations : uniquement en **CSS pur** (aucune bibliothèque type Motion : JS en plus = TBT moins bon sur mobile).
  `prefers-reduced-motion` respecté partout.
  - Apparitions au scroll (`animation-timeline: view()`, attribut `data-reveal`), glissement seul sans fondu (contraste intact).
  - Tracé du schéma du hero.
  - Micro-interactions validées par le client (10 nov. 2026), bloc « Petites animations » en fin de `globals.css` :
    FAQ qui se déplient (`::details-content`), « + » qui pivote, menu mobile (fondu + burger → croix),
    barre d'appel mobile qui monte au chargement, flèches « → » qui glissent au survol des cartes et listes de services,
    cercle de chargement et apparition du message sur le formulaire de devis.
- Inspiration : etsjocot.fr (parcours « Choisir ma panne », prix « dès X € TTC », 3 étapes, zone détaillée, téléphone partout).
  **Ne rien copier** (textes, prix, images, logo).
- Méthode : une page à la fois. Accueil d'abord, puis pages services, tarifs, zone, contact, mentions légales/confidentialité.

## Règles de contenu (impératives)
- **Ne jamais inventer** d'avis, notes, certifications, chiffres, prix, horaires ni promesses commerciales.
- **Exception demandée par le client (démo)** : `site.ts` est entièrement rempli de données de DÉMONSTRATION (marquées `DÉMO`) :
  Paris, téléphone FICTIF `01 99 00 12 34` (plage Arcep réservée à la fiction), nom « Atelier Ligne d'Eau », adresse, SIRET,
  horaires, zone, prix, conditions, **avis et certifications inventés**. Tout est à remplacer par du réel avant la mise en ligne
  (faux avis / fausse assurance = pratique commerciale trompeuse). Pour les nouvelles pages, rester cohérent avec ces valeurs.
- **Mode démo** (`isDemo = true` dans site.ts, site de portfolio) : bandeau « Site de démonstration » (`DemoBanner`),
  balise `noindex, nofollow` sur tout le site (robots.txt reste ouvert exprès pour que Google lise le noindex),
  pas de JSON-LD `Plumber`, formulaire qui confirme sans rien envoyer. Ne passer à `false` qu'avec des données réelles.
- Adresse du site (`site.url`) : `NEXT_PUBLIC_SITE_URL`, sinon l'adresse de production Vercel automatique
  (`VERCEL_PROJECT_PRODUCTION_URL`), sinon `http://localhost:3005`.
- Toute info manquante = emplacement `[À COMPLÉTER …]` ou valeur `null` dans `src/lib/site.ts`.
  Ces emplacements s'affichent surlignés en jaune sur le site (classe `.todo`) pour être repérés facilement.
- Les données structurées schema.org (`Plumber`) n'incluent **que** les champs réellement remplis.
- Textes naturels, écrits pour le client, mots-clés locaux sans bourrage.

## Où modifier quoi
- `src/lib/site.ts` : **toutes** les infos de l'entreprise (nom, ville, téléphone, horaires, communes, prix, services, pannes).
- `src/app/globals.css` : couleurs, typographie, en-tête, pied de page, bouton d'appel mobile.
- `src/app/page.tsx` + `page.module.css` : page d'accueil.
- `src/lib/services.ts` : textes des pages services (signes, travaux, conseils, FAQ).
- `src/app/layout.tsx` : SEO global (titres, partage), JSON-LD.
- `src/app/sitemap.ts`, `src/app/robots.ts` : à mettre à jour à chaque nouvelle page.

## État
- [x] Accueil
- [x] Pages services : contenu dans `src/lib/services.ts`, gabarit `src/components/ServicePage.tsx`,
  une route par service (`src/app/<slug>/page.tsx`, 3 lignes). Prix repris de `tarifs` (site.ts) par libellé exact.
- [x] Tarifs (`src/app/tarifs/`) : grille par service, conditions (`conditions` dans site.ts : taux horaire,
  décompte, déplacement, devis, paiement), étapes, FAQ. Accroche commune : `src/components/PageHero.tsx`.
- [x] Zone d'intervention (`src/app/zone-intervention/`) : arrondissements (`districts` dans site.ts), communes,
  déplacement/horaires, liens services. Bloc d'appel final commun : `src/components/CallSection.tsx`.
- [x] Contact/devis (`src/app/contact/`) : formulaire (action serveur `actions.ts`, champ piège anti-robots),
  envoi par e-mail dans `src/lib/quote.ts` via Resend (variables RESEND_API_KEY, QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL).
  **Non configuré** : en local la demande s'affiche dans le terminal, en production le visiteur est invité à appeler.
- [x] Mentions légales et Confidentialité (`src/app/(legal)/`) : infos dans `legal` (site.ts).
  Hébergeur prérempli pour Vercel (à confirmer). **Médiateur de la consommation laissé à compléter** (jaune) :
  obligatoire envers les particuliers, on n'invente pas un organisme réel. Si un outil d'audience ou des cookies
  sont ajoutés, mettre à jour la section Cookies des deux pages.
- [x] Audit Lighthouse (7 nov. 2026, mobile, build de production, 12 pages) : accessibilité, bonnes pratiques et SEO
  à 100 partout ; performance 89–96 en médiane, LCP ≈ 0,9–1,1 s, CLS 0. Mesures de perf bruitées sur ce Mac (charge élevée) :
  refaire plusieurs passages. `experimental.inlineCss` testé puis écarté (HTML ×2, pas de gain net).
  Rapport complet de l'accueil : `lighthouse-accueil.html`. Version prod locale : config `site-prod` (port 3006).
