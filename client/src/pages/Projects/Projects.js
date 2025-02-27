import React from "react";
import { Link } from "react-router-dom";
import { projectList } from "./projectList";

const Projects = () => {
  return (
    <>
      <div className="flex flex-wrap overflow-y-scroll"
      style={{ height: "calc(100vh - 8rem)" }}>
      {projectList.map((project, index) => {
        return (
          <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2 text-sm animate-fade animate-ease-out'>
            <img src={project.image} className="w-full h-48 rounded-xl shadow-xl min-h-48 pt-2 md:pr-2 m-auto" alt={`${project.title}-cover`}></img>
            <div className="w-full flex flex-col">
              <h1 className="border-b-2 rounded-xl bg-white mt-2 shadow">{project.title}</h1>
              <p className="shadow-lg rounded-xl p-4 mt-2 min-h-48 bg-white">{project.about}</p>
              <div className="flex flex-row w-full">
                {project.links.map((link, index) => {
                  return (
                    <Link to={link.link} target="_blank" className="flex justify-center w-1/2 mt-2 shadow-lg rounded-xl bg-blue-600 hover:bg-blue-800 text-white">
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
