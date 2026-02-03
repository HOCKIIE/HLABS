"use client"

import React from 'react';
import { RiSearchLine } from "react-icons/ri";

const LeftMenu = ({
    onSearch
}: {
    onSearch: (value: boolean) => void;
}) => {
    const setSearch = () => { onSearch(true); }
    return (
    <>
        <div className="relative lg:text-sm lg:leading-6 mt-2">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <RiSearchLine className="text-gray-800 dark:text-slate-300"/>
            </div> 
            <input 
                onClick={()=>setSearch}
                type="search" 
                placeholder="Search"  
                className="w-full ps-8 px-4 py-2 text-gray-800 dark:bg-slate-700 border border-gray-500 rounded-lg shadow-sm" 
            />
        </div>
        <div className="mt-10">
            <h2 className='my-3 text-gray-800 dark:text-gray-200'>React/Next.Js</h2>
            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800 text-sm text-gray-500 dark:text-gray-400">
                <li><a href="#installation" className="block px-5 py-1">Installation</a></li>
                <li><a href="#packages" className="block px-5 py-1">Packages</a></li>
                <li><a href="#darkmode" className="block px-5 py-1">Dark Mode</a></li>
            </ul>
            <h2 className='my-3 text-gray-800 dark:text-gray-200'>Tailwind CSS</h2>
            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800 text-sm text-gray-500 dark:text-gray-400">
                <li><a href="#installation" className="block px-5 py-1">Installation</a></li>
                <li><a href="#configuration" className="block px-5 py-1">Configuration</a></li>
                <li><a href="#usage" className="block px-5 py-1">Usage</a></li>
                <li><a href="#alerts" className="block px-5 py-1">Alerts</a></li>
                <li><a href="#badge" className="block px-5 py-1">Badge</a></li>
                <li><a href="#breadcrumb" className="block px-5 py-1">Breadcrumb</a></li>
                <li><a href="#button-group" className="block px-5 py-1">Button Group</a></li>
                <li><a href="#input" className="block px-5 py-1">Input</a></li>
                <li><a href="#color" className="block px-5 py-1">Color</a></li>
                <li><a href="#gallery" className="block px-5 py-1">Gallery</a></li>
                <li><a href="#indicators" className="block px-5 py-1">Indicators</a></li>
                <li><a href="#list-group" className="block px-5 py-1">List Group</a></li>
                <li><a href="#modal" className="block px-5 py-1">Modal</a></li>
                <li><a href="#navbar" className="block px-5 py-1">Navbar</a></li>
                <li><a href="#pagination" className="block px-5 py-1">Pagination</a></li>
                <li><a href="#popover" className="block px-5 py-1">Popover</a></li>
                <li><a href="#progress" className="block px-5 py-1">Progress</a></li>
                <li><a href="#rating" className="block px-5 py-1">Rating</a></li>
                <li><a href="#sidebar" className="block px-5 py-1">Sidebar</a></li>
                <li><a href="#skelton" className="block px-5 py-1">Skelton</a></li>
                <li><a href="#spinner" className="block px-5 py-1">Spinner</a></li>
                <li><a href="#timeline" className="block px-5 py-1">Timeline</a></li>
                <li><a href="#toast" className="block px-5 py-1">Toast</a></li>
            </ul>
            <h2 className='my-3 text-gray-800 dark:text-gray-200'>CSS</h2>
            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800 text-sm text-gray-500 dark:text-gray-400">
                <li><a href="" className="block px-5 py-1">Text Ellipsis</a></li>
            </ul>
        </div>
    </>
    )
}

export default LeftMenu