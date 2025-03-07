import React from "react";
import bgVsCode from "./aboutImages/bg.PNG";
import { socials } from "../../utils/socials";
import { Link } from "react-router-dom";
import { aboutMe } from "./aboutForm";

const About = () => {
  return (
    <div
      className="flex flex-grow flex-col md:flex-row w-full  overflow-y-scroll pt-4 animate-fade"
      style={{ height: "calc(100vh - 8rem)" }}
    >
      <div
        className="rounded-xl p-2 bg-white w-full md:w-1/2 min-h-48 h-full animate-fade"
        style={{
          backgroundImage: `url(${bgVsCode})`,
        }}
      ></div>
      <div className="flex flex-col w-full bg-white rounded-xl md:ml-2">
        <h1 className="text-xl border-b-2 m-4 pb-2 flex flex-start">
          Hello! I'm Nathan Shaw
        </h1>
        <p className="text-left p-4">
          {aboutMe}
        </p>
        <div className="flex flex-row justify-center">
          {socials.map((social, index) => (
            <Link to={social.link} target="_blank" rel="noreferrer">
              <img
                src={social.icon}
                className="h-6 w-6 m-2 hover:bg-white hover:invert rounded-xl"
                alt={index}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
