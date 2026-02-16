"use client"

import { useState } from 'react';
import SearchModal from '@/components/layouts/SearchModal';
import TricksLayout from '@/components/layouts/tricks/TricksLayout';
import ReactNext from './react-next/page';
import Tailwindcss from './tailwindcss/page';


const Tricks = () => 
{
    const [search, setSearch] = useState<boolean>(false);
    const closeModal = () => setSearch(false);
    const handleSearch = (value: boolean) => {
        setSearch(value)
    }

    return (
        <section>
            <TricksLayout>
                <div className='space-y-6'>
                    <ReactNext />
                    <Tailwindcss />
                </div>
            </TricksLayout>
            {search && <SearchModal open={search} closeModal={closeModal}/>}
        </section>
    );
}

Tricks.hideFooter = true;

export default Tricks;