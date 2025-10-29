"use client"
import { useState } from 'react';
import { RiSearchLine } from "react-icons/ri";
import SearchModal from '@/components/layouts/SearchModal';


export default function Tricks()
{
    const [search, setSearch] = useState<boolean>(false);
    const closeModal = () => setSearch(false);

    return (<>
        <section className="">
            <div className="container min-h-[90vh] pb-20">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h1 className="dark:text-slate-300 text-5xl uppercase mt-40 text-center mb-10">Tricks</h1>
                    </div>
                    <div className="col-span-2">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <RiSearchLine className="text-gray-800 dark:text-slate-300"/>
                            </div> 
                            <input 
                                onClick={()=>setSearch(true)}
                                type="search" className="w-full ps-8 px-4 py-2 text-gray-800 dark:bg-slate-700 border border-gray-500 rounded-lg shadow-sm" placeholder="Search"  
                            />
                        </div>
                        <div className="mt-10">
                            <h2 className='my-3 text-gray-800 dark:text-gray-200'>React.Js</h2>
                            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800 text-sm text-gray-500 dark:text-gray-400">
                                <li><a href="" className="block px-5 py-1">Installation</a></li>
                                <li><a href="" className="block px-5 py-1">Packages</a></li>
                            </ul>
                            <h2 className='my-3 text-gray-800 dark:text-gray-200'>Next.Js</h2>
                            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800 text-sm text-gray-500 dark:text-gray-400">
                                <li><a href="" className="block px-5 py-1">Installation</a></li>
                                <li><a href="" className="block px-5 py-1">Packages</a></li>
                                <li><a href="" className="block px-5 py-1">Dark Mode</a></li>
                            </ul>
                            <h2 className='my-3 text-gray-800 dark:text-gray-200'>Tailwind CSS</h2>
                            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800 text-sm text-gray-500 dark:text-gray-400">
                                <li><a href="" className="block px-5 py-1">Alerts</a></li>
                                <li><a href="" className="block px-5 py-1">Badge</a></li>
                                <li><a href="" className="block px-5 py-1">Breadcrumb</a></li>
                                <li><a href="" className="block px-5 py-1">Button Group</a></li>
                                <li><a href="" className="block px-5 py-1">Installation</a></li>
                                <li><a href="" className="block px-5 py-1">Input</a></li>
                                <li><a href="" className="block px-5 py-1">Color</a></li>
                                <li><a href="" className="block px-5 py-1">Gallerys</a></li>
                                <li><a href="" className="block px-5 py-1">Indicators</a></li>
                                <li><a href="" className="block px-5 py-1">List Group</a></li>
                                <li><a href="" className="block px-5 py-1">Modal</a></li>
                                <li><a href="" className="block px-5 py-1">Navbar</a></li>
                                <li><a href="" className="block px-5 py-1">Pagination</a></li>
                                <li><a href="" className="block px-5 py-1">Popover</a></li>
                                <li><a href="" className="block px-5 py-1">Progress</a></li>
                                <li><a href="" className="block px-5 py-1">Rating</a></li>
                                <li><a href="" className="block px-5 py-1">Sidebar</a></li>
                                <li><a href="" className="block px-5 py-1">Skelton</a></li>
                                <li><a href="" className="block px-5 py-1">Spinner</a></li>
                                <li><a href="" className="block px-5 py-1">Timeline</a></li>
                                <li><a href="" className="block px-5 py-1">Tost</a></li>
                            </ul>
                            <h2 className='my-3 text-gray-800 dark:text-gray-200'>CSS</h2>
                            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800 text-sm text-gray-500 dark:text-gray-400">
                                <li><a href="" className="block px-5 py-1">Text Ellipsis</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-10">
                        {/* <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <RiSearchLine className="dark:text-slate-300"/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
        {search&&<SearchModal open={search} closeModal={closeModal}/>}
    </>);
}