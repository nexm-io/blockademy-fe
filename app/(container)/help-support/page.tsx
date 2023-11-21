import HelpSupportView from "@/views/HelpSupport";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help & Support",
};

export default function HelpSupportPage() {
  return (
    <div className="mt-10">
      <HelpSupportView />
    </div>
  );
}
