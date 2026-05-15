"use client"

import { useTheme } from "next-themes";
import { useState, useRef, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

export default function ThemeModeSwitch()
{
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [dropdown, setDropdown] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const themeToggle = (set:string) => {
        setTheme(set);
        setDropdown(!dropdown);
    }
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdown(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative">
            <button onClick={()=>setDropdown(!dropdown)}
                className='dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-100 text-indigo-500 dark:text-emerald-500 p-[6px] text-2xl rounded-full'
            >
                {currentTheme=='dark'&&<MdOutlineDarkMode className="w-5 h-5"/>}
                {currentTheme=='light'&&<MdOutlineLightMode className="w-5 h-5"/>}
                {currentTheme=='system'&&<RiComputerLine className="w-5 h-5"/>}
            </button>
            <div id="dropdown" className={`${!dropdown?'hidden ':''}absolute mt-1 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}>
                <div className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <div>
                        <button onClick={()=>themeToggle('light')} className={`flex w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer ${theme=='light'?`text-indigo-400 dark:text-emerald-500`:``}`}><MdOutlineLightMode fontSize={'20px'}/> Light</button>
                    </div>
                    <div>
                        <button onClick={()=>themeToggle('dark')} className={`flex w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer ${theme=='dark'?`text-indigo-400 dark:text-emerald-500`:``}`}><MdOutlineDarkMode fontSize={'20px'}/> Dark</button>
                    </div>
                    <div>
                        <button onClick={()=>themeToggle('system')} className={`flex w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer ${theme=='system'?`text-indigo-400 dark:text-emerald-500`:``}`}><RiComputerLine fontSize={`20px`}/> System</button>
                    </div>
                </div>
            </div>
        </div>
    )
}