import CustomerService from "@/components/customerService";
import Title from "@/components/title";
import FreeTrial from "@/layout/intro";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// const tabs: Option[] = [
//   { label: "互联网", value: "互联网" },
//   { label: "酒店", value: "酒店" },
//   { label: "生产制造", value: "生产制造" },
//   { label: "零售连锁", value: "零售连锁" },
// ];

const items: Array<Option> = [
  {
    label: "入库",
    value: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/store.webp",
  },
  {
    label: "资产领用",
    value: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/asset.webp",
  },
  {
    label: "资产借用",
    value: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/asset1.webp",
  },
  {
    label: "资产调拨",
    value: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/asset2.webp",
  },
  {
    label: "资产盘点",
    value: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/asset3.webp",
  },
  {
    label: "维修/处置",
    value: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/punish.webp",
  },
  {
    label: "出库",
    value: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/ship_out.webp",
  },
  {
    label: "资产退库",
    value:
      "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/out_of_stock.webp",
  },
  {
    label: "资产归还",
    value: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/asset4.webp",
  },
  {
    label: "资产接收",
    value: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/asset5.webp",
  },
  {
    label: "盘点报告",
    value: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/report.webp",
  },
  {
    label: "操作痕迹",
    value: "https://ziweiton.oss-cn-hangzhou.aliyuncs.com/icon/operator.webp",
  },
];

const ProductPage = () => {
  return (
    <div>
      <div className="py-11 px-80 bg-white flex flex-col bg-contain bg-no-repeat bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/banner3.webp)]">
        <div className="flex flex-col gap-3">
          <h2 className="text-28">企业资产实现数字化全生命周期管理</h2>
          <ul className="text-base text-gray flex gap-2 items-center">
            <li className="relative after:content-[''] after:block  after:h-4 after:w-[1px] after:absolute after:-right-1 after:top-1 after:bg-gray">
              全行业通用
            </li>
            <li className="relative after:content-[''] after:block  after:h-4 after:w-[1px] after:absolute after:-right-1 after:top-1 after:bg-gray">
              简单好上手
            </li>
            <li>功能齐全</li>
          </ul>
          <ul className="grid grid-cols-6 w-fit gap-6 mt-5.5">
            {items.map((item, index) => (
              <li
                key={index}
                className="bg-white inset-shadow-card pt-4 pb-2.5 rounded flex flex-col items-center gap-1.5 w-18"
              >
                <Image src={item.value} alt="icon" width={28} height={28} />
                <span className="text-gray text-sm">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Title text="资产数字化平台版本对比" className="py-12" />
      <div className="grid grid-cols-2 h-[504px]">
        <div className="bg-white relative">
          <div className="absolute left-40 top-20 z-10">
            <h3 className="text-28 mb-10 inline-flex gap-2 items-center">
              资产数智化平台核心解决方案
              <Image
                src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/slash.png"
                alt="slash"
                className="w-11 h-6.5"
                width={44}
                height={26}
              />
            </h3>
            <div className="bg-gray-light w-[616px] h-[250px]" />
          </div>
        </div>
        <div className="bg-blue relative bg-cover bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/banner4.webp)]">
          <div className="absolute left-16 top-50">
            <h3 className="text-white text-20 relative mb-5">
              贵重资产定位防丢失
            </h3>
            <ul className="text-white list-disc flex flex-col gap-2">
              <li className="inline-flex gap-2 items-center">
                <div className="bg-warning w-2 h-2 rounded-full text-sm" />
                <span>
                  通过定位技术，实现高精度的室内定位，为资产轨迹监管提供技术支持。
                </span>
              </li>
              <li className="inline-flex gap-2 items-center">
                <div className="bg-warning w-2 h-2 rounded-full text-sm" />
                <span>
                  设置电子围栏，当资产离开指定区域时，系统会自动报警，提醒管理人员注意。
                </span>
              </li>
              <li className="inline-flex gap-2 items-center">
                <div className="bg-warning w-2 h-2 rounded-full text-sm" />
                <span>
                  系统实时监控资产的位置，记录资产的历史移动轨迹，方便管理人员进行回溯和查询。
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-12.5 px-40">
        <div className="flex justify-center gap-7.5">
          <div className="flex flex-col gap-8 w-120 justify-center">
            <h3 className="text-20">多种盘点方式 极大提升盘点效率</h3>
            <ul className="flex flex-col gap-3 text-gray text-sm">
              <li className="inline-flex gap-2 items-center">
                <div className="bg-blue w-2 h-2 rounded-full" />
                <span>支持全员盘点，扫码盘点，异地盘点，RFID盘点。</span>
              </li>
              <li className="inline-flex gap-2 items-center">
                <div className="bg-blue w-2 h-2 rounded-full" />
                <span>支持按照资产类别、按角色权限进行多维度盘点。</span>
              </li>
              <li className="inline-flex gap-2 items-center">
                <div className="bg-blue w-2 h-2 rounded-full" />
                <span>盘点结果一键自动生成。 </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-dark w-154 h-62.5" />
        </div>
      </div>
      <div className="py-12.5 px-40 bg-white">
        <div className="flex justify-center gap-7.5">
          <div className="bg-gray-dark w-154 h-62.5" />
          <div className="flex flex-col gap-8 w-120 justify-center">
            <h3 className="text-20">固定资产全生命周期管理</h3>
            <ul className="flex flex-col gap-3 text-gray text-sm">
              <li className="inline-flex gap-2 items-center">
                <div className="bg-warning w-2 h-2 rounded-full" />
                <span>
                  实现资产、设备从采购、入库、领用、归还、调拨、借用、维护、
                </span>
              </li>
              <li className="inline-flex gap-2 items-center">
                <div className="bg-warning w-2 h-2 rounded-full" />
                <span>维修、盘点、折旧及报废等各个环节的全生命周期管理。</span>
              </li>
              <li className="inline-flex gap-2 items-center">
                <div className="bg-warning w-2 h-2 rounded-full" />
                <span>支持历史资产数据批量导入，同时也支持导出数据。 </span>
              </li>
              <li className="inline-flex gap-2 items-center">
                <div className="bg-warning w-2 h-2 rounded-full" />
                <span>
                  多平台支持，如微信、钉钉、飞书，同时支持一键导入组织架构。
                </span>
              </li>
              <li className="inline-flex gap-2 items-center">
                <div className="bg-warning w-2 h-2 rounded-full text-sm" />
                <span>支持资产标签自定义。 </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-12.5 px-40">
        <div className="flex justify-center gap-7.5">
          <div className="flex flex-col gap-8 w-120 justify-center">
            <h3 className="text-20 ">资产数据智能分析</h3>
            <ul className="flex flex-col gap-3 text-gray text-sm">
              <li className="inline-flex gap-2 items-start">
                <div className="bg-blue w-2 h-2 rounded-full text-sm mt-[6px]" />
                <span>资产数据实时更新，方便掌握最新动态。</span>
              </li>
              <li className="inline-flex gap-2 items-start">
                <div className="bg-blue w-2 h-2 rounded-full text-sm mt-[6px]" />
                <span>
                  台账清晰、记录完整，企业资产情况一目了然，快速定位闲置资产，维护、折旧成本实时掌握。
                </span>
              </li>
              <li className="inline-flex gap-2 items-start">
                <div className="bg-blue w-2 h-2 rounded-full text-sm mt-[6px]" />
                <span>
                  数据查阅范围支持自定义角色权限，保证资产管理信息安全，避免未经授权的操作。{" "}
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-dark w-154 h-62.5" />
        </div>
      </div>
      <div className="bg-primary text-white text-base text-center">
        <Link href="/prescription" className="py-8 block">
          查看解决方案
        </Link>
      </div>
      <FreeTrial />
      <CustomerService />
    </div>
  );
};

export default ProductPage;
