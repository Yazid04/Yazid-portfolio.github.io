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

// work on resonsivness - DONE
// add a "let's chat" mini-section after the "AboutMe" section - DONE
// add real-time data to the projects section - 
// add a page for contacts and link all the button to it - DONE 
// fix the copy & paste mechanism in mobile - DONE