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
  let solutions: Solution[] = [];
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
    <div>
      <div className="grid grid-cols-4 bg-blue-light rounded-full w-fit mx-auto mt-5">
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
                  "text-sm"
                )}
              >
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-17 pb-11 px-48">
        <Title text={`${current?.label}行业主要问题`} />
        <ul className="grid grid-cols-4 gap-4 mt-11">
          {items.map((item, index) => (
            <li
              key={index}
              className="bg-white inset-shadow-card rounded px-8 pt-8 pb-11 flex flex-col gap-9 border-b-4 border-b-warning"
            >
              <Image src={item.icon} width={40} height={40} alt="icon" />
              <div>
                <h3 className="text-20">{item.title}</h3>
                <p className="text-sm text-gray">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Section title={`${current?.label}行业解决方案`} items={solutions} />
    </div>
  );
};

export default IndustrySolutions;
