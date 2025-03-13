import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/logo/logo.jpg"
      width={128}
      height={40}
      alt="logo"
    />
  );
};

export default Logo;
