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
        <div className="bg-glass text-white text-xl absolute left-1/2 top-1/3 font-roboto w-fit">
          <h1 className="animate-fade-left text-4xl md:text-6xl xl:text-8xl animate-duration-1000 border-b-2"
                style={{
                  fontSize: "clamp(2rem, 7vw, 9rem)",
                }}>
            Nathan Shaw
          </h1>
          <h1 className="animate-fade-up animate-delay-1000 text-sm">
            Hello, and Welcome to my Porfolio!
          </h1>
          <Link
            to={"/about"}
            className="animate-fade animate-delay-[2000ms] btn rounded-xl btn-xs hover:bg-slate-700 hover:text-white border-none flex ml-auto mr-4 w-fit mt-4"
          >
            Go to About
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
