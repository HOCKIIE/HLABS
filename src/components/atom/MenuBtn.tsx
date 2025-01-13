"use client";
import { RiMenuLine } from "react-icons/ri";
import { useGlobal } from "@/contexts/PageSettingContext";

export default function MenuBtn(){
    const {toggleSidebar} = useGlobal();
    return (
        <div className="lg:hidden">
            <button className="border border-slate-300 dark:border-slate-600 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-600 focus:outline-none transition-all duration-100 text-slate-400 dark:text-slate-400 p-2 text-2xl rounded-full" onClick={toggleSidebar}>
                <RiMenuLine fontSize={'20px'}/>
            </button>
        </div>
    )
}