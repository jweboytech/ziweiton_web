"use client";

import Image from "next/image";
import React from "react";
import Logo from "./logo";
import { QRCodeCanvas } from "qrcode.react";

const Footer = () => {
  return (
    <div className="px-4.5 pt-4.5 pb-3 md:py-14 md:px-40 bg-black-dark text-white flex justify-between items-center">
      <div className="flex flex-col lg:flex-row gap-3 md:gap-7">
        <div className="text-2xl md:text-[50px] text-white uppercase leading-none">
          <Logo />
        </div>
        <div className="flex flex-col justify-center text-base gap-3 md:gap-1">
          <p className="inline-flex gap-1 text-[10px] md:text-base md:gap-2 items-start md:items-center">
            <Image
              className="w-2.5 h-2.5 md:w-4 md:h-4"
              src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/telephone.webp"
              alt="location"
              width={16}
              height={16}
            />
            <span className="leading-none">13372531235</span>
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3 md:gap-2 items-center">
          <div className="bg-white px-2 pt-2 w-22.5 h-22.5 md:w-24.5 md:h-24.5">
            <Image
              src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/business_qrcode.jpg"
              alt="qrcode"
              width={104}
              height={104}
            />
          </div>
          <span className="text-white text-xs md:text-base">诚邀代理</span>
        </div>
        <div className="flex flex-col gap-3 md:gap-2 items-center">
          <div className="bg-white px-2 pt-2 w-22.5 h-22.5 md:w-24.5 md:h-24.5">
            <div className="bg-gray-dark" />
            <div className="hidden md:block">
              <QRCodeCanvas
                value="https://affim.baidu.com/unique_65013548/chat?siteId=21739000&userId=65013548&siteToken=fdf1089f105d50981143f389f1a250dd"
                size={80}
              />
            </div>
            <div className="block md:hidden">
              <QRCodeCanvas
                value="https://affim.baidu.com/unique_65013548/chat?siteId=21739000&userId=65013548&siteToken=fdf1089f105d50981143f389f1a250dd"
                size={74}
              />
            </div>
          </div>
          <span className="text-white text-xs md:text-base">客服咨询</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
