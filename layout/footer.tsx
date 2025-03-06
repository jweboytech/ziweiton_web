import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="px-4.5 pt-4.5 pb-3 md:py-14 md:px-40 bg-black-dark text-white flex justify-between ">
      <div className="flex flex-col lg:flex-row gap-3 md:gap-7">
        <div className="text-2xl md:text-[50px] text-white uppercase leading-none">
          logo
        </div>
        <div className="flex flex-col text-base gap-3 md:gap-1">
          <p className="inline-flex gap-1 text-[10px] md:text-base md:gap-2 items-start md:items-center">
            <Image
              className="w-2.5 h-2.5 md:w-4 md:h-4"
              src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/telephone.webp"
              alt="location"
              width={16}
              height={16}
            />
            <span className="leading-none">13888888888</span>
          </p>
          <div className="inline-flex gap-1 text-[10px] md:text-base md:gap-2 items-start md:items-center">
            <Image
              className="w-2.5 h-2.5 md:w-4 md:h-4 mt-1"
              src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/location.webp"
              alt="location"
              width={16}
              height={16}
            />
            <div className="leading-5 w-[112px] md:w-fit">
              浙江省杭州市上城区XX街道xxx路88号xx大厦888室
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3 md:gap-2 items-center">
          <div className="bg-white px-2 pt-2 w-22.5 h-22.5 md:w-24.5 md:h-24.5">
            <div className="bg-gray-dark" />
          </div>
          <span className="text-white text-xs md:text-base">商务合作</span>
        </div>
        <div className="flex flex-col gap-3 md:gap-2 items-center">
          <div className="bg-white px-2 pt-2 w-22.5 h-22.5 md:w-24.5 md:h-24.5">
            <div className="bg-gray-dark" />
          </div>
          <span className="text-white text-xs md:text-base">客服咨询</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
