import React from "react";
import { projectsList } from "../../../helperFiles/projectsArray";
import './projects.css';

function Projects() {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="portfolio text-center"
      >
      <h1 className="font-extrabold text-2xl tablet:text-3xl laptop:text-4xl uppercase">Projects</h1>
      <div className="projects-container flex flex-wrap justify-center gap-10">
        {projectsList.map((project, id) => (
          <a
            href={project.link}
            target="_blank"
            key={id}
            className="project flex flex-col p-10"
            >
            <h2 className="font-semibold text-xl pb-4">{project.name}</h2>
            <img src={project.image} alt={project.alt} />
            <div className="flex justify-between w-100">
              {project.usedIcons.map((icon, index) => (
                <img
                  src={icon.icon}
                  alt={icon.alt}
                  key={index}
                  className="icon"
                />
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
