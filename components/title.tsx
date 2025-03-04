import clsx from "clsx";
import React from "react";

export interface TitleProps {
  className?: string;
  text: string;
}

const Title = ({ text, className }: TitleProps) => {
  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <span className="text-28">{text}</span>
    </div>
  );
};

export default Title;
