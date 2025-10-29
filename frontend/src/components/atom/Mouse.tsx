"use client";
import { useGlobal } from "@/contexts/PageSettingContext";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function Mouse() 
{
    const { theme } = useTheme();
    const { myCursor, cursorStyle } = useGlobal();
    const { resolvedTheme } = useTheme(); // ✅ ใช้ resolvedTheme แทน theme
    const [isDark, setIsDark] = useState(false);

    // ✅ ใช้ ref เพื่อแยกตำแหน่งของ DOM element ออกจาก state
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    const pos = useRef({ x: 0, y: 0 });
    const target = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (resolvedTheme === "dark") setIsDark(true);
        else setIsDark(false);
    }, [resolvedTheme]);
    // เมื่อ myCursor เปลี่ยน ให้เปลี่ยน target
    useEffect(() => {
        target.current = { x: myCursor.x, y: myCursor.y };
    }, [myCursor]);

    // ✅ ใช้ animation loop ที่ลื่นกว่า React render
    useEffect(() => {
        const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

        const animate = () => {
            pos.current.x = lerp(pos.current.x, target.current.x, 0.15);
            pos.current.y = lerp(pos.current.y, target.current.y, 0.15);

            if (cursorRef.current) {
                cursorRef.current.style.visibility = 'visible',
                cursorRef.current.style.top = `${pos.current.y}px`;
                cursorRef.current.style.left = `${pos.current.x}px`;
                cursorRef.current.style.borderStyle = cursorStyle.borderStyle;
                cursorRef.current.style.borderWidth = cursorStyle.borderWidth;
                cursorRef.current.style.backgroundColor = cursorStyle.backgroundColor;
                cursorRef.current.style.transform = cursorStyle.transform;
            }

            if (dotRef.current) {
                dotRef.current.style.top = `${pos.current.y}px`;
                dotRef.current.style.left = `${pos.current.x}px`;
                dotRef.current.style.visibility = cursorStyle.borderWidth === "1px" ? "visible" : "hidden";
                dotRef.current.style.transform = "translate(-50%, -50%)"
            }
            requestAnimationFrame(animate);
        };

        animate();
    }, [cursorStyle]);

    return (
        <>
            <div
                ref={cursorRef}
                className={`mouse`}
                style={{visibility:'visible'}}
                />
            <div
                ref={dotRef}
                className="mouse-dot pointer-events-none fixed z-[9999]"
                style={{
                    top: 0,
                    left: 0,
                    transform: "translate(-50%, -50%)"
                }}
            />
        </>
    );
}
