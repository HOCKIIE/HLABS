
// import items from "../../assets/exp/tools.json";
import { ToolsCard } from "../molecule/SkillCard";
import { IconType } from "@/types/IconType";
import { ToolsType } from "@/types/ToolsType";
import feApi from "@/services/api/feApi";
import useSWR from 'swr'

export default function ToolsSection(){
    const fetcher = (url: string) => feApi.get(url).then(res => res.data);
    const { data: items, isLoading, error } = useSWR(
        '/tools',
        fetcher,
        { 
            revalidateOnFocus: false,
            revalidateIfStale: true
        }
    );
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-12 gap-4 xl:gap-8 mt-40">
                    <div className="col-span-12">
                        <h3 className="text-4xl font-bold text-center text-slate-800 dark:text-slate-200 tracking-wider">TOOLS</h3>
                    </div>
                    {items && items.map((v:ToolsType, k:number) => <ToolsCard key={k} title={v.title} type={v.type as IconType} /> )}
                    {isLoading && Array(12).fill(null).map((_, i) => <ToolsCard key={i} loading={true} />)}
                    {error && <p className="text-center col-span-12 text-red-500">Failed to load tools.</p>}
                </div>
            </div>
        </section>
    );

}