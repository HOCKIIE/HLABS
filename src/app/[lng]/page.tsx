import ExperienceSection from "@/components/organism/ExperienceSection"
import SkillSection from "@/components/organism/SkillSection";
import ToolsSection from "@/components/organism/ToolsSection";
import EducationSection from "@/components/organism/EducationSection";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-12 gap-8 mt-40">
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-9xl -tracking-tighter font-bold dark:text-slate-300">Hi, I'm</h2>
            <h1 className="text-8xl -tracking-tighter uppercase font-bold text-blue-800 dark:text-blue-700 mt-6" style={{lineHeight:'1.2'}}>suphawat kongson</h1>
            <p className="text-3xl mt-6 dark:text-slate-300">I'm Full Stack Developer for 7 years live in Sai Mai, Bangkok</p>
          </div>
          <div className="col-span-12 md:col-span-4"></div>
        </div>
        <SkillSection />
        <ToolsSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </>
  );

}