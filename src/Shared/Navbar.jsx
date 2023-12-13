import React from "react";
import {Link} from 'react-router-dom'
import logo from '../Static/logo.svg'
import { usePagesContext } from "../pages/context";

const Navbar = () => {
const {aboutSectionPosition, projectsSectionPosition} = usePagesContext();

  const HandleScrollToPosition = (name) =>{
  if(name === 'About'){
    window.scrollTo({
        top: aboutSectionPosition,
        behavior: "smooth",
      });
    } else if(name === 'Projects'){
      window.scrollTo({
        top: projectsSectionPosition,
        behavior: "smooth",
      });
    }
  }



  return (
    <section className="h-28 w-full fixed z-40 shadow-md top-0 bg-dark md:h-20">
      <main className="h-full w-full overflow-hidden px-7 shadow-xl text-light text font-LeagueSpartan flex justify-between items-center max-w-6xl mx-auto">
     
        <div className="h-full w-full overflow-hidden flex items-center flex-1">
          <Link className="cursor-pointer" to={'/'}>
          <img src={logo} alt="logo" className="h-full"/>
          </Link>
        </div>
        <div className="h-full w-full overflow-hidden flex-[2] flex justify-end items-center">
          <ul className="flex h-full justify-center items-center">
            <li className="cursor-pointer" onClick={() => HandleScrollToPosition("About")}>About</li>
            <li className="ml-5 md:ml-14 cursor-pointer" onClick={() => HandleScrollToPosition("Projects")}>Projects</li>
            <li className="ml-5 md:ml-14 cursor-pointer"><Link to={'/Contact'}>Contact</Link></li>
          </ul>
        </div>
     
      </main>
    </section>
  );
};

export default Navbar;
