import React from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

const MainLayout = ({ children }: BaseProps) => {
  return (
    <div className="bg-[#F1F4FE] flex-grow">
      <Sidebar />
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  );
};

export default MainLayout;
