import { isTodo } from "@/lib/site";

/** Affiche une info de l'entreprise, ou un repère jaune si elle reste à compléter. */
export function Fill({ value, fallback }: { value: string | number | null | undefined; fallback?: string }) {
  if (isTodo(value)) {
    const label = typeof value === "string" && value ? value : `[À COMPLÉTER${fallback ? ` : ${fallback}` : ""}]`;
    return <span className="todo">{label}</span>;
  }
  return <>{value}</>;
}

/** « dès 129 € TTC » ou un repère jaune si le prix n'est pas encore fourni. */
export function Price({ value }: { value: number | null }) {
  return (
    <span className="price">
      dès{" "}
      {value === null ? <span className="todo">[prix]</span> : <strong>{value.toLocaleString("fr-FR")}</strong>} €{" "}
      TTC
    </span>
  );
}
