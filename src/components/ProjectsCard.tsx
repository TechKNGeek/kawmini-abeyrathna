import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

interface Props {
  id: string;
  title: string;
  des: string;
  images: string[];
  githubLink: string;
  liveLink: string;
}

const ProjectsCard = ({ id, title, des, images, githubLink, liveLink }: Props) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = () => {
    navigate(`/project/${id}`, {
      state: { title, des, images, githubLink, liveLink },
    });
  };0

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-full overflow-hidden rounded-lg">
        <img
          className="w-full h- object-cover group-hover:scale-110 duration-300"
          src={images[currentImageIndex]}
          alt={title}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">{title}</h3>
            <div className="flex gap-2">
              <a href={githubLink} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300">
                  <BsGithub />
                </span>
              </a>
              <a href={liveLink} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300">
                  <FaGlobe />
                </span>
              </a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
