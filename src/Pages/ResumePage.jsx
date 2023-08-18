import React from "react";
import resume from "../resume/resume.pdf";
import "../styles/resume.css";

const ResumePage = () => {
  return (
    <>
      <div className="resume-container">
        <object
          data={resume}
          width="100%"
          height="1000
        "
          type="application/pdf"
          aria-label="resume"
        ></object>
      </div>
    </>
  );
};

export default ResumePage;
