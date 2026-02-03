import React from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Sidebar from "@/components/layouts/Sidebar";
import BackToTopButton from "@/components/atom/BackToTopButton";
import Mouse from "@/components/atom/Mouse";

export default async function NoFooterLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
            <BackToTopButton />
            <Sidebar />
            <Mouse />
        </>
    )
}