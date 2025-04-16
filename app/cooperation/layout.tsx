import MainLayout from "@/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "紫维通-固定资产管理系统全国火热招商中-零成本高回报",
  description:
    "紫维通-全国各地面向组织/个人火热招商中，零成本高回报，政策好，携手共进开启财富之路-立即合作",
  keywords:
    "免费固定资产系统、固定资产管理系统、二维码固定资产管理系统、资产盘点管理系统、固定资产管理软件、固定资产管理系统平台、rfid固定资产盘点系统、盘点软件、设备管理系统、仓库管理系统",
};

const Layout = ({ children }: BaseProps) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
