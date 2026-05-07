import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Title from "./Title";

import cert1 from "../assets/images/certificate/5.png";
import cert2 from "../assets/images/certificate/6.png";
import cert3 from "../assets/images/certificate/7.png";
import cert4 from "../assets/images/certificate/1.jpeg";
import cert5 from "../assets/images/certificate/2.jpeg";
import cert6 from "../assets/images/certificate/3.jpeg";
import cert7 from "../assets/images/certificate/4.jpeg";
import cert8 from "../assets/images/certificate/9.jpeg";
import cert9 from "../assets/images/certificate/1.png";
import cert10 from "../assets/images/certificate/12.png";
import cert11 from "../assets/images/certificate/13.png";
import cert12 from "../assets/images/certificate/14.png";
import cert13 from "../assets/images/certificate/15.png";
import cert14 from "../assets/images/certificate/16.png";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 80 }, 
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const allCertificates = [
    { id: 1, image: cert1, title: "Python for Beginners", description: "University of Moratuwa course." },
    { id: 2, image: cert2, title: "Python Programming", description: "Core Python concepts." },
    { id: 3, image: cert3, title: "Web Design Basics", description: "HTML CSS JS responsive design." },
    { id: 4, image: cert4, title: "Node.js Basics", description: "Backend fundamentals." },
    { id: 5, image: cert5, title: "Responsible AI", description: "Ethical AI with Google Cloud." },
    { id: 6, image: cert6, title: "AI in Google Meet", description: "AI integration tools." },
    { id: 7, image: cert7, title: "Pandas Basics", description: "Data analysis with Python." },
    { id: 8, image: cert8, title: "JavaScript Functions", description: "Modern JS concepts." },
    { id: 9, image: cert9, title: "Node.js Intro", description: "Server-side JS basics." },
    { id: 10, image: cert10, title: "Node Project", description: "Game-based learning." },
    { id: 11, image: cert11, title: "Auth System", description: "Backend authentication." },
    { id: 12, image: cert12, title: "Certificate 12", description: "Completed training." },
    { id: 13, image: cert13, title: "Certificate 13", description: "Advanced module." },
    { id: 14, image: cert14, title: "Certificate 14", description: "Final achievement." },
  ];

  const displayed = showAll ? allCertificates : allCertificates.slice(0, 6);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);

    if (!showAll && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 100);
    }
  };

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="w-full py-20 border-b border-gray-700"
    >
      
      <div className="text-center">
        <Title title="MY ACHIEVEMENTS" des="Certifications" />
      </div>

      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-8 mt-10"
      >
        {displayed.map((cert) => (
          <motion.div
            key={cert.id}
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 rounded-lg shadow-lg"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            <h3 className="text-xl font-semibold text-white">
              {cert.title || "Certificate"}
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              {cert.description || "No description available"}
            </p>
          </motion.div>
        ))}
      </motion.div>

      
      {allCertificates.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={toggleShowAll}
            className="px-6 py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-white rounded-md border border-gray-700 shadow-lg hover:scale-105 transition"
          >
            {showAll ? "Show Less" : "Show More Certificates"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Certifications;