"use client"
import { useRef, useEffect, useState } from "react";
import DOMPurify from "dompurify";
import exp from "../../assets/exp/experience.json"

interface TimelineEvent {
    title: string;
    date: string;
    description: string;
}

export default function ExperienceSection(){

   
    const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
    const [newElementHeights, setNewElementHeights] = useState<number[]>([]);
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    const [sum, setSum] = useState<number>(0);

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
        },{ threshold: 0.5 });// Trigger when 100% of the item is visible
        refs.current.forEach((ref) => { if (ref) observer.observe(ref) });
    
        return () => {
          refs.current.forEach((ref) => {
            if (ref) observer.unobserve(ref);
          });
        };
    }, []);

    return (
        <>
        <section className="bg-gray-200 dark:bg-slate-800 mt-40 py-10 experience">
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 mt-4"><h3 className="text-center text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 -tracking-tighter">EXPERIENCE</h3></div>
                    <div className="col-span-12">
                        <div className="relative border-s-[5px] border-slate-300 dark:border-slate-700">
                            <ol>
                                {exp.map(({date,position,description},index)=>
                                    <li 
                                        key={index}
                                        data-index={index}
                                        // @ts-ignore
                                        ref={(el) => (refs.current[index] = el)}
                                        className={`pb-20 ms-1 ${activeIndexes.includes(index)}`}
                                    >
                                        <span className={`absolute flex items-center justify-center w-6 h-6  rounded-full -start-[13px] transition-all duration-500 delay-[900ms] ring-8 ring-gray-200 dark:ring-slate-800 ${activeIndexes.includes(index)?`bg-blue-500 dark:bg-emerald-500`:` bg-gray-400 dark:bg-gray-400`} z-10`}>
                                            <svg className="w-2.5 h-2.5 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                            </svg>
                                        </span>
                                        <div className="ms-5 text-lg font-normal text-gray-800 dark:text-gray-500">{date}</div>
                                        <h3 className="ms-4 text-2xl font-semibold text-gray-900 dark:text-slate-300 my-3">{position}</h3>
                                        {description.list && <ul className="ms-4 mt-2">
                                            {description.list.map((v,k)=>{
                                                return <li 
                                                    key={k}
                                                    className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400" 
                                                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(v)}}
                                                ></li>
                                            })}
                                        </ul>
                                        }
                                    </li>
                                )}
                            </ol>
                            <div style={{ height: `${newElementHeights.reduce((a,b)=>a+b,0)}px`}}
                                className="absolute top-0 left-0 ms-[-4px] transition-[height] ease-in-out duration-[900ms] delay-[900ms] w-[5px] bg-blue-500 dark:bg-emerald-500"
                            >
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12">
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}