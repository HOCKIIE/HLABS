"use client"
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function ThemeModeSwitch()
{
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
        <button
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-600 transition-all duration-100 text-slate-400 dark:text-slate-400 p-2 text-2xl rounded-full'>
            {currentTheme!='dark'?<MdOutlineDarkMode fontSize={'20px'}/>:<MdOutlineLightMode fontSize={'20px'}/>}
        </button>
    )
}