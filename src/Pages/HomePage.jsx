import React from "react";
import { LinkedIn, GitHub } from "@material-ui/icons";
import "../styles/Home.css";
import picture from "../images/picture.jpg";

const HomePage = () => {
  return (
    <div className="home">
      <div className="about">
        <img src={picture} alt="headshot" id="headshot" />
        <h2>Hello! My Name is Matthew</h2>
        <div className="prompt">
          <p>
            I am a Software Development Student currently enrolled at Keyin
            College in St. John's, Newfoundland
          </p>
          <div className="social-links">
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
        </div>
      </div>
      <div className="skills">
        <h1>About me</h1>
        <p className="info">
          I am a Registered Nurse who has been looking to transition into the
          technology sector. To begin this goal, I am currently enrolled as a
          Software Development Student at Keyin College in my third semester. I
          pride myself in being a life-long learner and self-motivated student.
          I have recently completed the Front-End development curriculum and
          have moved on to learning about Back-End development. I look forward
          to graduating with a diploma from Keyin College and working as a
          software developer full-time.
        </p>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS,HTML, CSS, React Native, NPM, MaterialUI,</span>
          </li>
          <li className="item">
            <h2>Back-End - Learning in the coming semesters</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, MySQL, MongoDB, DynamoDB
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HomePage;
