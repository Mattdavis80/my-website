// Image Imports
import dj1robot from "../images/dj1robot.jpg";
import workoutapp from "../images/workoutapp.jpg";
import expenses from "../images/expenses.jpg";

export const projectList = [
  {
    name: "DJ1 Robot Navigation",
    image: dj1robot,
    skills: "Python",
    description:
      "The purpose of this project was to develop a program that utilized Python code which enabled the DJ1 Robot to successfully navigate an obstacle course. The obstacle course consisted of three rooms, each with a random scenario at play. The robot was made to enter each room, scan a picture and then this defined its action and/or response!",
    link: "https://github.com/konstantinKarzhanov/robomaster-S1",
  },
  {
    name: "React Workout Planner",
    image: workoutapp,
    description:
      "The purpose of this project was to demonstrate our ability in using API’s. Our group created a Workout Planner app which fetched information from an API containing over 1,000 different exercises.  Within the app, the user can select the muscle groups in which they want to train, and the app then presents a list of exercises in a carousel format. Once the user selects all the exercises they want to perform, a report is then generated showing them their curated workout routine. ",
    link: "https://github.com/konstantinKarzhanov/react-workout-planner",
  },
  {
    name: "React Expenses App",
    image: expenses,
    description:
      "The purpose of this project was to build on our foundational knowledge of APIs and demonstrate the ability to interact with a server.  Our group created the Expenses app using React. The app is pre-populated with various expenses to demonstrate its functionality. The user can add, delete, or modify expenses, with the changes being reflected on the website server.  The user can also assign expenses to unique categories, personalizing the app to the user’s spending habits. The app’s Insights page displays a graph that is generated from the website’s server information, which provides a breakdown of the expenses in each category. This also enables the user to track their expenses more effectively and meet their financial goals.",
    link: "https://github.com/konstantinKarzhanov/react-workout-planner",
  },
];
