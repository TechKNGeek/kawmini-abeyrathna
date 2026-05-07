import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaBehance, FaGithub } from "react-icons/fa";
import { SiFigma, SiFlutter, SiPhp } from "react-icons/si";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion"; // Ensure framer-motion is installed

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Frontend Developer.", "UI/UX Designer.", "Mobile App Developer.", "QA Engineer.", "Business Analyst.", "Full Stack Developer.", "MERN Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      {/* DOWN TO TOP ANIMATION */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-5"
      >
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">KAWMINI ABEYRATHNA</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          I’m a software engineer with a strong foundation in web and mobile development, specializing in frontend design and development. I craft user-centric applications that merge seamless design with functional performance, ensuring responsive and scalable solutions.
        </p>
      </motion.div>

      
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between"
      >
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/kawmini-abeyrathna-b7120726b/" target="_blank" rel="noreferrer">
              <span className="bannerIcon"><FaLinkedinIn /></span>
            </a>
            <a href="https://github.com/TechKNGeek" target="_blank" rel="noreferrer">
              <span className="bannerIcon"><FaGithub/></span>
            </a>
            <a href="https://www.behance.net/kawminiabeyrathana/projects" target="_blank" rel="noreferrer">
              <span className="bannerIcon"><FaBehance /></span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILL ON</h2>
          <div className="flex gap-4">
            <span className="bannerIcon"><FaReact /></span>
            <span className="bannerIcon"><SiFlutter /></span>
            <span className="bannerIcon"><SiPhp /></span>
            <span className="bannerIcon"><SiFigma /></span>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
};

export default LeftBanner;