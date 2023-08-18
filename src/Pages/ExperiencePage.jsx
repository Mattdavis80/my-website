import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import { FitnessCenter, LocalHospital } from "@material-ui/icons";
import Button from "@mui/material/Button";
import "../styles/experience.css";
import { Link } from "react-router-dom";

function Experience() {
  return (
    <div className="experience">
      <div className="button-container">
        <Button
          variant="contained"
          className="resume-button"
          component={Link}
          to="resume"
          target="_blank"
        >
          <a
            href="https://docs.google.com/document/d/1mHaV8TOV5_adAf05kfQYTIuLduWGijFXo9Hx5ioSjtc/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            CLick here for resume
          </a>
        </Button>
      </div>
      <VerticalTimeline lineColor="#004e98">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014"
          iconStyle={{ background: "#004e98", color: "#fff" }}
          icon={<FitnessCenter />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Kinesiology, Memorial University
          </h3>
          <p>
            From 2015-2016 I worked as a Kinesiologist at Pearlgate
            Physiotherapy
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: "#004e98", color: "#fff" }}
          icon={<LocalHospital />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Nursing - Fast Track, Memorial University
          </h3>
          <p>
            - From 2019 - 2021 I worked as a Registered Nurse in a rural
            hospital in PEI
          </p>
          <p>
            I currently work as a Registered Nurse in the Operating Room in St.
            John`s, NL
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: "#004e98", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Development, Keyin College
          </h3>
          <p>Currently enrolled, with graduation in 2024</p>
          <p>I am learning both Front-end and Back-end development</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
