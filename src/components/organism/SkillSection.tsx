import Skill from "../../assets/exp/skill.json";
import { SkillCard } from "../molecule/SkillCard"

export default function SkillSection(){
    return (
        <section>
            <div className="grid grid-cols-12 gap-8 mt-40">
                <div className="col-span-12">
                    <h3 className="text-5xl font-bold text-center dark:text-slate-200 -tracking-tighter">SKILLS</h3>
                </div>
                {Skill.map((v,k)=> <SkillCard key={k} title={v.title} type={v.type} /> )} 
            </div>
        </section>
    )
}