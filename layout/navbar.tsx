"use client";

import { MENUS } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-20 group">
      {MENUS.map((item) => (
        <Link href={item.value} key={item.value}>
          <li
            className={clsx(
              "cursor-pointer hover:text-primary group-hover:text-gray text-20 transition-colors duration-300",
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
