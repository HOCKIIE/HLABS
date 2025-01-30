"use client"
export default function Footer()
{
    return (
        <footer className="print:hidden">
            <div>
                <div className="bg-black">
                    <div className="container">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 md:col-span-5">
                                <div className="min-h-[100px] py-10">
                                    <div className="flex items-center">
                                        <div className="text-5xl font-bold">
                                            Available for select freelance opportunities
                                        </div>
                                    </div>
                                    <div className="mt-8 font-roboto-mono text-xl">
                                        <p>Have an exciting project you need help with?</p>
                                        <p>Send me an email or contact me via instant message!</p>
                                    </div>
                                    <div className="mt-20 font-roboto-mono">
                                        <div className="flex">
                                            <a href="mailto:spw.kgs@gmail.com" className="block text-2xl chonky-underline-indigo p-0 m-0 w-auto ps-1">spw.kgs@gmail.com </a>
                                        </div>
                                        <a href="https://www.instagram.com/hockiie" target="_blank" className="p-0 transition-all duration-500 hover:text-pink-500 hover:scale-[1.7]">&lt;Instagram/&gt;</a>
                                        <a href="https://www.instagram.com/hockiie" target="_blank" className="p-0 ms-1 transition-all duration-500 hover:text-blue-500">&lt;Messenger/&gt;</a>
                                        <a href="https://x.com/hocky_k" target="_blank" className="p-0 ms-1 transition-all duration-500 hover:text-white/60">&lt;X/&gt;</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6"></div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-500 dark:bg-gray-700 min-h-[15px] text-gray-950 dark:text-emerald-500">
                    <div className="container">
                        {/* <strong>&copy; {new Date().getFullYear()} HLABS</strong> */}
                        <strong>&copy; 2025 HLABS</strong>
                    </div>
                </div>
            </div>
        </footer>
    )
}