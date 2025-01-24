import Skill from "../../assets/exp/skill.json";
import { SkillCard } from "../molecule/SkillCard"

export default function SkillSection(){
    return (
        <section className="backdrop-blur">
            <div className="container">
                <div className="grid grid-cols-12 gap-4 lg:gap-8 mt-20">
                    <div className="col-span-12">
                        <h3 className="text-5xl font-bold text-center text-slate-800 dark:text-slate-200 -tracking-tighter">SKILLS</h3>
                    </div>
                    {Skill.map((v,k)=> v.icon && <SkillCard key={k} title={v.title} type={v.type} /> )} 
                </div>
            </div>
        </section>
    )
}