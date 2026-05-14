import React from 'react'

const ExpEmptyItem = () => {
    return (
    <div className='grid pb-20 ms-1'>
        <div className={`absulute flex items-center justify-center w-6 h-6 rounded-full ms-[-18px] transition-all duration-500 delay-[900ms] ring-8 ring-gray-200 dark:ring-slate-800 bg-gray-400 dark:bg-gray-400 z-[100] overflow-hidden`}>
            <svg className="w-2.5 h-2.5 text-white dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </div>
        <div className="ms-5 mt-[-1.7rem] flex">
            <div className="rounded-lg bg-gray-100 dark:bg-slate-900 animate-pulse overflow-hidden shadow pe-2 relative">
                {/* <div className={`absolute w-[400px] h-[55px] bg-gradient-to-br from-gray-800 via-gray-100 to-gray-100 dark:via-slate-900 dark:to-slate-900 z-0`}></div> */}
                <div className="py-3">
                    <div className="relative z-3 flex w-[400px]">
                        <div className="border-r border-gray-300 dark:border-gray-600 min-w-14 text-gray-600 dark:text-slate-300 hidden md:flex items-center justify-center px-4">
                            <div className="w-full h-5 rounded-lg bg-slate-300 animate-pulse" />
                        </div>
                        <div className="mx-4 w-full">
                            <h4 className="flex">
                                <div className="w-full h-5 rounded-lg bg-slate-300 animate-pulse" />
                            </h4>
                            <p className="flex items-end w-20 mt-2">
                                <div className="w-full h-5 rounded-lg bg-slate-300 animate-pulse" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ms-4 w-[300px] flex my-5">
            <div className="w-full h-5 rounded-lg bg-slate-300 animate-pulse" />
        </div>
        <div className="ms-4 mt-2 space-y-5" >
            <div className="w-full h-5 rounded-lg bg-slate-300 animate-pulse" />
            <div className="w-[80%] h-5 rounded-lg bg-slate-300 animate-pulse" />
            <div className="w-[50%] h-5 rounded-lg bg-slate-300 animate-pulse" />
            <div className="w-full h-5 rounded-lg bg-slate-300 animate-pulse" />
            <div className="w-[90%] h-5 rounded-lg bg-slate-300 animate-pulse" />
            <div className="w-[60%] h-5 rounded-lg bg-slate-300 animate-pulse" />
            <div className="w-full h-5 rounded-lg bg-slate-300 animate-pulse" />
            <div className="w-[70%] h-5 rounded-lg bg-slate-300 animate-pulse" />
            <div className="w-[40%] h-5 rounded-lg bg-slate-300 animate-pulse" />
        </div>
    </div>
    )
}

export default ExpEmptyItem