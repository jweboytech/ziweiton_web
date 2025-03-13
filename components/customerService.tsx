"use client";

import clsx from "clsx";
import React from "react";
import Button from "./button";
import Image from "next/image";

const CustomerService = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggleStatus = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenCustomerService = () => {
    window.open(
      "https://affim.baidu.com/unique_65013548/chat?siteId=21739000&userId=65013548&siteToken=fdf1089f105d50981143f389f1a250dd",
      "_blank",
      "width=785,height=630,resizable=no,scrollbars=yes,left=100,top=100"
    );
  };

  return (
    <React.Fragment>
      <div
        className={clsx(
          "hidden md:flex absolute bottom-50 right-0 cursor-pointer transition-width duration-300 ease-in-out ",
          isOpen ? "translate-x-0" : "translate-x-49"
        )}
        onClick={handleToggleStatus}
      >
        <div className="w-13.5 h-38.5 bg-primary rounded-tl-2xl rounded-bl-2xl text-white px-3 py-3 break-all text-center absolute top-1/2 -translate-y-1/2 -left-13.5">
          <span className="text-[#FFFDFD] text-lg">客服咨询</span>
        </div>
        <div className="w-48.5 border-l border-t border-b border-l-primary border-t-primary border-b-primary rounded-tl-xl rounded-bl-xl bg-white flex-1 px-4 pt-5 pb-2">
          <div className="text-gray text-base flex items-center gap-2 justify-center py-4 border-b border-gray-light">
            <div className="w-3 h-3 bg-gray" />
            <span>13372531235</span>
          </div>
          <div className="py-7 flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-2 items-center px-4">
              {/* <QRCodeCanvas
                value="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/logo/customer_qrcode.jpg"
                size={104}
              /> */}
              <Image
                src="https://ziweiton.oss-cn-hangzhou.aliyuncs.com/customer_qrcode.jpg"
                alt="qrcode"
                width={104}
                height={104}
              />
            </div>
            <Button onClick={handleOpenCustomerService}>在线客服</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomerService;
