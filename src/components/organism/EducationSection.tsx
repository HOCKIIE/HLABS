"use client"

import education from "../../assets/exp/education.json";
import SafeHTML from "../molecule/SafeHTML";


export default function EducationSection(){
    return (
    <>
    <section>
        <div className="container">
            <div className="grid grid-cols-12 mt-20">
                <div className="col-span-12"><h3 className="text-center text-4xl font-bold text-slate-800 dark:text-slate-200 -tracking-tighter">EDUCATION</h3></div>
            </div>
            <div className="grid grid-cols-12 gap-2 xl:gap-0 xl:border border-gray-400 mt-10">
                {education.map(({date,qualificationHTML,institutionHTML},k) =>
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
                                <SafeHTML className="text-lg text-indigo-400 dark:text-emerald-600 font-[950] font-roboto-mono" html={qualificationHTML} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="element-widget">
                            <div className="element-p">
                                <SafeHTML className="text-slate-900 dark:text-gray-300 font-roboto-mono tracking-tight" html={institutionHTML} />
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <div className="mt-40"></div>
        </div>
    </section>
    </>)
}