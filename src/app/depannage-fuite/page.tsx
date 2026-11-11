import { ServicePage, serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("depannage-fuite");

export default function Page() {
  return <ServicePage slug="depannage-fuite" />;
}
