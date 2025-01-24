import type { Metadata } from "next";
import PageSettingContext from "@/contexts/PageSettingContext";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "next-themes"
import "./globals.scss";
import { Poppins, Roboto, Roboto_Mono } from "next/font/google";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Sidebar from "@/components/layouts/Sidebar";
import BackToTopButton from "@/components/atom/BackToTopButton";

const roboto = Roboto({weight: ['400','700'],subsets:['latin']});
const robotoMono = Roboto_Mono({weight: ['400','700'],subsets:['latin']});
const poppins = Poppins({weight: ['100','200','300','400','500','700','800','900'],subsets:['latin']})

export const metadata: Metadata = {
  title: "HLABS",
  description: "HLABS",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>)
{
  const locale = await getLocale();
  const messages = await getMessages();
  if (!routing.locales.includes(locale as any | string[])) notFound();

  return (
    <html lang={locale}>
      <body className={`scroll-smooth bg-white dark:bg-gradient-to-tr dark:from-slate-950 dark:to-slate-800 ${poppins.className}`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <PageSettingContext>
              <NextIntlClientProvider locale={locale} messages={messages} >
                <Header />
                {children}
                <Footer />
                <BackToTopButton />
                <Sidebar />
              </NextIntlClientProvider>
            </PageSettingContext>
          </ThemeProvider>
      </body>
    </html>
  );
}
