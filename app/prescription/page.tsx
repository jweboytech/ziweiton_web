"use client";

import FreeTrial from "@/layout/intro";
import Section from "@/layout/section";
import clsx from "clsx";
import React from "react";

const tabs: Option[] = [
  { label: "互联网", value: "互联网" },
  { label: "酒店", value: "酒店" },
  { label: "生产制造", value: "生产制造" },
  { label: "零售连锁", value: "零售连锁" },
];

const items: { icon: string; title: string; description: string }[] = [
  {
    icon: "xx",
    title: "人员流动性高",
    description:
      "入、离职等变动频繁，!导致资产容易丢失、损坏或者责任不清等问题增加了资产管理难度。",
  },
  {
    icon: "xx",
    title: "设备更新快",
    description:
      "IT设备(如服务器、电脑)更新换代频繁，日设备处置不及时导致资产闲置或浪费。",
  },
  {
    icon: "xx",
    title: "数据安全风险",
    description: "设备报废或转售时，数据清理不彻底，存在泄露风险。",
  },
  {
    icon: "xx",
    title: "资产分散",
    description: "多地办公导致资产分布分散，难以统一管理。",
  },
];

const PrescriptionPage = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const handleTabChange = (index: number) => () => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="py-11 px-40 bg-white flex flex-col">
        <h2 className="text-28">
          多场景解决方案
          <br />
          助力企业提升资产管理效率
        </h2>
        <div className="grid grid-cols-4 bg-blue-light rounded-full w-fit mx-auto">
          {tabs.map((item, index) => (
            <div
              onClick={handleTabChange(index)}
              key={item.value}
              className={clsx(
                "px-12 py-5 after:mt-0.5 after:content-[''] after:block  after:h-1 after:bg-primary after:rounded-full",
                activeIndex === index ? "after:w-20" : "after:w-0"
              )}
            >
              <div className="flex gap-1 items-center cursor-pointer">
                <div className="w-5 h-5 bg-gray" />
                <span className={clsx("text-gray", "text-sm")}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-17.5">
          <h2 className="text-center text-28">互联网行业主要问题</h2>
          <ul className="grid grid-cols-4 gap-4 mt-11">
            {items.map((item, index) => (
              <li
                key={index}
                className="bg-white inset-shadow-card rounded px-8 pt-8 pb-11 flex flex-col gap-9 border-b-4 border-b-warning"
              >
                <div className="w-9 h-9 bg-gray" />
                <div>
                  <h3 className="text-20">{item.title}</h3>
                  <p className="text-sm text-gray">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Section title="互联网行业解决方案" />
      <div className="bg-white pt-[226px]">
        <FreeTrial />
      </div>
    </div>
  );
};

export default PrescriptionPage;
