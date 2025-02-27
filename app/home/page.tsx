import Button from "@/components/button";
import FreeTrial from "@/layout/intro";
import Navbar from "@/layout/navbar";
import Link from "next/link";

function HomePage() {
  return (
    <div className="bg-[#F1F4FE] flex-grow">
      <div className="py-6">
        <h2 className="text-center text-28">资产数字化平台版本对比</h2>
      </div>
      <div className="grid grid-cols-2 h-[504px]">
        <div className="bg-white relative">
          <div className="absolute left-40 top-20 z-10">
            <h3 className="text-28 mb-10">资产数智化平台核心解决方案</h3>
            <div className="bg-gray-light w-[616px] h-[250px]" />
          </div>
        </div>
        <div className="bg-blue relative">
          <div className="absolute left-16 top-50">
            <h3 className="text-white text-20 relative mb-5">
              贵重资产定位防丢失
            </h3>
            <ul className="text-white list-disc flex flex-col gap-2">
              <li className="inline-flex gap-2 items-center">
                <div className="bg-warning w-2 h-2 rounded-full text-sm" />
                <span>通过定位技术，5监管提供技术支持。 系统实时监控资产</span>
              </li>
              <li className="inline-flex gap-2 items-center">
                <div className="bg-warning w-2 h-2 rounded-full text-sm" />
                <span>
                  设置电子围栏，当资产离开指定区域时，系统会自动报警，
                  提醒管理人员注意。
                </span>
              </li>
              <li className="inline-flex gap-2 items-center">
                <div className="bg-warning w-2 h-2 rounded-full text-sm" />
                <span>
                  系统实时监控资产的位置，记录资产的历史移动轨迹，方便
                  管理人员进行回溯和查询。
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-10 px-32">
        <div className="flex gap-20 justify-center">
          <div className="flex flex-col gap-10">
            <h3 className="text-20 relative mb-5">
              多种盘点方式 极大提升盘点效率
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="inline-flex gap-2 items-center">
                <div className="bg-blue w-2 h-2 rounded-full text-sm" />
                <span>支持全员盘点，扫码盘点，异地盘点，RFID盘点。</span>
              </li>
              <li className="inline-flex gap-2 items-center">
                <div className="bg-blue w-2 h-2 rounded-full text-sm" />
                <span>支持按照资产类别、按角色权限进行多维度盘点。</span>
              </li>
              <li className="inline-flex gap-2 items-center">
                <div className="bg-blue w-2 h-2 rounded-full text-sm" />
                <span>盘点结果一键自动生成。 </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-dark w-[616px] h-[250px]" />
        </div>
      </div>
      <div className="py-10 px-32 bg-white">
        <div className="flex gap-10 justify-center">
          <div className="bg-gray-dark w-[616px] h-[250px]" />
          <div className="flex flex-col gap-6">
            <h3 className="text-20 relative mb-5">固定资产全生命周期管理</h3>
            <ul className="flex flex-col gap-2">
              <li className="inline-flex gap-2 items-center">
                <div className="bg-warning w-2 h-2 rounded-full text-sm" />
                <span>
                  实现资产、设备从采购、入库、领用、归还、调拨、借用、维护、
                </span>
              </li>
              <li className="inline-flex gap-2 items-center">
                <div className="bg-warning w-2 h-2 rounded-full text-sm" />
                <span>维修、盘点、折旧及报废等各个环节的全生命周期管理。</span>
              </li>
              <li className="inline-flex gap-2 items-center">
                <div className="bg-warning w-2 h-2 rounded-full text-sm" />
                <span>支持历史资产数据批量导入，同时也支持导出数据。 </span>
              </li>
              <li className="inline-flex gap-2 items-center">
                <div className="bg-warning w-2 h-2 rounded-full text-sm" />
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
      <div className="py-10 px-32">
        <div className="flex gap-20 justify-center">
          <div className="flex flex-col gap-10">
            <h3 className="text-20 relative mb-5">资产数据智能分析</h3>
            <ul className="flex flex-col gap-2">
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
          <div className="bg-gray-dark w-[616px] h-[250px]" />
        </div>
      </div>
      <div className="bg-primary text-white text-base text-center">
        <Link href="/prescription" className="py-8 block">
          查看解决方案
        </Link>
      </div>
      <FreeTrial />
    </div>
  );
}

export default HomePage;
