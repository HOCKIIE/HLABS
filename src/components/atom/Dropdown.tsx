"use client"
import Link from "next/link"

const Dropdown = ({item,open}:any) => {
    return (<>
    {item && <div className={`${!open?`hidden`:''} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 absolute`}>
        {item.map((v:any|string[],k:number)=>
            <Link href={v.href} key={k} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{v.name}</Link>
        )}
    </div>}
    </>);
}

export default Dropdown;