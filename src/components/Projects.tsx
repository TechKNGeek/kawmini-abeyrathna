import { motion } from "framer-motion";
import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { useNavigate } from "react-router-dom";
import as1 from "../assets/images/projects/as1.png";
import as2 from "../assets/images/projects/as2.png";
import as3 from "../assets/images/projects/as3.png";
import as4 from "../assets/images/projects/as4.png";
import as6 from "../assets/images/projects/as6.png";

import fyp1 from "../assets/images/projects/fyp1.png";
import fyp2 from "../assets/images/projects/fyp2.png";
import fyp3 from "../assets/images/projects/fyp3.png";
import fyp4 from "../assets/images/projects/fyp4.png";
import fyp5 from "../assets/images/projects/fyp5.png";
import fyp6 from "../assets/images/projects/fyp6.png";
import fyp61 from "../assets/images/projects/fyp61.png";
import fyp7 from "../assets/images/projects/fyp7.png";
import fyp8 from "../assets/images/projects/fyp8.png";
import fyp9 from "../assets/images/projects/fyp9.png";
import fyp10 from "../assets/images/projects/fyp10.png";
import fyp11 from "../assets/images/projects/fyp11.png";
import fyp12 from "../assets/images/projects/fyp12.png";
import fyp13 from "../assets/images/projects/fyp13.png";

import esanin1 from "../assets/images/projects/esanin1.png";
import esanin2 from "../assets/images/projects/esanin2.png";
import esanin3 from "../assets/images/projects/esanin3.png";

import food1 from "../assets/images/projects/food1.png";
import food2 from "../assets/images/projects/food2.png";
import food3 from "../assets/images/projects/food3.png";
import food4 from "../assets/images/projects/food4.png";

import ecom1 from "../assets/images/projects/ecom1.png";
import ecom2 from "../assets/images/projects/ecom2.png";
import ecom3 from "../assets/images/projects/ecom3.png";
import ecom4 from "../assets/images/projects/ecom4.png";
import ecom5 from "../assets/images/projects/ecom5.png";
import ecom6 from "../assets/images/projects/ecom6.png";
import ecom7 from "../assets/images/projects/ecom7.png";
import ecom8 from "../assets/images/projects/ecom8.png";

import dif1 from "../assets/images/projects/dif1.png";
import dif2 from "../assets/images/projects/dif2.png";
import dif3 from "../assets/images/projects/dif3.png";

import emed1 from "../assets/images/projects/emed1.png";
import emed2 from "../assets/images/projects/emed2.png";
import emed3 from "../assets/images/projects/emed3.png";
import emed4 from "../assets/images/projects/emed4.png";
import emed5 from "../assets/images/projects/emed5.png";
import emed6 from "../assets/images/projects/emed6.png";
import emed7 from "../assets/images/projects/emed7.png";

import auth from "../assets/images/projects/auth.png";

import chopshop1 from "../assets/images/projects/chopshop1.png";
import chopshop2 from "../assets/images/projects/chopshop2.png";
import chopshop3 from "../assets/images/projects/chopshop3.png";
import chopshop4 from "../assets/images/projects/chopshop4.png";
import chopshop5 from "../assets/images/projects/chopshop5.png";
import chopshop6 from "../assets/images/projects/chopshop6.png";
import chopshop7 from "../assets/images/projects/chopshop7.png";
import chopshop8 from "../assets/images/projects/chopshop8.png";
import chopshop9 from "../assets/images/projects/chopshop9.png";
import chopshop10 from "../assets/images/projects/chopshop10.png";

import al1 from "../assets/images/projects/al1.png";
import al2 from "../assets/images/projects/al2.png";
import al3 from "../assets/images/projects/al3.png";
import al4 from "../assets/images/projects/al4.png";
import al5 from "../assets/images/projects/al5.png";
import al6 from "../assets/images/projects/al6.png";
import al7 from "../assets/images/projects/al7.png";
import al8 from "../assets/images/projects/al8.png";
import al9 from "../assets/images/projects/al9.png";
import al10 from "../assets/images/projects/al10.png";
import al11 from "../assets/images/projects/al11.png";
import al12 from "../assets/images/projects/al12.png";

import fs1 from "../assets/images/projects/fs1.png";
import fs2 from "../assets/images/projects/fs2.png";
import fs3 from "../assets/images/projects/fs3.png";
import fs4 from "../assets/images/projects/fs4.png";
import fs5 from "../assets/images/projects/fs5.png";
import fs6 from "../assets/images/projects/fs6.png";
import fs7 from "../assets/images/projects/fs7.png";
import fs8 from "../assets/images/projects/fs8.png";
import fs9 from "../assets/images/projects/fs9.png";
import fs10 from "../assets/images/projects/fs10.png";
import fs11 from "../assets/images/projects/fs11.png";
import fs12 from "../assets/images/projects/fs12.png";
import fs13 from "../assets/images/projects/fs13.png";
import fs14 from "../assets/images/projects/fs14.png";
import fs15 from "../assets/images/projects/fs15.png";

import ikman1 from "../assets/images/projects/ikman1.png";
import ikman2 from "../assets/images/projects/ikman2.png";
import ikman3 from "../assets/images/projects/ikman3.png";
import ikman4 from "../assets/images/projects/ikman4.png";
import ikman5 from "../assets/images/projects/ikman5.png";
import ikman7 from "../assets/images/projects/ikman7.png";
import ikman8 from "../assets/images/projects/ikman8.png";
import ikman9 from "../assets/images/projects/ikman9.png";

import ikmandash1 from "../assets/images/projects/ikmandash1.png";
import ikmandash2 from "../assets/images/projects/ikmandash2.png";
import ikmandash3 from "../assets/images/projects/ikmandash3.png";
import ikmandash4 from "../assets/images/projects/ikmandash4.png";
import ikmandash5 from "../assets/images/projects/ikmandash5.png";
import ikmandash6 from "../assets/images/projects/ikmandash6.png";
import ikmandash7 from "../assets/images/projects/ikmandash7.png";
import ikmandash8 from "../assets/images/projects/ikmandash8.png";
import ikmandash9 from "../assets/images/projects/ikmandash9.png";
import ikmandash10 from "../assets/images/projects/ikmandash10.png";
import ikmandash11 from "../assets/images/projects/ikmandash11.png";
import  ikmandash12 from "../assets/images/projects/ikmandash12.png";
import ikmandash13 from "../assets/images/projects/ikmandash13.png";
import ikmandash14 from "../assets/images/projects/ikmandash14.png";
import ikmandash15 from "../assets/images/projects/ikmandash15.png";
import ikmandash16 from "../assets/images/projects/ikmandash16.png";
import ikmandash17 from "../assets/images/projects/ikmandash17.png";
import ikmandash18 from "../assets/images/projects/ikmandash18.png";
import ikmandash19 from "../assets/images/projects/ikmandash19.png";
import ikmandash20 from "../assets/images/projects/ikmandash20.png";
import ikmandash21 from "../assets/images/projects/ikmandash21.png";
import ikmandash22 from "../assets/images/projects/ikmandash22.png";
import ikmandash23 from "../assets/images/projects/ikmandash23.png";
import ikmandash24 from "../assets/images/projects/ikmandash24.png";
import ikmandash25 from "../assets/images/projects/ikmandash25.png";
import ikmandash26 from "../assets/images/projects/ikmandash26.png";

import hms1 from "../assets/images/projects/hms1.png";
import hms2 from "../assets/images/projects/hms2.png";
import hms3 from "../assets/images/projects/hms3.png";   
import hms4 from "../assets/images/projects/hms4.png";
import hms5 from "../assets/images/projects/hms5.png";
import hms6 from "../assets/images/projects/hms6.png";
import hms7 from "../assets/images/projects/hms7.png";
import hms8 from "../assets/images/projects/hms8.png";
import hms9 from "../assets/images/projects/hms9.png";
import hms10 from "../assets/images/projects/hms10.png";
import hms11 from "../assets/images/projects/hms11.png";

import todo1 from "../assets/images/projects/todo1.png"; 
import todo2 from "../assets/images/projects/todo2.png";
import todo3 from "../assets/images/projects/todo3.png";
import todo4 from "../assets/images/projects/todo4.png";
import todo5 from "../assets/images/projects/todo5.png";
import smrt1 from "../assets/images/projects/smrt1.png";
import smrt2 from "../assets/images/projects/smrt2.png";
import smrt3 from "../assets/images/projects/smrt3.png";
import smrt5 from "../assets/images/projects/smrt5.png";
import smrt6 from "../assets/images/projects/smrt6.png";
import drasys1 from "../assets/images/projects/drasys1.png";
import unity1 from "../assets/images/projects/unity1.png";
import unity2 from "../assets/images/projects/unity2.png";
import unity3 from "../assets/images/projects/unity3.png";
import unity4 from "../assets/images/projects/unity4.png";


const getVariants = (index: number) => {
  return {
    hidden: {
      opacity: 0,
      y: index % 2 === 0 ? 80 : -80, // 🔥 alternate up/down
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
};

const Projects = () => {
  const navigate = useNavigate();

  interface Project {
    id: string;
    title: string;
    images: string[];
    des: string;
    githubLink: string;
    liveLink: string;
    category: string;
  }

  const handleCardClick = (project: Project) => {
    navigate(`/project/${project.id}`, { state: project });
  };

  const projects: Project[] = [
    {
      id: "as--app",
      title: "AS  Mobile App",
      images: [as1, as2, as3, as4, as6],
      des: "A high-performance Flutter application designed for a sewing . It features a dynamic architecture that parses complex JSON data into structured arrays to manage course catalogs, student enrollments, and real-time announcements. The app utilizes Dart’s advanced collection methods to handle nested data structures, ensuring a seamless and responsive user experience for managing educational content.",
      githubLink: "https://github.com/TechKNGeek/ASACEDEMY_NEW",
      liveLink: "https://github.com/TechKNGeek/ASACEDEMY_NEW",
      category: "Mobile Applications",
    },
    {
      id: "depression-app",
      title: "AI-Based Mobile Application for Mood Disorders",
      images: [
        fyp1,
        fyp2,
        fyp3,
        fyp4,
        fyp5,
        fyp6,
        fyp61,
        fyp7,
        fyp8,
        fyp9,
        fyp10,
        fyp11,
        fyp12,
        fyp13,
      ],
      des: "An integrated ecosystem featuring a Flutter mobile app, a Chrome extension for passive behavioral monitoring, and a Node.js backend. The system utilizes WebSockets for real-time crisis alerts to guardians and employs OpenRouter AI for sentiment-aware chatbot support. By parsing complex behavioral data through JSON and arrays, the platform delivers personalized mental health insights and instantaneous intervention when high-risk emotional distress signals are detected.",
      githubLink: "https://github.com/TechKNGeek/FinalYearProject",
      liveLink: "https://github.com/TechKNGeek/FinalYearProject",
      category: "Mobile Applications",
    },
    {
      id: "esanin-lk-app",
      title: "Esanin.lk Mobile App",
      images: [esanin3, esanin2, esanin1],
      des: "A high-speed, real-time news platform developed with Flutter and Firebase. The app features a dynamic architecture for delivering categorized alerts across local politics, business, and global news. It integrates a live commenting system for community engagement and utilizes Firebase Cloud Messaging (FCM) for instantaneous push notifications. Built with optimized JSON data handling and array-based content filtering to ensure low-latency updates and a smooth user experience.",
      githubLink: "https://github.com/TechKNGeek/EsaninLK-App",
      liveLink: "https://esanin.lk",
      category: "Mobile Applications",
    },
    /*{
      id: "blood-sugar-app",
      title: "Blood Sugar Level Classifier",
      images: [food1, food2, food3, food4,],
      des: "Flutter app to monitor blood sugar with validation, age categorization, and health feedback.",
      githubLink: "https://github.com/your-repo/blood-sugar-app",
      liveLink: "https://yourapp.com",
      category: "Mobile Applications",
    },*/
    {
      id: "shoebay",
      title: "SHOEbay E-commerce Platform",
      images: [ecom1, ecom2, ecom3, ecom4, ecom5, ecom6, ecom7, ecom8],
      des: "A full-stack MERN (MongoDB, Express, React, Node.js) e-commerce ecosystem featuring a responsive storefront and a robust administrative dashboard. The platform implements secure RESTful APIs to manage complex product arrays, persistent shopping cart logic, and user authentication. It includes a dedicated admin panel for real-time inventory management, order tracking, and dynamic JSON-based content updates to ensure a scalable and secure shopping experience.",
      githubLink:
        "https://github.com/TechKNGeek/E-commerce-web-site-MERN-Stack",
      liveLink: "https://github.com/TechKNGeek/E-commerce-web-site-MERN-Stack",
      category: "Website Developments",
    },
    {
      id: "diferancia-tours",
      title: "Diferancia Tours Travel Platform",
      images: [dif1, dif2, dif3],
      des: "A comprehensive travel management system built with TypeScript, Node.js, and a secure database. The platform features an advanced booking engine for both Inbound and Outbound tour packages, utilizing type-safe interfaces to manage complex travel itineraries. It integrates secure Social Login (Google/OAuth) and efficient data handling through JSON arrays to dynamically render destination packages, pricing tiers, and real-time availability updates.",
      githubLink: "https://github.com/TechKNGeek/diferanciatours-new",
      liveLink: "https://diferanciatours.com",
      category: "Website Developments",
    },
    {
      id: "food-order-app",
      title: "Gourmet Bites Food Ordering System",
      images: [food1, food2, food3, food4],
      des: "A modern, responsive restaurant web application built with HTML5, CSS3, and JavaScript. The frontend features a dynamic menu system that utilizes JSON-structured arrays to render food categories and pricing. It includes an interactive shopping cart logic, real-time order summary calculations, and a smooth checkout flow designed for an optimized mobile-first user experience.",
      githubLink: "https://github.com/your-repo/food-ordering-system",
      liveLink: "https://your-food-app.com",
      category: "Website Developments",
    },
    {
      id: "e-channeling",
      title: "E-Channeling Healthcare Platform",
      images: [emed1, emed2, emed3, emed4, emed5, emed6, emed7],
      des: "A robust healthcare management system built using HTML, CSS, JavaScript, and PHP. The application integrates a multi-tier appointment scheduling system for doctor channeling alongside a comprehensive pharmacy service module. It features dynamic filtering for medical specialties, real-time availability tracking using JSON-based data structures, and a secure backend for managing patient records and prescription orders within a responsive, user-friendly interface.",
      githubLink: "https://github.com/TechKNGeek/project-website-design",
      liveLink: "https://github.com/TechKNGeek/project-website-design",
      category: "Website Developments",
    },
    {
      id: "laravel-login",
      title: "Laravel OAuth2 Social Authentication System",
      images: [auth],
      des: "A secure authentication portal built with Laravel and Bootstrap, implementing Google OAuth2 for seamless social login. The application utilizes Laravel Socialite for third-party integration and features a robust SQL-based user management system. It includes secure session handling, persistent user data mapping via JSON arrays, and a responsive frontend designed to provide a streamlined, enterprise-grade login experience.",
      githubLink: "https://github.com/TechKNGeek/Google-Auth-Clone",
      liveLink: "https://github.com/TechKNGeek/Google-Auth-Clone",
      category: "Website Developments",
    },
    {
      id: "chop-shop-mgmt",
      title: "Chop Shop: Vehicle Service & Repair UI/UX",
      images: [
        chopshop1,
        chopshop2,
        chopshop3,
        chopshop4,
        chopshop5,
        chopshop6,
        chopshop7,
        chopshop8,
        chopshop9,
        chopshop10,
      ],
      des: "A comprehensive UI/UX design case study for a modern automotive repair center. The project focuses on a streamlined user journey for booking appointments, tracking real-time vehicle maintenance status, and browsing service catalogs. It utilizes structured data arrays to organize diverse mechanical services and features a high-fidelity interface designed for optimal conversion and service accessibility across mobile and web platforms.",
      githubLink: "https://github.com/your-repo/chop-shop",
      liveLink: "https://echanneling.com",
      category: "UI/UX Designs",
    },
    {
      id: "al-inaya",
      title: "Al Inaya: Industrial Sewing Machinery Platform",
      images: [al1, al2, al3, al4, al5, al6, al7, al8, al9, al10, al11, al12],
      des: "A high-fidelity UI/UX design prototype for a Dubai-based industrial machinery supplier. The interface features a complex product architecture that organizes various sewing machine types and their intricate sub-components. Built in Figma, the prototype demonstrates a seamless user flow for navigating technical specifications, parts compatibility, and industrial equipment categories, utilizing structured arrays to maintain a clean and logical visual hierarchy for B2B procurement.",
      githubLink: "https://www.figma.com/proto/student-todo",
      liveLink: "https://www.figma.com/student-todo",
      category: "UI/UX Designs",
    },
    {
      id: "fashion-store-ui",
      title: "Glow & Grace: Women's Fashion E-commerce UI/UX",
      images: [
        fs1,
        fs2,
        fs3,
        fs4,
        fs5,
        fs6,
        fs7,
        fs8,
        fs9,
        fs10,
        fs11,
        fs12,
        fs13,
        fs14,
        fs15,
      ],
      des: "A high-fidelity UI/UX design for a premium women’s fashion boutique. This prototype features a sleek, minimalist aesthetic tailored for luxury retail, including a multi-category product catalog, an interactive shopping cart, and a lifestyle blog integration to drive user engagement. Built in Figma, the design prioritizes a high-conversion checkout flow and responsive layouts that maintain a sophisticated brand identity across all device types.",
      githubLink: "https://www.figma.com/proto/fashion-store",
      liveLink: "https://www.figma.com/fashion-store",
      category: "UI/UX Designs",
    },
    {
      id: "ikman-clone-ui",
      title: "Ikman.lk Enhanced: Classifieds Marketplace UI/UX",
      images: [ikman1, ikman2, ikman3, ikman4, ikman5, ikman9, ikman7, ikman8],
      des: "A high-fidelity UI/UX marketplace prototype inspired by Ikman.lk, featuring an expanded ecosystem for classified advertisements. The design introduces enhanced user features including advanced multi-layered filtering, a streamlined ad-posting workflow, and integrated user verification badges. By utilizing structured data arrays to organize diverse product categories—from real estate to electronics—the interface ensures a clean, high-conversion browsing experience optimized for the local market.",
      githubLink: "https://www.figma.com/proto/student-todo",
      liveLink: "https://www.figma.com/student-todo",
      category: "UI/UX Designs",
    },
    {
      id: "ikman-seller-dashboard",
      title: "Multi-Vendor Marketplace & Seller Ecosystem",
      images: [
        ikmandash1,
        ikmandash2,
        ikmandash3,
        ikmandash4,
        ikmandash5,
        ikmandash6,
        ikmandash7,
        ikmandash8,
        ikmandash9,
        ikmandash10,
        ikmandash11,
        ikmandash12,
        ikmandash13,
        ikmandash14,
        ikmandash15,
        ikmandash16,
        ikmandash17,
        ikmandash18,
        ikmandash19,
        ikmandash20,
        ikmandash21,
        ikmandash22,
        ikmandash23,
        ikmandash24,
        ikmandash25,
        ikmandash26,
      ],
      des: "A comprehensive UI/UX case study for an advanced classifieds dashboard. This prototype features a versatile seller ecosystem designed for posting diverse listing types—including product sales, job vacancies, and service requests. The design implements complex form validation flows, real-time listing status tracking, and dynamic category mapping. Built in Figma, it focuses on high-efficiency navigation and data-heavy interfaces to streamline the user journey from ad creation to transaction management.",
      githubLink: "https://www.figma.com/proto/ikman-dashboard",
      liveLink: "https://www.figma.com/ikman-dashboard",
      category: "UI/UX Designs",
    },
    {
      id: "hardware-mgmt-system",
      title: "Centralized Hardware & Inventory Management System",
      images: [
        hms1,
        hms2,
        hms3,
        hms4,
        hms5,
        hms6,
        hms7,
        hms8,
        hms9,
        hms10,
        hms11,
      ],
      des: "A high-fidelity UI/UX prototype for a centralized hardware enterprise resource platform. The system features a data-driven dashboard for real-time monitoring of sales performance, automated inventory tracking, and complex procurement workflows. The design prioritizes logistical clarity, managing multi-category stock levels, supplier orders, and customer returns through a streamlined, professional interface built for high-volume retail operations.",
      githubLink: "https://www.figma.com/proto/hardware-mgmt",
      liveLink: "https://www.figma.com/hardware-mgmt",
      category: "UI/UX Designs",
    },
    {
      id: "todo-ui",
      title: "ScholarTrack: Student Productivity & Task UI",
      images: [todo1, todo2, todo3, todo4, todo5],
      des: "A clean and intuitive UI/UX prototype designed to help students manage academic workloads. The interface features a specialized task-prioritization system, progress visualization for ongoing assignments, and organized category filtering for different subjects. Built in Figma, the design utilizes a vibrant yet focused visual language to reduce cognitive load and enhance student productivity through streamlined habit tracking and deadline management.",
      githubLink: "https://www.figma.com/proto/student-todo",
      liveLink: "https://www.figma.com/student-todo",
      category: "UI/UX Designs",
    },
    {
      id: "smrt-home-ui",
      title: "OmniControl: Integrated smrt Home IoT UI",
      images: [smrt1, smrt2, smrt3, smrt5, smrt6],
      des: "An advanced IoT-centered UI/UX design for comprehensive smrt home automation. The prototype features a centralized interface for real-time operation of security cameras, lighting systems, and climate controls. Built in Figma, the design utilizes an intuitive tile-based architecture and interactive toggle states to manage device arrays, providing users with a seamless, low-friction experience for monitoring and controlling their home environment remotely.",
      githubLink: "https://www.figma.com/proto/smrt-home-ui",
      liveLink: "https://www.figma.com/smrt-home-ui",
      category: "UI/UX Designs",
    },
    {
      id: "driver-assist",
      title: "Vision-Based Driver Assist System",
      images: [drasys1],
      des: "A sophisticated computer vision application engineered with Python and OpenCV for real-time road safety. The system utilizes Haar cascade classifiers for high-accuracy traffic sign recognition and lane-departure detection. It features a live dash-cam processing pipeline that triggers instantaneous voice alerts upon detecting hazards or regulatory signs, using optimized NumPy-based arrays to ensure low-latency performance in dynamic driving environments.",
      githubLink: "https://github.com/your-repo/driver-assist",
      liveLink: "https://driverassist.com",
      category: "Other Notable Projects",
    },
    {
      id: "adventure-game",
      title: "AetherBound: Multiplayer Grid-Based Adventure",
      images: [unity1, unity2, unity3, unity4],
      des: "A networked multiplayer adventure game developed in Unity for the SLTC Tech Challenge. The project features a tile-based map architecture with custom collision detection logic and secure player movement synchronization. It implements complex state management for item collection and level progression, utilizing JSON-based arrays to handle player stats and inventory data, all optimized for real-time performance in a competitive gaming environment.",
      githubLink: "https://github.com/your-repo/adventure-game",
      liveLink: "https://adventuregame.com",
      category: "Other Notable Projects",
    },
  ];

  const categories = [
    "UI/UX Designs",
    "Website Developments",
    "Mobile Applications",
    "Other Notable Projects",
  ];

  return (
    <section id="projects" className="w-full py-20 border-b border-gray-700">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </motion.div>

      {categories.map((category) => {
        const filtered = projects.filter((proj) => proj.category === category);

        return (
          <div key={category}>
            {/* Category Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white mt-10 mb-6"
            >
              {category}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 items-stretch">
              {filtered.map((project, index) => {
                const variants = getVariants(index);

                return (
                  <motion.div
                    key={project.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-80px" }} // 🔥 repeat on scroll up
                    variants={variants}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.04,
                      y: -6,
                    }}
                    onClick={() => handleCardClick(project)}
                    className="cursor-pointer h-full flex"
                  >
                    <ProjectsCard {...project} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
