import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const metadata: Metadata = {
  title: {
    template: "%s | Blockademy",
    default: "Blockademy",
  },
  description:
    "BlockAdemy provides a comprehensive gamified learning experience in the blockchain industry, bridging the gap between theoretical knowledge and practical application.",
  openGraph: {
    description:
      "BlockAdemy provides a comprehensive gamified learning experience in the blockchain industry, bridging the gap between theoretical knowledge and practical application.",
    images: [
      "https://blockademy.s3.ap-southeast-1.amazonaws.com/blockademy-banner.png",
    ],
    title: "Blockademy",
    type: "website",
    url: "https://blockademy.ai/",
  },
  twitter: {
    description:
      "BlockAdemy provides a comprehensive gamified learning experience in the blockchain industry, bridging the gap between theoretical knowledge and practical application.",
    images: [
      "https://blockademy.s3.ap-southeast-1.amazonaws.com/blockademy-banner.png",
    ],
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
        <Providers>{children}</Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
