import React from "react";
import Navbar from "./navbar";
import Button from "@/components/button";
import Image from "next/image";

const Header = () => {
  return (
    <div className="h-20 bg-white hidden md:flex fixed z-100 w-full items-center px-40 justify-between border-b border-b-gray-light">
      <div className="flex gap-2">
        <Image
          src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/logo/logo.jpg"
          width={128}
          height={40}
          alt="logo"
        />
        <Image
          src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/logo/logo1.jpg"
          width={128}
          height={40}
          alt="logo"
        />
      </div>
      <Navbar />
      <Button href="/" variant="gradient" className="w-46.5">
        免费试用
      </Button>
    </div>
  );
};

export default Header;
