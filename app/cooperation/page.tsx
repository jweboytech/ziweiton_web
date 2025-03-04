import Button from "@/components/button";
import FreeTrial from "@/layout/intro";
import React from "react";

const PrescriptionPage = () => {
  return (
    <div>
      <div
        className="bg-white h-[350px] px-40 pt-[174px]  bg-cover bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/banner2.png?Expires=1740924707&OSSAccessKeyId=TMP.3KrjxQKJXDooMduwn77cRAdmkgE24Y7Qfft7AP2YGm15e6pcHxngWNhSxkiZpLVrFPjKXAAa6DEJzbeQrTDscpvsQe2csJ&Signature=xS5FvMovSUKJtQgt8na3q1Nr%2FvU%3D)]
"
      >
        <p className="text-base text-gray">
          不管您是组织还是个人 <br />
          紫维通诚邀您立即加入 开启财富之路
        </p>
      </div>
      <div className="pt-[70px] pb-10 w-fit m-auto">
        <div className="mb-16.5">
          <h2 className="text-28 text-black text-center">
            成为代理商/合伙人将获得
          </h2>
        </div>
        <ul className="grid grid-cols-3 gap-20">
          <li className="flex">
            <div className="bg-white inset-shadow-card rounded-full px-12 py-[102px] flex flex-col items-center gap-5">
              <h3 className="text-xl text-primary font-bold">丰厚利润</h3>
              <ul className="text-sm text-gray flex flex-col gap-2 items-center">
                <li>0成本投入</li>
                <li>高额佣金与返点政策</li>
                <li>确保合作伙伴收益最大化</li>
              </ul>
            </div>
          </li>
          <li className="flex">
            <div className="bg-white inset-shadow-card rounded-full px-12 py-[102px] flex flex-col items-center gap-5">
              <h3 className="text-xl text-primary font-bold">市场支持</h3>
              <ul className="text-sm text-gray flex flex-col gap-2 items-center">
                <li>完善的区域保护机制</li>
                <li>总部的商机线索按地域分配</li>
                <li>帮助合作伙伴获得更多订单</li>
              </ul>
            </div>
          </li>
          <li className="flex">
            <div className="bg-white inset-shadow-card rounded-full px-12 py-[102px] flex flex-col items-center gap-5">
              <h3 className="text-xl text-primary font-bold">技术支持</h3>
              <ul className="text-sm text-gray flex flex-col gap-2 items-center">
                <li>全面支持，助力高效成单</li>
                <li>专属技术团队提供售前咨询</li>
                <li>实施部署与售后服务</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="pt-[70px] pb-16.5 bg-white">
        <div className="mb-16.5">
          <h2 className="text-28 text-black text-center">我们期待这样的您</h2>
        </div>
      </div>
      <div className="pt-13 pb-16.5 h-[388px] bg-primary relative">
        <div className="mb-12">
          <h2 className="text-28 text-white text-center">伙伴申请流程</h2>
        </div>
        <div className="absolute right-0 bottom-16.5 bg-white pl-[206px] py-14">
          <form className="grid grid-cols-1 gap-3">
            <div className="flex gap-4.5">
              <input />
              <input />
            </div>
            <Button>提交</Button>
          </form>
        </div>
      </div>
      <FreeTrial />
    </div>
  );
};

export default PrescriptionPage;
