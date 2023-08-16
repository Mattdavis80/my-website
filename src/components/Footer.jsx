import React from "react";
import { LinkedIn } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import { Facebook } from "@material-ui/icons";
import "../styles/Footer.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  // Check if the current path is '/resume'
  const isResumePath = location.pathname === "/resume";

  // Conditionally render the navbar based on the path
  if (isResumePath) {
    return null; // Return nothing to hide the navbar
  }
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/matthew-davis-545a71126"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          href="https://github.com/Mattdavis80"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
      </div>
      <p>Made by Matt Davis, 2023</p>
    </div>
  );
};

export default Footer;
