import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import ProjectsAndSkills from "./components/ProjectsAndSkills"; // Fixed import to match component name
import Contact from "./components/Contact";
import Education from "./components/Education";
import { motion } from "framer-motion";

const App: React.FC = () => {
  return (
    <div className="bg-black text-gray-200 font-sans">
      <Navbar />
      <Home />
      <About />
      <ProjectsAndSkills />
      <Education/>
      <Contact />
      <motion.footer
        className="py-8 px-6 bg-gradient-to-t from-gray-900 to-black text-center text-gray-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        © {new Date().getFullYear()} Sreya Vijayan K. All rights reserved.
      </motion.footer>
    </div>
  );
};

export default App;