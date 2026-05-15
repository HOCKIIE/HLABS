import { RiMenuLine } from "react-icons/ri";
import { useGlobal } from "@/contexts/PageSettingContext";

export default function MenuBtn(){
    const {toggleSidebar} = useGlobal();
    return (
        <div className="xl:hidden">
            <button 
                title="Sidebar toggle"
                type="button"
                className="hover:bg-slate-200 dark:hover:bg-slate-600 focus:outline-none transition-all duration-100 text-slate-400 dark:text-slate-400 p-1.5 text-2xl rounded-full" 
                onClick={()=>toggleSidebar()}
            >
                <RiMenuLine fontSize={'20px'}/>
            </button>
        </div>
    )
}