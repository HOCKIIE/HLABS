"use client"
import { FaGraduationCap } from "react-icons/fa";
import { BiSolidInstitution } from "react-icons/bi";
import education from "../../assets/exp/education.json";
import SafeHTML from "../molecule/SafeHTML";


export default function EducationSection(){
    return (
    <>
    <section>
        <div className="container">
            <div className="grid grid-cols-12 gap-6 mt-20">
                <div className="col-span-12"><h3 className="text-center text-4xl font-bold text-slate-800 dark:text-slate-200 -tracking-tighter">EDUCATION</h3></div>
                {education.map(({date,qualificationHTML,institutionHTML},k) =>
                    <div key={k} className="col-span-12 md:col-span-6 xl:col-span-4 border border-indigo-300 dark:border-emerald-300 px-4 py-6 rounded-2xl transition-all duration-500 hover:ring-4 hover:ring-indigo-200 dark:hover:ring-emerald-300">
                        <h5 className="text-xl text-slate-800 dark:text-slate-200 leading-relaxed text-center font-roboto-mono">{date}</h5>
                        <div className="flex items-center">
                            <div className="w-10 h-10 text-indigo-700 dark:text-emerald-300 rounded-full bg-indigo-200 dark:bg-emerald-950 flex justify-center items-center overflow-hidden">
                                <FaGraduationCap fontSize={'23px'}/>
                            </div>
                            {/* <h4 className="text-lg text-indigo-400 dark:text-emerald-600 font-bold ms-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(qualification)}}></h4> */}
                            <SafeHTML className="text-lg text-indigo-400 dark:text-emerald-600 font-bold ms-2 font-roboto-mono" html={qualificationHTML} />
                        </div>
                        <div className="flex items-center mt-1">
                            <div className="w-10 h-10 text-indigo-700 dark:text-emerald-300 rounded-full bg-indigo-200 dark:bg-emerald-950 flex justify-center items-center overflow-hidden">
                                <BiSolidInstitution fontSize={'23px'}/>
                            </div>
                            <SafeHTML className="ms-2 text-slate-900 dark:text-gray-300 font-roboto-mono tracking-tight" html={institutionHTML} />
                            {/* <h4 className="ms-2 text-slate-900 dark:text-gray-300" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(institution)}}></h4> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
    </>)
}