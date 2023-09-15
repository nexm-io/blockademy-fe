import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <>
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </>
  );
}
