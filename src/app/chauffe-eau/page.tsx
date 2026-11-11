import { ServicePage, serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("chauffe-eau");

export default function Page() {
  return <ServicePage slug="chauffe-eau" />;
}
