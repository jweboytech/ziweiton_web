import clsx from "clsx";
import Image from "next/image";
import React from "react";

export interface TitleProps {
  className?: string;
  text: string;
}

const Title = ({ text, className }: TitleProps) => {
  return (
    <div className={clsx("flex items-center justify-center gap-2", className)}>
      <Image
        src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/slash.png"
        alt="slash"
        className="w-6 md:w-11 h-3 md:h-6.5"
        width={44}
        height={26}
      />
      <span className="text-sm md:text-28">{text}</span>
      <Image
        src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/slash.png"
        alt="slash"
        className="w-6 md:w-11 h-3 md:h-6.5"
        width={44}
        height={26}
      />
    </div>
  );
};

export default Title;
