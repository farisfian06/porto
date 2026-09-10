import AboutSection from "../components/sections/AboutSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/HeroSection";
import ProjectSection from "../components/sections/ProjectSection";
import TechStackSection from "../components/sections/TechStackSection";

const LandingPage = () => {
  return (
    <div className="bg-white text-black">
      <HeroSection />
      <main>
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <TechStackSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
