import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from "react-icons/fa";
import profilePic from "../assets/pic.jpg";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full max-w-6xl flex flex-col justify-center pt-20 pb-10 scroll-mt-0"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Block */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
        
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-4"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient">Sreya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-6"
          >
            Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-400 text-lg max-w-xl leading-relaxed mb-10"
          >
            I architect scalable enterprise systems and craft fluid user experiences — bridging the gap between robust backend logic and beautiful frontends using{" "}
            <span className="text-violet-400 font-medium">MERN stack</span> &amp;{" "}
            <span className="text-blue-400 font-medium">.NET ecosystem</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-violet-600/30"
            >
              <FaEnvelope className="group-hover:rotate-12 transition-transform" />
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download="Sreya_Vijayan_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 glass text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 hover:border-white/20"
            >
              <FaArrowDown className="group-hover:translate-y-0.5 transition-transform" />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-3 mt-8 justify-center lg:justify-start"
          >
            {[
              { icon: FaLinkedin, href: "https://linkedin.com/in/sreya-vijayan-k", label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-400/30", newTab: true },
              { icon: FaGithub, href: "https://github.com/sreyaaah", label: "GitHub", color: "hover:text-slate-100 hover:border-white/30", newTab: true },
              { icon: FaEnvelope, href: "mailto:sreyavijayan17@gmail.com", label: "Email", color: "hover:text-violet-400 hover:border-violet-400/30", newTab: false },
            ].map(({ icon: Icon, href, label, color, newTab }) => (
              <a
                key={label}
                href={href}
                {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={label}
                className={`w-11 h-11 glass rounded-xl flex items-center justify-center text-slate-500 transition-all duration-200 hover:scale-110 ${color}`}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex-shrink-0 relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/30 via-blue-500/20 to-emerald-500/20 blur-2xl scale-110" />
            {/* Decorative border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/50 to-blue-500/50 p-[1px]">
              <div className="w-full h-full rounded-3xl bg-[#0f0f1a]" />
            </div>
            {/* Actual image */}
            <img
              src={profilePic}
              alt="Sreya Vijayan"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            {/* Subtle corner accent */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-violet-500/20 rounded-2xl border border-violet-500/30 glass" />
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500/20 rounded-xl border border-blue-500/30 glass" />
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <FaArrowDown size={12} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;