/**
 * Envoi d'une demande de devis à l'artisan.
 *
 * Configuration (variables d'environnement, ex. dans `.env.local` ou chez l'hébergeur) :
 * - RESEND_API_KEY    : clé du service d'e-mail Resend (resend.com)
 * - QUOTE_TO_EMAIL    : adresse qui reçoit les demandes (celle de l'artisan)
 * - QUOTE_FROM_EMAIL  : expéditeur, sur un domaine vérifié chez Resend (ex. « site@mon-domaine.fr »)
 *
 * Sans configuration :
 * - en local (`npm run dev`), la demande est simplement affichée dans le terminal ;
 * - en production, l'envoi échoue et le visiteur est invité à téléphoner (aucune demande perdue en silence).
 */
import { isDemo } from "./site";

export type QuoteRequest = {
  name: string;
  phone: string;
  email: string;
  address: string;
  problem: string;
  message: string;
};

export async function sendQuoteRequest(q: QuoteRequest) {
  const { RESEND_API_KEY, QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL } = process.env;

  const text = [
    `Nom : ${q.name}`,
    `Téléphone : ${q.phone}`,
    `E-mail : ${q.email || "non renseigné"}`,
    `Adresse : ${q.address}`,
    `Problème : ${q.problem}`,
    "",
    q.message || "(pas de message)",
  ].join("\n");

  if (!RESEND_API_KEY || !QUOTE_TO_EMAIL || !QUOTE_FROM_EMAIL) {
    // En local ou sur le site de démonstration : rien n'est envoyé, la demande est juste journalisée.
    if (process.env.NODE_ENV !== "production" || isDemo) {
      console.log(`\n===== Demande de devis (non envoyée : e-mail non configuré) =====\n${text}\n`);
      return;
    }
    throw new Error("Envoi des demandes de devis non configuré (voir src/lib/quote.ts).");
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: QUOTE_FROM_EMAIL,
      to: QUOTE_TO_EMAIL,
      reply_to: q.email || undefined,
      subject: `Demande de devis : ${q.problem} (${q.name})`,
      text,
    }),
  });
  if (!res.ok) throw new Error(`Envoi refusé par Resend (${res.status})`);
}
