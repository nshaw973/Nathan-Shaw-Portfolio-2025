import React from "react";
import { Link } from "react-router-dom";
import { projectList } from "./projectList";
import { symbolJS, symbolPy } from "../../images";

const Projects = () => {
  const getSymbol = (lan) => {
    switch (lan) {
      case "Javascript":
        return symbolJS;
      case "Python":
        return symbolPy;
      default:
        return;
    }
  };
  return (
    <>
      <div
        className="flex flex-wrap overflow-y-scroll pt-4"
        style={{ height: "calc(100vh - 8rem)" }}
      >
        {projectList.map((project, index) => {
          return (
            <div
              className="flex flex-col w-full sm:w-1/2 lg:w-1/3 p-2 pr-1 text-sm animate-fade animate-ease-out
            "
            >
              <img
                src={project.image}
                className="h-24 rounded-xl shadow-xl min-h-48 ml-auto mr-auto"
                alt={`${project.title}-cover`}
              ></img>
              <div className="w-full flex flex-col">
                <strong className="rounded-xl bg-white mt-2 shadow">
                  {project.title}
                </strong>
                <ul className="shadow-lg rounded-xl p-4 mt-2 bg-white min-h-48">
                  <li className="flex flex-row">
                    <strong>Language:&nbsp;</strong>
                    <p>{project.language}</p>
                    <img
                      src={getSymbol(project.language)}
                      className="pl-2 h-4"
                      alt={`${project.language}-symbol`}
                    />
                  </li>
                  <li className="flex flex-row">
                    <strong>Technology:&nbsp;</strong>
                    <p className="text-left">{project.technology}</p>
                  </li>
                  <li className="flex flex-row">
                    <strong>About:&nbsp;</strong>{" "}
                    <p className="text-left">{project.about}</p>
                  </li>
                </ul>
                <div className="flex flex-row w-full justify-between">
                  {project.links.map((link, index) => {
                    return (
                      <Link
                        to={link.link}
                        target="_blank"
                        className={`flex justify-center ${
                          project.links.length === 1 ? "w-full" : "w-1/2"
                        } mt-2 shadow-lg rounded-xl bg-blue-600 hover:bg-blue-800 text-white`}
                      >
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
