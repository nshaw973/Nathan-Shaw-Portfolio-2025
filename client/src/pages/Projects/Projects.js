import React from "react";
import { Link } from "react-router-dom";
import { projectList } from "./projectList";

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="flex flex-wrap">
      {projectList.map((project, index) => {
        return (
          <div className="flex flex-col lg:flex-row w-1/3 lg:w-1/2 p-2 text-sm">
            <img src={project.image} className="w-full lg:w-48 h-fit rounded-xl shadow-xl"></img>
            <div className="w-full flex flex-col">
              <h1 className="border-b-2 rounded-xl bg-white mt-2">{project.title}</h1>
              <p>{project.about}</p>
              <div className="flex flex-col">
                {project.links.map((link, index) => {
                  return (
                    <Link to={link.link} className="">
                      {link.site}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default Projects;
