import React, { ReactNode } from "react";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-full px-0">{children}</div>;
};

export default MainContainer;
