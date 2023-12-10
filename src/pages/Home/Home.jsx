import React from "react";
import Navbar from "../../Shared/Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import AboutMe from './AboutMe'
import Skills from './Skills'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
     <Projects />
     <Skills />
     <AboutMe />
    </>
  );
};

export default Home;
