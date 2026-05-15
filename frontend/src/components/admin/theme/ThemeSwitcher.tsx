"use client";
import React, { useEffect, useState } from 'react';

export default function ThemeSwitcher()
{
    const [theme, setTheme] = useState('BLUE_THEME');
    useEffect(() => {
        const savedTheme =
        localStorage.getItem('admin-theme') || 'BLUE_THEME';
        document.documentElement.setAttribute('data-theme',savedTheme,);
        setTheme(savedTheme);
    }, []);

    const handleTheme = (value: string) => {
        document.documentElement.setAttribute('data-theme',value,);
        localStorage.setItem('admin-theme', value);
        setTheme(value);
    };
    return (
        <div className="flex flex-wrap gap-2">
            {theme && theme.map((item) => (
                <button
                    key={item}
                    onClick={() => handleTheme(item)}
                    className={['rounded-lg border px-4 py-2 text-sm transition-all',theme === item ? 'bg-primary text-primary-foreground border-primary':'hover:bg-primary/10',].join(' ')}
                >
                {item}
                </button>
            ))}
        </div>
    );
}