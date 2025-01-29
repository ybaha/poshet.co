import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-24">{children}</div>;
};

export default Layout;
