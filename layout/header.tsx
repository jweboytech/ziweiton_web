import React from "react";
import Navbar from "./navbar";
import Button from "@/components/button";

const Header = () => {
  return (
    <div className="h-20 bg-white hidden md:flex items-center px-40 justify-between border-b border-b-gray-light">
      <div className="uppercase">logo</div>
      <Navbar />
      <Button href="/">免费试用</Button>
    </div>
  );
};

export default Header;
