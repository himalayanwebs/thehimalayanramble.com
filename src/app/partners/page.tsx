import type { Metadata } from "next";
import { PartnerResourceReader } from "@/components/partners/partner-resource-reader";

export const metadata: Metadata = {
  title: { absolute: "Partner Resources | The Himalayan Ramble" },
  description: "Private resources for The Himalayan Ramble international travel partners.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/partners/" },
};

export default function PartnersPage() {
  return <PartnerResourceReader />;
}
