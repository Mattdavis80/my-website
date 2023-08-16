import React from "react";
import resume from "../resume/resume.pdf";
import "../styles/resume.css";

const ResumePage = () => {
  return (
    <>
      <div className="resume-container">
        <iframe
          src={resume}
          frameborder="0"
          className="resume"
          title="resume"
        ></iframe>
      </div>
    </>
  );
};

export default ResumePage;
