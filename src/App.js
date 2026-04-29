import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import WorkExperience from "./pages/WorkExperience";
import "./App.css";

export default function App() {
  return (
    <SearchProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<WorkExperience />} />
        </Routes>
        <Footer />
      </Router>
    </SearchProvider>
  );
}

