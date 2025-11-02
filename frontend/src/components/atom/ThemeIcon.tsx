"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

export default function ThemeIcon() {
    const { resolvedTheme } = useTheme(); // ✅ ใช้ resolvedTheme ดีกว่า theme
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // ❌ ป้องกัน SSR render (เพราะตอน SSR ไม่มี window)
    if (!mounted) return null;

    // ✅ render หลัง mount เท่านั้น
    if (resolvedTheme === "dark") return <MdOutlineDarkMode className="w-[20px] h-[20px]" />;
    if (resolvedTheme === "light") return <MdOutlineLightMode className="w-[20px] h-[20px]" />;
    return <RiComputerLine className="w-[20px] h-[20px]" />;
}
