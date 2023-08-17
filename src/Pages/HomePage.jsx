import React from "react";
import { LinkedIn, GitHub } from "@material-ui/icons";
import "../styles/Home.css";
import picture from "../images/picture.jpg";

const HomePage = () => {
  return (
    <div className="home">
      <div className="about">
        <img src={picture} alt="headshot" id="headshot" />
        <h2> Hello!, My Name is Matthew</h2>
        <div className="prompt">
          <p>
            I am a Software Development Student and Healthcare Professional.
          </p>
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
      <div className="skills">
        <h1>About me</h1>
        <p className="info">
          I am a Third Semester Software Development Student at Keyin College. I
          am currently starting to learn Back-end Development after having
          finished learning Front-end technology. I currently work in the
          healthcare felid and am transitioning into tech.
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
            <h2>Back-End - Semester 3/4</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, MySQL, MongoDB, DynamoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HomePage;
