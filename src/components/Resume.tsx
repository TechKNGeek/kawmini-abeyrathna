import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "./Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievement from "./Achievement";



const containerVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const tabContentVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 }, // 👈 smooth exit when switching
};


const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section
      id="resume"
      className="w-full py-20 border-b border-gray-700"
    >
      
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        
        <div className="flex justify-center items-center text-center">
          <Title title="7+ YEARS OF EXPERIENCE" des="My Resume" />
        </div>

        
        <div>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <li
              onClick={() => setActiveTab("education")}
              className={`${
                activeTab === "education"
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Education
            </li>

            <li
              onClick={() => setActiveTab("skills")}
              className={`${
                activeTab === "skills"
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Professional Skills
            </li>

            <li
              onClick={() => setActiveTab("experience")}
              className={`${
                activeTab === "experience"
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Experience
            </li>

            <li
              onClick={() => setActiveTab("achievement")}
              className={`${
                activeTab === "achievement"
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Achievements
            </li>
          </ul>
        </div>

        
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {activeTab === "education" && (
              <motion.div
                key="education"
                variants={tabContentVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Education />
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                key="skills"
                variants={tabContentVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Skills />
              </motion.div>
            )}

            {activeTab === "experience" && (
              <motion.div
                key="experience"
                variants={tabContentVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Experience />
              </motion.div>
            )}

            {activeTab === "achievement" && (
              <motion.div
                key="achievement"
                variants={tabContentVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Achievement />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;