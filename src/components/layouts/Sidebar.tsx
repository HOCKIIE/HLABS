"use client"
import { Link } from "@/i18n/routing";
import { RiCloseLargeFill } from "react-icons/ri";
import menuItem from "../../assets/menuItem.json";
import {useGlobal} from "@/contexts/PageSettingContext";

  
export default function Sidebar()
{
    const {isSidebarOpen, toggleSidebar} = useGlobal();
    const handleLinkClick = () => toggleSidebar();
      
    return (<>
        <div className={`sidebar ${isSidebarOpen?`open`:``}`}>
            <div className={`top-0 right-0 py-3 bg-white/60 backdrop-blur dark:bg-black/60 dark:backdrop-blur-md h-full z-[300]`}>
                <div className="btn-close flex justify-end pe-4">
                    <button onClick={handleLinkClick}>
                        <RiCloseLargeFill size={'28px'} className="text-slate-700 dark:text-slate-300" />
                    </button>
                </div>
                <ul>
                    {menuItem.map((v,k)=>
                        <li key={k}><Link onClick={handleLinkClick} href={v.href} className="block item w-full py-4 px-10 font-silk-screen text-slate-800 dark:text-slate-300 dark:hover:text-emerald-500">{v.name}</Link></li>
                    )}
                </ul>
            </div>
        </div>
    </>)
}