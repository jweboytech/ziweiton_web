import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/layout/footer";

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
      <body className="antialiased h-screen flex flex-col">
        <main>{children}</main>
      </body>
    </html>
  );
}
