"use client";

import React,{ use, useState } from "react";
import Button from "@/components/atom/Button";
import { HiOutlineDownload } from "react-icons/hi";
// import { usePDF } from 'react-to-pdf';
import { useGlobal } from "@/contexts/PageSettingContext";
import { useEffect } from "react";
import { ResumeHTML } from "./html";
import { usePathname } from "next/navigation";

export default function Resume(){
    const pathName = usePathname();
    const [downloadCV , setDownloadCV] = useState<Boolean>(false);
    const { setLoading } = useGlobal();
    // const { toPDF, targetRef } = usePDF({filename: 'CV - Suphawat Kongson.pdf', page:{ format:'a4', orientation:'p', margin:0 }});
    const env = process.env.NEXT_PUBLIC_ENV;
    const dev = process.env.NEXT_PUBLIC_URI_PREFIX_DEV;
    const prod = process.env.NEXT_PUBLIC_URI_PREFIX_PROD;
    const prefix = env ? dev: prod;
    const resume = prefix + '/download/RESUME - Suphawat Kongson.pdf';
    const DownloadResume =  () => {

    }
    // toPDF()
    // page.pdf({ path: 'CV - Suphawat Kongson.pdf', format: 'A4', printBackground: true })
    // setLoading(false);
    const handlerDownloadCV = async () => {
        window.open(`${pathName}/download`);
    }
    useEffect(() => {
        setTimeout(() => setLoading(false), 300);
    }, [setLoading]);
    useEffect(()=>{
        if(!downloadCV) return;
        setTimeout(()=>{
            handlerDownloadCV()
        },1000);
        setDownloadCV(false);
    },[downloadCV])
    return (<>
        <section className="cv">
            <div className="container print:pl-0 print:pr-0 print:m-0 print:max-w-full ptint:max-h-full">
                <div className="mt-40 mb-3 print:hidden">
                    <div className="flex justify-end gap-2">
                        <Button onClick={DownloadResume} download={true} href={resume} type="a">Download Resume <HiOutlineDownload className="ms-1"/></Button>
                        <Button onClick={()=>setDownloadCV(true)}>Download CV<HiOutlineDownload className="ms-1"/></Button>
                    </div>
                </div>
                <div className="page-break">
                    <ResumeHTML />
                </div>
            </div>
            <div className="mt-20 print:hidden"></div>
        </section>
    </>);
}