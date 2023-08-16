import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../data/ProjectList.js";
import GitHub from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <>
      <div className="button-container">
        <Button variant="contained" className="back-button">
          <Link to="/projects" className="link-text">
            {" "}
            Back to Projects
          </Link>
        </Button>
      </div>
      <div className="project">
        <h1> {project.name}</h1>
        <img src={project.image} alt="project" />
        <p>
          <b>Skills:</b> {project.skills}
        </p>
        <p className="project-description">
          <b>Description:</b> {project.description}
        </p>
        <a href={project.link}>
          <GitHub />
        </a>
      </div>
    </>
  );
}

export default ProjectDisplay;
