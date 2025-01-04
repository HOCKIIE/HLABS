export default function ExperienceSection(){
    return (
        <>
            <div className="grid grid-cols-12 gap-6 mt-40">
                <div className="col-span-12"><h3 className="text-center text-4xl font-bold text-slate-800 dark:text-slate-200 -tracking-tighter">EXPERIENCE</h3></div>
                <div className="col-span-12">
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white dark:border-blue-900 bg-blue-700"></div>
                            <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">April 2022 - December 2024</time>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-slate-300">Full Stack Developer</h3>
                            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">More <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg></a>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white dark:border-green-900 bg-green-700"></div>
                            <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">March 2020 - March 2022</time>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-slate-300">Full Stack Developer</h3>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                            <ul>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Design and analysis of then company website system</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Design the database structure</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Develop the website according follow requirement of the organization</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- <strong>Company Side</strong> (the company want to hire candidate) search for applicants, invite job interview on the website. <strong>Candidate Side</strong> (Candidate want to find a job) job search, accept/reject job interview invitation.</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- <strong>Develop website at-once.info</strong> website that collects business in Thailand . Division by category to trade between business and business together with the purpose of meeting business needs (B2B)</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Develop front-end and back-end website with Laravel framework v7.x and upgrade to v8.x</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Develop UX, UI with Bootstrap v4</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Using jQuery, Ajax as a website development tooling</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Change jQuery to javascriptv and use Axios intead of Ajax</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Create and develop charts to summarize website traffic data and other contents with Highcharts - interactive javascript charts library</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- create and develop text editor that can generate HTML based on bootstrap formatting to support another of devices</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Learning of the JS Framework for develop front-end better and more efficient</li>
                            </ul>
                        </li>
                        <li className="ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white dark:border-yellow-900 bg-yellow-700"></div>
                            <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">August 2017 - February 2020</time>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-slate-300">Developer</h3>
                            {/* <p className="text-lg font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p> */}
                            <ul>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Design the database structure</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Design and analysis system</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Create and develop web applications</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Develop by PHP language and writingin a framework style (Codeigniter, Laravel)</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Use jQuery</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Develop UX, UI to provide better experience for user</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Develop a profile website</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Develop E-Commerce website</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Develop the website according follow requirement of the organization</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Create credit card payment system with KBANK payment gatway</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- writing HTML to support seo</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Create login function with Facebook, Gmail</li>
                                <li className="text-lg font-narmal text-gray-500 dark:text-gray-400">- Changed from codeigniter v3 to Laravel v5.x and developt to v7.x</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}