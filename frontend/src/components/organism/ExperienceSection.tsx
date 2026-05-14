"use client"
import { useRef, useEffect, useState } from "react";
import exp from "../../assets/exp/experience.json";
import SafeHTML from "../molecule/SafeHTML";
import { ExperienceType } from "@/types/ExperienceType";
import useSWR from 'swr'
import feApi from "@/services/feApi";
import ExpEmptyItem from "../atom/ExpEmptyItem";

const fetcher = (url: string) => feApi.get(url).then(res => res.data);


export default function ExperienceSection(){

    const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
    const [newElementHeights, setNewElementHeights] = useState<number[]>([]);
    const timelineRef = useRef<HTMLDivElement | null>(null);
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    const bgColor: Record<string, string> = {
        red: "bg-red-500",
        blue: "bg-blue-500",
        green: "bg-green-500",
        purple: "bg-purple-500",
        pink: "bg-pink-500",
        orange: "bg-orange-600",
    };
    const bgColorClass:Record<string, string> = {
        red: "from-red-200 dark:from-red-950",
        blue: "from-blue-200 dark:from-blue-950",
        green: "from-green-200 dark:from-green-950",
        purple: "from-purple-200 dark:from-purple-950",
        pink: "from-pink-200 dark:from-pink-950",
        orange: "from-orange-200 dark:from-orange-950",
    }

    const { data: items, isLoading, error } = useSWR(
        '/experiences',
        fetcher,
        { 
            revalidateOnFocus: false,
            revalidateIfStale: true
        }
    );

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
                if (entry.isIntersecting) {
                    setActiveIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
                    const elementHeight = entry.target.getBoundingClientRect().height;
                    setNewElementHeights((prev) => {
                        const updated = [...prev];
                        updated[index] = elementHeight;
                        return updated;
                    });
                }
            });
        },{ threshold: 0.5 });// Trigger when 50% of the item is visible
        refs.current.forEach((ref) => { if (ref) observer.observe(ref) });
    
        return () => {
            refs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    useEffect(() => {
        const onResize = () => {
            const heights = refs.current.map((ref) => ref ? ref.getBoundingClientRect().height : 0);
            setNewElementHeights(heights);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <section className="bg-gray-200 dark:bg-slate-800 mt-40 py-10 experience">
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 mt-4"><h3 className="text-center text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 -tracking-tighter">EXPERIENCE</h3></div>
                    <div className="col-span-12">
                        <div className="relative border-s-[5px] border-slate-300 dark:border-slate-700">
                            <div ref={timelineRef} style={{ height: `${newElementHeights.reduce((a,b)=>a+b,0)}px`}}
                                className="absolute top-0 left-0 ms-[-4px] transition-[height] ease-in-out duration-[900ms] delay-[900ms] w-[5px] bg-indigo-500 dark:bg-emerald-500 z-1"
                            >
                            </div>
                            <div className="relative">
                                {isLoading && Array(4).fill(null).map((_, i) => <ExpEmptyItem key={i}/> )}
                                {exp.map(({date,position,company,underline,description}:ExperienceType,index:number)=> {
                                    const colorClass = underline.replace("chunky-underline-","");
                                    return(
                                        <div
                                            key={index}
                                            data-index={index}
                                            ref={(el) => { refs.current[index] = el; }}
                                            className={`font-roboto-mono grid pb-20 ms-1 ${activeIndexes.includes(index)}`}
                                        >
                                            <div className={`absulute flex items-center justify-center w-6 h-6 rounded-full ms-[-18px] transition-all duration-500 delay-[900ms] ring-8 ring-gray-200 dark:ring-slate-800 ${activeIndexes.includes(index)?`bg-indigo-500 dark:bg-emerald-500`:`bg-gray-400 dark:bg-gray-400`} z-[100] overflow-hidden`}>
                                                <svg className="w-2.5 h-2.5 text-white dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                                </svg>
                                            </div>
                                            <div className="ms-5 mt-[-1.7rem] flex">
                                                <div className="rounded-lg bg-gray-100 dark:bg-slate-900 overflow-hidden shadow pe-2 relative w-full md:w-auto">
                                                    <div className={`absolute w-[160px] h-[55px] bg-gradient-to-br ${bgColorClass[colorClass]} via-gray-100 to-gray-100 dark:via-slate-900 dark:to-slate-900 z-0`}></div>
                                                    <div className="py-3">
                                                        <div className="relative z-3 flex">
                                                            <div className={`w-[5px] ${bgColor[colorClass]} rounded-e-lg`}></div>
                                                            <div className="border-r border-gray-300 dark:border-gray-600 min-w-14 text-gray-600 dark:text-slate-300 hidden md:flex items-center justify-center">0{index+1}</div>
                                                            <div className="mx-4">
                                                                <h4 className="text-xl font-bold text-gray-600 dark:text-slate-300">{date}</h4>
                                                                <p className="text-gray-700 dark:text-slate-300 flex items-end"><span className="font-bold">@</span>{company}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="ms-4 text-2xl font-[950] text-gray-900 dark:text-slate-100 flex my-3">
                                                <span className={underline||''}>{position}</span>
                                            </div>
                                            {description.html && 
                                                <div className="ms-4 mt-2" >
                                                    {description.html.map((v:string,k:number)=>
                                                        <SafeHTML key={index+k} html={v} className="leading-8 font-narmal text-gray-500 dark:text-gray-400"/>
                                                    )}
                                                </div>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12">
                    </div>
                </div>
            </div>
        </section>
    )
}