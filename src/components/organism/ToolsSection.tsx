
import items from "../../assets/exp/tools.json";
import { ToolsCard } from "../molecule/SkillCard";

export default function ToolsSection(){
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-12 gap-4 xl:gap-8 mt-40">
                    <div className="col-span-12">
                        <h3 className="text-4xl font-bold text-center text-slate-800 dark:text-slate-200 -tracking-tighter">TOOLS</h3>
                    </div>
                    {items.map((v,k)=><ToolsCard key={k} title={v.title} type={v.type} />)}
                </div>
            </div>
        </section>
    );

}