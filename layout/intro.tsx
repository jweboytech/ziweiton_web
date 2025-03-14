"use client";

import Button from "@/components/button";
import { postFetcher } from "@/lib/request/fetcher";
import clsx from "clsx";
import { X } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useSWRMutation from "swr/mutation";

const FreeTrial = () => {
  const form = useForm();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOk, setIsOk] = React.useState(false);
  const { trigger } = useSWRMutation("/trial", postFetcher, {
    onSuccess() {
      form.reset();
      setIsOk(true);
    },
  });

  const toggleStatus = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsOk(false);
    }
  };

  const submitForm = (values) => {
    if (!values.name || !values.phone) {
      toast.error("请填写完整信息");
      return;
    }

    trigger(values);
  };

  return (
    <React.Fragment>
      <div className="bg-white pt-6 pb-2.5 md:py-16.5 flex flex-col gap-4 md:gap-7.5 justify-center items-center">
        <p className="text-sm md:text-28 text-center">
          仅需手机号即可免费试用，帮您减少资产闲置，简单又好上手
        </p>
        <Button
          variant="gradient"
          className="md:text-2xl md:w-46.5"
          onClick={toggleStatus}
        >
          免费试用
        </Button>
      </div>
      <div
        className={clsx(
          "fixed w-screen h-screen bg-black/45 left-0 top-0 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 z-100" : "opacity-0 -z-10"
        )}
      >
        <div className="bg-white rounded-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-4/5 md:w-120 p-6">
          <X
            className={clsx(
              "absolute right-6 top-6 cursor-pointer",
              !isOk ? "block" : "hidden"
            )}
            onClick={toggleStatus}
          />
          {!isOk ? (
            <form
              className="grid grid-cols-1 gap-3 "
              onSubmit={form.handleSubmit(submitForm)}
            >
              <div className="flex flex-col gap-6">
                <h2 className="font-medium tex-lg md:text-2xl">免费试用</h2>
                <div className="flex items-center gap-2 md:gap-5.5 border border-[#E5E5E5]/80 bg-blue-light rounded py-2.5 px-3.5">
                  <label className="text-sm w-24">您的姓名</label>
                  <input
                    {...form.register("name")}
                    className="outline-none placeholder:text-gray placeholder:text-sm w-full"
                    placeholder="请输入"
                  />
                </div>
                <div className="flex items-center gap-2 md:gap-5.5 border border-[#E5E5E5]/80 bg-blue-light rounded py-2.5 px-3.5 h-11">
                  <label className="text-sm w-24">联系电话</label>
                  <input
                    {...form.register("phone")}
                    className="outline-none placeholder:text-gray placeholder:text-sm w-full h-11"
                    placeholder="请输入"
                  />
                </div>
                <Button fullWidth type="submit">
                  开通试用
                </Button>
              </div>
            </form>
          ) : (
            <div>
              <h2 className="font-medium tex-base md:text-2xl text-center">
                提交成功
              </h2>
              <p className="py-4 text-sm md:text-lg">
                您的专属客户经理将在24小时内联系您
              </p>
              <Button fullWidth onClick={toggleStatus}>
                确定
              </Button>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FreeTrial;
