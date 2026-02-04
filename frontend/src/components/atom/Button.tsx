import React from 'react';

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

const Button = ({children, className, onClick}:ButtonProps) => {
    const toggleClock = () => {
        console.log('Button clicked');
        if (onClick) {
            onClick();
        }
    }
    const finalClass = className || 'btn px-3 py-2 rounded-lg bg-indigo-500 text-slate-100 dark:text-slate-300 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 print:hidden flex items-center';
    return <button type="button" onClick={toggleClock} className={finalClass}>{children}</button>
}

export default Button