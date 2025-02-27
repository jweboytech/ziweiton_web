export interface SectionProps {
  title: string;
}

const Section = ({ title }: SectionProps) => {
  return (
    <div className="relative">
      <div className="bg-blue h-[376px]">
        <h2 className="text-white text-28 text-center py-15">{title}</h2>
      </div>
      <div className="absolute top-[170px] left-0 w-full border-b border-gray-light">
        <div className="bg-white rounded px-9 py-[86px] mx-auto w-fit">
          <ul className="grid grid-cols-3 gap-20">
            <li className="flex flex-col items-center gap-5">
              <div className="w-[144px] h-42 bg-gray mb-1" />
              <span className="text-20">高效盘点</span>
              <p className="text-sm">
                支持支持多地资产统一管理，实时追踪设备状态。
              </p>
            </li>
            <li className="flex flex-col items-center gap-5">
              <div className="w-[144px] h-42 bg-gray mb-1" />
              <span className="text-20">高效盘点</span>
              <p className="text-sm">
                支持支持多地资产统一管理，实时追踪设备状态。
              </p>
            </li>
            <li className="flex flex-col items-center gap-5">
              <div className="w-[144px] h-42 bg-gray mb-1" />
              <span className="text-20">高效盘点</span>
              <p className="text-sm">
                支持支持多地资产统一管理，实时追踪设备状态。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section;
