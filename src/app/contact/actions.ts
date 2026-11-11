"use server";

import { sendQuoteRequest, type QuoteRequest } from "@/lib/quote";

export type QuoteState = {
  status: "idle" | "ok" | "invalid" | "error";
  errors?: Partial<Record<keyof QuoteRequest, string>>;
  /** Valeurs saisies, renvoyées pour ne pas vider le formulaire en cas d'erreur. */
  values?: Partial<QuoteRequest>;
  /** Numéro de tentative : sert de clé au formulaire pour le recréer avec les valeurs saisies. */
  attempt?: number;
};

const field = (fd: FormData, k: string, max: number) => String(fd.get(k) ?? "").trim().slice(0, max);

export async function requestQuote(prev: QuoteState, fd: FormData): Promise<QuoteState> {
  const attempt = (prev.attempt ?? 0) + 1;
  // Champ piège invisible : seuls les robots le remplissent. On fait comme si tout allait bien.
  if (field(fd, "website", 200)) return { status: "ok" };

  const values: QuoteRequest = {
    name: field(fd, "name", 100),
    phone: field(fd, "phone", 30),
    email: field(fd, "email", 200),
    address: field(fd, "address", 200),
    problem: field(fd, "problem", 100),
    message: field(fd, "message", 3000),
  };

  const errors: QuoteState["errors"] = {};
  if (!values.name) errors.name = "Indiquez votre nom.";
  if (values.phone.replace(/\D/g, "").length < 10) errors.phone = "Indiquez un numéro de téléphone complet.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Cette adresse e-mail semble incomplète.";
  if (!values.address) errors.address = "Indiquez au moins la commune ou l'arrondissement.";
  if (!values.problem) errors.problem = "Choisissez le type de problème.";
  if (Object.keys(errors).length > 0) return { status: "invalid", errors, values, attempt };

  try {
    await sendQuoteRequest(values);
    return { status: "ok" };
  } catch (e) {
    console.error(e);
    return { status: "error", values, attempt };
  }
}
