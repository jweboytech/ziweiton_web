import Button from "@/components/button";
import React from "react";

const FreeTrial = () => {
  return (
    <div className="bg-white py-16.5 flex flex-col gap-7.5 justify-center items-center">
      <p className="text-28 text-center">
        注册无需营业执照，帮您减少资产闲置，简单又好上手
      </p>
      <Button href="/">免费试用</Button>
    </div>
  );
};

export default FreeTrial;
