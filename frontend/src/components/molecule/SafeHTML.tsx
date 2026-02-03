"use client";

import DOMPurify from "dompurify";

interface Props {html:string; className:string}

const SafeHTML = ({html,className}:Props) => {
    if (typeof window === "undefined") return <div>Rendering not available on server.</div>;
    const safeHtml =  html ? DOMPurify.sanitize(html) : "";
    return <div className={className} dangerouslySetInnerHTML={{ __html: safeHtml }} />;
}
export default SafeHTML;