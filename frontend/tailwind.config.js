/** @type {import('tailwindcss').Config} */

const config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                'primary-hover': 'var(--primary-hover)',
                'primary-foreground': 'var(--primary-foreground)',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            display: {
                ruby: 'ruby',
            },
            screens: {
                print: { raw: 'print' }
            },
        }
    },
    plugins: [],
};
export default config; 