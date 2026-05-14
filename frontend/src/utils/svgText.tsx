export const createGradientSVG = (text: string) => {
    return `
        <svg width="1200" height="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad">
                    <stop offset="0%" stop-color="#6366f1"/>
                    <stop offset="100%" stop-color="#ec4899"/>
                </linearGradient>
            </defs>
            <text
                x="50%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                font-size="80"
                font-weight="bold"
                fill="url(#grad)"
            >
            ${text}
            </text>
        </svg>
    `;
};

export const svgToPng = (svgString: string): Promise<string> => {
    return new Promise((resolve) => {
        const img = new Image();
        const blob = new Blob([svgString], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);

        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1200;
            canvas.height = 300;
            const ctx = canvas.getContext("2d");
            ctx?.drawImage(img, 0, 0);
            URL.revokeObjectURL(url);
            resolve(canvas.toDataURL("image/png"));
        };

        img.src = url;
    });
};