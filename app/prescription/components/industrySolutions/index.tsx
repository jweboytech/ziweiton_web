"use client";

import Title from "@/components/title";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import {
  FABRICATION_QUESTIONS,
  FABRICATION_SOLUTIONS,
  HOTEL_QUESTIONS,
  HOTEL_SOLUTIONS,
  INDUSTRY_LIST,
  NETWORK_QUESTIONS,
  NETWORK_SOLUTIONS,
  RETAIL_QUESTIONS,
  RETAIL_SOLUTIONS,
} from "./config";
import Section from "@/layout/section";

const IndustrySolutions = () => {
  let items: Question[] = [];
  let solutions: SectionData[] = [];
  const [activeKey, setActiveKey] = React.useState<IndustryType>("network");
  const current = INDUSTRY_LIST.find((item) => item.value === activeKey);

  const handleTabChange = (value: IndustryType) => () => {
    setActiveKey(value);
  };

  switch (activeKey) {
    case "network":
      items = NETWORK_QUESTIONS;
      solutions = NETWORK_SOLUTIONS;
      break;
    case "hotel":
      items = HOTEL_QUESTIONS;
      solutions = HOTEL_SOLUTIONS;
      break;
    case "fabrication":
      items = FABRICATION_QUESTIONS;
      solutions = FABRICATION_SOLUTIONS;
      break;
    case "retail":
      items = RETAIL_QUESTIONS;
      solutions = RETAIL_SOLUTIONS;
      break;
    default:
      break;
  }

  return (
    <React.Fragment>
      <div className="hidden md:grid grid-cols-4 bg-blue-light rounded-full w-fit mx-auto mt-5">
        {INDUSTRY_LIST.map((item) => (
          <div
            onClick={handleTabChange(item.value)}
            key={item.value}
            className={clsx(
              "px-12 py-5 after:mt-0.5 after:content-[''] after:block  after:h-1 after:bg-primary after:rounded-full",
              activeKey === item.value ? "after:w-20 " : "after:w-0"
            )}
          >
            <div className="flex gap-1 items-center cursor-pointer">
              <Image
                src={activeKey === item.value ? item.highlightIcon : item.icon}
                width={20}
                height={20}
                alt="icon"
              />
              <span
                className={clsx(
                  activeKey === item.value ? "text-primary" : "text-gray",
                  "text-base"
                )}
              >
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex md:hidden grid-cols-4 px-2.5 mt-2 justify-center">
        {INDUSTRY_LIST.map((item) => (
          <div
            onClick={handleTabChange(item.value)}
            key={item.value}
            className={clsx(
              "p-3 rounded-full",
              activeKey === item.value && "bg-primary"
            )}
          >
            <div className="flex gap-1 items-center cursor-pointer">
              <Image
                src={activeKey === item.value ? item.highlightIcon1 : item.icon}
                width={20}
                height={20}
                alt="icon"
              />
              <span
                className={clsx(
                  activeKey === item.value ? "text-white" : "text-gray",
                  "text-xs"
                )}
              >
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-8.5 md:pt-17 pb-6 md:pb-11 px-2.5 md:px-48">
        <Title text={`${current?.label}行业主要问题`} />
        <ul className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-11">
          {items.map((item, index) => (
            <li
              key={index}
              className="bg-white inset-shadow-card rounded pl-4.5 pr-7 md:px-8 pt-3 md:pt-8 pb-6 md:pb-11 flex flex-col gap-2 md:gap-9 border-b-4 border-b-warning"
            >
              <Image
                src={item.icon}
                className="w-7.5 h-7.5 md:w-10 md:h-10"
                width={40}
                height={40}
                alt="icon"
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-sm md:text-28">{item.title}</h3>
                <p className="text-xs md:text-20 text-gray">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Section title={`${current?.label}行业解决方案`} items={solutions} />
    </React.Fragment>
  );
};

export default IndustrySolutions;
