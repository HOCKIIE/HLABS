import { 
    SiHtml5, 
    SiCss3, 
    SiPhp, 
    SiPhpmyadmin, 
    SiMongodb, 
    SiLaravel,
    SiCodeigniter,
    SiExpress, 
    SiTailwindcss, 
    SiBootstrap, 
    SiSass, 
    SiJavascript, 
    SiTypescript,
    SiJquery,
    SiFilezilla,
    SiXampp
} from "react-icons/si";
import { SiGithub, SiSourcetree, SiPostman, SiClickup, SiSublimetext} from "react-icons/si";
import { RiNextjsFill, RiNodejsLine, RiReactjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";

type IconName = 'html5'|'css3'|'sass'|'bootstrap'|'tailwindCss'|'mysql'|'php'|'codeigniter'|'laravel'|'jquery'|'phpMyAdmin'|
    'mongoDb'|'nodeJs'|'expressJs'|'reactJs'|'nextJs'|'javaScript'|'typeScript'|'vsCode'|'sublime'|'gitHub'|'sourceTree'|'postman'|
    'clickUp'|'fileZilla'|'xampp';
interface IconProps { type: IconName; }

const Icon: React.FC<IconProps> = ({ type }) => {
    // Mapping icons to conditions
    const iconMap: Record<IconName,any> = {
        html5: <SiHtml5 size="100" className="dark:text-slate-300"/>,
        css3: <SiCss3 size="100" className="dark:text-slate-300"/>,
        sass: <SiSass size="100" className="dark:text-slate-300"/>,
        bootstrap: <SiBootstrap size="100" className="dark:text-slate-300"/>,
        tailwindCss: <SiTailwindcss size="100" className="dark:text-slate-300"/>,
        mysql: <GrMysql size="100" className="dark:text-slate-300"/>,
        php: <SiPhp size="100" className="dark:text-slate-300"/>,
        codeigniter: <SiCodeigniter size="100" className="dark:text-slate-300"/>,
        laravel: <SiLaravel size="100" className="dark:text-slate-300"/>,
        phpMyAdmin: <SiPhpmyadmin size="100" className="dark:text-slate-300"/>,
        mongoDb: <SiMongodb size="100" className="dark:text-slate-300"/>,
        jquery: <SiJquery size="100" className="dark:text-slate-300"/>,
        nodeJs: <RiNodejsLine size="100" className="dark:text-slate-300"/>,
        expressJs: <SiExpress size="100" className="dark:text-slate-300"/>,
        reactJs: <RiReactjsFill size="100" className="dark:text-slate-300"/>,
        nextJs: <RiNextjsFill size="100" className="dark:text-slate-300"/>,
        javaScript: <SiJavascript size="100" className="dark:text-slate-300"/>,
        typeScript: <SiTypescript size="100" className="dark:text-slate-300"/>,
        vsCode: <VscVscode size="100" className="dark:text-slate-300"/>,
        sublime: <SiSublimetext size="100" className="dark:text-slate-300"/>,
        gitHub: <SiGithub size="100" className="dark:text-slate-300"/>,
        sourceTree: <SiSourcetree size="100" className="dark:text-slate-300"/>,
        postman: <SiPostman size="100" className="dark:text-slate-300"/>,
        clickUp: <SiClickup size="100" className="dark:text-slate-300"/>,
        fileZilla: <SiFilezilla size="100" className="dark:text-slate-300"/>,
        xampp: <SiXampp size="100" className="dark:text-slate-300"/>
    };
    return <>{iconMap[type]}</>;
};

export const SkillCard = ({title,type}:any) =>
{
    return (
        <div className="col-span-6 md:col-span-4 xl:col-span-2">
            <div className="rounded-3xl p-6 bg-slate-100 dark:bg-slate-900 hover:dark:bg-slate-800 transition-all duration-500 hover:bg-indigo-100 hover:transform hover:translate-y-2">
                <p className="text-center text-xl mb-4 text-black dark:text-slate-300">{title}</p>
                <div className="p-4"><Icon type={type} /></div>
            </div>
        </div>
    )
}

export const ToolsCard = ({title,type}:any) => 
{
    return (
        <div className="col-span-6 md:col-span-4 xl:col-span-2">
            <div className="rounded-3xl p-6 bg-slate-100 dark:bg-slate-900 hover:dark:bg-slate-800 transition-all duration-500 hover:bg-indigo-100 hover:transform hover:rotate-3">
                <p className="text-center text-xl mb-4 text-black dark:text-slate-300">{title}</p>
                <div className="p-4"><Icon type={type} /></div>
            </div>
        </div>
    )
}

