import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { soleil } from "@/utils/constants";
import ClientOnly from "@/components/ClientOnly";

export const metadata: Metadata = {
  title: {
    template: "%s | Blockademy",
    default: "Blockademy",
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${soleil.variable} font-sans overflow-hidden`}>
      <ClientOnly>
        <Header />
      </ClientOnly>
      <div className="relative w-full">{children}</div>
      <Footer />
    </div>
  );
}
