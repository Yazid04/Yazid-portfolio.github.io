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
  }, [setProjetsSectionPosition]);

  return (
    <section
      ref={projectsSectionRef}
      className="w-full h-min text-light font-LeagueSpartan bg-dark"
    >
      <div
        className="w-full p-10 grid place-content-center"
        style={{ borderBottom: "5px solid grey" }}
      >
        <h2 className="text-4xl w-full max-w-5xl mx-auto">My Work</h2>
      </div>
      {data.map((project, idx) => {
        return (
          <Slider
            key={project.id}
            title={project.title}
            data={project.imgs}
            idx={idx}
            githubLink={project.githubLink}
            liveSiteLink={project.liveSiteLink}
            describtion={project.describtion}
          />
        );
      })}
    </section>
  );
};

export default Projects;
