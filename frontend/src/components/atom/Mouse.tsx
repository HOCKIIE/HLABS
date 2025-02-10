"use client"
import {useGlobal} from "@/contexts/PageSettingContext";

export default function Mouse()
{
    const {myCursor,cursorStyle} = useGlobal();

    return <>
        <div className="mouse" style={{
            visibility: 'visible',
            top: myCursor.y,
            left: myCursor.x,
            borderStyle: cursorStyle.borderStyle,
            borderWidth: cursorStyle.borderWidth,
            backgroundColor: cursorStyle.backgroundColor,
            transform: cursorStyle.transform
        }}></div>
        <div className="mouse-dot" style={{
            visibility: cursorStyle.borderWidth=='1px'?'visible':'hidden',
            top: myCursor.y,
            left: myCursor.x,
            transform: "translate(-50%, -50%)"
        }}></div>
    </>
}