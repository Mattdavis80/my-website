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
        <LinkedIn />
        <GitHub />
      </div>
      <p>Made by Matthew Davis, 2023</p>
    </div>
  );
};

export default Footer;
