import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";
import ExperiencePage from "./Pages/ExperiencePage";
import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<ExperiencePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
