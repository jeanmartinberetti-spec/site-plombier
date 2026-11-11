import type { Metadata, Viewport } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import { site, isDemo } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallBar } from "@/components/CallBar";
import { JsonLd } from "@/components/JsonLd";
import { DemoBanner } from "@/components/DemoBanner";
import "./globals.css";

// Polices auto-hébergées par Next.js : pas d'appel à Google au chargement, donc plus rapide.
const display = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-display", display: "swap" });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Plombier à ${site.city} : dépannage fuite, débouchage | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: `Plombier à ${site.city} et communes voisines : fuite d'eau, WC bouché, chauffe-eau, robinetterie. Prix de départ affichés, devis avant travaux. Appelez le ${site.phone}.`,
  applicationName: site.name,
  formatDetection: { telephone: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
  // Site de démonstration (entreprise fictive) : jamais dans les résultats Google.
  robots: isDemo ? { index: false, follow: false } : { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1D2125",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        {isDemo && <DemoBanner />}
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <CallBar />
        {!isDemo && <JsonLd />}
      </body>
    </html>
  );
}
