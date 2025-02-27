import React from "react";
import Header from "./header";
import Footer from "./footer";

const MainLayout = ({ children }: BaseProps) => {
  return (
    <div className="bg-[#F1F4FE] flex-grow">
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  );
};

export default MainLayout;
