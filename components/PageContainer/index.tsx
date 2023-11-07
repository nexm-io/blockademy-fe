import React, { ReactNode } from "react";

const PageContainer = ({ children }: { children?: ReactNode }) => {
  return <div className="container">{children}</div>;
};

export default PageContainer;
