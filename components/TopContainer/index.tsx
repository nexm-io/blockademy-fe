import React, { ReactNode } from "react";

const TopContainer = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1152px] mx-auto">{children}</div>;
};

export default TopContainer;
