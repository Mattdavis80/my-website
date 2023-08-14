import React from "react";
import { LinkedIn, GitHub, Email } from "@material-ui/icons";
import "../styles/Home.css";
import picture from "../images/picture.jpg";

const HomePage = () => {
  return (
    <div className="home">
      <div className="about">
        <img id="headshot-pic" src={picture} alt="" />
        <div className="prompt-container">
          <h2>Hello! My name is Matthew</h2>
          <div className="prompt">
            <p>Software Development student with a passion for Healthcare</p>
            <div className="icon-container">
              <LinkedIn />
              <Email />
              <GitHub />
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>My Current skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HomePage;
