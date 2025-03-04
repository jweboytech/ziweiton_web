import clsx from "clsx";
import React from "react";
import Button from "./button";

const CustomerService = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleToggleStatus = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <div
      className={clsx(
        "absolute bottom-24 right-0 cursor-pointer transition-width duration-300 ease-in-out flex w-[194px]"
        // isOpen ? "w-[194px]" : "w-[52px]"
      )}
      onClick={handleToggleStatus}
    >
      <div className="w-13.5 h-38.5 bg-primary rounded-tl-2xl rounded-bl-2xl text-white px-3 py-3 break-all text-center absolute top-1/2 -translate-y-1/2 -left-13.5">
        <span className="text-[#FFFDFD] text-lg">咨询客服</span>
      </div>
      <div className="border-l border-t border-b border-l-primary border-t-primary border-b-primary rounded-tl-xl rounded-bl-xl bg-white flex-1 px-4 pt-5 pb-2">
        <div className="text-gray text-base flex items-center gap-2 justify-center py-4 border-b border-gray-light">
          <div className="w-3 h-3 bg-gray" />
          <span>13888888888</span>
        </div>
        <div className="py-7 flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-2 items-center px-4">
            <div className="w-26 h-26 bg-gray" />
            <div className="text-gray text-base">微信咨询</div>
          </div>
          <Button>在线客服</Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
