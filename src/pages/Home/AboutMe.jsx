import React from "react";
import profilePic from "../../Static/profilePic.jpeg";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="w-full font-LeagueSpartan text-light py-20">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-10">
          <h1 className="text-4xl">About Me</h1>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-evenly md:h-48">
          <div className="h-full flex-[15%] bg-[green] max-w-xs max-h-80 overflow-hidden">
            <img
              src={profilePic}
              alt="profile"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="h-full flex-[85%] flex flex-col justify-between">
            <p className="mb-10 leading-relaxed overflow-hidden md:m-0">
              I remember my relatives sending and receiving messages
              internationally using letters and papers. After a couple of years,
              mobile phones became very common, and I became utterly fascinated
              with phones and computers. I started playing with computers at a
              young age. How can we make international calls with such ease?
              What makes computers so fast? How does the interent work? These
              questions were my introduction to the world of computer science.
              Though I knew the answers to those questions as I got older and
              read about them, the fascination remains unshaken!
            </p>
            <div>
              <Link
                to={"https://github.com/Yazid04/Yazid04"}
                className="flex justify-between items-center w-44 cursor-pointer p-2 rounded-sm bg-light text-dark"
              >
                Continue Reading
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
