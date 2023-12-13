import React, { useRef, useEffect } from "react";
import { usePagesContext } from "../context";
import { data } from "./data";
import Slider from "../../Shared/Slider";

const Projects = () => {
  const { setProjetsSectionPosition } = usePagesContext();

  const projectsSectionRef = useRef();
  useEffect(() => {
    const element = projectsSectionRef.current;
    const position = element.getBoundingClientRect().top - 70;
    // 70 here is because of the height of the navbar that's static and blocking
    setProjetsSectionPosition(position);
  }, []);

  return (
    <section
      ref={projectsSectionRef}
      className="w-full h-min text-light font-LeagueSpartan"
    >
      <div
        className="w-full p-10 grid place-content-center"
        style={{ borderBottom: "5px solid grey" }}
      >
        <h2 className="text-4xl w-full max-w-5xl mx-auto">My Work</h2>
      </div>
      {data.map((project) => {
        return <Slider title={project.title} data={project.imgs}/>
      })}
    </section>
  );
};

export default Projects;

/*<div key={id} className="project w-full h-min py-5 md:p-0">
            <div className="w-full px-10 text-center max-w-5xl mx-auto flex flex-col gap-5 justify-evenly items-center mb-5 md:flex-row md:text-start">
              <div className="w-full flex flex-col gap-y-5 md:w-1/2">
                <h2 className="text-3xl md:text-4xl">{title}</h2>
                <p className="text-lg md:text-xl">{description}</p>
              </div>
              <div className="grid place-content-center w-full h-52 md:w-96 md:h-72">
                <img src={image} alt="protoype" className="w-full h-full" />
              </div>
            </div>
          </div>*/
