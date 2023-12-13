import React, { useRef } from "react";
import codingImg from "../../Static/codingImg.png";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";


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

  const arrowRef = useRef(null);

  const moveArrow = () => {
    const element = arrowRef.current;
    element.style.paddingLeft = '2rem'
  }
  const returnArrow = () => {
    const element = arrowRef.current;
    element.style.paddingLeft = '0.75rem'
  }


  return (
    <animated.div style={fadeIn} className="relative w-full h-[81vh] bg-light font-LeagueSpartan text-dark mt-28 overflow-hidden md:bg-dark md:text-light">
      <div className="hidden md:block absolute -bottom-36 left-0 w-[200rem] h-48 bg-light transform origin-bottom-left -rotate-6"></div>
      <div style={styles} className="hidden md:grid text-center pl-2 h-16 bg-dark w-80 place-content-center text-light absolute bottom-[3%] lg:bottom-[3%] right-[1%] translate-y-[3%] z-20 ">
        <p className="text-sm">Apparently I'm obseesed with Programming</p>
        <p className="text-sm">& Astronomy. Quite the combination :)</p>
      </div>
      <div className="w-full h-full mt-20 flex justify-between items-start px-10 max-w-6xl mx-auto md:mt-10 lg:md-20">
        <div className="flex-1 flex flex-col justify-start">
          <div className="mb-1">
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
          <Link to={'/Contact'} onMouseOver={moveArrow} onMouseLeave={returnArrow} className="w-[21rem] h-min text-sm max-w-full text-start px-2 py-2 rounded-md bg-dark text-light md:bg-light md:text-dark">
            No Nonsense. Just a really good developer
            <span ref={arrowRef} className="pl-3 transition-all font-extrabold text-xl">&#8594;</span>
          </Link>
        </div>

        <div className="flex-1 overflow-hidden hidden h-min md:flex md:justify-end md:items-center">
          <img src={codingImg} alt="coder illustrator" className="w-1/2 h-1/2" />
        </div>
      </div>
    </animated.div>
  );
};

export default Hero;
