import Image from "next/image";

export interface SectionProps {
  title: string;
  items: SectionData[];
}

const Section = ({ title, items }: SectionProps) => {
  return (
    <div className="relative">
      <div className="h-[276px] bg-cover bg-no-repeat bg-[url(https://ziweiton.oss-cn-hangzhou.aliyuncs.com/banner5.webp)]">
        <h2 className="text-white text-28 text-center py-15">{title}</h2>
      </div>
      <div className="absolute top-[170px] left-0 w-full border-b border-gray-light px-48 ">
        <div className="bg-white rounded py-21.5 mx-auto w-fit">
          <ul className="grid grid-cols-3 gap-20">
            {items.map((item, index) => (
              <li key={index} className="flex flex-col items-center gap-5">
                <Image
                  src={item.icon}
                  width={180}
                  height={180}
                  alt={item.title}
                />
                <span className="text-20">{item.title}</span>
                <p className="text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section;
