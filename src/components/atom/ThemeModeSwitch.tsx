"use client"
import { useTheme } from "next-themes";
import { useState, useRef, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

export default function ThemeModeSwitch()
{
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [dropdown, setDropdown] = useState<Boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const themeToggle = (set:string) => {
        setTheme(set)
        setDropdown(!dropdown)
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
            <button
                onClick={()=>setDropdown(!dropdown)}
                className='border border-slate-300 bg-slate-100 dark:border-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-600 transition-all duration-100 text-indigo-500 dark:text-emerald-500 p-2 text-2xl rounded-full'
            >
                {currentTheme=='dark'&&<MdOutlineDarkMode fontSize={'20px'}/>}
                {currentTheme=='light'&&<MdOutlineLightMode fontSize={'20px'}/>}
                {currentTheme=='system'&&<RiComputerLine fontSize={'20px'}/>}
            </button>
            <div id="dropdown" className={`${!dropdown?'hidden ':''}absolute mt-1 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a onClick={()=>themeToggle('light')} className={`flex gap-2 px-4 py-2${theme=='light'?` text-indigo-400 dark:text-emerald-500`:``} hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer`}><MdOutlineLightMode fontSize={'20px'}/> Light</a>
                    </li>
                    <li>
                        <a onClick={()=>themeToggle('dark')} className={`flex gap-2 px-4 py-2${theme=='dark'?` text-indigo-400 dark:text-emerald-500 `:``} hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer`}><MdOutlineDarkMode fontSize={'20px'}/> Dark</a>
                    </li>
                    <li>
                        <a onClick={()=>themeToggle('system')} className={`flex gap-2 px-4 py-2${theme=='system'?` text-indigo-400 dark:text-emerald-500 `:``} hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer`}><RiComputerLine fontSize={`20px`}/> System</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}