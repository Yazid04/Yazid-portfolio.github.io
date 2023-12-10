import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import responsiveDesignImg from "../../Static/responsiveDesignImg.png";
import { TbFileTypeSql } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const Skills = () => {
  const skillset = [
    {
      id: "00",
      skill: "HTML5",
      icon: <FaHtml5 />,
      clr: "#E34C26",
    },
    {
      id: "01",
      skill: "CSS3",
      icon: <SiCss3 />,
      clr: "blue",
    },
    {
      id: "02",
      skill: "Javascript",
      icon: <IoLogoJavascript />,
      clr: "yellow",
    },
    {
      id: "03",
      skill: "NodeJs",
      icon: <FaNodeJs />,
      clr: "green",
    },
    {
      id: "11",
      skill: "SQL",
      icon: <TbFileTypeSql />,
      clr: "brown",
    },
    {
      id: "04",
      skill: "Scss",
      icon: <BsFiletypeScss />,
      clr: "pink",
    },
    {
      id: "13",
      skill: "Python",
      icon: <FaPython />,
      clr: "yellow",
    },
    {
      id: "09",
      skill: "Git",
      icon: <FaGitAlt />,
      clr: "red",
    },
    {
      id: "12",
      skill: "Github",
      icon: <FaGithub />,
      clr: "grey",
    },
    {
      id: "10",
      skill: "Responsive techniques",
      icon: responsiveDesignImg,
    },
    {
      id: "06",
      skill: "Bootstrap",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            class="bi bi-bootstrap"
            viewBox="0 0 16 16"
          >
            <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z" />
            <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z" />
          </svg>
        </>
      ),
      clr: "rebeccapurple",
    },
    {
      id: "07",
      skill: "Figma",
      icon: <FaFigma />,
      clr: "Magenta",
    },
    {
      id: "05",
      skill: "Tailwind",
      icon: <SiTailwindcss />,
      clr: "cyan",
    },
    {
      id: "08",
      skill: "VsCode",
      icon: <TbBrandVscode />,
      clr: "blue",
    },
  ];

  const styles = {
    borderTop: "5px solid grey",
  };

  return (
    <section
      style={styles}
      className="text-light w-full h-min pt-20 font-LeagueSpartan"
    >
      <div className="w-full max-w-6xl mx-auto px-10">
        <div>
          <div className="w-full mb-3">
            <h2 className="text-5xl">Skills</h2>
          </div>
          <div className="mb-12">
            <p>
              Technologies I use that turn an idea to a business-ready product:
            </p>
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center gap-5">
          {skillset.map((set) => {
            const { id, skill, icon, clr } = set;
            return (
              <div key={id} className="w-32 h-44 flex flex-col">
                <div
                  style={{ color: clr }}
                  className={`flex-[80%] w-full h-full grid place-content-center text-8xl`}
                >
                  {skill === "Responsive techniques" ? (
                    <img src={icon} alt={skill} />
                  ) : (
                    icon
                  )}
                </div>
                <p className="flex-[20%] grid place-content-center w-full h-full overflow-hidden">
                  {skill}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
