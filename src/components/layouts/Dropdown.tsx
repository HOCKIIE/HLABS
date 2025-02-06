import { Link } from "@/i18n/routing"
import { 
    SiTailwindcss
} from "react-icons/si";
import { RiNextjsFill, RiNodejsLine, RiReactjsFill } from "react-icons/ri";
interface props{
    sub:{sub:string|string[]},
    left:number
}
type IconName = 'reactJs'|'nextJs'|"tailwindCSS";
interface IconProps { type: IconName; s:string; }
const MenuIcon: React.FC<IconProps> = ({type,s}) => {
    const iconMap: Record<IconName,any> = {
        "reactJs": <RiReactjsFill size={s?`${s}`:'100'} className="text-slate-800 dark:text-slate-400" />,
        "nextJs": <RiNextjsFill size={s?`${s}`:'100'} className="text-slate-800 dark:text-slate-400" />,
        "tailwindCSS": <SiTailwindcss size={s?`${s}`:'100'} className="text-slate-800 dark:text-slate-400" />,
    }
    return (iconMap[type])?<>{iconMap[type]}</>:<></>;
}
const Dropdown = ({data}:any) => {
    return (<div className={`dropdown-item absolute rounded-lg overflow-hidden shadow-md -left-[40%] top-1/6 min-w-[300px] z-[200] transition-all duration-700 divide-y divide-indigo-50 ${data.dropdownToggle?`open`:``}`}>
        <div className="bg-white dark:bg-slate-800 min-h-100 p-3 ralative">
            <div className="absolute rounded-full w-2 h-2 border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 left-1 top-1"></div>
            <div className="absolute rounded-full w-2 h-2 border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 right-1 top-1"></div>
            <div className="dropdown-menu">
                {data.sub?.map((v:any,k:number)=>
                    <div key={k}>
                        <Link href={v.href} title={v.name} className="rounded-lg flex items-center p-2 hover:bg-slate-100 dark:hover:bg-slate-700">
                            <div className="p-2 rounded-lg bg-slate-300 dark:bg-slate-900 me-2"><MenuIcon type={v.key} s="20" /></div> {v.name}
                        </Link>
                    </div>
                )}
            </div>
            <div className="absolute rounded-full w-2 h-2 border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 left-1 bottom-1"></div>
            <div className="absolute rounded-full w-2 h-2 border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 right-1 bottom-1"></div>
        </div>
    </div>)

}
export default Dropdown;