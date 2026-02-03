"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBlock = ({ 
    language, filename, code 
}:{ 
    language?:string; filename:string; code: string 
}) => {

    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
    };
    const bgColor = "bg-slate-800 dark:bg-slate-950";

    return (
        <div className={`rounded-2xl overflow-hidden shadow-lg ${bgColor}`}>
            <div className={`flex items-center justify-between px-4 py-2 ${bgColor} border-b border-slate-700 dark:border-slate-900`}>
                <span className="text-sm text-slate-400 font-medium">{filename || "code.tsx"}</span>
                <button
                    onClick={handleCopy}
                    className="text-xs px-2 py-1 rounded bg-slate-700 hover:bg-slate-600 text-slate-300 transition"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
            <SyntaxHighlighter
                language={language || "tsx"}
                style={vscDarkPlus}
                className={`${bgColor} p-4 text-sm leading-relaxed`}
                customStyle={{ background: "transparent" }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
}

export const PreviewCodeBlock = ({ 
    language, filename, code, replace, align, previewCode
}:{ 
    language?:string; filename:string; code: string; replace?: string[]; align?:string; previewCode?:string;
}) => {

    const [copied, setCopied] = useState(false);
    const [replaceCode, setReplaceCode] = useState<string>(code);
    const [alignment, setAlignment] = useState<string>(``);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
    };
    const bgColor = "bg-slate-800 dark:bg-slate-950";
    useEffect(()=>{
        if(align){
            switch (align) {
                case 'center':
                    setAlignment(` flex justify-center`);
                    break;
                case 'right':
                    setAlignment(` flex justify-end`);
                    break;
                default:
                    setAlignment(``)
                    break;
            }
        }
    },[])


    useEffect(() => {  
        if (replace && replace.length > 0) {
            let modifiedCode = code;
            replace.forEach((item) => {
                const regex = new RegExp(item, "g");
                modifiedCode = modifiedCode.replace(regex, ``);
            });
            setReplaceCode(modifiedCode.trim());
        }
    },[]);

    return (
        <div className="mt-4">
            <div className="rounded-2xl overflow-hidden border space-y-1 bg-slate-100 dark:bg-slate-800 dark:border-slate-950">
                <div dangerouslySetInnerHTML={{ __html: previewCode ? previewCode : code }} className={`bg-checkerboard rounded-2xl px-4 py-10 m-1${alignment}`}/>
                <div className={`rounded-2xl overflow-hidden shadow-lg ${bgColor}`}>
                    <div className={`flex items-center justify-between px-4 py-2 ${bgColor} border-b border-slate-700 dark:border-slate-900`}>
                        <span className="text-sm text-slate-400 dark:text-slate-500 font-medium">{filename || "code.tsx"}</span>
                        <button
                            onClick={handleCopy}
                            className="text-xs px-2 py-1 rounded bg-slate-700 hover:bg-slate-600 text-slate-300 transition"
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                    <SyntaxHighlighter
                        language={language || "tsx"}
                        style={vscDarkPlus}
                        className={`${bgColor} p-4 text-sm leading-relaxed`}
                        customStyle={{ background: "transparent" }}
                    >
                        {replaceCode}
                    </SyntaxHighlighter>
                </div>

            </div>
        </div>
    );
};