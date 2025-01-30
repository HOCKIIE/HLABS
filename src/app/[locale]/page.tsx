"use client"
import ExperienceSection from "@/components/organism/ExperienceSection"
import SkillSection from "@/components/organism/SkillSection";
import ToolsSection from "@/components/organism/ToolsSection";
import EducationSection from "@/components/organism/EducationSection";
import { FiDownload } from "react-icons/fi";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub, FaTwitter } from "react-icons/fa";
import SpinnerCube from "@/components/atom/SpinnerCube";


export default function Home() {
  return (
    <>
      <div className="bg-dotted relative">
        <div className="container">
          <div className="grid grid-cols-12 gap-8 py-40 select-none">
            <div className="col-span-12 md:col-span-8">
              <h2 className="text-6xl md:text-9xl -tracking-tighter font-bold text-slate-800 dark:text-slate-300 -top-20">Hi, I&apos;m</h2>
              <h1 className="text-5xl md:text-8xl -tracking-tighter uppercase font-bold mt-6 bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-emerald-500 dark:to-orange-500 bg-clip-text text-transparent">suphawat kongson</h1>
              <p className="text-xl md:text-[23px] mt-6 text-slate-800 dark:text-slate-300 font-roboto-mono tracking-tight">&lt;I&apos;m Web. Developer for over 6 years based in Bangkok/&gt;</p>
              <div className="flex gap-2 pt-10">
                <button className="h-11 px-5 border rounded-full text-indigo-500 border-indigo-600 hover:bg-indigo-500 hover:text-gray-200 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-gray-200 transition-all duration-500 flex items-center">Download CV <FiDownload className="ms-2"/></button>
                <button className="w-11 h-11 border rounded-full text-indigo-500 border-indigo-600 hover:bg-indigo-500 hover:text-gray-200 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-gray-200 transition-all duration-500 flex items-center justify-center" title="GitHub"><FaGithub fontSize={'20px'}/></button>
                <button className="w-11 h-11 border rounded-full text-indigo-500 border-indigo-600 hover:bg-indigo-500 hover:text-gray-200 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-gray-200 transition-all duration-500 flex items-center justify-center" title="Twitter"><FaTwitter fontSize={'20px'}/></button>
                <button className="w-11 h-11 border rounded-full text-indigo-500 border-indigo-600 hover:bg-indigo-500 hover:text-gray-200 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-gray-200 transition-all duration-500 flex items-center justify-center" title="Instagram"><RiInstagramFill fontSize={'23px'}/></button>
              </div>
            </div>
            <div className="col-span-4">
              <SpinnerCube/>
            </div>
          </div>
        </div>
      </div>
      <SkillSection />
      <ToolsSection />
      <ExperienceSection />
      <EducationSection />
    </>
  );

}