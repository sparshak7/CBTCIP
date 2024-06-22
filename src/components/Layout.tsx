import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen dark bg-background font-sans antialiased text-secondary-foreground">
      <Navbar />
      <div className="container mx-auto flex-1 p-2">{children}</div>
    </div>
  );
};

export default Layout;
