import Button from "@/components/button";
import React from "react";

const FreeTrial = () => {
  return (
    <div className="bg-white pt-6 pb-2.5 md:py-16.5 flex flex-col gap-4 md:gap-7.5 justify-center items-center">
      <p className="text-sm md:text-28 text-center">
        仅需手机号即可免费试用，帮您减少资产闲置，简单又好上手
      </p>
      <Button href="/" variant="gradient" className="md:text-2xl md:w-46.5">
        免费试用
      </Button>
    </div>
  );
};

export default FreeTrial;
