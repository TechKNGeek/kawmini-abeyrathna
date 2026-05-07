import bannerImgup from "../assets/images/bannerImgup.png";
import { motion } from "framer-motion"; // Ensure framer-motion is installed

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <motion.img
        initial={{ opacity: 0, y: 50 }} // Starts invisible and 50px down
        whileInView={{ opacity: 1, y: 0 }} // Animates to visible and original position
        viewport={{ once: false, amount: 0.3 }} // amount: 0.3 means 30% of image must be visible
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[300px] h-[300px] lgl:w-[550px] lgl:h-[600px] z-10"
        src={bannerImgup}
        alt="bannerImgu"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#0B1120] shadow-shadowOne flex justify-center items-center"
      />
    </div>
  );
};

export default RightBanner;
