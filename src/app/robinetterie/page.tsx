import { ServicePage, serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("robinetterie");

export default function Page() {
  return <ServicePage slug="robinetterie" />;
}
