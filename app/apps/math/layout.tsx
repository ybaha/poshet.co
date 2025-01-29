import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Math Answers AI",
  description: "Get help with Math Answers AI application",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
