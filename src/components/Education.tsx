import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">
              2021 - 2025
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Higher Education</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="BSc (Hons) Information Technology in Software Engineering"
              subTitle="SLTC Research University, Padukka"
              result="Second Class Upper Division GPA: 3.35"
              des={[
                "Software Engineering Specialization | Comprehensive training in software development methodologies, system design, and modern programming technologies.",
              ]}
            />
          </div>
        </div>

        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2019</p>
            <h2 className="text-3xl md:text-4xl font-bold">Advanced Levels</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Physical Science Stream"
              subTitle="St. Anthony's Girls College, Kandy"
              result="Passed"
              des={[
                "Physics, Chemistry, Combined Mathematics | Developed strong analytical and problem-solving skills through rigorous science curriculum.",
              ]}
            />
          </div>
        </div>

        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2016</p>
            <h2 className="text-3xl md:text-4xl font-bold">Ordinary Levels</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Ordinary Level Education"
              subTitle="Gothami Girls College, Kandy"
              result="Passed"
              des={[
                "Core Subjects | Established strong foundation in mathematics, sciences, and languages.",
              ]}
            />
          </div>
        </div>

        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2022-2026</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Professional Development
            </h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Supplementary Courses"
              subTitle="Technical Skill Enhancement"
              result="Ongoing"
              des={[
                "Completed various online certifications in full-stack development, cloud , and software engineering best practices.",
              ]}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
