import React from "react";
import { LinkedIn } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import { Facebook } from "@material-ui/icons";
import "../styles/Footer.css";

const Footer = () => {
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
