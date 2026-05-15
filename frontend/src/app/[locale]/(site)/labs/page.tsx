import React from "react"

const page = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-12 h-[50vh]">
                <div className="col-span-12 my-10">
                    <h1 className="text-4xl text-gray-800 dark:text-gray-200 font-bold">LABS</h1>
                    <p className="text-gray-800 dark:text-gray-200">I build accessible, pixel-perfect digital experiences for the web.</p>
                    <div className="mt-5 space-y-3">
                        <div className="w-200 flex items-center cursor-pointer group">
                            <span className="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-500 dark:group-hover:bg-gray-200 transition-all group-hover:w-16 group-hover:bg-gray-800 group-focus-visible:w-16 group-focus-visible:bg-gray-200 motion-reduce:transition-none"></span>
                            <div className="text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">NestJs</div>
                        </div>
                        <div className="w-200 flex items-center cursor-pointer group">
                            <span className="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-500 dark:group-hover:bg-gray-200 transition-all group-hover:w-16 group-hover:bg-gray-800 group-focus-visible:w-16 group-focus-visible:bg-gray-200 motion-reduce:transition-none"></span>
                            <div className="text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Go Lang</div>
                        </div>
                        <div className="w-200 flex items-center cursor-pointer group">
                            <span className="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-500 dark:group-hover:bg-gray-200 transition-all group-hover:w-16 group-hover:bg-gray-800 group-focus-visible:w-16 group-focus-visible:bg-gray-200 motion-reduce:transition-none"></span>
                            <div className="text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Docker</div>
                        </div>
                        <div className="w-200 flex items-center cursor-pointer group">
                            <span className="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-500 dark:group-hover:bg-gray-200 transition-all group-hover:w-16 group-hover:bg-gray-800 group-focus-visible:w-16 group-focus-visible:bg-gray-200 motion-reduce:transition-none"></span>
                            <div className="text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">React Native</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 space-y-2">
                </div>
            </div>
        </div>
    )
}

export default page