import Title from "@/components/title";
import Image from "next/image";

export interface SectionProps {
  title: string;
  items: SectionData[];
}

const Section = ({ title, items }: SectionProps) => {
  return (
    <div className="relative">
      <div className="h-[150px] md:h-[376px] bg-cover bg-no-repeat bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/mobile/banner5.webp)] md:bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/banner5.webp)]">
        <Title text={title} theme="white" className="py-9.5 md:py-15" />
      </div>
      <div className="relative -mt-12 md:-mt-54 left-0 w-full border-b border-gray-light px-4 pb-12.5 md:px-48 ">
        <div className="bg-white rounded py-3 md:py-21.5 mx-auto w-fit">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-20">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex flex-row md:flex-col items-center gap-6 md:gap-5 pl-2 pr-5.5 md:px-0"
              >
                <Image
                  src={item.icon}
                  width={180}
                  height={180}
                  alt={item.title}
                  className="w-21 h-21 md:w-45 md:h-45"
                />
                <div className="flex flex-col gap-1.5 md:px-2.5 md:items-center">
                  <span className="text-sm md:text-28">{item.title}</span>
                  <p className="text-xs md:text-20 text-gray">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section;
