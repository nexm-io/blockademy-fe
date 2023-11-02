import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";


export const metadata: Metadata = {
  title: {
    template: "%s | Blockademy",
    default: "Blockademy",
  },
};

const soleil = localFont({
  src: [
    {
      path: '../../public/fonts/SoleilLight.otf',
      weight: "400"
    },
    {
      path: '../../public/fonts/SoleilBook.otf',
      weight: "normal"
    },
    {
      path: '../../public/fonts/SoleilBold.otf',
      weight: "700"
    }
  ],
  variable: '--font-soleil'
})

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${soleil.variable} font-sans`}>
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </div>
  );
}
