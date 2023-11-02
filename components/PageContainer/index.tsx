import React, { ReactNode } from "react";



const PageContainer = ({ children }: { children?: ReactNode }) => {
  return (
    <main className={`xl:px-[40px]`}>
      <div className="max-w-[1152px] mx-auto">{children}</div>
    </main>
  );
};

export default PageContainer;
