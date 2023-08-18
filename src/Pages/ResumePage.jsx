import React from "react";
import resume1 from "../images/resume1.jpg";
import resume2 from "../images/resume2.jpg";
import resume from "../resume/resume.pdf";
import "../styles/resume.css";

const ResumePage = () => {
  return (
    <>
      <div className="resume-container">
        {/* <img className="resume-img" src={resume1} alt="first resume page" />
        <img className="resume-img" src={resume2} alt="first resume page" /> */}
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
