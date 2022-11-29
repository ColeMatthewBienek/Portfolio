import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Resume from "./components/Resume.jsx";
import SampleProjects from "./components/SampleProjects.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/samples" element={<SampleProjects />} />
    </Routes>
  );
}
