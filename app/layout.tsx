import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/redux/provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageContainer from "@/components/PageContainer";
import TopicList from "@/views/Home/TopicList";
import GiftHeader from "@/components/GiftHeader";
import NoSignal from "@/components/NoSignal";

export const metadata: Metadata = {
  description:
    "BlockAdemy provides a comprehensive gamified learning experience in the blockchain industry, bridging the gap between theoretical knowledge and practical application.",
  openGraph: {
    description:
      "BlockAdemy provides a comprehensive gamified learning experience in the blockchain industry, bridging the gap between theoretical knowledge and practical application.",
    images: ["https://blockademy.s3.ap-southeast-1.amazonaws.com/blockademy-banner.png"],
    title: "Blockademy",
    type: "website",
    url: "https://blockademy.ai/",
  },
  title: "Blockademy",
  twitter: {
    description:
      "BlockAdemy provides a comprehensive gamified learning experience in the blockchain industry, bridging the gap between theoretical knowledge and practical application.",
    images: ["https://blockademy.s3.ap-southeast-1.amazonaws.com/blockademy-banner.png"],
    site: "Blockademy",
    title: "Blockademy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <PageContainer>{children}</PageContainer>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
