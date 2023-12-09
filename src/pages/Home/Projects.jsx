import React from "react";
import some from "../../Static/codingImg.png";

const Projects = () => {

  const projects = [
    {
      id: 0,
      title: "project 1",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
      accusamus eaque tenetur aperiam provident nisi?`,
      image: some,
    },
    {
      id: 1,
      title: "project 2",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
      accusamus eaque tenetur aperiam provident nisi?`,
      image: some,
    },
    {
      id: 2,
      title: "project 3",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
      accusamus eaque tenetur aperiam provident nisi?`,
      image: some,
    },
  ];


  return (
    <section className="w-full h-min text-light font-LeagueSpartan">
      <div className="w-11/12 mx-auto p-10 grid place-content-center">
        <h2 className="text-4xl">My projects</h2>
      </div>
      {projects.map(project => {
        const { title, description, image, id } = project;
        return (
          <div key={id} className="project w-full h-min py-5 md:p-0">
            <div className="w-full px-10 text-center max-w-5xl mx-auto flex flex-col gap-5 justify-evenly items-center mb-5 md:flex-row md:text-start">
              <div className="w-full flex flex-col gap-y-5 md:w-1/2">
                <h2 className="text-3xl md:text-4xl">{title}</h2>
                <p className="text-lg md:text-xl">{description}</p>
              </div>
              <div className="grid place-content-center w-full h-52 md:w-96 md:h-72">
                <img src={image} alt="protoype" className="w-full h-full" />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
