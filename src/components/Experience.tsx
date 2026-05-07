import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
    
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2025 May - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience
          </h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Project Manager Associate"
            subTitle="Ever Efficient Business Management (Pvt) Ltd"
            result="May 2025 – Present | Sri Lanka"
            des={[
              "Led the end-to-end delivery of web and software projects using Agile methodologies, including sprint planning, daily stand-ups, and retrospectives to ensure timely and high-quality outcomes.",
              "Managed and coordinated cross-functional teams (developers, designers, QA), assigning tasks, tracking progress, and ensuring alignment with project goals and deadlines.",
              "Acted as the key bridge between clients and technical teams, translating business requirements into actionable development plans and ensuring clear communication throughout the project lifecycle.",
              "Oversaw UI/UX design and front-end development processes, collaborating on Figma wireframes and ensuring seamless implementation using React and Vue.",
              "Monitored code quality, testing, and performance, coordinating QA processes, identifying risks, and ensuring bug-free releases.",
              "Maintained detailed project documentation, including requirement specs, progress reports, and delivery status updates for stakeholders.",
              "Led deployment and release management, ensuring secure, stable, and scalable production releases across multiple environments.",
              "Provided post-deployment support and maintenance, ensuring system reliability and continuous improvement.",
              "Improved team efficiency by implementing structured workflows, task tracking, and performance monitoring practices.",
            ]}
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2025 October - present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience
          </h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Digital Marketer"
            subTitle="Edirisinghe Homes (Pvt) Ltd"
            result="2025 – Present | Sri Lanka"
            des={[
              "• Planned, executed, and optimized multi-channel digital marketing campaigns across social media and Google Ads, driving brand awareness, traffic, and lead generation.",
              "• Managed and scaled paid advertising campaigns on Facebook, Instagram, and Google Ads (Search, Display, YouTube), including audience targeting, budgeting, A/B testing, and performance optimization.",
              "• Led end-to-end social media management, including content planning, scheduling, moderation, and audience engagement.",
              "• Created high-performing digital content such as ad creatives, reels, short-form videos, and promotional visuals using Canva and video editing tools.",
              "• Implemented SEO strategies (on-page and content optimization) to improve search visibility and organic traffic.",
              "• Analyzed campaign performance using Google Analytics and Meta Ads Manager, generating data-driven insights to improve ROI and conversions.",
              "• Designed and optimized marketing funnels and landing pages to enhance lead generation and user conversion.",
              "• Utilized AI tools (VEO-3) to generate engaging, brand-aligned video content through prompt engineering.",
              "• Conducted market research and competitor analysis to identify trends and optimize campaign strategies.",
              "• Collaborated with design and development teams to align marketing strategies with website performance and user experience.",
            ]}
          />
        </div>
      </div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2024 October - 2025 April
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Training Experience
          </h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer Intern"
            subTitle="SiliconRadon Network (Pvt) Ltd (2024 -2025 )"
            result="Sri Lanka"
            des={[
              "Worked on end-to-end software development projects covering web, mobile, and system solutions, combining development, UI/UX design, business analysis, and quality assurance responsibilities.",
              "Developed responsive web applications using React.js, Vue.js, PHP, Laravel, Node.js, Tailwind CSS, and MERN stack, including dashboards, e-commerce platforms, and learning management systems.",
              "Built full-stack systems such as Asset Management System with role-based access control, reporting modules, and structured workflows using Laravel and MySQL.",
              "Created cross-platform mobile applications using Flutter & Dart, including academy management apps, news applications, and government service apps integrated with Firebase.",
              "Designed modern and user-centered interfaces using Figma, focusing on usability, accessibility, and clean UI architecture.",
              "Gathered and analyzed client requirements, conducted system analysis, and produced documentation including DFD, ERD, use-case diagrams, and system flowcharts.",
              "Performed quality assurance testing, UI validation, and performance checks to ensure stable and user-friendly applications.",
              "Managed deployment and maintenance processes using Vercel, cPanel hosting, version control (Git/GitHub), and provided post-deployment support.",
              "Collaborated with stakeholders and clients to translate business requirements into technical solutions.",
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
