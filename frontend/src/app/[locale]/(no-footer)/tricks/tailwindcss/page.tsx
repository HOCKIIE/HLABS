import React from 'react';
import { Title, SubTitle} from '@/components/layouts/tricks/Object';
import { CodeBlock, PreviewCodeBlock } from '@/components/layouts/tricks/CodeBlock';

const page = () => {
    const installation = `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
`;
const configuration = `/** @type { import('tailwindcss/tailwind-config') } */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",,
        "./app/**/*.{js,ts,jsx,tsx}", 
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [() => { }],
};`
const usage = `@tailwind base;
@tailwind components;
@tailwind utilities;`;
const alerts = `export default function Alerts() {
    return (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Info!</strong>
            <span className="block sm:inline">This is an alert message.</span>
        </div>
    )
}`;
const badge = `export default function Badge() {
    return (
        <span className="inline-block bg-green-200 text-green-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
            New
        </span>
    )
}`;
const breadcrumb = `export default function Breadcrumb() {
    return (
        <nav className="flex"  aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li>
                    <a href="#" className="text-gray-700 hover:text-gray-900 inline-flex items-center">Home</a>
                </li>
                <li>
                    <a href="#" className="text-gray-700 hover:text-gray-900 inline-flex items-center">Library</a>
                </li>
                <li>
                    <a href="#" className="text-gray-500 inline-flex items-center" aria-current="page">Data</a>
                </li>
            </ol>
        </nav>
    )
}`
const buttonGroup = `export default function ButtonGroup() {
    return (
        <div className="inline-flex shadow-md rounded-lg">
            <button className="rounded-md px-5 py-2 dark:text-black min-w-30 max-w-35 bg-emerald-300 border border-emerald-400 hover:bg-emerald-400 focus:ring focus:ring-green-500/20 rounded-l-lg">Left</button>
            <button className="rounded-md px-5 py-2 dark:text-black min-w-30 max-w-35 bg-emerald-300 border border-emerald-400 hover:bg-emerald-400 focus:ring focus:ring-green-500/20">Middle</button>
            <button className="rounded-md px-5 py-2 dark:text-black min-w-30 max-w-35 bg-emerald-300 border border-emerald-400 hover:bg-emerald-400 focus:ring focus:ring-green-500/20 rounded-r-lg">Right</button>
        </div>
    )
}`;
const input = `export default function InputText() {
    return (
        <input type="text" className="dark:bg-dark-900 shadow-theme-xs focus:border-indigo-300 focus:ring-indigo-500/10 dark:focus:border-indigo-800 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:ring-3 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 disabled:bg-gray-50 disabled:border-gray-100 disabled:text-gray-500" placeholder="Enter text here"/>
    )
}`;
const colors = `<div class="flex gap-2">
    <div class="bg-sky-50 w-10 h-10 rounded-lg"></div>
    <div class="bg-sky-100 w-10 h-10 rounded-lg"></div>
    <div class="bg-sky-200 w-10 h-10 rounded-lg"></div>
    <div class="bg-sky-300 w-10 h-10 rounded-lg"></div>
    <div class="bg-sky-400 w-10 h-10 rounded-lg"></div>
    <div class="bg-sky-500 w-10 h-10 rounded-lg"></div>
    <div class="bg-sky-600 w-10 h-10 rounded-lg"></div>
    <div class="bg-sky-700 w-10 h-10 rounded-lg"></div>
    <div class="bg-sky-800 w-10 h-10 rounded-lg"></div>
    <div class="bg-sky-900 w-10 h-10 rounded-lg"></div>
    <div class="bg-sky-950 w-10 h-10 rounded-lg"></div>
</div>`;
const colorsArray = [
    {utility: 'bg-*', description: "Sets the background color of an element"},
    {utility: 'text-*', description: "Sets the text color of an element"},
    {utility: 'decoration-*', description: "Sets the decoration color of an element"},
    {utility: 'divide-*', description: "Sets the divide color of an element"},
    {utility: 'border-*', description: "Sets the border color of an element"},
    {utility: 'outline-*', description: "Sets the outline color of an element"},
    {utility: 'shadow-*', description: "Sets the shadow color of an element"},
    {utility: 'inset-shadow-*', description: "Sets the inset shadow color of an element"},
    {utility: 'ring-*', description: "Sets the ring color of an element"},
    {utility: 'inset-ring-*', description: "Sets the inset ring color of an element"},
    {utility: 'accent-*', description: "Sets the accent color of an element"},
    {utility: 'caret-*', description: "Sets the caret color of an element"},
    {utility: 'fill-*', description: "Sets the fill color of an element"},
    {utility: 'stroke-*', description: "Sets the stroke color of an element"}
];

const gallery  = `<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="">
    </div>
</div>
`;


const Indicator = `<div>
    <div class="divide-y divide-slate-300 dark:divide-slate-500 bg-slate-100 dark:bg-slate-800 rounded-2xl w-80">
    <div class="text-slate-500 p-4 flex justify-between"><span>Products</span> <div class="bg-indigo-500 w-6 h-6 rounded-full dark:bg-slate-600 flex items-center justify-center text-indigo-100 text-[10px]">99+</div></div>
    <div class="text-slate-500 p-4 flex justify-between"><span>Blogs</span> <div class="bg-indigo-500 w-6 h-6 rounded-full dark:bg-slate-600 flex items-center justify-center text-indigo-100 text-[10px]">99+</div></div>
    <div class="text-slate-500 p-4 flex justify-between"><span>Customers</span> <div class="bg-indigo-500 w-6 h-6 rounded-full dark:bg-slate-600 flex items-center justify-center text-indigo-100 text-[10px]">17</div></div>
</div>
</div>`;

const listGroup = `<div class="divide-y divide-slate-300 dark:divide-slate-500 bg-slate-100 dark:bg-slate-800 rounded-2xl w-80">
    <div class="text-slate-500 p-4 text-center">01</div>
    <div class="text-slate-500 p-4 text-center">02</div>
    <div class="text-slate-500 p-4 text-center">03</div>
</div>`;

const ConfirmModalProps = `export interface ConfirmModalProps {
    isOpen? : boolean;
    action? : string;
    onClose?: () => void;
    onAfterClose?: () => void;
    closeModal: () => void;
    toggleModal?: () => void;
    data : {
        confirm: () => Promise<void>;
        progress?:  boolean;
        successProgress?: () => void;
        response: { status: boolean | null, statusCode: number | null, message: string | null };
        error?: string | null;
    }
}`;
const pureModal = `<div class="inset-0 flex items-center justify-center p-5 overflow-y-auto modal">
    <div class="relative w-full max-w-[600px] rounded-3xl bg-white p-6 dark:bg-gray-900 lg:p-10">
        <button 
            type="button"
            title="Close"
            class="absolute right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:right-6 sm:top-6 sm:h-11 sm:w-11"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg >
        </button>
        <div class="text-center">
            <div class="relative flex items-center justify-center z-1 mb-7">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-slate-600 dark:text-slate-400" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="7" x2="12" y2="13"></line>
                    <circle cx="12" cy="17" r="1"></circle>
                </svg>
            </div>
            <h4 class="mb-2 text-2xl font-semibold text-gray-600 dark:text-slate-400 sm:text-title-sm">Title</h4>
            <p class="text-md leading-6 text-gray-500 dark:text-gray-400">
                Message
            </p>
            <div class="flex items-center justify-center w-full gap-3 mt-7">
                <button class="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-red-500 dark:bg-red-700 shadow-theme-xs hover:bg-red-600 dark:hover:bg-red-600 sm:w-auto">Confirm</button>
                <button class="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-slate-400 dark:bg-slate-700 shadow-theme-xs hover:bg-slate-600 dark:hover:bg-slate-600 sm:w-auto">Cancel</button>
            </div>
        </div>
    </div>
</div>`;
const modal = `import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ConfirmModalProps } from '@/types/ConfirmModal';

const fadeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const modalVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.5
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.25,
            ease: "easeOut", // use a string value compatible with Framer Motion
        }
    },
    exit: {
        opacity: 0,
        scale: 0.5,
        transition: {
            duration: 0.25,
            ease: "easeOut" // use a string value compatible with Framer Motion
        }
    },
};
const Spinner = () => <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent mr-2"></div>;

const Modal: React.FC<ConfirmModalProps> = ({isOpen, onAfterClose, closeModal, action, data}) => 
{
    const { confirm, progress, successProgress, response } = data ?? {};
    const [spinner, setSpinner] = useState<boolean>(false);

    return (
        <AnimatePresence onExitComplete={onAfterClose}>
            {isOpen && (
            <motion.div className="fixed inset-0 flex items-center justify-center p-5 overflow-y-auto modal z-99999">
                <motion.div 
                    className="modal-close-btn fixed inset-0 h-full w-full bg-gray-400/50 dark:bg-gray-600/50 backdrop-blur-[10px]"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={fadeVariants} 
                ></motion.div>
                <motion.div
                    className="relative w-full max-w-[600px] rounded-3xl bg-white p-6 dark:bg-gray-900 lg:p-10"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                >
                    <button 
                        type="button"
                        title="Close"
                        onClick={closeModalHandler}
                        className="absolute right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:right-6 sm:top-6 sm:h-11 sm:w-11"
                    >
                        <IoMdClose fontSize={26} />
                    </button>

                    <div className="text-center">
                        <div className="relative flex items-center justify-center z-1 mb-7">
                            <motion.span 
                                initial="hidden"
                                animate="visible"
                                variants={fadeVariants} 
                                className="bg-red-50 dark:bg-red-500/30 w-20 h-20 rounded-full flex items-center justify-center">
                                {icon}
                            </motion.span>
                        </div>
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">{title}</h4>
                        <motion.p 
                            className="text-md leading-6 text-gray-500 dark:text-gray-400"
                            initial="hidden"
                            animate="visible"
                            variants={fadeVariants} 
                        >
                            {message}
                        </motion.p>
                        <div className="flex items-center justify-center w-full gap-3 mt-7">
                            { action == "delete" && !response?.status &&
                                <button 
                                    title="Okay"
                                    type="button" 
                                    onClick={!deleteSuccess?ProcessingHandler:CloseModal}
                                    disabled={progress?true:false} 
                                    className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-yellow-500 dark:bg-yellow-700 shadow-theme-xs hover:bg-yellow-600 dark:hover:bg-yellow-600 sm:w-auto"
                                >
                                {spinner && <Spinner />} {btnTitle}
                                </button>
                            }
                        </div>
                    </div>
                </motion.div>
            </motion.div>)}
        </AnimatePresence>
    )
}
export default Modal;`;
const navbar = `<div class="flex justify-between bg-slate-100 dark:bg-slate-900 dark:text-slate-300">
    <ul class="nav-menu h-full hidden xl:flex items-center justify-center">
        <li><a href="" class="block py-4 px-6 text-xl transition-all ease-in-out duration-500 text-slate-800 dark:text-slate-300 font-silk-screen hover:text-indigo-700 dark:hover:text-emerald-500">Home</a></li>
        <li><a href="" class="block py-4 px-6 text-xl transition-all ease-in-out duration-500 text-slate-800 dark:text-slate-300 font-silk-screen hover:text-indigo-700 dark:hover:text-emerald-500">Products</a></li>
        <li><a href="" class="block py-4 px-6 text-xl transition-all ease-in-out duration-500 text-slate-800 dark:text-slate-300 font-silk-screen hover:text-indigo-700 dark:hover:text-emerald-500">Blogs</a></li>
        <li><a href="" class="block py-4 px-6 text-xl transition-all ease-in-out duration-500 text-slate-800 dark:text-slate-300 font-silk-screen hover:text-indigo-700 dark:hover:text-emerald-500">About Us</a></li>
        <li><a href="" class="block py-4 px-6 text-xl transition-all ease-in-out duration-500 text-slate-800 dark:text-slate-300 font-silk-screen hover:text-indigo-700 dark:hover:text-emerald-500">Contact Us</a></li>
        <li><a href="" class="block py-4 px-6 text-xl transition-all ease-in-out duration-500 text-slate-800 dark:text-slate-300 font-silk-screen hover:text-indigo-700 dark:hover:text-emerald-500">Career</a></li>
    </ul>
<div>`;
const pagination = `<div class="flex justify-center mt-6 space-x-2">
    <button type="button" title="Previous Page" class="flex items-center justify-center w-10 h-10 text-md shadow-1 rounded-full border text-gray-400 bg-slate-200 border-slate-300 hover:bg-slate-300 hover:text-slate-800 hover:border-slate-800 transition-colors duration-300 ease-linear disabled:opacity-50"><</button>
    <button type="button" class="flex items-center justify-center w-10 h-10 text-md shadow-1 rounded-full border text-gray-400 bg-slate-200 border-slate-300 hover:bg-slate-300 hover:text-slate-800 hover:border-slate-800 transition-colors duration-300 ease-linear">
        1
    </button>
    <button type="button" class="flex items-center justify-center w-10 h-10 text-md shadow-1 rounded-full border text-gray-400 bg-slate-200 border-slate-300 hover:bg-slate-300 hover:text-slate-800 hover:border-slate-800 transition-colors duration-300 ease-linear">
        2
    </button>
    <button type="button" class="flex items-center justify-center w-10 h-10 text-md shadow-1 rounded-full border text-gray-400 bg-slate-200 border-slate-300 hover:bg-slate-300 hover:text-slate-800 hover:border-slate-800 transition-colors duration-300 ease-linear">
        3
    </button>
    <button type="button" title="Next Page" class="flex items-center justify-center w-10 h-10 text-md shadow-1 rounded-full border text-gray-400 bg-slate-200 border-slate-300 hover:bg-slate-300 hover:text-slate-800 hover:border-slate-800 transition-colors duration-300 ease-linear disabled:opacity-50">></button>
</div>`;

const spinner = `<div class="h-10 w-10 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"></div>`;
const toast = `import { Toaster } from "react-hot-toast";`


  return (
    <>
        <Title>Tailwind CSS</Title>
        <div className="space-y-6">
            <div id="installation">
                <SubTitle>Installation</SubTitle>
                <CodeBlock language="powershell" filename='>_ Terminal' code={installation} />
            </div>
            <div id="configuration">
                <SubTitle>Configuration</SubTitle>
                <CodeBlock language="tsx" filename='tailwind.config.js' code={configuration} />
            </div>
            <div id="usage">
                <SubTitle>Usage</SubTitle>
                <CodeBlock language="css" filename='globals.css' code={usage} />
            </div>
            <div id="alerts">
                <SubTitle>Alerts</SubTitle>
                <CodeBlock language="tsx" filename='Alerts.tsx' code={alerts} />
            </div>
            <div id="badge">
                <SubTitle>Badge</SubTitle>
                <CodeBlock language="tsx" filename="Badge.tsx" code={badge} />
            </div>
            <div id="breadcrumb">
                <SubTitle>Breadcrumb</SubTitle>
                <CodeBlock language="tsx" filename="Breadcrumb.tsx" code={breadcrumb} />
            </div>
            <div id="button-group">
                <SubTitle>Button Group</SubTitle>
                <CodeBlock language="tsx" filename="ButtonGroup.tsx" code={buttonGroup} />
            </div>
            <div id="input">
                <SubTitle>Input</SubTitle>
                <CodeBlock language="tsx" filename="InputText.tsx" code={input} />
            </div>
            <div id="color">
                <SubTitle>Using color utilities</SubTitle>
                <p className='text-slate-700 dark:text-slate-400'>Use color utilities like bg-white, border-pink-300, and text-gray-950 to set the different color properties of elements in your design:</p>
                <div className="my-5 divide-y divide-slate-200 dark:divide-slate-500">
                    <div className='flex'>
                        <div className="text-slate-600 dark:text-slate-400 font-[500] min-w-48">Utility</div>
                        <div className="text-slate-600 dark:text-slate-400 font-[500]">Description</div>
                    </div>
                    {Array.from(colorsArray).map((item, index) => (
                        <div key={index} className='flex py-2'>
                            <div className="dark:text-slate-400/80 text-slate-600 min-w-48">{item.utility}</div>
                            <div className="dark:text-slate-400/80 text-slate-600">{item.description}</div>
                        </div>
                    ))}
                </div>
                <PreviewCodeBlock language="tsx" filename={`Colors.tsx`} code={colors} align="center" replace={[' class="flex gap-2"',' w-10 h-10 rounded-lg']}/>
            </div>
            <div id="gallery">
                <SubTitle>Gallery</SubTitle>
                <PreviewCodeBlock language="html" filename="Gallery.tsx" code={gallery} align="center"/>
            </div>
            <div id="indicators">
                <SubTitle>Indicators</SubTitle>
                <PreviewCodeBlock language="html" filename="Indicators.tsx" code={Indicator} align="center"/>
            </div>
            <div id="list-group">
                <SubTitle>List Group</SubTitle>
                <PreviewCodeBlock language="tsx" filename="ListGroup.tsx" code={listGroup} align="center"/>
            </div>
            <div id="modal">
                <SubTitle>Modal</SubTitle>
                {/* <CodeBlock language="tsx" filename="ConfirmModalProps.tsx" code={ConfirmModalProps} /> */}
                <PreviewCodeBlock language="tsx" filename="Modal.tsx" code={modal} previewCode={pureModal} />
            </div>
            <div id="navbar">
                <SubTitle>Navbar</SubTitle>
                <PreviewCodeBlock language="html" filename="Navbar.tsx" code={navbar} />
            </div>
            <div id="pagination">
                <SubTitle>Pagination</SubTitle>
                <PreviewCodeBlock language="html" filename="Pagination.tsx" code={pagination} />
            </div>
            <div id="spinner">
                <SubTitle>Spinner</SubTitle>
                <PreviewCodeBlock language="html" filename="Spinner.tsx" code={spinner} align="center"/>
            </div>
        </div>
    </>
  )
}

export default page