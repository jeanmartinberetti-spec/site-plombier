import type { IconName } from "@/lib/site";

/** Pictogrammes au trait, dessinés pour le site (légers, aucun fichier image). */
const paths: Record<IconName | "phone" | "mail" | "clock" | "pin", React.ReactNode> = {
  leak: (
    <>
      <path d="M4 9h9a3 3 0 0 1 3 3v2" />
      <path d="M11 6v6" />
      <path d="M16 18.5c0 1.4-.9 2.5-2 2.5s-2-1.1-2-2.5c0-1.2 2-3.5 2-3.5s2 2.3 2 3.5Z" />
      <path d="M20 13.5c0 .8-.4 1.5-1 1.5s-1-.7-1-1.5 1-2 1-2 1 1.2 1 2Z" />
    </>
  ),
  wc: (
    <>
      <path d="M7 3h6v6H7z" />
      <path d="M4 11h14a0 0 0 0 1 0 0 6 6 0 0 1-6 6H9a5 5 0 0 1-5-5v-1Z" />
      <path d="M9 17l-1 4h7l-1-4" />
    </>
  ),
  sink: (
    <>
      <path d="M3 12h18v1a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-1Z" />
      <path d="M10 12V6a2 2 0 0 1 4 0" />
      <path d="M12 19v2" />
    </>
  ),
  heater: (
    <>
      <rect x="6" y="2.5" width="12" height="16" rx="5" />
      <path d="M9 18.5V21M15 18.5V21" />
      <path d="M12 8c1.2 1.4 1.5 2.2 1.5 3a1.5 1.5 0 0 1-3 0c0-.8.3-1.6 1.5-3Z" />
    </>
  ),
  flush: (
    <>
      <rect x="5" y="3" width="14" height="9" rx="1.5" />
      <path d="M9 7.5h6" />
      <path d="M8 15c0 1.5 1 3 1 3M12 15v3.5M16 15c0 1.5-1 3-1 3" />
    </>
  ),
  tap: (
    <>
      <path d="M9 5h6M12 5v3" />
      <path d="M4 11h10a4 4 0 0 1 4 4v1" />
      <path d="M4 8v6" />
      <path d="M18 19.5c0 .8-.4 1.5-1 1.5s-1-.7-1-1.5 1-2 1-2 1 1.2 1 2Z" />
    </>
  ),
  bath: (
    <>
      <path d="M3 12h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-2Z" />
      <path d="M6 12V5a2 2 0 0 1 4 0" />
      <path d="M7 19l-1 2M17 19l1 2" />
    </>
  ),
  phone: (
    <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
};

export function Icon({ name, size = 24 }: { name: keyof typeof paths; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
