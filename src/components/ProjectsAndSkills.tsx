import React from "react";
import { motion, type Variants } from "framer-motion";

// Placeholder images (replace with actual project images)
import ConfidenceAnalyserImg from "../assets/Confidence.jpg";
import GeminiAICloneImg from "../assets/Gemini.jpg";

type Project = {
  name: string;
  desc: string;
  image: string;
  tech: string[];
};

const projects: Project[] = [
  {
    name: "Confidence Analyser",
    desc: "- Analyzes speaker confidence using ML for audio (tone, pace) and visual cues (gestures, posture).\n- Responsive React/Next.js interface for video uploads and feedback reports.\n- Optimized real-time processing for training environments.",
    image: ConfidenceAnalyserImg,
    tech: ["Python", "React", "Next.js", "Machine Learning"],
  },
  {
    name: "Gemini AI Clone",
    desc: "- Replicates Gemini AI with context-aware chatbot via Google AI API.\n- Built with React/Vite for scalable, minimalist UI.\n- Handles API limits and latency with caching for cross-browser support.",
    image: GeminiAICloneImg,
    tech: ["React", "Vite", "CSS", "Google AI API"],
  },
];

const skills: string[] = [
  "Python",
  "Java",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "MySQL",
  "MongoDB",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Git",
  "Streamlit",
  "HTML",
  "CSS",
];

// Animation variants for staggered slide-in effect
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ProjectsAndSkills: React.FC = () => {
  return (
    <motion.section
      id="projectsAndSkills" // Changed from "projects-and-skills" to match Navbar
      className="py-20 px-8 bg-gradient-to-b from-black to-gray-900 min-h-screen scroll-mt-20" // Added scroll-mt-20 for navbar offset
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Projects Section */}
        <motion.h3
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
          variants={itemVariants}
        >
          Projects
        </motion.h3>
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-700 hover:border-pink-500 group"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={project.image || "/fallback-image.jpg"}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "/fallback-image.jpg";
                    console.warn(`Failed to load image for ${project.name}`);
                  }}
                />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">{project.name}</h4>
              <p className="text-gray-400 mb-5 text-base whitespace-pre-line">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-pink-100/20 text-pink-500 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.h3
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
          variants={itemVariants}
        >
          Technical Skills
        </motion.h3>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-gray-800/50 p-4 rounded-lg text-center font-medium text-gray-300 border border-gray-700 hover:border-purple-500 transition-all group"
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 2, backgroundColor: "rgba(219, 39, 119, 0.1)" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsAndSkills;