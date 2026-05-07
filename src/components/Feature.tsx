import { motion } from "framer-motion";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaChartLine, FaLayerGroup } from "react-icons/fa";
import { SiProgress, SiAntdesign, SiSelenium, SiJira } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";


const getCardVariants = (index: number) => {
  if (index % 3 === 0) {
    return {
      hidden: { opacity: 0, x: -80 },
      visible: { opacity: 1, x: 0 },
    };
  } else if (index % 3 === 1) {
    return {
      hidden: { opacity: 0, x: 80 },
      visible: { opacity: 1, x: 0 },
    };
  } else {
    return {
      hidden: { opacity: 0, y: 80 },
      visible: { opacity: 1, y: 0 },
    };
  }
};


const featuresData = [
  {
  title: "Project Manager",
  des: "Leading agile delivery and sprint planning.",
  icon: <SiJira />, 
},
  {
    title: "Software Architecture",
    des: "Designing scalable systems with clean architecture.",
    icon: <FaLayerGroup />,
  },
  {
    title: "UI/UX Design",
    des: "Modern intuitive UI with strong UX principles.",
    icon: <AiFillAppstore />,
  },
  {
    title: "Frontend Development",
    des: "React, Next.js, and modern CSS frameworks.",
    icon: <SiProgress />,
  },
  {
    title: "Cross-Platform Apps",
    des: "Flutter & React Native mobile apps.",
    icon: <FaMobile />,
  },
  {
    title: "Full-Stack Development",
    des: "MERN stack scalable applications.",
    icon: <SiAntdesign />,
  },
  {
    title: "Backend Development",
    des: "Secure APIs and microservices.",
    icon: <FaGlobe />,
  },
  {
    title: "Business Analysis",
    des: "Requirement gathering & system design.",
    icon: <FaChartLine />,
  },
  {
    title: "QA Automation",
    des: "Automation testing with Selenium.",
    icon: <SiSelenium />,
  },
];



const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b border-gray-700"
    >
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }} // 🔥 allow repeat
        transition={{ duration: 0.6 }}
      >
        <Title title="Skills & Services" des="What I Offer" />
      </motion.div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-16 mt-12">
        {featuresData.map((item, index) => {
          const variants = getCardVariants(index);

          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              exit="hidden" // 🔥 animate when leaving
              viewport={{ once: false, margin: "-100px" }} // 🔥 repeat on scroll up
              variants={variants}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
            >
              <Card {...item} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Feature;