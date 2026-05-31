import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronDown } from "react-icons/fa";
import ConfidenceAnalyserImg from "../assets/Confidence.jpg";
import ERPImg from "../assets/erp.jpg";
import EmployeeImg from  "../assets/Employee.jpg"

type Project = {
  name: string;
  tagline: string;
  desc: string;
  image: string;
  tech: string[];
  accent: string;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    name: "ERP Management System",
    tagline: "Full-Stack Enterprise Resource Planning",
    desc: "Architected a comprehensive ERP platform covering inventory management, sales pipeline, purchase orders, quotations, and automated billing. Designed RESTful APIs for real-time inventory sync and built an automated invoice generation engine serving multiple clients simultaneously.",
    image: ERPImg,
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    accent: "from-violet-500/20 to-blue-500/10",
    github: "https://github.com/sreyaaah/ERP.git",
  },
  {
    name: "Employee Management App",
    tagline: "Enterprise HR System with RBAC",
    desc: "Engineered a full-featured EMS with granular role-based access control across admin, manager, and employee portals. Implemented secure JWT authentication, built robust CRUD APIs with ASP.NET Core and Entity Framework Core, and designed a dynamic Angular dashboard.",
    image: EmployeeImg,
    tech: ["Angular 17+", "TypeScript", ".NET 10", "C#", "SQL Server"],
    accent: "from-blue-500/20 to-emerald-500/10",
    github: "https://github.com/sreyaaah/Employee-Management.git",
  },
  {
    name: "Confidence Analyser",
    tagline: "ML-Powered Speaker Analysis Tool",
    desc: "Built an ML-based application to analyse and visualise speaker confidence levels from video input in real-time. Designed a FastAPI backend for video feature extraction using computer vision, and optimised the data processing pipeline to significantly reduce inference latency.",
    image: ConfidenceAnalyserImg,
    tech: ["Python", "React", "Next.js", "FastAPI", "OpenCV"],
    accent: "from-emerald-500/20 to-violet-500/10",
    github: "https://github.com/sreyaaah/confidence_analyzer.git",
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.008, boxShadow: "0 10px 35px -10px rgba(139, 92, 246, 0.15)" }}
      className="group glass rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:glow-sm cursor-default"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image side */}
        <div className={`lg:w-2/5 relative overflow-hidden bg-gradient-to-br ${project.accent} min-h-[220px]`}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover absolute inset-0 mix-blend-luminosity opacity-50 group-hover:opacity-75 group-hover:scale-110 transition-all duration-700"
            onError={(e) => { e.currentTarget.style.opacity = "0"; }}
          />
          {/* Number badge */}
          <div className="absolute top-4 left-4 z-20 w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 text-sm font-bold border border-white/10 group-hover:border-violet-500/30 group-hover:text-violet-400 transition-all duration-300">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Content side */}
        <div className="flex-1 p-7 flex flex-col justify-between">
          <div>
            <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-2">{project.tagline}</p>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all">{project.name}</h3>

            {/* Description with expand */}
            <div className="relative">
              <p className={`text-slate-400 text-sm leading-relaxed ${!expanded ? "line-clamp-2" : ""}`}>
                {project.desc}
              </p>
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 text-violet-400 text-xs font-medium mt-2 hover:text-violet-300 transition-colors"
              >
                {expanded ? "Show less" : "Read more"}
                <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <FaChevronDown size={10} />
                </motion.span>
              </button>
            </div>
          </div>

          <div className="mt-5">
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ y: -2, scale: 1.05, borderColor: "rgba(139, 92, 246, 0.3)", color: "#c084fc", backgroundColor: "rgba(139, 92, 246, 0.05)" }}
                  className="px-2.5 py-1 bg-white/5 border border-white/8 text-slate-400 text-xs rounded-lg font-mono cursor-default transition-all duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {project.github && (
                <motion.a
                  href={project.github}
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors px-4 py-2 glass rounded-xl hover:border-white/20"
                >
                  <FaGithub size={14} /> Source
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-xl hover:bg-violet-500/20"
                >
                  <FaExternalLinkAlt size={12} /> Live Demo
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full max-w-6xl py-14 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">What I've built</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Featured Projects</h2>
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
      </motion.div>

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
