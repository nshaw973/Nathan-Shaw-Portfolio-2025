import React from "react";
import bgVsCode from "./aboutImages/bg.PNG";
import { iconGithub, iconLinkedin } from "../../images";
import { Link } from "react-router-dom";

const About = () => {
  const socials = [
    { link: "https://github.com/nshaw973", icon: iconGithub },
    { link: "https://www.linkedin.com", icon: iconLinkedin },
  ];
  return (
    <div className="flex flex-grow flex-col md:flex-row m-12 w-full animate-fade">
      <div
        className="rounded-xl p-2 bg-white w-full md:w-1/2 min-h-48 h-full"
        style={{
          backgroundImage: `url(${bgVsCode})`,
        }}
      ></div>
      <div className="flex flex-col w-full bg-white rounded-xl md:ml-2">
        <h1 className="text-xl border-b-2 m-4 pb-2 flex flex-start">
          Hello! I'm Nathan Shaw
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
