import Link from "next/link";
import React from "react";

const MENUS = [
  { label: "首页", value: "/" },
  { label: "产品介绍", value: "/product" },
  { label: "解决方案", value: "/prescription" },
  { label: "商务合作", value: "/cooperation" },
];

const Navbar = () => {
  return (
    <ul className="flex gap-20">
      {MENUS.map((item) => (
        <Link href={item.value} key={item.value}>
          <li className="cursor-pointer hover:text-primary text-gray text-sm transition-colors duration-300">
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
