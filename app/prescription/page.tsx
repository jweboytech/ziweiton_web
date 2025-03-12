import FreeTrial from "@/layout/intro";
import React from "react";
import IndustrySolutions from "./components/industrySolutions";
import CustomerService from "@/components/customerService";
import Image from "next/image";

const PrescriptionPage = () => {
  return (
    <React.Fragment>
      <div className="bg-white">
        <div className="hidden md:flex h-104 px-100 pt-32 flex-col bg-cover bg-no-repeat bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/banner3.webp)]">
          <h2 className="text-34 text-white">
            多场景解决方案
            <br />
            助力企业提升资产管理效率
          </h2>
        </div>
        <div className="block md:hidden relative bg-white h-[170px] pl-7.5 pt-15.5">
          <div className="text-base mb-3.5 w-56 relative z-10">
            多场景解决方案
            <br />
            助力企业提升资产管理效率
          </div>
          <Image
            src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/mobile/banner3.webp"
            className="block md:hidden absolute top-0 right-0 w-47.5 h-43.5"
            width={190}
            height={174}
            alt="banner"
            priority
          />
        </div>
        <IndustrySolutions />
        <FreeTrial />
      </div>
      {/* <CustomerService /> */}
    </React.Fragment>
  );
};

export default PrescriptionPage;
