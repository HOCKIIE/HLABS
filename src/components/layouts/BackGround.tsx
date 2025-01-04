export default function BackGround()
{
    return (
        <div className="relative h-[100vh] block">
            <div className="circle-1 fixed opacity-50 dark:opacity-10 top-4 left-4 w-10 h-10 bg-gradient-to-r from-indigo-300 to-blue-300 dark:bg-indigo-950 rounded-full z-[-10]"></div>
            <div className="circle-2 fixed opacity-50 dark:opacity-10 top-4 right-4 w-40 h-40 bg-gradient-to-b from-indigo-300 to-blue-300 dark:bg-indigo-950 rounded-full z-[-10]"></div>
            <div className="circle-3 fixed opacity-50 dark:opacity-10 bottom-4 left-4 w-64 h-64 bg-gradient-to-r from-indigo-300 to-blue-300 dark:bg-indigo-950 rounded-full z-[-10]"></div>
            <div className="circle-4 fixed opacity-50 dark:opacity-10 bottom-4 right-4 w-16 h-16 bg-gradient-to-l from-indigo-300 to-blue-300 dark:bg-indigo-950 rounded-full z-[-10]"></div>
        </div>
    )
}