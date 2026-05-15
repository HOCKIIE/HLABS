"use client"
import { useEffect,useRef } from "react";
interface props {
    open: boolean;
    closeModal: () => void;
}
const SearchModal:React.FC<props> = ({open,closeModal}) => {

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select(); // Auto-select text
        }
    }, []);

    return <div className={`${!open?`hidden `:``}flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-9999 justify-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="bg-black/30 backdrop-blur-md absolute content-[''] w-full h-full" onClick={closeModal}></div>
        <div className="my-20 p-4 md:p-0 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 overflow-hidden">
                <div className="flex items-center justify-between border-b rounded-t dark:border-gray-600 border-gray-200">
                    <form className="w-full">   
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input 
                                ref={inputRef}
                                type="search" 
                                id="search" 
                                className="block w-full p-3 ps-10 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none" 
                                placeholder="Search" 
                                required 
                            />
                            <button 
                                onClick={closeModal}
                                type="button"
                                onSelect={()=>true}
                                className="text-gray-300 absolute inset-e-2.5 bottom-2.5 bg-blue-300 hover:bg-blue-400 rounded-lg text-xs px-2 py-1 dark:bg-blue-800 dark:hover:bg-blue-900"
                            >esc</button>
                        </div>
                    </form>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                    <p className="flex items-center justify-center text-gray-700 dark:text-gray-300">No recent searches</p>
                </div>
            </div>
        </div>
    </div>
}
export default SearchModal