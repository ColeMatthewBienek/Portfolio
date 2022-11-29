import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Resume from "./components/Resume.jsx";
import SampleProjects from "./components/SampleProjects.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { ColorModeProvider } from "@chakra-ui/color-mode";
import appTheme from "./theme.js";

export default function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <ColorModeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/samples" element={<SampleProjects />} />
        </Routes>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
