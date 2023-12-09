import React from "react";
import codingImg from "../../Static/codingImg.png";
import { useSpring, animated } from "react-spring";


const Hero = () => {

  const styles = {
    borderTopLeftRadius: '200px',
    borderBottomRightRadius: '200px',
  }

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });


  return (
    <animated.div style={fadeIn} className="relative w-full h-[81vh] bg-light font-LeagueSpartan text-dark mt-28 overflow-hidden md:bg-dark md:text-light">
      <div className="hidden md:block absolute -bottom-36 left-0 w-[200rem] h-48 bg-light transform origin-bottom-left -rotate-6"></div>
      <div style={styles} className="hidden md:grid bg-dark w-96 h-20 place-content-center text-light absolute bottom-[5%] lg:bottom-[1%] right-[5%] translate-y-[1%] z-20 ">
        <p>I'm interested in Coding & Astronomy</p>
        <p>🌌 & 💻 all the way!</p>
      </div>
      <div className="w-full h-full flex justify-between items-start px-10 max-w-6xl mx-auto">
        <div className="flex-1 mt-20 flex flex-col justify-start md:mt-10 lg:md-20">
          <div className="mb-5">
            <h1 className="overflow-hidden text-6xl">Yazid</h1>
          </div>
          <div className="mb-10">
            <p>
              Hi! I'm Yazid, a passionate web developer. My skills help create
              modern and business-growing software using cutting-edge
              technologies and best practices. Developing efficient and reliable
              software is my top priority. My goal is to work in a place where I
              can deliver business value while also improving my skills along
              the way.
            </p>
          </div>
          <button className="w-44 h-14 rounded-md bg-dark text-light md:bg-light md:text-dark">
            Lets work together!
          </button>
        </div>

        <div className="flex-1 mt-10 md:mt-5 lg:mt-10 overflow-hidden h-96 hidden md:flex md:justify-end md:items-start">
          <img src={codingImg} alt="coder illustrator" />
        </div>
      </div>
    </animated.div>
  );
};

export default Hero;
