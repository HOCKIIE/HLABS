import type { Metadata } from "next";
import "./globals.scss";
import PageSettingContext from "@/contexts/PageSettingContext";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "next-themes"
import { Poppins } from "next/font/google";

const poppins = Poppins({weight: ['100','200','300','400','500','700','800','900'],subsets:['latin']})

type Props = {
    params: Promise<{locale: 'th' | 'en';}>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const { locale } = await params;
    const baseUrl = 'https://hlabs-dev.vercel.app';

    const titles = {
        th: 'HLABS',
        en: 'HLABS'
    };

    return {
        title: titles[locale],
        icons: {
            icon: '/favicon.ico',
        },
        alternates: {
            canonical: `${baseUrl}/${locale}/`,
            languages: {
                th: `${baseUrl}/th/`,
                en: `${baseUrl}/en/`,
                ja: `${baseUrl}/ja/`,
            },
        }
    };
}

export default async function RootLayout({children}:{children: React.ReactNode}) {

    type Locale = (typeof routing.locales)[number];
    const locale = await getLocale();
    if (!routing.locales.includes(locale as Locale)) notFound();

    const messages = await getMessages();

    return (
        <html lang="en" >
            <body
                className={`${poppins.className} scroll-smooth bg-white dark:bg-linear-to-tr dark:from-slate-950 dark:to-slate-800 dark:bg-no-repeat`}
            >
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <PageSettingContext>
                        <NextIntlClientProvider messages={messages}>
                            {children}
                        </NextIntlClientProvider>
                    </PageSettingContext>
                </ThemeProvider>
            </body>
        </html>
    );
}
