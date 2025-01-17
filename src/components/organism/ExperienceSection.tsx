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

    const timelineData: TimelineEvent[] = [
        { title: "Primary School", date: "2005–2010", description: "Started school at [Name of School]. Achieved top marks in science and art." },
        { title: "High School", date: "2010–2015", description: "Discovered passion for mathematics and won a regional debate competition." },
        { title: "University", date: "2015–2019", description: "Earned a degree in [Field of Study] and completed a thesis on [specific topic]." },
        { title: "First Job", date: "2019–2021", description: "Worked as [Job Title] at [Company]. Learned project management skills." },
        { title: "Current Role", date: "2024–Present", description: "Joined [Company Name] and focusing on growth strategies." },
    ];

    
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [offset, setOffset] = useState<number | 0>();
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
              if (entry.isIntersecting) {
                setActiveIndex(index);
              }
            });
          },
          { threshold: 0.5 } // Trigger when 50% of the item is visible
        );
    
        refs.current.forEach((ref) => {
          if (ref) observer.observe(ref);
        });
    
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
                    <div className="col-span-12 mt-4"><h3 className="text-center text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 -tracking-tighter">EXPERIENCE{offset}</h3></div>
                    <div className="col-span-12">
                        
                        <ol className="relative border-s-[3px] ms-4 border-gray-400 dark:border-gray-400">
                            {exp.map(({date,position,description},index)=>
                                <li key={index} className="mb-20 ms-1">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full -start-[13px] ring-8 ring-gray-200 dark:ring-slate-800 dark:bg-gray-400">
                                        <svg className="w-2.5 h-2.5 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                        </svg>
                                    </span>
                                    <div className="ms-5 text-lg font-normal text-gray-800 dark:text-gray-500">{date}</div>
                                    <h3 className="ms-4 text-2xl font-semibold text-gray-900 dark:text-slate-300 my-3">{position}</h3>
                                    {description.list && <ul className="ms-4 mt-2">
                                        {description.list.map((v,k)=>{
                                            const sanitizedContent = DOMPurify.sanitize(v);
                                            return <li 
                                                key={index}
                                                data-index={index} 
                                                className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400" 
                                                dangerouslySetInnerHTML={{ __html: sanitizedContent}}
                                            ></li>
                                        })}
                                    </ul>
                                    }
                                </li>
                            )}            
                            {/* <li className="mb-20 ms-1">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-[13px] ring-8 ring-white dark:ring-slate-800 dark:bg-gray-400">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                </span>
                                <time className="ms-5 text-lg font-normal text-gray-800 dark:text-gray-500">March 2020 - March 2022</time>
                                
                                <h3 className="ms-4 text-2xl font-semibold text-gray-900 dark:text-slate-300 my-3">Full Stack Developer</h3>
                                <ul className="ms-4 mt-2">
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Design and analysis of then company website system</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Design the database structure</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Develop the website according follow requirement of the organization</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- <strong>Company Side</strong> (the company want to hire candidate) search for applicants, invite job interview on the website. <strong>Candidate Side</strong> (Candidate want to find a job) job search, accept/reject job interview invitation.</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- <strong>Develop website at-once.info</strong> website that collects business in Thailand . Division by category to trade between business and business together with the purpose of meeting business needs (B2B)</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Develop Frontend and back-end website with Laravel framework v7.x and upgrade to v8.x</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Develop UX, UI with Bootstrap v4</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Using jQuery, Ajax as a website development tooling</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Change jQuery to javascriptv and use Axios intead of Ajax</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Create and develop charts to summarize website traffic data and other contents with Highcharts - interactive javascript charts library</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Create and develop text editor that can generate HTML based on bootstrap formatting to support another of devices</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Learning of the JS Framework for develop Frontend better and more efficient</li>
                                </ul>
                            </li>
                            <li className="mb-20 ms-1">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-[13px] ring-8 ring-white dark:ring-slate-800 dark:bg-gray-400">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                </span>
                                <time className="ms-5 text-lg font-normal text-gray-800 dark:text-gray-500">August 2017 - February 2020</time>
                                
                                <h3 className="ms-4 text-2xl font-semibold text-gray-900 dark:text-slate-300 my-3">Developer</h3>
                                <ul className="ms-4 mt-2">
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Design the database structure</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Design and analysis system</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Create and develop web applications</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Develop by PHP language and writingin a framework style (Codeigniter, Laravel)</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Use jQuery</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Develop UX, UI to provide better experience for user</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Develop a profile website</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Develop E-Commerce website</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Develop the website according follow requirement of the organization</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Create credit card payment system with KBANK payment gatway</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Writing HTML to support seo</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Create login function with Facebook, Gmail</li>
                                    <li className="text-lg leading-8 font-narmal text-gray-500 dark:text-gray-400">- Changed from codeigniter v3 to Laravel v5.x and developt to v7.x</li>
                                </ul>
                            </li> */}
                        </ol>
                    </div>
                    <div className="col-span-12">
                    </div>
                </div>
            </div>
        </section>
        {/* <div className="container">
            <div className="flex flex-col items-center gap-8 py-8">
            {timelineData.map((event, index) => (
                <div
                key={index}
                data-index={index}
                ref={(el) => (refs.current[index] = el)}
                className={`w-4/5 p-6 rounded-lg shadow-lg transition-colors duration-300 min-h-[200px] ${
                    activeIndex === index ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
                >
                <div className="text-sm text-gray-700">{event.date}</div>
                <div>
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <p className="text-gray-800">{event.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div> */}
        </>
    )
}