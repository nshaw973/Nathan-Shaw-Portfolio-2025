import React from "react";
import bgVsCode from "./images/bgCode.PNG";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="flex flex-grow relative">
        <div
          className="w-full h-3/4 m-auto blur"
          style={{
            backgroundImage: `url(${bgVsCode})`,
          }}
        ></div>
        <div className="bg-glass text-white text-xl absolute left-1/2 bottom-1/2">
          <h1 className="animate-fade-left animate-duration-1000 border-b-2">
            Nathan Shaw
          </h1>
          <h1 className="animate-fade-up animate-delay-1000">
            Hello, and Welcome to my Porfolio!
          </h1>
          <Link
            to={"/about"}
            className="animate-fade animate-delay-[2000ms] btn rounded-xl btn-xs hover:bg-slate-700 hover:text-white border-none"
          >
            Go to About
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
