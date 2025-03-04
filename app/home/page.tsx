import Button from "@/components/button";
import Title from "@/components/title";
import FreeTrial from "@/layout/intro";
import Link from "next/link";

const items: Array<Option & { icon: string }> = [
  {
    label: "资深团队",
    value: "深根资产云管理领域xx年，平均从业经验xx年。",
    icon: "",
  },
  {
    label: "行业经验丰富",
    value: "具有全行业全场景解决方案服务经验，覆盖互联网、制造业、零售等行业。",
    icon: "",
  },
  {
    label: "贴心部署",
    value: "管家式实施部署，助力无忧上线助力企业快速实现资产管理数智化。",
    icon: "",
  },
  {
    label: "售后无忧",
    value: "专业售后团队7*24支持，快速响应，为您的资管保驾护航。",
    icon: "",
  },
];

function HomePage() {
  return (
    <div>
      <div className="pt-50 pb-15">
        <div className="flex flex-col gap-6">
          <h2 className="text-[#0C1E58] text-40 text-center">
            紫维通·专业资产管理云平台
          </h2>
          <h3 className="text-gray text-22 text-center">
            实现资产数智化、精细化、全生命周期管理
          </h3>
          <div className="mt-6 text-center">
            <Button href="/product">查看产品介绍</Button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-26 mt-53.5">
          <Title text="专业服务 助力资管降本提效" />
          <div>Placeholder</div>
          <Button href="/prescription">查看解决方案</Button>
        </div>
      </div>
      <div className="pt-19 h-[346px] px-56 bg-primary relative">
        <Title text="专业团队 技术驱动" className="text-white" />
        <ul className="flex gap-4 absolute top-43 left-1/2 -translate-x-1/2">
          {items.map((item, index) => (
            <li
              className="bg-white rounded inset-shadow-card py-11.5 px-7.5 w-63"
              key={index}
            >
              <h4 className="text-20">{item.label}</h4>
              <p className="text-sm text-gray mt-3">{item.value}</p>
            </li>
          ))}
        </ul>
      </div>
      <FreeTrial />
    </div>
  );
}

export default HomePage;
