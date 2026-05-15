"use client"

import React, { Suspense } from 'react';
import { Outfit } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';
import AdminContext from '@/contexts/AdminContext';
import './globals.css';

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"],
    style: ["normal"],
});

export default function RootLayout({children}:{children: React.ReactNode})
{
    return (
        <Suspense fallback={null}>
            <html lang="en" suppressHydrationWarning={false} data-theme="BLUE_THEME">
                <AdminContext>
                    <body className={outfit.className} >
                        <ThemeProvider attribute="class" defaultTheme="system">
                            <div className="dark:bg-boxdark-2 dark:text-bodydark">
                                <Toaster position="top-right" reverseOrder={false} />
                                {children}
                            </div>
                        </ThemeProvider>
                    </body>
                </AdminContext>
            </html>
        </Suspense>
    );
}