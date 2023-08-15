import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import { FitnessCenter, LocalHospital } from "@material-ui/icons";
import Button from "@mui/material/Button";
import ResumePage from "./ResumePage";
import "../styles/experience.css";

function Experience() {
  return (
    <div className="experience">
      <div className="button-container">
        <Button
          variant="contained"
          className="resume-button"
          href="resume"
          target={<ResumePage />}
        >
          Click Here for Resume
        </Button>
      </div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FitnessCenter />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Kinesiology, Memorial University
          </h3>
          <p>
            After graduation, I worked as a Kinesioloist at Pearlgate
            Pyhsiotherapy 2014-2016
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<LocalHospital />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Nursing (Fast Track), Memorial University
          </h3>
          <p>
            From 2019 - 2021 I worked as a Registered Nurse in a rural hospital
            in PEI.
          </p>
          <p>
            I currently work as a Registered Nurse in the Operating Room in{" "}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Development, Keyin College
          </h3>
          <p>I will graduate the Software Development Program in 2024!</p>
          <p>This program teaches both Front-end and Back-end development</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
