import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "紫维通官网",
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
      </body>
    </html>
  );
}
