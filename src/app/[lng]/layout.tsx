import type { Metadata } from "next";
// import { ConfigProvider } from "antd";
import PageSettingContext from "@/contexts/PageSettingContext";
import { NextIntlClientProvider } from "next-intl";
// import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes"


import { Silkscreen } from "next/font/google";
import "./globals.css";
import BackGround from "@/components/layouts/BackGround";
import Header from "@/components/layouts/Header";

const SilkScreenFont = Silkscreen({
  variable:"--font-silkscreen",
  subsets:["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "H-LABS",
  description: "H-LABS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <PageSettingContext>
          <body className="dark:bg-slate-950">
            <NextIntlClientProvider>
              <Header />
              {children}
              <BackGround />
            </NextIntlClientProvider>
          </body>
        </PageSettingContext>
      </ThemeProvider>
    </html>
  );
}
