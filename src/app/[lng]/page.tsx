
import ExperienceSection from "@/components/organism/ExperienceSection"
import SkillSection from "@/components/organism/SkillSection";
import ToolsSection from "@/components/organism/ToolsSection";
import EducationSection from "@/components/organism/EducationSection";
import * as motion from "motion/react-client"
import BackGround from "@/components/layouts/BackGround";

export default function Home() {
  return (
    <>
    <div className="realative">
      <div className="container">
        <div className="grid grid-cols-12 gap-8 mt-40">
          <div className="col-span-12 md:col-span-8">
            <motion.h2 
              style={{ y:-10, opacity: 0}}
              animate={{ y: 0, opacity:1 }}
              className="text-6xl md:text-9xl -tracking-tighter font-bold text-slate-800 dark:text-slate-300 -top-20">Hi, I'm</motion.h2>
            <motion.h1 
              style={{ y:-10, opacity: 0, lineHeight:'1.2' }}
              transition={{transition:0.3, delay:0.2}}
              animate={{ y: 0, opacity:1 }}
              className="text-5xl md:text-8xl -tracking-tighter uppercase font-bold text-blue-800 dark:text-blue-700 mt-6">suphawat kongson</motion.h1>
            <motion.p 
              style={{ y:-10, opacity: 0, lineHeight:'1.2' }}
              transition={{transition:0.3, delay:0.4}}
              animate={{ y: 0, opacity:1 }}
              className="text-xl md:text-3xl mt-6 text-slate-800 dark:text-slate-300">I'm Full Stack Developer for 7 years live in Sai Mai, Bangkok</motion.p>
          </div>
          <div className="col-span-12 md:col-span-4"></div>
        </div>
      </div>
      <BackGround />
    </div>
      <SkillSection />
      <ToolsSection />
      <ExperienceSection />
      <EducationSection />
    </>
  );

}