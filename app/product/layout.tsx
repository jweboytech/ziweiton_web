import MainLayout from "@/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "紫维通-资产防丢失专家，上手简单固定资产管理系统-点击免费试用",
  description:
    "紫维通-国内领先固定资产管理系统_高效资产盘点软件，功能齐全：贵重资产定位防丢失，一物一码，全员盘点，上手简单，售后贴心，管家式实施部署，全行业可用，支持免费试用！",
  keywords:
    "免费固定资产系统、固定资产管理系统、二维码固定资产管理系统、资产盘点管理系统、固定资产管理软件、固定资产管理系统平台、rfid固定资产盘点系统、盘点软件、设备管理系统、仓库管理系统",
};

const Layout = ({ children }: BaseProps) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
