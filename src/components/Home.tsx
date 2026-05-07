import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Certifications from "./Certifications";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Feature />
          <Projects />
          <Resume />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
