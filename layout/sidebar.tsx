"use client";

import { MENUS } from "@/constants";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./logo";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const handleToggleStatus = () => {
    setIsOpen(!isOpen);
  };

  const handlePrevent = (evt: React.MouseEvent) => {
    evt.stopPropagation();
  };

  return (
    <React.Fragment>
      <div
        className={clsx(
          "w-screen h-screen bg-black/25 transition-opacity duration-300 fixed",
          isOpen ? "opacity-100 z-100" : "opacity-0 -z-10"
        )}
        onClick={handleToggleStatus}
      >
        <div
          onClick={handlePrevent}
          className={clsx(
            "h-screen bg-[#444] absolute left-0 top-0 z-80 transition-all duration-300",
            isOpen ? "opacity-100 w-41" : "opacity-0 w-0"
          )}
        >
          <ul>
            <li className="py-4.5 pl-7 pr-3.5 flex items-center justify-between">
              <Logo />
              <Image
                src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/close.webp"
                width={12}
                height={12}
                onClick={handleToggleStatus}
                alt="close icon"
              />
            </li>
            {MENUS.map((item) => (
              <Link
                key={item.value}
                href={item.value}
                onClick={handleToggleStatus}
              >
                <li
                  className={clsx(
                    "py-4.5 pl-7 pr-3.5 text-white text-base",
                    item.value === pathname ? "bg-primary" : "bg-transparent"
                  )}
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div
        onClick={handleToggleStatus}
        className={clsx(
          "md:hidden z-80 grid w-12.5 h-12.5 grid-cols-1 gap-1 absolute left-0 top-0 bg-primary rounded-br-[20px] text-white px-2 py-4",
          isOpen ? "hidden" : "block"
        )}
      >
        <div className="bg-white h-1 w-full rounded-full" />
        <div className="bg-white h-1 w-full rounded-full" />
        <div className="bg-white h-1 w-full rounded-full" />
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
