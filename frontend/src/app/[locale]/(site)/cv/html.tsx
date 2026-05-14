import Image from "next/image";
import skill from "../../../../assets/exp/skill.json";
import tools from "../../../../assets/exp/tools.json";
import education from "../../../../assets/exp/education.json";
import experince from "../../../../assets/exp/experience.json";
import { ExperienceType } from "@/types/ExperienceType";
import { EducationType } from "@/types/EducationType";

interface DefaultProp {
    title:string
}

export const ResumeHTML = () => {
    return(
        <div className="grid grid-cols-12 gap-0 bg-gray-100 dark:bg-slate-800 print:mt-0 overflow-hidden h-full">
            <div className="col-span-12 xl:col-span-4 print:col-span-4 bg-gray-500 dark:bg-gray-900 h-full">
                <div className="print:bg-gray-400">
                    <div className="profile-image min-h-[400px] print:min-h-[230px] flex items-center justify-center relative">
                        <div className="absolute w-[320px] md:w-[320px] print:w-[auto] h-full top-0 flex items-end justify-center bg-slate-700 rounded-b-full">
                            <div className="rounded-full mb-9 print:m-4 overflow-hidden h-[250px] w-[250px] print:h-[160px] print:w-[160px] flex items-center justify-center border-4 border-slate-200">
                                <Image src="/image/IMG_0281.jpg" alt="Suphawat Kongson" width="200" height="200" className="w-full" quality={100}/>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 block md:block xl:hidden">
                        <h1 className="text-center font-bold text-2xl bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                            SUPHAWAT KONGSON
                        </h1>
                        <h2 className="text-center text-lg print:text-[17px] font-roboto-mono text-slate-300 dark:text-gray-300 print:text-gray-800 font-bold font-silk-screen">
                            Software Engineer
                        </h2>
                    </div>
                </div>
                <div className="p-4 print:p-2 bg-gray-500 dark:bg-gray-900">
                    <div className="contact mt-10 print:mt-4">
                        <h3 className="uppercase font-bold flex items-center">
                            <div className="text-nowrap text-xl md:text-3xl text-gray-200 dark:text-gray-400 print:text-[17px]">Contact</div>
                            <div className="w-full ms-2 border-solid border-t-[3px] border-gray-300 dark:border-gray-700 right-0 top-[50%]"></div>
                        </h3>
                        <div className="mt-4">
                            <strong className="text-gray-200 dark:text-gray-400">Date of birth :</strong><p className="text-gray-300 dark:text-gray-400">10 / 08 / 1991</p>
                        </div>
                        <div className="mt-4">
                            <strong className="text-gray-200 dark:text-gray-400">Military status :</strong><p className="text-gray-300 dark:text-gray-400">Completed</p>
                        </div>
                        <div className="mt-4 print:text-sm">
                            <strong className="text-gray-200 dark:text-gray-400">Phone : </strong><br/>
                            <a href="tel:093-279-1392" className="text-gray-300 dark:text-gray-400">093-279-1392</a>
                        </div>
                        <div className="mt-4 print:text-sm">
                            <strong className="text-gray-200 dark:text-gray-400">Email :</strong><br/>
                            <a href="mail:spw.kgs@gmail.com" className="text-gray-300 dark:text-gray-400">spw.kgs@gmail.com</a>
                        </div>
                        <div className="mt-4 print:text-sm">
                            <strong className="text-gray-200 dark:text-gray-400">Address :</strong>
                            <p className="text-gray-300 dark:text-gray-400">65/87 Rachatani 6 village, Soi Saimai 56/2<br/> Saimai Sub-district, Saimai District <br/> Bangkok 10220</p>
                        </div>
                    </div>
                    <div className="skills mt-10 print:text-sm">
                        <h3 className="uppercase font-bold flex items-center">
                            <div className="text-nowrap text-xl md:text-3xl print:text-[17px] text-gray-200 dark:text-gray-400">Skill</div>
                            <div className="w-full ms-2 border-solid border-t-[3px] border-gray-300 dark:border-gray-700 right-0 top-[50%]"></div>
                        </h3>
                        <div className="flex flex-wrap gap-2 my-4">
                            {skill.map(({title}:DefaultProp,k:number) =><div key={k} className="inline-block text-indigo-500 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-900  px-3 py-1 print:px-2 print:py-0 rounded-full text-sm print:text-[10px]">{title}</div>)}
                        </div>
                        <div className="flex flex-wrap gap-2 my-4">
                            <strong className="text-gray-300 dark:text-gray-300 print:text-sm">Tools :</strong> 
                            {tools.map(({title}:DefaultProp,k:number) => <div key={k} className="text-base text-indigo-500 dark:text-indigo-200 bg-indigo-100 px-3 py-1 print:px-2 print:py-0 rounded-full dark:bg-indigo-900 print:text-[10px]">{title}</div>)}
                        </div>
                        <div>
                            <strong className="text-gray-300 dark:text-gray-300 print:text-sm">Typing :</strong>
                            <div className="text-gray-300 dark:text-slate-300 mt-2"><strong>Thai :</strong> 30 words/minute</div>
                            <div className="text-gray-300 dark:text-slate-300"><strong>English :</strong> 38 words/minute</div>
                        </div>
                    </div>
                    <div className="language mt-10">
                        <h3 className="uppercase font-bold flex items-center">
                            <div className="text-nowrap text-xl md:text-3xl text-gray-200 dark:text-gray-400 print:text-[17px]">Language</div>
                            <div className="w-full ms-2 border-solid border-t-[3px] border-gray-300 dark:border-gray-700 right-0 top-[50%]"></div>
                        </h3>
                        <div className="mt-3 text-gray-300 dark:text-slate-300 print:text-sm"><strong>Thai :</strong> Native</div>
                        <div className="text-gray-300 dark:text-slate-300 print:text-sm"><strong>English :</strong> Speak=Fair, Read=Good, Write=Good</div>
                    </div>
                    <div className="archievment mt-10">
                        <h3 className="font-bold flex items-center">
                            <div className="text-2xl text-gray-200 dark:text-gray-400 print:text-[17px]">Achievement, Project, and Other Experiences</div>
                            {/* <div className="w-full ms-2 border-solid border-t-[3px] border-gray-300 dark:border-gray-700 right-0 top-[50%]"></div> */}
                        </h3>
                        <div>
                            <ul className="text-sm leading-6 mt-2 text-gray-300 dark:text-gray-400">
                                <li><a href="https://www.at-once.info" rel="" target="_blank">www.at-once.info</a></li>
                                <li><a href="https://www.rent.co.th" rel="" target="_blank">www.rent.co.th</a><br/></li>
                                <li><a href="https://www.abilmente.com" rel="" target="_blank">www.abilmente.com</a><br/></li>
                                <li><a href="https://www.thaiprint.in.th" rel="" target="_blank">www.thaiprint.in.th</a><br/></li>
                                <li><a href="https://www.ymctranslation.com" rel="" target="_blank">www.ymctranslation.com</a><br/></li>
                                <li><a href="https://www.th.nissin-asia.com" rel="" target="_blank">www.th.nissin-asia.com</a><br/></li>
                                <li><a href="https://www.nankai.co.th" rel="" target="_blank">www.nankai.co.th</a><br/></li>
                                <li><a href="https://www.ibsmachinex.com" rel="" target="_blank">www.ibsmachinex.com</a><br/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 xl:col-span-8 print:col-span-8 h-full">
                <div className="bg-gray-300 dark:bg-slate-700 py-8 px-4 hidden md:hidden xl:block">
                    {/* <Title fontSize="160"/> */}
                    <h1 className="font-bold text-6xl bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                        SUPHAWAT KONGSON
                    </h1>
                    <h2 className="text-lg md:text-2xl xl:text-5xl text-gray-700 dark:text-gray-300 font-bold mt-2 font-roboto-mono">Software Engineer</h2>
                </div>
                <div className="w-full border-t-[3px] border-r-[800px] border-b-[50px] border-l-[50px] border-t-gray-300 border-r-gray-300 border-b-gray-100 border-l-gray-100 dark:border-t-slate-700 dark:border-r-slate-700 dark:border-b-slate-800 dark:border-l-slate-800 print:hidden"></div>
                <div className="p-4">
                    <div className="education">
                        <h3 className="uppercase  font-bold flex items-center">
                            <div className="text-nowrap text-xl md:text-3xl print:text-[17px] text-gray-700 dark:text-gray-400">Education</div>
                            <div className="w-full ms-2 border-solid border-t-[3px] border-gray-700 right-0 top-[50%]"></div>
                        </h3>
                        {education && <ul className="list-disc ms-4 text-gray-700 dark:text-gray-400 mt-6">
                            {education.map(({date,qualification,institution}:EducationType,k:number) =>
                                <li className="mt-3" key={k}>
                                    <div> {date} <br className="md:hidden"/><strong className="md:ms-0">{qualification}</strong></div>
                                    <div>{institution}</div>
                                </li>
                            )}
                            </ul>
                        }
                    </div>
                    <div className="work-wxperience">
                        <h3 className="uppercase font-bold flex items-center justify-between mt-10">
                            <div className="text-nowrap text-xl md:text-3xl print:text-[17px] text-gray-700 dark:text-gray-400">Work Experience</div>
                            <div className="w-full ms-2 border-solid border-t-[3px] border-gray-700 right-0 top-[50%]"></div>
                        </h3>
                        <div className="timeline ps-5 border-l-[3px] border-indigo-300 dark:border-indigo-800/40 ">
                            {experince.map((v:ExperienceType, k:number) => 
                                <div key={k} className="mt-4 relative">
                                    <div className="absolute ms-[-29px] top-1 w-4 h-4 bg-indigo-600 rounded-full"></div>
                                    <div className="text-base print:text-sm text-gray-700 dark:text-gray-400">
                                        <div className="">{v.date}: <strong>{v.company}</strong></div>
                                        <strong className="block py-1">{v.position}</strong>
                                        {v.description.list &&
                                            <ul className="list-disc leading-7 ms-4 ">
                                                {v.description.list.map((item:string, ke:number) =><li key={k+ke}>{item}</li>)}
                                            </ul>
                                        }
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}