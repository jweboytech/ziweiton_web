import React from "react";
import Navbar from "./navbar";
import Button from "@/components/button";

const Header = () => {
  return (
    <div className="h-20 bg-white hidden md:flex fixed z-100 w-full items-center px-40 justify-between border-b border-b-gray-light">
      <div className="uppercase text-28">logo</div>
      <Navbar />
      <Button href="/" variant="gradient" className="w-46.5">
        免费试用
      </Button>
    </div>
  );
};

export default Header;
