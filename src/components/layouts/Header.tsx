import { Link } from "@/i18n/routing"
import ThemeModeSwitch from "../atom/ThemeModeSwitch";

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

    return (<header className="bg-slate-50 dark:bg-slate-800 sticky top-0 z-[200]">
        <div className="container">
            <div className="flex justify-between">
                <ul className="nav-menu h-full flex items-end justify-center ">
                    <li><Link className="text-5xl py-4 px-10 font-silk-screen tracking-[0.75rem] block dark:text-slate-400" href="/">H-LABS</Link></li>
                    {MenuItems.map((v,k)=>
                        <li key={k}><Link href={v.href} className="py-4 px-10 text-xl block font-silk-screen text-black dark:text-slate-400">{v.name}</Link></li>
                    )}
                </ul>
                <div className="mode flex items-center">
                    <ThemeModeSwitch />
                </div>
            </div>
        </div>
    </header>)
}