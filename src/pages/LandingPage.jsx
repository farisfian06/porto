import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutMe from "../components/bcup/AboutMe";
import Experiences from "../components/bcup/Experiences";
import Project from "../components/bcup/Project";
import TechStack from "../components/bcup/TechStack";
import { ReactLenis } from "lenis/dist/lenis-react";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <ReactLenis root>
        <HeroSection />
      </ReactLenis>
      <main>
        <AboutMe />
        <Experiences />
        <ReactLenis root>
          <Project />
        </ReactLenis>
        <TechStack />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
