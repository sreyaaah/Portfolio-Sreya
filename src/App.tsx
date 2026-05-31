import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200 overflow-x-hidden relative">
      {/* Ambient background glows */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none -z-0" />

      <Navbar />

      <main className="relative z-10 flex flex-col items-center px-4 sm:px-8">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="relative z-10 mt-8 mb-10 px-4 text-center border-t border-white/5 pt-8">
        <p className="text-slate-500 text-sm mb-1">
          Designed & Built by <span className="text-violet-400 font-semibold">Sreya Vijayan K</span>
        </p>
        <p className="text-slate-600 text-xs">
          React · TypeScript · Tailwind CSS · Framer Motion
        </p>
      </footer>
    </div>
  );
};

export default App;