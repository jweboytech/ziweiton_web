import MainLayout from "@/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "紫维通-固定资产管理系统多行业可用-点击免费试用",
  description:
    "紫维通-国内领先的固定资产管理系统解决方案厂商，具有全行业全场景服务经验，帮助互联网、零售连锁、酒店、生产制造等行业提升资产管理盘点效率和成本",
  keywords:
    "免费固定资产系统、固定资产管理系统、二维码固定资产管理系统、资产盘点管理系统、固定资产管理软件、固定资产管理系统平台、rfid固定资产盘点系统、盘点软件、设备管理系统、仓库管理系统",
};

const Layout = ({ children }: BaseProps) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
