import { Input } from "@/components/ui/input";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

function CustomerPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Input placeholder="请输入客户名称" className="w-80" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>客户名称</TableHead>
            <TableHead>手机号码</TableHead>
            <TableHead>创建时间</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">007</TableCell>
            <TableCell>13178454578</TableCell>
            <TableCell>2025-04-03</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default CustomerPage;
