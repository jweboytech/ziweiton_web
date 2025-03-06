import FreeTrial from "@/layout/intro";
import React from "react";
import IndustrySolutions from "./components/industrySolutions";
import CustomerService from "@/components/customerService";

const PrescriptionPage = () => {
  return (
    <React.Fragment>
      <div className="bg-white">
        <div className="px-100 pt-32 h-87.5 flex flex-col bg-contain bg-no-repeat bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/banner3.webp)]">
          <h2 className="text-28">
            多场景解决方案
            <br />
            助力企业提升资产管理效率
          </h2>
        </div>
        <IndustrySolutions />
        <div className="pt-102">
          <FreeTrial />
        </div>
      </div>
      <CustomerService />
    </React.Fragment>
  );
};

export default PrescriptionPage;
