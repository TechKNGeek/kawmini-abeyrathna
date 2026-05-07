import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} // Triggers when 10% of the section is visible
      transition={{ duration: 0.6 }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Design & Tools</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          {[
            { name: "Figma", level: "90%" },
            { name: "Flutter", level: "80%" },
            { name: "GitHub", level: "85%" },
            { name: "Postman", level: "80%" },
            { name: "Jupyter Notebook / GoogleColab", level: "75%" },
          ].map((skill, index) => (
            <div className="overflow-x-hidden" key={index}>
              <p className="text-sm uppercase font-medium">{skill.name}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }} 
                  transition={{ duration: 0.8, delay: index * 0.1 }} 
                  style={{ width: skill.level }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">{skill.level}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { name: "Python", level: "55%" },
            { name: "Java", level: "60%" },
            { name: "C", level: "40%" },
            { name: "Dart", level: "75%" },
            { name: "Flutter", level: "80%" },
            { name: "HTML/CSS", level: "90%" },
            { name: "JavaScript", level: "55%" },
            { name: "TypeScript", level: "35%" },
            { name: "SQL", level: "70%" },
            { name: "MongoDB", level: "75%" },
            { name: "React", level: "85%" },
            { name: "Node.js", level: "40%" },
            { name: "Express.js", level: "35%" },
            { name: "PHP", level: "60%" },
            { name: "RESTful API", level: "40%" },
          ].map((skill, index) => (
            <div className="overflow-x-hidden" key={index}>
              <p className="text-sm uppercase font-medium">{skill.name}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  style={{ width: skill.level }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">{skill.level}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;