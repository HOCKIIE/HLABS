"use client"

import { EducationType } from "@/types/EducationType";
import SafeHTML from "../molecule/SafeHTML";
import feApi from "@/services/api/feApi";
import useSWR from "swr";

const fetcher = (url: string) => feApi.get(url).then(res => res.data);


export default function EducationSection(){

    const { data:items, isLoading, error } = useSWR('/education', fetcher,{revalidateOnFocus: false, revalidateIfStale: true });

    return (
    <>
    <section>
        <div className="container">
            <div className="grid grid-cols-12 mt-20">
                <div className="col-span-12"><h3 className="text-center text-4xl font-bold text-slate-800 dark:text-slate-200 tracking-wider">EDUCATION</h3></div>
            </div>
            {!error && <div className="grid grid-cols-12 gap-2 xl:gap-0 xl:border border-gray-400 mt-10">
                {isLoading && Array(3).fill(null).map((_,k) => <div key={k} className="col-span-12 md:col-span-6 xl:col-span-4 border md:border border-gray-300 px-4 py-6 transition-all duration-500">
                    <div className="flex items-center">
                        <div className="element-widget w-[50%]">
                            <div className="element-h3">
                                <div className="w-full h-4 rounded-lg bg-slate-300 animate-pulse" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="element-widget w-full">
                            <div className="element-strong">
                                <div className="w-full h-4 rounded-lg bg-slate-300 animate-pulse" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="element-widget w-full">
                            <div className="element-p space-y-3">
                                <div className="w-full h-4 rounded-lg bg-slate-300 animate-pulse" />
                                <div className="w-[80%] h-4 rounded-lg bg-slate-300 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>)}
                {items && items.map(({date,institution,major,degree}:EducationType,k:number) => {
                    return (
                    <div key={k} className={`col-span-12 md:col-span-6 xl:col-span-4 border md:border border-gray-300 ${k>0?`xl:border-l`:``} px-4 py-6 transition-all duration-500`}>
                        <div className="flex items-center">
                            <div className="inline-widget-element">
                                <div className="element-h3">
                                    <h5 className="text-xl text-slate-800 dark:text-slate-200 leading-relaxed text-center font-roboto-mono">{date}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="element-widget">
                                <div className="element-strong" data-class-light="text-indigo-400" data-class-dark="text-emerald-600">
                                    {degree?.en && <SafeHTML className="text-lg text-indigo-400 dark:text-emerald-600 font-[950] font-roboto-mono" html={`${degree.en}`} /> }
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="element-widget">
                                <div className="element-p">
                                    {major?.en && <SafeHTML className="text-slate-900 dark:text-gray-300 font-roboto-mono tracking-tight" html={`${major.en}, ${institution.en}`} /> }
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                )}
            </div>}
            {error && <div className="text-red-500 dark:text-red-700">Failed to load experience data.</div>}
            <div className="mt-40"></div>
        </div>
    </section>
    </>)
}