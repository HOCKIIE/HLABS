import { useState,useEffect } from 'react';
import { useSearchParams  } from "next/navigation";
import { RiSearchLine } from "react-icons/ri";

const DEBOUNCE_DELAY = 500; // Delay in milliseconds
interface SearchProps {
    onSearch: (keyword: string) => void;
}
const SearchBar: React.FC<SearchProps> = ({onSearch}) => {
    const [input, setInput] = useState<string>("");
    const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
    const searchParams  = useSearchParams();
    const keyword = searchParams.get('keyword');

    useEffect(() => {
        if (typeof window !== "undefined" && keyword) {
            setInput(keyword as string);
        }
    }, [keyword]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);
        if (typingTimeout) clearTimeout(typingTimeout);
        const timeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString())
            params.set('keyword', value);
            params.toString();
        }, DEBOUNCE_DELAY);
        setTypingTimeout(timeout);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            const value = (e.target as HTMLInputElement).value;
            onSearch(value);
        }
    }

    return <div>
        <div className="relative">
            <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
                <RiSearchLine className="dark:text-slate-300"/>
            </div>                            
            <input 
                defaultValue={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                type="search" className="w-full ps-8 px-4 py-2 dark:bg-slate-700 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-3 focus:ring-blue-500" placeholder="Search"  
            />
        </div>
    </div>
}

export default SearchBar