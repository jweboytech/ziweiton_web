import Button from "@/components/button";
import CustomerService from "@/components/customerService";
import Title from "@/components/title";
import FreeTrial from "@/layout/intro";
import Image from "next/image";
import React from "react";

const items: Array<Option & { icon: string }> = [
  {
    label: "资深团队",
    value: "深根资产云管理领域xx年，平均从业经验xx年。",
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/introduce1.webp",
  },
  {
    label: "行业经验丰富",
    value: "具有全行业全场景解决方案服务经验，覆盖互联网、制造业、零售等行业。",
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/introduce2.webp",
  },
  {
    label: "贴心部署",
    value: "管家式实施部署，助力无忧上线助力企业快速实现资产管理数智化。",
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/introduce3.webp",
  },
  {
    label: "售后无忧",
    value: "专业售后团队7*24支持，快速响应，为您的资管保驾护航。",
    icon: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/introduce4.webp",
  },
];

function HomePage() {
  return (
    <div className="bg-white">
      <div className="pt-14 md:pt-50 pb-15 md:h-[908px] bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/mobile/banner1.webp)] md:bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/banner1.webp)] bg-white bg-cover bg-no-repeat">
        <div className="flex flex-col gap-3 md:gap-6">
          <h2 className="text-[#0C1E58] text-20 md:text-[62px] text-center font-medium">
            紫维通·专业资产管理云平台
          </h2>
          <h3 className="text-gray text-xs md:text-[34px] text-center">
            实现资产数智化、精细化、全生命周期管理
          </h3>
          <div className="mt-6 text-center">
            <Button
              href="/product"
              variant="gradient"
              className="md:w-56 md:text-2xl"
            >
              查看产品介绍
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center gap-26 relative -mt-89">
        <Title text="专业服务 助力资管降本提效" />
        <div className="hidden md:block pb-15">
          <div className="h-[626px] w-300 bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/stage.webp)] bg-contain bg-no-repeat relative">
            <span className="text-black text-2xl font-medium absolute left-[9%] top-[6%]">
              需求调研
            </span>
            <Image
              className="absolute left-[11.5%] top-[14%]"
              src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/fabudiaoyan.webp"
              alt="icon"
              width={50}
              height={50}
            />
            <span className="text-black text-2xl font-semibold absolute left-[24.5%] -top-[3%]">
              系统部署
            </span>
            <Image
              className="absolute left-[26.5%] top-[5%]"
              src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/deploy.webp"
              alt="icon"
              width={50}
              height={50}
            />
            <span className="text-black text-2xl font-semibold absolute left-[42%] -top-[6%]">
              售后维护
            </span>
            <Image
              className="absolute left-[44%] top-[2%]"
              src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/repair.webp"
              alt="icon"
              width={50}
              height={50}
            />
            <span className="text-black text-2xl font-semibold absolute right-[29.5%] -top-[3%]">
              系统培训
            </span>
            <Image
              className="absolute right-[31.5%] top-[5.5%]"
              src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/cultivate.webp"
              alt="icon"
              width={50}
              height={50}
            />
            <span className="text-black text-2xl font-semibold absolute right-[15%] top-[6%]">
              场景实施
            </span>
            <Image
              className="absolute right-[16.5%] top-[14.5%]"
              src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/realise.webp"
              alt="icon"
              width={50}
              height={50}
            />
            <h2 className="text-black text-center text-3xl font-semibold absolute w-full top-[40%] -left-[3%]">
              开放集成 灵活定制
            </h2>
            <div className="text-black text-20 absolute left-[20%] top-[62%] w-10 leading-6">
              资产管理
            </div>
            <div className="text-black text-20 absolute left-[46.3%] top-[80%] w-10 leading-6">
              财务管理
            </div>
            <div className="text-black text-20 absolute right-[24%] top-[62.5%] w-10 leading-6">
              盘点管理
            </div>
            <ul className="text-sm text-white grid grid-cols-1 absolute left-[8%] top-[60%] text-right">
              <li>资产采购到报废</li>
              <li>资产标签化贵重</li>
              <li>资产定位</li>
              <li>......</li>
            </ul>
            <ul className="text-sm text-white grid grid-cols-1 absolute right-[14%] top-[60%] text-left">
              <li>一物一码</li>
              <li>全员盘点</li>
              <li>RFID批量盘点</li>
              <li>......</li>
            </ul>
            <p className="text-sm text-white absolute left-[40%] bottom-[4%] ">
              账实核对、折旧摊销、资产处置......
            </p>
          </div>
          <div className="mt-15.5 text-center">
            <Button
              href="/prescription"
              variant="bordered"
              className="w-87 h-13.5 text-2xl"
            >
              查看解决方案
            </Button>
          </div>
        </div>
      </div>
      <div className="flex md:hidden flex-col items-center gap-20 pb-18.5">
        <Title text="专业服务 助力资管降本提效" />
        <div className="h-[378px] w-[375px] bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/mobile/stage.webp)] bg-contain bg-no-repeat relative">
          <span className="text-black text-xs absolute left-[8%]">
            需求调研
          </span>
          <Image
            className="absolute left-[12.5%] top-[8%]"
            src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/fabudiaoyan.webp"
            alt="icon"
            width={16}
            height={16}
          />
          <span className="text-black text-xs absolute left-[25%] -top-[5%]">
            系统部署
          </span>
          <Image
            className="absolute left-[28.5%] top-[3.5%]"
            src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/deploy.webp"
            alt="icon"
            width={16}
            height={16}
          />
          <span className="text-black text-xs absolute left-[44%] -top-[6%]">
            售后维护
          </span>
          <Image
            className="absolute left-[47.5%] top-[2%]"
            src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/repair.webp"
            alt="icon"
            width={16}
            height={16}
          />
          <span className="text-black text-xs absolute right-[22%] -top-[4%]">
            系统培训
          </span>
          <Image
            className="absolute right-[26.5%] top-[3.5%]"
            src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/cultivate.webp"
            alt="icon"
            width={16}
            height={16}
          />
          <span className="text-black text-xs absolute right-[7%] top-0">
            场景实施
          </span>
          <Image
            className="absolute right-[10.5%] top-[8%]"
            src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/realise.webp"
            alt="icon"
            width={16}
            height={16}
          />
          <h2 className="text-black text-center text-xs font-medium absolute w-full top-[22%]">
            开放集成 灵活定制
          </h2>
          <div className="text-black text-[10px] absolute left-[18.5%] top-[34%] w-6 leading-3.5">
            资产管理
          </div>
          <div className="text-black text-[10px] absolute left-[47.5%] top-[43.5%] w-6 leading-3.5">
            财务管理
          </div>
          <div className="text-black text-[10px] absolute right-[18.5%] top-[34%] w-6 leading-3.5">
            盘点管理
          </div>
          <ul className=" w-[76px] text-[10px] text-white grid grid-cols-1 absolute left-[12%] top-[66%]">
            <li>资产采购到报废</li>
            <li>资产标签化贵重</li>
            <li>资产定位</li>
            <li>......</li>
          </ul>
          <ul className="text-[10px] w-11 text-white absolute left-[44%] bottom-[14%] ">
            <li>账实核对</li>
            <li>折旧摊销</li>
            <li>资产处置</li>
            <li>......</li>
          </ul>
          <ul className="text-[10px] text-white grid grid-cols-1 absolute right-[12%] top-[64%] text-left">
            <li>一物一码</li>
            <li>全员盘点</li>
            <li>RFID批量盘点</li>
            <li>......</li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block pt-19 h-[300px] px-56 bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/banner2.webp)] bg-cover bg-no-repeat relative">
        <Title text="专业团队 技术驱动" theme="white" />
        <ul className="flex gap-4 absolute top-43 left-1/2 -translate-x-1/2">
          {items.map((item, index) => (
            <li
              className="bg-white rounded inset-shadow-card py-11.5 px-7.5 w-63 h-90 relative"
              key={index}
            >
              <h4 className="text-28">{item.label}</h4>
              <p className="text-20 text-gray mt-3">{item.value}</p>
              <Image
                src={item.icon}
                alt="icon"
                width={160}
                height={160}
                className="absolute right-0 bottom-0 w-40 h-40"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="block md:hidden bg-white">
        <div className="pt-10 h-[148px] px-4 bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/mobile/banner2.webp)] bg-cover bg-no-repeat relative">
          <Title text="专业团队 技术驱动" theme="white" />
        </div>
        <div className="border-b border-b-gray-light pb-5">
          <ul className="flex flex-col mx-4 py-6 relative -mt-14 bg-white ">
            {items.map((item, index) => (
              <li className="py-2 px-6 flex gap-3" key={index}>
                <Image
                  src={item.icon}
                  alt="icon"
                  width={84}
                  height={84}
                  className="w-21 h-21"
                />
                <div className="flex flex-col">
                  <h4 className="text-sm">{item.label}</h4>
                  <p className="text-xs text-gray mt-2">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:pt-60 bg-white">
        <FreeTrial />
      </div>
      {/* <CustomerService /> */}
    </div>
  );
}

export default HomePage;
