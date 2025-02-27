import React from "react";
import basicResume from './pdf/basicResume.pdf';

const Resume = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="m-2">My resume - 2025</h1>
      <iframe
        src={basicResume}
        className="w-11/12 h-full m-auto mb-4 shadow-xl"
        title="My PDF"
        style={{ border: "none" }}
        allowFullScreen
      />
    </div>
  );
};

export default Resume;