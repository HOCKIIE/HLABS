"use client";
import { useGlobal } from "@/contexts/PageSettingContext";
import { useEffect, useRef } from "react";

export default function Mouse()
{

    const { myCursor, cursorStyle } = useGlobal();

    // ✅ ใช้ ref เพื่อแยกตำแหน่งของ DOM element ออกจาก state
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    const pos = useRef({ x: 0, y: 0 });
    const target = useRef({ x: 0, y: 0 });
    const frame = useRef<number>(0);

    // เมื่อ myCursor เปลี่ยน ให้เปลี่ยน target
    useEffect(() => {
        target.current.x = myCursor.x;
        target.current.y = myCursor.y;
    }, [myCursor]);

    // ✅ ใช้ animation loop ที่ลื่นกว่า React render
    useEffect(() => {
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const animate = () => {
        pos.current.x = lerp(pos.current.x, target.current.x, 0.15);
        pos.current.y = lerp(pos.current.y, target.current.y, 0.15);

        const cursor = cursorRef.current;
        const dot = dotRef.current;

        if (cursor) {
            cursor.style.visibility = "visible";
            cursor.style.top = `${pos.current.y}px`;
            cursor.style.left = `${pos.current.x}px`;
            cursor.style.borderStyle = cursorStyle.borderStyle;
            cursor.style.borderWidth = cursorStyle.borderWidth;
            cursor.style.backgroundColor = cursorStyle.backgroundColor;
            cursor.style.transform = cursorStyle.transform;
        }

        if (dot) {
            dot.style.top = `${pos.current.y}px`;
            dot.style.left = `${pos.current.x}px`;
            dot.style.visibility =
            cursorStyle.borderWidth === "1px" ? "visible" : "hidden";
            dot.style.transform = "translate(-50%, -50%)";
        }

        frame.current = requestAnimationFrame(animate);
    };

    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current!);
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
