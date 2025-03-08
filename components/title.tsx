import clsx from "clsx";
import Image from "next/image";
import React from "react";

export interface TitleProps {
  className?: string;
  text: string;
  theme?: "white" | "black";
}

const Title = ({ text, className, theme = "black" }: TitleProps) => {
  return (
    <div className={clsx("flex items-center justify-center gap-2", className)}>
      <Image
        src={
          theme === "black"
            ? "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/slash.png"
            : "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/slash_white.webp"
        }
        alt="slash"
        className="w-6 md:w-11 h-3 md:h-6.5"
        width={44}
        height={26}
      />
      <span
        className={clsx(
          "text-sm md:text-28",
          theme === "white" && "text-white",
          theme === "black" && "text-black"
        )}
      >
        {text}
      </span>
      <Image
        src={
          theme === "black"
            ? "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/slash.png"
            : "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/slash_white.webp"
        }
        alt="slash"
        className="w-6 md:w-11 h-3 md:h-6.5"
        width={44}
        height={26}
      />
    </div>
  );
};

export default Title;
