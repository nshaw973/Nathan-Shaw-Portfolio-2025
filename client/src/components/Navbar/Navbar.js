import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { bgDarthStripe, iconGithub, iconLinkedin } from "../../images";

const Navbar = () => {
  const [currentTab, setCurrentTab] = useState("Homepage");
  const [playFade, setPlayFade] = useState(false);
  const location = useLocation()
  const path = location.pathname
  const tabs = [
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Resume", link: "/resume" },
    { name: "Contact", link: "/contact" },
  ];

  const socials = [
    { link: "https://github.com/nshaw973", icon: iconGithub },
    { link: "https://www.linkedin.com", icon: iconLinkedin },
  ];

  useEffect(() => {
    const matchedTab = tabs.find((tab) => tab.link === path);
    if (matchedTab) {
      setCurrentTab(matchedTab.name);
    } else {
      setCurrentTab("Homepage");
    }
    // Trigger the fade animation
    setPlayFade(true);
    setTimeout(() => {
      setPlayFade(false);
    }, 500);
  }, [path]);

  return (
    <>
      {/* Tabs */}
      <div
        className="bg-slate-700 text-white flex flex-row justify-between h-fit p-2 w-full"
        style={{
          backgroundImage: `url(${bgDarthStripe})`,
        }}
      >
        <Link to="/" className="m-auto ml-2 font-bold">
          Nathan Shaw - 2025
        </Link>
        <div className="flex flex-row ml-auto">
          {socials.map((social, index) => (
            <Link to={social.link} target="_blank" rel="noreferrer">
              <img
                src={social.icon}
                className="h-6 w-6 m-2 invert hover:invert-0"
                alt={index}
              />
            </Link>
          ))}
        </div>
        <br></br>
      </div>
      <nav>
        <div className="flex flex-row w-full justify-end text-sm">
          {tabs.map((tab, index) => {
            return (
              <Link
                to={tab.link}
                className={`m-1 p-1 text-white w-24
                    ${currentTab === tab.name && "font-bold border-b-2"}
                    `}
                value={tab.name}
                onClick={() => setCurrentTab(tab.name)}
                index={index}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
        <h1
          className={`w-1/3 bg-slate-700 text-white text-xl font-bold shadow-xl ${
            playFade &&
            "animate-fade-right animate-duration-500 animate-ease-out"
          }`}
          style={{
            backgroundImage: bgDarthStripe,
          }}
        >
          {currentTab}
        </h1>
      </nav>
    </>
  );
};

export default Navbar;
