import {
  FaBehance,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { FadeIn } from "./FadeIn";

const Footer = () => {
  return (
    <FadeIn className="w-full py-20 border-b-[1px] border-b-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-12">
        {/* LEFT: Brand */}
        <div className="flex flex-col gap-6">
          <img className="w-32" src={logo} alt="logo" />

          <p className="text-sm text-gray-400 leading-6 max-w-sm">
            Digital Marketer & Software Engineer focused on building clean,
            scalable digital experiences.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/kawmini-abeyrathna-b7120726b/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>

            <a
              href="https://github.com/TechKNGeek"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>

            <a
              href="https://www.behance.net/kawminiabeyrathana/projects"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bannerIcon">
                <FaBehance />
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl uppercase text-designColor tracking-wider mb-6">
            Quick Navigation
          </h3>

          <ul className="flex flex-col gap-3 font-titleFont">
            <li>
              <a
                href="#home"
                className="text-sm text-gray-300 hover:text-designColor transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-sm text-gray-300 hover:text-designColor transition duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-sm text-gray-300 hover:text-designColor transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="text-sm text-gray-300 hover:text-designColor transition duration-300"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#certification"
                className="text-sm text-gray-300 hover:text-designColor transition duration-300"
              >
                Certification
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm text-gray-300 hover:text-designColor transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl uppercase text-designColor tracking-wider mb-6">
            Contact
          </h3>

          <div className="flex flex-col gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-designColor" />
              <span>kawminiabeyrathna.official@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-designColor" />
              <span>+94 75 462 9752</span>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-designColor mt-1" />
              <span>
                Colombo, Sri Lanka
                <br />
                Available for Freelance & Remote Work
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t-[1px] border-b-black">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Kawmini Abeyrathna. All rights reserved.
        </p>
      </div>
    </FadeIn>
  );
};

export default Footer;
