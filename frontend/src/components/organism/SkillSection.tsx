import { SkillCard } from "../molecule/SkillCard"
import { IconType } from "@/types/IconType";
import feApi from "@/services/feApi";
import { SkillType } from "@/types/SkillType";
import useSWR from 'swr'

export default function SkillSection(){
    const fetcher = (url: string) => feApi.get(url).then(res => res.data);
    const { data: skills, isLoading, error } = useSWR(
        '/skill?display=home,resume',
        fetcher,
        { 
            revalidateOnFocus: false,
            revalidateIfStale: true
        }
    );
    return (
        <section className="backdrop-blur">
            <div className="container">
                <div className="grid grid-cols-12 gap-4 lg:gap-8 mt-20">
                    <div className="col-span-12">
                        <h3 className="text-5xl font-bold text-center text-slate-800 dark:text-slate-200 -tracking-tighter">SKILLS</h3>
                    </div>
                    {error && <p className="text-center col-span-12 text-red-500">Failed to load skills.</p>}
                    {isLoading && Array(18).fill(null).map((_, i) => <SkillCard key={i} loading={true} />)}
                    {skills && skills.map((v:SkillType,k: number)=> v.icon && <SkillCard key={k} title={v.title} type={v.type as IconType} /> )} 
                </div>
            </div>
        </section>
    )
}