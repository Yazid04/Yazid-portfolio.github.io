import React from "react";
import {Link} from 'react-router-dom'
import logo from '../Static/logo.svg'

const Navbar = () => {
  return (
    <section className="w-full h-28 fixed z-20 shadow-md top-0 bg-dark">
      <main className="w-full overflow-hidden h-full px-7 py-10 shadow-xl text-light text font-LeagueSpartan flex justify-between items-center max-w-6xl mx-auto">
        <div className="h-10 w-full flex items-center flex-1 md:h-14">
          <Link className="cursor-pointer h-full" to={'/'}>
          <img src={logo} alt="logo" className="h-full"/>
          </Link>
        </div>
        <div className="h-full w-full flex-[2] flex justify-end items-center">
          <ul className="flex">
            <li><Link to='/About'>About</Link></li>
            <li className="ml-5 md:ml-14"><a href="google.com">Projects</a></li>
            <li className="ml-5 md:ml-14"><a href="google.com">Contact</a></li>
          </ul>
        </div>
      </main>
    </section>
  );
};

export default Navbar;
