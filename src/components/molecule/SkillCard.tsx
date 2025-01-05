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
import { SiGithub, SiSourcetree, SiPostman, SiClickup, SiSublimetext, SiMui} from "react-icons/si";
import { RiNextjsFill, RiNodejsLine, RiReactjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";

type IconName = 'html5'|'css3'|'sass'|'bootstrap'|'tailwindCss'|'mui'|'mysql'|'php'|'codeigniter'|'laravel'|'jquery'|'phpMyAdmin'|
    'mongoDb'|'nodeJs'|'expressJs'|'reactJs'|'nextJs'|'javaScript'|'typeScript'|'vsCode'|'sublime'|'gitHub'|'sourceTree'|'postman'|
    'clickUp'|'fileZilla'|'xampp';
interface IconProps { type: IconName; s:String; c:String;}

const Icon: React.FC<IconProps> = ({ type,s,c }) => {
    // Mapping icons to conditions
    const df = '#1e293b';
    const  colour = c ? c : "#1e293b";

    const iconMap: Record<IconName,any> = {
        html5: <SiHtml5 size={s?`${s}`:'100'}   className="text-slate-800 dark:text-slate-400"/>,
        css3: <SiCss3 size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        sass: <SiSass size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        bootstrap: <SiBootstrap size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        tailwindCss: <SiTailwindcss size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        mui: <SiMui size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        mysql: <GrMysql size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        php: <SiPhp size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        codeigniter: <SiCodeigniter size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        laravel: <SiLaravel size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        phpMyAdmin: <SiPhpmyadmin size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        mongoDb: <SiMongodb size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        jquery: <SiJquery size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        nodeJs: <RiNodejsLine size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        expressJs: <SiExpress size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        reactJs: <RiReactjsFill size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        nextJs: <RiNextjsFill size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        javaScript: <SiJavascript size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        typeScript: <SiTypescript size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        vsCode: <VscVscode size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        sublime: <SiSublimetext size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        gitHub: <SiGithub size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        sourceTree: <SiSourcetree size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        postman: <SiPostman size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        clickUp: <SiClickup size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        fileZilla: <SiFilezilla size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>,
        xampp: <SiXampp size={s?`${s}`:'100'}  className="text-slate-800 dark:text-slate-300"/>
    };
    return <>{iconMap[type]}</>;
};

export const SkillCard = ({title,type,colour}:any) =>
{
    return (
        <div className="col-span-6 md:col-span-4 xl:col-span-2">
            <div className="rounded-3xl overflow-hidden relative p-6 bg-slate-100 dark:bg-slate-900 hover:dark:bg-slate-800 transition-all duration-500 hover:bg-indigo-200 hover:transform hover:scale-105">
                <p className="text-center text-xl mb-4 text-black dark:text-slate-300">{title}</p>
                <div className="flex items-center justify-center z-20"><Icon type={type} s="100" c="#1f2937" /></div>
                <div className="absolute top-6 left-5 opacity-[0.03]">
                    <Icon type={type} s="300" c="#9ca3af"  />
                </div>
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
                <div className="p-4"><Icon type={type} s="100" c="#1e293b" /></div>
            </div>
        </div>
    )
}

