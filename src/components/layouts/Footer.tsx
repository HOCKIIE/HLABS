"use client"
export default function Footer()
{
    return (
        <footer>
            <div>
                <div className="bg-gray-500 dark:bg-gray-700 min-h-[15px] text-gray-950 dark:text-emerald-500">
                    <div className="container">
                        <strong>&copy; {new Date().getFullYear()} HLABS</strong>
                    </div>
                </div>
            </div>
        </footer>
    )
}