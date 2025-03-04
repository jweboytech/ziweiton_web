"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MENUS = [
  { label: "首页", value: "/home" },
  { label: "产品介绍", value: "/product" },
  { label: "解决方案", value: "/prescription" },
  { label: "商务合作", value: "/cooperation" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-20 group">
      {MENUS.map((item) => (
        <Link href={item.value} key={item.value}>
          <li
            className={clsx(
              "cursor-pointer hover:text-primary group-hover:text-gray text-sm transition-colors duration-300",
              item.value === pathname ? "text-primary" : "text-gray"
            )}
          >
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
