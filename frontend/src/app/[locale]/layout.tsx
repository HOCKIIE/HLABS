import type { Metadata } from "next";
import PageSettingContext from "@/contexts/PageSettingContext";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "next-themes"
import "./globals.scss";
import { Poppins } from "next/font/google";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Sidebar from "@/components/layouts/Sidebar";
import BackToTopButton from "@/components/atom/BackToTopButton";
import Mouse from "@/components/atom/Mouse";

const poppins = Poppins({weight: ['100','200','300','400','500','700','800','900'],subsets:['latin']})

export const metadata: Metadata = {
  title: "HLABS",
  description: "HLABS",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>)
{
  const locale = await getLocale();
  const messages = await getMessages();
  if (!routing.locales.includes(locale as "th"|"en")) notFound();

  return (
    <html lang="en" >
      <body
        className={`scroll-smooth bg-white dark:bg-gradient-to-tr dark:from-slate-950 dark:to-slate-800 dark:bg-no-repeat ${poppins.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PageSettingContext>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <Header />
              {children}
              <Footer />
              <BackToTopButton />
              <Sidebar />
              <Mouse />
            </NextIntlClientProvider>
          </PageSettingContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
