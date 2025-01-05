"use client"
import { Link } from "@/i18n/routing"
import ThemeModeSwitch from "../atom/ThemeModeSwitch";
import Logo from "../atom/Logo";
import { useEffect, useState } from "react";

const MenuItems = [
    {
        name:"Experience",
        href:"/experience",
    },
    {
        name:"Tricks",
        href:"/tricks"
    },
    {
        name:"Contact",
        href:"/contact"
    }
]

export default function Header(){
    const [stiky, setSticky] = useState(false);
    const scrollHeader = () => {
        if(window.scrollY >= 170){
            console.log(window.scrollY )
            setSticky(true)
        }else{
            setSticky(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',scrollHeader);
        return()=>{ window.addEventListener('scroll',scrollHeader); }
    },[])
    return (<>
        <div className={`z-[200] ${stiky?`sticky bg-white/60 backdrop-blur-md dark:bg-black/60 dark:backdrop-blur-md transition-all duration-300 ease-linear top-0`:``}`}>
            <div className="container">
                <div className="flex justify-between">
                    <ul className="nav-menu h-full flex items-center justify-center ">
                        <li><Link href="/" className="block"><Logo/></Link></li>
                        {MenuItems.map((v,k)=>
                            <li key={k}><Link href={v.href} className="item py-4 px-10 text-2xl block text-black hover:text-indigo-700 dark:text-slate-400 tracking-widest dark:hover:text-emerald-400 dark:hover:drop-shadow-md">{v.name}</Link></li>
                        )}
                    </ul>
                    <div className="mode flex items-center">
                        <ThemeModeSwitch />
                    </div>
                </div>
            </div>
        </div>
    </>)
}