import { useState, useEffect, useRef } from "react";
import Skill from "../../assets/exp/skill.json";
import { SkillCard } from "../molecule/SkillCard"
import { IconType } from "@/types/IconType";
import feApi from "@/services/feApi";

export default function SkillSection(){
    const [skills, setSkills] = useState([]);
    const didFetchSkills = useRef(false);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await feApi.get('/skill?display=home,resume');
                console.log("Fetched skills:", response.data);
                setSkills(response.data);
            } catch (error) {
                console.error("Error fetching skills:", error);
            }
        };
        if(didFetchSkills.current) return; 
        didFetchSkills.current = true;
        fetchSkills();
    }, []);
    return (
        <section className="backdrop-blur">
            <div className="container">
                <div className="grid grid-cols-12 gap-4 lg:gap-8 mt-20">
                    <div className="col-span-12">
                        <h3 className="text-5xl font-bold text-center text-slate-800 dark:text-slate-200 -tracking-tighter">SKILLS</h3>
                    </div>
                    {Skill.map((v,k)=> v.icon && <SkillCard key={k} title={v.title} type={v.type as IconType} /> )} 
                </div>
            </div>
        </section>
    )
}