import TermsView from "@/views/Terms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <div className="mt-10">
      <TermsView />
    </div>
  );
}
