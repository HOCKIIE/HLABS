"use client"
import { Link } from "@/i18n/routing";
import { RiCloseLargeFill } from "react-icons/ri";
import menuItem from "../../assets/menuItem.json";
import { useGlobal } from "@/contexts/PageSettingContext";
import { useLocale } from "next-intl";


export default function Sidebar()
{
    const {isSidebarOpen, toggleSidebar} = useGlobal();
    const handleLinkClick = () => toggleSidebar();

    const locale = useLocale();

    return (<>
        <div className={`sidebar ${isSidebarOpen?`open`:``} print:hidden`}>
            <div className={`top-0 right-0 py-3 bg-white/60 backdrop-blur dark:bg-black/60 dark:backdrop-blur-md h-full z-[300]`}>
                <div className="btn-close flex justify-end pe-4">
                    <button type="button" onClick={handleLinkClick} title="Sidebar Toggle">
                        <RiCloseLargeFill size={'28px'} className="text-gray-700 dark:text-gray-300" />
                    </button>
                </div>
                <ul>
                    {menuItem.map((v,k)=>
                        <li key={k}><Link onClick={handleLinkClick} href={v.href} className="block item w-full py-4 px-10 font-silk-screen text-gray-800 dark:text-gray-300 dark:hover:text-emerald-500">{v.name}</Link></li>
                    )}
                    <li className="languages ms-10 flex gap-1 mt-2">
                        <Link href="/" className={`border px-1 ${locale =="th"?"bg-gray-800 border-gray-800 text-gray-300 dark:text-emerald-500":"border-gray-400 text-gray-500"} dark:border-gray-300 rounded-md`} locale="th">TH</Link>
                        <Link href="/" className={`border px-1 ${locale =="en"?"bg-gray-800 border-gray-800 text-gray-300 dark:text-emerald-500 ":"border-gray-400 text-gray-500"} border-gray-800 dark:border-gray-300 rounded-md`} locale="en">EN</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>)
}