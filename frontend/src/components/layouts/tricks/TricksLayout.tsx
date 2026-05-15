"use client"

import React,{ useState } from 'react';
import LeftMenu from './LeftMenu';

const TricksLayout = ({
    children,
}:{
    children: React.ReactNode;
}) => {
    const [search, setSearch] = useState<boolean>(false);

    const handleSearch = (value: boolean) => {
        setSearch(value)
    }
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="hidden lg:block fixed z-20 inset-0 top-20 left-[max(0px,calc(50%-41rem))] right-auto w-76 pb-10 pl-8 pr-6 overflow-y-scroll">
                    <div className="lg:text-sm lg:leading-6 relative">
                        <LeftMenu onSearch={handleSearch} />
                    </div>
                </div>
                <div className="lg:pl-68">
                    <main className="max-w-4xl mx-auto relative z-20 pt-10 xl:max-w-none">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}

export default TricksLayout