import Button from "@/components/button";
import CustomerService from "@/components/customerService";
import Title from "@/components/title";
import FreeTrial from "@/layout/intro";
import Image from "next/image";
import React from "react";

const PrescriptionPage = () => {
  return (
    <React.Fragment>
      <div className="bg-white h-[350px] px-100 pt-32  bg-cover bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/banner3.webp)]">
        <h2 className="text-28 mb-4">携手共赢 共创未来</h2>
        <p className="text-base text-gray">
          不管您是组织还是个人 <br />
          紫维通诚邀您立即加入 开启财富之路
        </p>
      </div>
      <div className="pt-17.5 pb-10 w-fit m-auto">
        <Title text="成为代理商/合伙人将获得" className="mb-26.5" />
        <ul className="grid grid-cols-3 gap-20">
          <li className="flex relative">
            <Image
              className="absolute left-1/2 -translate-x-1/2 -top-10"
              src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/reward.png"
              width={118}
              height={118}
              alt="icon"
            />
            <div className="bg-white inset-shadow-card rounded-full px-12 py-[102px] flex flex-col items-center gap-5">
              <h3 className="text-xl text-primary font-bold">丰厚利润</h3>
              <ul className="text-sm text-gray flex flex-col gap-2 items-center">
                <li>0成本投入</li>
                <li>高额佣金与返点政策</li>
                <li>确保合作伙伴收益最大化</li>
              </ul>
            </div>
          </li>
          <li className="flex relative">
            <Image
              className="absolute left-1/2 -translate-x-1/2 -top-10"
              src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/support.png"
              width={118}
              height={118}
              alt="icon"
            />
            <div className="bg-white inset-shadow-card rounded-full px-12 py-[102px] flex flex-col items-center gap-5">
              <h3 className="text-xl text-primary font-bold">市场支持</h3>
              <ul className="text-sm text-gray flex flex-col gap-2 items-center">
                <li>完善的区域保护机制</li>
                <li>总部的商机线索按地域分配</li>
                <li>帮助合作伙伴获得更多订单</li>
              </ul>
            </div>
          </li>
          <li className="flex relative">
            <Image
              className="absolute left-1/2 -translate-x-1/2 -top-10"
              src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/support1.png"
              width={118}
              height={118}
              alt="icon"
            />
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
      <div className="pt-17.5 pb-16.5 bg-white">
        <Title text="我们期待这样的您" className="mb-17.5" />
        <ul className="relative mt-74 h-36.5 w-4/5 mx-auto bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/halo.png)] bg-contain bg-center bg-no-repeat">
          <li className="flex gap-7 absolute left-20 -top-40">
            <div className="flex flex-col items-center">
              <Image
                src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/agency.png"
                width={56}
                height={56}
                className="w-14 h-14"
                alt="icon"
              />
              <div className="bg-blue-light w-[1px] h-[156px] relative" />
            </div>
            <div className="flex flex-col gap-3 w-52.5">
              <h3 className="text-20">有企业</h3>
              <p className="text-gray text-sm">
                比如您是客户经理，销售，管理咨询顾问，企业培训，商协会、产业园区管理者。
              </p>
            </div>
          </li>
          <li className="flex gap-7 absolute left-[46%] -top-56">
            <div className="flex flex-col items-center">
              <Image
                src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/resource.png"
                width={56}
                height={56}
                className="w-14 h-14"
                alt="icon"
              />
              <div className="bg-blue-light w-[1px] h-[188px] relative" />
            </div>
            <div className="flex flex-col gap-3 w-52.5">
              <h3 className="text-20">有行政财会资源</h3>
              <p className="text-gray text-sm">
                拥有有丰富的人脉，比如行政、采购、会计、技术人员、仓管.会涉及资产管理工作的人脉。
              </p>
            </div>
          </li>
          <li className="flex gap-7 absolute -right-20 -top-40">
            <div className="flex flex-col items-center">
              <Image
                src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/distribution.png"
                width={56}
                height={56}
                className="w-14 h-14"
                alt="icon"
              />
              <div className="bg-blue-light w-[1px] h-[156px] relative" />
            </div>
            <div className="flex flex-col gap-3 w-52.5">
              <h3 className="text-20">有丰富的销售网络</h3>
              <p className="text-gray text-sm">
                拥有自己的销售网络，如分销、代理等。
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="pt-13 pb-16.5 h-[388px] bg-primary bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/banner6.webp)] bg-no-repeat bg-contain relative">
        <div className="mb-12">
          <h2 className="text-28 text-white text-center">伙伴申请流程</h2>
        </div>
        <div className="absolute right-0 bottom-16.5 flex gap-4 items-center">
          <div className="grid grid-cols-1 gap-1">
            <ul className="flex items-center gap-1">
              <li className="flex items-center gap-6">
                <div className="bg-white w-14 h-14 rounded-full text-4xl text-primary inline-flex items-center justify-center">
                  1
                </div>
                <Image
                  src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/arrow_right.webp"
                  width={46}
                  height={62}
                  className="w-14 h-14"
                  alt="icon"
                />
              </li>
              <li className="flex items-center gap-6">
                <div className="bg-white w-14 h-14 rounded-full text-4xl text-primary inline-flex items-center justify-center">
                  2
                </div>
                <Image
                  src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/arrow_right.webp"
                  width={46}
                  height={62}
                  className="w-14 h-14"
                  alt="icon"
                />
              </li>
              <li className="flex items-center gap-6">
                <div className="bg-white w-14 h-14 rounded-full text-4xl text-primary inline-flex items-center justify-center">
                  3
                </div>
                <Image
                  src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/arrow_right.webp"
                  width={46}
                  height={62}
                  className="w-14 h-14"
                  alt="icon"
                />
              </li>
              <li className="flex items-center gap-6">
                <div className="bg-white w-14 h-14 rounded-full text-4xl text-primary inline-flex items-center justify-center">
                  4
                </div>
              </li>
            </ul>
            <ul className="flex items-center gap-10 text-white text-20">
              <li className="-ml-3">提交申请</li>
              <li className="ml-3">洽谈合作</li>
              <li className="ml-5">签约授权</li>
              <li className="ml-5">携手共赢</li>
            </ul>
          </div>
          <div className="flex">
            <div className=" w-0 h-0 border-t-[210px] border-t-transparent border-r-[210px] border-r-white" />
            <div className="bg-white py-14 pr-30">
              <form className="grid grid-cols-1 gap-3">
                <div className="flex gap-4.5">
                  <div className="flex items-center gap-5.5 border border-[#E5E5E5]/80 bg-blue-light rounded py-2.5 px-3.5">
                    <label className="text-sm">您的姓名</label>
                    <input
                      className="outline-none placeholder:text-gray placeholder:text-sm flex-1"
                      placeholder="请输入"
                    />
                  </div>
                  <div className="flex items-center gap-5.5 border border-[#E5E5E5]/80 bg-blue-light rounded py-2.5 px-3.5">
                    <label className="text-sm">联系电话</label>
                    <input
                      className="outline-none placeholder:text-gray placeholder:text-sm flex-1"
                      placeholder="请输入"
                    />
                  </div>
                </div>
                <Button fullWidth>提交</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FreeTrial />
      <CustomerService />
    </React.Fragment>
  );
};

export default PrescriptionPage;
