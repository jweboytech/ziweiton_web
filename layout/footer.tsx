"use client";

import Image from "next/image";
import React from "react";
import Logo from "./logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-4.5 pt-4.5 pb-3 md:py-12 md:px-30 md:gap-30 bg-black-dark text-white flex justify-between items-center md:items-start">
      <div className="flex flex-col gap-3 md:gap-4">
        <Logo />
        <h2 className="hidden md:block text-3xl font-bold">专业资产管理平台</h2>
        <div className="md:hidden flex flex-col justify-center text-base gap-3 md:gap-1">
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
      <div className="gap-26 hidden md:flex">
        <ul className="text-white flex flex-col gap-4">
          <li className="text-xl font-medium">产品介绍</li>
          <li className="text-sm">
            <Link href="/product">资产全生命周期</Link>
          </li>
          <li className="text-sm">
            <Link href="/product">贵重资产防丢</Link>
          </li>
          <li className="text-sm">
            <Link href="/product">多种盘点方式</Link>
          </li>
        </ul>
        <ul className="text-white flex flex-col gap-4">
          <li className="text-xl font-medium">解决方案</li>
          <li className="text-sm">
            <Link href="/prescription">互联网行业</Link>
          </li>
          <li className="text-sm">
            <Link href="/prescription">生产制造业</Link>
          </li>
          <li className="text-sm">
            <Link href="/prescription">零售连锁业</Link>
          </li>
          <li className="text-sm">
            <Link href="/prescription">酒店行业</Link>
          </li>
        </ul>
        <ul className="text-white flex flex-col gap-4">
          <li className="text-xl font-medium">解决方案</li>
          <li className="text-sm">
            <Link href="/cooperation">商务合作</Link>
          </li>
        </ul>
      </div>
      <div className="block md:flex flex-col gap-4">
        <span className="leading-none hidden md:block">
          联系方式：13372531235
        </span>
        <div className="flex gap-3">
          <div className="flex flex-col gap-3 md:gap-2 items-center">
            <div className="bg-white px-2 pt-2 w-22.5 h-22.5 md:w-24.5 md:h-24.5">
              <Image
                src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/business_qrcode.jpg"
                alt="qrcode"
                width={104}
                height={104}
                className="md:w-20 md:h-20"
              />
            </div>
            <span className="text-white text-xs md:text-base">诚邀代理</span>
          </div>
          <div className="flex flex-col gap-3 md:gap-2 items-center">
            <div className="bg-white px-2 pt-2 w-22.5 h-22.5 md:w-24.5 md:h-24.5">
              <Image
                src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/customer_qrcode.jpg"
                alt="qrcode"
                width={104}
                height={104}
                className="md:w-20 md:h-20"
              />
            </div>
            <span className="text-white text-xs md:text-base">客服咨询</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
