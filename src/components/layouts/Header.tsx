"use client"
import { Link } from "@/i18n/routing"
import ThemeModeSwitch from "../atom/ThemeModeSwitch";
import Logo from "../atom/Logo";
import { useEffect, useState } from "react";
import MenuBtn from "../atom/MenuBtn";
import {useTranslations} from 'next-intl';


const MenuItems = [
    {
        name:"Portfolio",
        href:"/portfolio",
        key:"portfolio"
    },
    {
        name:"Curriculum Vitae",
        href:"/cv",
        key:"cv"
    },
    {
        name:"Tricks",
        href:"/tricks",
        key:"tricks"
    },
    {
        name:"Contact",
        href:"/contact",
        key:"contact"
    }
]

export default function Header(){
    
    const [stiky, setSticky] = useState(false);
    const scrollHeader = () =>  setSticky(window.scrollY >= 170 ? true : false);
    const t = useTranslations('header');

    useEffect(()=>{
        window.addEventListener('scroll',scrollHeader);
        return()=>{ window.addEventListener('scroll',scrollHeader); }
    },[])

    return (<>
        <div className={`header py-2 xl:py-3 z-[200] ${stiky?`sticky bg-white/60 backdrop-blur-md dark:bg-black/60 dark:backdrop-blur-md transition-all duration-300 ease-linear top-0`:``}`}>
            <div className="container">
                <div className="flex justify-between">
                    <div className="">
                        <Link href="/" className="block"><Logo/></Link>
                    </div>
                    <ul className="nav-menu h-full hidden xl:flex items-center justify-center">
                        {MenuItems.map((v,k)=>
                            <li key={k}><Link href={v.href} className="item block py-4 px-10 text-xl transition-all ease-in-out duration-500 text- text-slate-800 dark:text-slate-300 font-silk-screen hover:text-indigo-700 dark:hover:text-emerald-500">{t(v.key)}</Link></li>
                        )}
                    </ul>
                    <div className="mode flex items-center gap-2">
                        <ThemeModeSwitch />
                        <MenuBtn />
                    </div>
                </div>
            </div>
        </div>
    </>)
}