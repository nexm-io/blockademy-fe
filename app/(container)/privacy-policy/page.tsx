import PrivacyPolicyView from "@/views/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mt-10">
      <PrivacyPolicyView />
    </div>
  );
}
