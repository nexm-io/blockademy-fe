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
        <div className="h-[82px]"></div>
      </ClientOnly>
      <div className="relative w-full overflow-y-auto">{children}</div>
      <div className="lg:fixed left-0 right-0 bottom-0 bg-white-100">
        <Footer />
      </div>
    </div>
  );
}
