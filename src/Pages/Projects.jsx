import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Project.css";
import { projectList } from "../data/ProjectList.js";

// Image Imports
import dj1robot from "../images/dj1robot.jpg";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <h1 className="projectTitle">My Projects</h1>
        <div className="projectList">
          {projectList.map((project, index) => {
            return (
              <ProjectItem
                id={index}
                name={project.name}
                image={project.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
