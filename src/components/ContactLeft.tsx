import { FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa";
import contactImg from "../assets/images/contact/contactImg.png";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">KAWMINI ABEYRATHNA</h3>
        <p className="text-lg font-normal text-gray-400">Software Engineer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Let's build something great together! Reach out for collaborations or
          opportunities.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+94 754629752</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">abeyrathnakawmini@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/kawmini-abeyrathna-b7120726b/"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://github.com/TechKNGeek" target="_blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>

          <a
            href="https://www.behance.net/kawminiabeyrathana/projects"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaBehance />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
