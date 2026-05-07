import { useLocation, useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { title, des, images, githubLink, liveLink } = state || {};

  if (!title) return <p className="text-white p-10 text-center">Project not found</p>;

  return (
    <div className="min-h-screen bg-bodyColor text-lightText p-8 max-w-screen-xl mx-auto">
      <button
        onClick={() => navigate(-2)}
        className="flex items-center gap-2 text-gray-400 hover:text-designColor duration-300 mb-6 group"
      >
        <HiArrowLeft className="text-xl group-hover:-translate-x-1 duration-300" />
        <span className="text-sm font-medium uppercase tracking-wide">Back to Projects</span>
      </button>

      
      <div className="flex flex-col gap-6 mb-10 border-b border-gray-700 pb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-4xl font-bold text-designColor">{title}</h1>
          <div className="flex flex-wrap gap-3">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#141518] text-gray-300 px-5 py-2.5 rounded-lg shadow-shadowOne hover:text-designColor hover:-translate-y-1 duration-300 transition-all border border-black text-sm font-medium">
                <FaGithub /> GitHub
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#141518] text-gray-300 px-5 py-2.5 rounded-lg shadow-shadowOne hover:text-designColor hover:-translate-y-1 duration-300 transition-all border border-black text-sm font-medium">
                <FaGlobe /> {title.toLowerCase().includes("figma") ? "Figma Design" : "Live Demo"}
              </a>
            )}
          </div>
        </div>
        
        <div className="max-w-3xl">
          <h2 className="text-xs uppercase tracking-[2px] text-designColor mb-2 font-bold">Project Overview</h2>
          <p className="text-lg text-gray-400 leading-relaxed">{des}</p>
        </div>
      </div>
      
      
      <div className="columns-1 sm:columns-2 lg:columns-2 gap-6 space-y-6">
        {images.map((img: string, idx: number) => (
          <div 
            key={idx} 
            className="break-inside-avoid overflow-hidden rounded-2xl shadow-shadowOne bg-[#141518] border border-black/40 group/img"
          >
            <img
              src={img}
              alt={`${title} screenshot ${idx}`}
              
              className="w-full h-auto object-contain group-hover/img:scale-[1.02] duration-500 transition-transform cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;