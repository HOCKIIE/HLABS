import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['variant', '&:not(.light *)'],
  theme: {
    extend: {
      colors: {
        primaryColor: "#3562AE",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      display: {
        ruby: 'ruby',
      },
    },
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      padding: '1rem',
      // default breakpoints but with 40px removed
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1302px',
      },
    },
   
  },
  plugins: [],
};
export default config; 