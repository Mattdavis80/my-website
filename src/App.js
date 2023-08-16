import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";
import ExperiencePage from "./Pages/ExperiencePage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ResumePage from "./Pages/ResumePage";
import ProjectDisplay from "./Pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="resume" element={<ResumePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
