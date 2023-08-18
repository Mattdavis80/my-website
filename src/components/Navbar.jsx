import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { Reorder } from "@material-ui/icons";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  // Check if the current path is '/resume'
  const isResumePath = location.pathname === "/resume";

  // Conditionally render the navbar based on the path
  if (isResumePath) {
    return null; // Return nothing to hide the navbar
  }

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <Reorder />
        </button>
      </div>
      <div>
        <div className="links">
          <Link to="/my-website">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
