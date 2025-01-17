import type { Metadata } from "next";
// import { ConfigProvider } from "antd";
import PageSettingContext from "@/contexts/PageSettingContext";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
// import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes"


import { Roboto } from "next/font/google";
import "./globals.scss";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Sidebar from "@/components/layouts/Sidebar";
import BackToTopButton from "@/components/atom/BackToTopButton";

// const SilkScreenFont = Silkscreen({variable:"--font-silkscreen",subsets:["latin"],weight: "400"});
const roboto = Roboto({weight: '400',subsets:['latin']})
// const jersey10 = Jersey_10({weight: '400',subsets: ['latin']})
// const pressStart2p = Press_Start_2P({weight:'400',subsets: ['latin']});
// const vt323 = VT323({weight:'400',subsets: ['latin']});
// const dotgothic16 = DotGothic16({weight:'400',subsets: ['latin']});
// const habdjet = Handjet({weight:'400',subsets: ['latin']})

export const metadata: Metadata = {
  title: "HLABS",
  description: "HLABS",
};

export default async function RootLayout({
  children,params:{lng}
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string }
}>) {
  const messages = await getMessages();
  if (!routing.locales.includes(lng as any)) {
    notFound();
  }
  return (
    <NextIntlClientProvider messages={messages} >
      <html lang={lng}>
        <body className={`scroll-smooth bg-white dark:bg-gradient-to-tr dark:from-slate-950 dark:to-slate-800 ${roboto.className}`}>
          <ThemeProvider attribute="class">
            <PageSettingContext lng={lng}>
              <Header />
              {children}
              {/* <BackGround /> */}
              <Footer />
              <BackToTopButton />
              <Sidebar />
            </PageSettingContext>
          </ThemeProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
