import React from "react";
import basicResume from './pdf/nathan_shaw_resume_2025.pdf';

const Resume = () => {
  return (
    <div className="flex flex-col w-full animate-fade">
      <iframe
        src={basicResume}
        className="w-11/12 h-full m-auto mb-4 mt-4 shadow-xl"
        title="Nathan Shaw Resume 2025"
        style={{ border: "none" }}
        allowFullScreen
      />
    </div>
  );
};

export default Resume;