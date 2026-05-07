import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2024</p>
            <h2 className="text-3xl md:text-4xl font-bold">Codemania v04</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="IEEE Student Branch SLTC."
              subTitle="6th place."
              result="Success"
              des={[
                "Achieved 6th place in Codemania v04, a coding and problem-solving competition organized by IEEE SLTC, showcasing skills in algorithmic thinking and teamwork.",
              ]}
            />
          </div>
        </div>

        
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2024</p>
            <h2 className="text-3xl md:text-4xl font-bold">Duothon 4.0</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="IEEE Student Branch NSBM"
              subTitle="Final Round"
              result="Success"
              des={[
                "Reached the final round of Duothon 4.0, a tech challenge organized by IEEE NSBM, focused on innovation and problem-solving.",
              ]}
            />
          </div>
        </div>

        
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2022</p>
            <h2 className="text-3xl md:text-4xl font-bold">Inspire Tech</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="IEEE WIE Affinity Group, SLTC"
              subTitle="Participant"
              result="Attended"
              des={[
                "Participated in Inspire Tech 2022, a tech event focused on empowering students through innovation and collaboration.",
              ]}
            />
          </div>
        </div>

       
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2022–2024</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Full Stack Training
            </h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="UOM, Coursera, Udemy, edX, DevTown, Simplilearn"
              subTitle="Full Stack Developer Courses"
              result="Completed"
              des={[
                "Completed full stack development training from multiple platforms, covering frontend, backend, databases, and deployment best practices.",
              ]}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
