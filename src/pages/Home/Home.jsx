import React from "react";
import Navbar from "../../Shared/Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import AboutMe from './AboutMe'
import Skills from './Skills'
import Footer from '../../Shared/Footer'

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