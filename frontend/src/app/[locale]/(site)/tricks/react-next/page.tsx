import React from 'react';
import { Title, SubTitle } from '@/components/layouts/tricks/Object';
import { CodeBlock } from '@/components/layouts/tricks/CodeBlock';

const page = () => {
    const installation = `npx create-next-app@latest my-app --yes
cd my-app
npm run dev`;

const packages = `npm install next-intl next-themes react-icons dompurify framer-motion i18next motion`;

const darkmodeCode = `import { ThemeProvider } from "next-themes";

return <html>
    <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            ...Your Code
        </ThemeProvider>
    <body>
<html>`;

const ThemeModeSwitch = `import { useTheme } from "next-themes";
export default function ThemeModeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const themeToggle = (set:string) => {
        setTheme(set);
    }
    return {
        <button onClick={()=>themeToggle('light')}>Light</button>
        <button onClick={()=>themeToggle('dark')}>Dark</button>
        <button onClick={()=>themeToggle('system')}>System</button>
    }
}`;
    return (
        <>
            <Title>React/Next.Js</Title>
            <div className="space-y-5">
                <div id="installation">
                    <SubTitle>Installation</SubTitle>
                    <CodeBlock language="powershell" filename=">_ Terminal" code={installation} />
                </div>
                <div id="package">
                    <SubTitle>Packages</SubTitle>
                    <CodeBlock language="powershell" filename=">_ Terminal" code={packages} />
                </div>
                <div id="dark-mode">
                    <SubTitle>Dark Mode</SubTitle>
                    <div className="space-y-5">
                        <CodeBlock language="tsx" filename={`layout.tsx`} code={darkmodeCode} />
                        <CodeBlock language="tsx" filename={`ThemeModeSwitch.tsx`} code={ThemeModeSwitch} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page