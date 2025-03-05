import FreeTrial from "@/layout/intro";
import React from "react";
import IndustrySolutions from "./components/industrySolutions";

const PrescriptionPage = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="px-40 pt-32 h-87.5 flex flex-col bg-contain bg-no-repeat bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/banner3.webp)]">
          <h2 className="text-28">
            多场景解决方案
            <br />
            助力企业提升资产管理效率
          </h2>
        </div>
        <IndustrySolutions />
        <div className="pt-82">
          <FreeTrial />
        </div>
      </div>
    </div>
  );
};

export default PrescriptionPage;
