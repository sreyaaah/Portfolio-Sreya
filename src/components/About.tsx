import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-6xl py-14 scroll-mt-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Who I am</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">About Me</h2>
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

        {/* Bio — takes 3 columns */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 flex flex-col gap-4"
        >
          <p className="text-slate-300 text-lg leading-relaxed">
            I'm a passionate{" "}
            <span className="text-violet-400 font-semibold">Full-Stack Developer</span> and recent MCA graduate from{" "}
            <span className="text-white font-medium">Cochin University of Science and Technology</span>, with a strong foundation in modern web technologies and enterprise systems.
          </p>
          <p className="text-slate-400 leading-relaxed">
            During my internship at{" "}
            <span className="text-white font-medium">Weberfox Technologies</span>, I delivered production-grade ERP modules, engineered RESTful APIs, and built robust full-stack applications — gaining real-world experience with both the MERN stack and the .NET ecosystem.
          </p>
          <p className="text-slate-400 leading-relaxed">
            I thrive on solving complex problems with clean, maintainable code. Whether crafting a fluid React frontend or architecting a scalable ASP.NET backend, I care deeply about the craft of software engineering.
          </p>
        </motion.div>

        {/* Core Expertise — takes 2 columns */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-2 glass rounded-2xl p-6"
        >
          <h4 className="text-slate-300 font-semibold mb-4 text-sm uppercase tracking-wider">Core Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "MERN Stack",
              ".NET / C#",
              "TypeScript",
              "Angular",
              "REST APIs",
              "SQL & MongoDB",
              "FastAPI",
              "System Design",
            ].map((tag) => (
              <motion.span
                key={tag}
                whileHover={{
                  y: -2,
                  scale: 1.05,
                  borderColor: "rgba(139, 92, 246, 0.4)",
                  color: "#c084fc",
                  backgroundColor: "rgba(139, 92, 246, 0.05)",
                }}
                className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium rounded-lg cursor-default transition-all duration-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
