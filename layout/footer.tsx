import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="py-14 bg-black-dark text-white flex justify-between px-40">
      <div className="flex items-center gap-7">
        <div className="text-[50px] text-white uppercase">logo</div>
        <div className="flex flex-col text-base gap-1">
          <p className="inline-flex items-center gap-1">
            <Image
              src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/telephone.webp"
              alt="location"
              width={16}
              height={16}
            />
            13888888888
          </p>
          <p className="inline-flex items-center gap-1">
            <Image
              src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/location.webp"
              alt="location"
              width={16}
              height={16}
            />
            浙江省杭州市上城区XX街道xxx路88号xx大厦888室
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 items-center">
          <div className="bg-white px-2 pt-2 w-[98px] h-[98px]">
            <div className="bg-gray-dark" />
          </div>
          <span className="text-white text-base">商务合作</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="bg-white px-2 pt-2 w-[98px] h-[98px]">
            <div className="bg-gray-dark" />
          </div>
          <span className="text-white text-base">客服咨询</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
