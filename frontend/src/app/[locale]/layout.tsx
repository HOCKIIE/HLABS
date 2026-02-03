import type { Metadata } from "next";
import Head from "next/head";
import "./globals.scss";
import PageSettingContext from "@/contexts/PageSettingContext";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "next-themes"
import { Poppins } from "next/font/google";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Sidebar from "@/components/layouts/Sidebar";
import BackToTopButton from "@/components/atom/BackToTopButton";
import Mouse from "@/components/atom/Mouse";

import type { AppProps } from "next/app";

type NextPageWithLayout = AppProps["Component"] & {
  hideFooter?: boolean;
};

const poppins = Poppins({weight: ['100','200','300','400','500','700','800','900'],subsets:['latin']})

type Props = {
    params: {
        locale: 'th' | 'en' | 'ja';
    };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const { locale } = params;

    const baseUrl = 'https://hlabs-dev.vercel.app';

    const titles = {
        th: 'HLABS',
        en: 'HLABS',
        ja: 'HLABS'
    };

    // const descriptions = {
    //     th: 'ผู้ให้บริการเครื่องจักรอุตสาหกรรมคุณภาพสูงในประเทศไทย',
    //     en: 'A leading provider of industrial machinery and equipment in Thailand.',
    //     ja: 'タイにおける産業機械および設備の主要プロバイダーです。'
    // };

    return {
        title: titles[locale],
        // description: descriptions[locale],

        alternates: {
            canonical: `${baseUrl}/${locale}/`,
            languages: {
                th: `${baseUrl}/th/`,
                en: `${baseUrl}/en/`,
                ja: `${baseUrl}/ja/`,
            },
        },

        // openGraph: {
        //     title: titles[locale],
        //     description: descriptions[locale],
        //     url: `${baseUrl}/${locale}/`,
        //     siteName: 'HLABS',
        //     images: [
        //         {
        //             url: `${baseUrl}/og.jpg`,
        //             width: 1200,
        //             height: 630,
        //             alt: 'HLABS',
        //         },
        //     ],
        //     locale: locale === 'th' ? 'th_TH' : locale === 'ja' ? 'ja_JP' : 'en_US',
        //     type: 'website',
        // },

        // twitter: {
        //     card: 'summary_large_image',
        //     title: titles[locale],
        //     description: descriptions[locale],
        //     images: [`${baseUrl}/og.jpg`],
        // },

        // robots: {
        //     index: true,
        //     follow: true,
        // },
    };
}

export default async function RootLayout({children}:{children: React.ReactNode}) {

  const locale = await getLocale();
  if (!routing.locales.includes(locale as string)) notFound();

  const messages = await getMessages();

  return (
    <html lang="en" >
      <Head>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`scroll-smooth bg-white dark:bg-gradient-to-tr dark:from-slate-950 dark:to-slate-800 dark:bg-no-repeat ${poppins.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PageSettingContext>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </PageSettingContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
