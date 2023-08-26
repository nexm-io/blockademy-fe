import React, { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const PageContainer = ({ children }: { children: ReactNode }) => {
  return <main className={`xl:px-[40px] ${inter.className}`}>{children}</main>;
};

export default PageContainer;
