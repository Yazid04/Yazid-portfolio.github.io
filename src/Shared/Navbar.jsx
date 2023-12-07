import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <section className="w-full h-min">
      <div className="w-full h-full px-7 py-10 shadow-xl text-light text font-LeagueSpartan flex justify-between items-center">
        <div className="h-full w-full flex items-center flex-1">
          <h2 className="text-2xl">Yazid</h2>
        </div>
        <div className="h-full w-full flex-[2] flex justify-end items-center">
          <ul className="flex">
            <li><Link to='/About'>About</Link></li>
            <li className="ml-5"><a href="google.com">Projects</a></li>
            <li className="ml-5"><a href="google.com">Contact</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
