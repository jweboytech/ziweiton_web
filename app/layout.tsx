import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "紫维通-资管神器，专业固定资产管理系统-点击免费试用",
  description:
    "紫维通-国内领先固定资产管理系统_高效资产盘点软件，功能齐全：贵重资产定位防丢失，一物一码，全员盘点，上手简单，售后贴心，管家式实施部署，全行业可用，支持免费试用！",
  keywords:
    "免费固定资产系统、固定资产管理系统、二维码固定资产管理系统、资产盘点管理系统、固定资产管理软件、固定资产管理系统平台、rfid固定资产盘点系统、盘点软件、设备管理系统、仓库管理系统、资产云管理、资产云平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="baiduScript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?fdf1089f105d50981143f389f1a250dd";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `,
        }}
      />
      <body className="antialiased h-screen flex flex-col overflow-hidden">
        <main className="w-full overflow-x-hidden ">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
