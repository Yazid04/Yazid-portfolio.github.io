import React from "react";
import Navbar from "../../Shared/Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import AboutMe from './AboutMe'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
     <Projects />
     <AboutMe />
    </>
  );
};

export default Home;
