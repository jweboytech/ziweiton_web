"use client";

import Button from "@/components/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AdminPage = () => {
  const form = useForm();
  const router = useRouter();

  const submitForm = (values) => {
    if (values.username !== "13372531235" || values.password !== "wqb123456") {
      toast.error("请填写完整的账号信息");
      return;
    }

    toast.success("登录成功");
    router.push("/admin/customer");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <Card className="w-120">
          <CardHeader>
            <CardTitle>账号登录</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(submitForm)}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 md:gap-5.5 border border-[#E5E5E5]/80 bg-blue-light rounded py-2.5 px-3.5">
                  <label className="text-sm w-24">账号</label>
                  <input
                    {...form.register("username")}
                    className="outline-none placeholder:text-gray placeholder:text-sm w-full"
                    placeholder="请输入"
                  />
                </div>
                <div className="flex items-center gap-2 md:gap-5.5 border border-[#E5E5E5]/80 bg-blue-light rounded py-2.5 px-3.5">
                  <label className="text-sm w-24">密码</label>
                  <input
                    {...form.register("password")}
                    className="outline-none placeholder:text-gray placeholder:text-sm w-full"
                    placeholder="请输入"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full">
                    登录
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;
