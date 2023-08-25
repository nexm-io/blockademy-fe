import React, { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <main className={`xl:px-[40px] ${inter.className}`}>
      <div className="max-w-[1152px] mx-auto">{children}</div>
    </main>
  );
};

export default PageContainer;
