import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/redux/provider";

export const metadata: Metadata = {
  description:
    "BlockAdemy provides a comprehensive gamified learning experience in the blockchain industry, bridging the gap between theoretical knowledge and practical application.",
  openGraph: {
    description:
      "BlockAdemy provides a comprehensive gamified learning experience in the blockchain industry, bridging the gap between theoretical knowledge and practical application.",
    images: [""],
    title: "Blockademy",
    type: "website",
    url: "https://blockademy.ai/",
  },
  title: "Blockademy",
  twitter: {
    description:
      "BlockAdemy provides a comprehensive gamified learning experience in the blockchain industry, bridging the gap between theoretical knowledge and practical application.",
    images: [""],
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
      </body>
    </html>
  );
}
