"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { getFetcher, putFetcher } from "@/lib/request/fetcher";
import useSWR from "swr";
import useSWRMtation from "swr/mutation";
import dayjs from "dayjs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import Button from "@/components/button";
import toast from "react-hot-toast";

function CustomerPage() {
  const [remark, setRemark] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const recordRef = React.useRef({});
  const { data, mutate } = useSWR("/trial/all", getFetcher);
  const { trigger } = useSWRMtation("/trial", putFetcher, {
    onSuccess() {
      mutate();
      setIsOpen(false);
      toast.success("保存成功");
    },
  });

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = evt.target;
    setRemark(value);
  };

  const handleEditRemark = (record: any) => () => {
    recordRef.current = record;
    setIsOpen(true);
    setRemark(record.remark || "");
  };

  const handleSubmit = () => {
    trigger({ remark, id: recordRef.current!.id });
  };

  const handleModalChange = (value) => {
    setIsOpen(value);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* <div className="flex justify-end">
        <Input placeholder="请输入客户名称" className="w-80" />
      </div> */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>客户名称</TableHead>
            <TableHead>手机号码</TableHead>
            <TableHead>备注</TableHead>
            <TableHead>创建时间</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="font-medium">{item.phone}</TableCell>
              <TableCell className="font-medium" width={200}>
                {item.remark}
              </TableCell>
              <TableCell className="font-medium">
                {dayjs(item.createAt).format("YYYY-MM-DD HH:mm:ss")}
              </TableCell>
              <TableCell className="font-medium">
                <span
                  className="text-primary cursor-pointer"
                  onClick={handleEditRemark(data[index])}
                >
                  修改备注
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={isOpen} onOpenChange={handleModalChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-6">编辑备注</DialogTitle>
            <div className="gap-4 flex-col flex">
              <Textarea
                placeholder="请输入备注"
                onChange={handleChange}
                className="h-40"
                value={remark}
              />
              <div className="flex justify-end">
                <Button onClick={handleSubmit}>保存</Button>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CustomerPage;
