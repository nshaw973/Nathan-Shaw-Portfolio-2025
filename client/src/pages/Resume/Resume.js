import React from "react";
import basicResume from './pdf/basicResume.pdf';

const Resume = () => {
  return (
    <div className="flex flex-col w-full animate-fade">
      <iframe
        src={basicResume}
        className="w-11/12 h-full m-auto mb-4 mt-4 shadow-xl"
        title="My PDF"
        style={{ border: "none" }}
        allowFullScreen
      />
    </div>
  );
};

export default Resume;