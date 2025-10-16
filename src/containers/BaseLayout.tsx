import React, { ReactNode } from "react";

import TopNavbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="mt-4 flex flex-col min-h-screen">
      <TopNavbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
