import React from "react";
import Navbar from "../../Shared/Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import AboutMe from './AboutMe'
import Skills from './Skills'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
     <Projects />
     <Skills />
     <AboutMe />
     <Footer />
    </>
  );
};

export default Home;

// work on resonsivness
// add a "let's chat" mini-section after the "AboutMe" section
// add the data to the projects
// add the links to the navbar