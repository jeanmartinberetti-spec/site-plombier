import { ServicePage, serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("salle-de-bain");

export default function Page() {
  return <ServicePage slug="salle-de-bain" />;
}
