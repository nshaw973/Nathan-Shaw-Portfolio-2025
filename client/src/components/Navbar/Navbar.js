import React, { useState } from "react";
import { Link } from "react-router-dom";
import { bgDarthStripe } from "../../images";

const Navbar = () => {
  const [currentTab, setCurrentTab] = useState("Homepage");
  const tabs = [
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Resume", link: "/resume" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <Link to={"/"} className="bg-white flex flex-start">
        Nathan Shaw
      </Link>
      {/* Tabs */}
      <nav
        className="bg-blue-600 text-white"
        style={{
          backgroundImage: `url(${bgDarthStripe})`,
        }}
      >
        <ul className="flex flex-row w-1/2 ml-auto mr-auto">
          {tabs.map((tab, index) => {
            return (
              <Link
                to={tab.link}
                className={`w-1/3 m-1 border-b-2 text-black bg-white hover:border-black rounded-xl
                    ${currentTab === tab.name && "font-bold"}
                    `}
                value={tab.name}
                onClick={() => setCurrentTab(tab.name)}
                index={index}
              >
                {tab.name}
              </Link>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
