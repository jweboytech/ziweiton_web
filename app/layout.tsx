import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased h-screen flex flex-col overflow-hidden">
        <main className="w-full overflow-x-hidden ">{children}</main>
      </body>
    </html>
  );
}
