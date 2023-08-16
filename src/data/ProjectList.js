// Image Imports
import dj1robot from "../images/dj1robot.jpg";
import workoutapp from "../images/workoutapp.jpg";
import expenses from "../images/expenses.jpg";

export const projectList = [
  {
    name: "DJ1 Robot Navigation with Python",
    image: dj1robot,
    skills: "Python",
    description:
      "The Purpose of this project was to develop Python code so that the DJ1 Robot could successfully navigate an obstacle course! The obstacle course consisted of 3 rooms, each with a random scenario. The robot would enter the room and scan a picture which would define its action! ",
    link: "https://github.com/konstantinKarzhanov/robomaster-S1",
  },
  {
    name: "React Workout Planner",
    image: workoutapp,
    description:
      "This Workout planner app fetches information from an API containing over 1,000 different exercises. The user is able to select the muscle groups they want to train and are presented a list of exercises in a carousel format. Once the user selects all of the exercises they want to perform, a report is generated showing them all of their selected exercises",
    link: "https://github.com/konstantinKarzhanov/react-workout-planner",
  },
  {
    name: "React Expenses App",
    image: expenses,
    description:
      "The Expenses app was built using react and takes advantage of context to track variables globally. The app is pre-populated with various expenses to demonstrate its functionality. The user is able to add expenses and also track relevant information including the cost, date, and also assign a unique category. Users are also able to add and delete categories to better suit their personal needs. Lastly, the insights page displays specific information relating to the expenses data and displays a graph showing a breakdown of the expenses in each category.",
    link: "https://github.com/konstantinKarzhanov/react-workout-planner",
  },
];
