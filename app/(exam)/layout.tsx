import type { Metadata } from "next";
import { soleil } from "@/utils/constants";

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
    <div className={`${soleil.variable} font-sans`}>
      <div className="relative w-full">{children}</div>
    </div>
  );
}