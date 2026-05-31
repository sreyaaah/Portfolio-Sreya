import React from "react";
import { motion, type Variants } from "framer-motion";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiNodedotjs,
  SiDotnet,
  SiPython,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDocker,
  SiPostman,
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaWrench,
  FaLink,
  FaKey,
  FaCogs,
  FaCube,
  FaLayerGroup,
  FaProjectDiagram,
  FaCloud,
  FaUsers,
} from "react-icons/fa";

type SkillCategory = {
  title: string;
  color: string;
  items: { name: string }[];
};

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    color: "violet",
    items: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Angular 17+" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
    ],
  },
  {
    title: "Backend",
    color: "blue",
    items: [
      { name: "Node.js & Express" },
      { name: "ASP.NET Core" },
      { name: "C#" },
      { name: "Python & FastAPI" },
      { name: "REST API Design" },
      { name: "JWT Authentication" },
    ],
  },
  {
    title: "Database",
    color: "emerald",
    items: [
      { name: "MongoDB" },
      { name: "SQL Server" },
      { name: "MySQL" },
      { name: "Entity Framework" },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "amber",
    items: [
      { name: "Git & GitHub" },
      { name: "Docker" },
      { name: "Postman" },
      { name: "Azure" },
      { name: "AWS" },
      { name: "Vercel" },
      { name: "Railway" },
      { name: "CI/CD" },
    ],
  },
  {
    title: "Core Concepts",
    color: "violet",
    items: [
      { name: "DSA" },
      { name: "OOP" },
      { name: "SOLID Principles" },
      { name: "System Design" },
      { name: "Version Control" },
    ],
  },
  {
  title: "Soft Skills",
  color: "amber",
  items: [
    { name: "Communication" },
    { name: "Teamwork" },
    { name: "Problem Solving" },
    { name: "Time Management" },
    { name: "Adaptability" },
  ],
},
];



const skillDetails: Record<
  string,
  {
    icon: React.ComponentType<{
      size?: number;
      className?: string;
      style?: React.CSSProperties;
    }>;
    brandColor: string;
    glowColor: string;
  }
> = {
  "React.js": { icon: SiReact, brandColor: "#61DAFB", glowColor: "rgba(97,218,251,0.2)" },
  "TypeScript": { icon: SiTypescript, brandColor: "#3178C6", glowColor: "rgba(49,120,198,0.2)" },
  "JavaScript": { icon: SiJavascript, brandColor: "#F7DF1E", glowColor: "rgba(247,223,30,0.2)" },
  "Angular 17+": { icon: SiAngular, brandColor: "#DD0031", glowColor: "rgba(221,0,49,0.2)" },
  "Next.js": { icon: SiNextdotjs, brandColor: "#FFFFFF", glowColor: "rgba(255,255,255,0.15)" },
  "Tailwind CSS": { icon: SiTailwindcss, brandColor: "#06B6D4", glowColor: "rgba(6,182,212,0.2)" },
  "HTML5": { icon: SiHtml5, brandColor: "#E34F26", glowColor: "rgba(227,79,38,0.2)" },
  "CSS3": { icon: SiCss3, brandColor: "#1572B6", glowColor: "rgba(21,114,182,0.2)" },
  "Bootstrap": { icon: SiBootstrap, brandColor: "#7952B3", glowColor: "rgba(121,82,179,0.2)" },

  "Node.js & Express": { icon: SiNodedotjs, brandColor: "#339933", glowColor: "rgba(51,153,51,0.2)" },
  "ASP.NET Core": { icon: SiDotnet, brandColor: "#512BD4", glowColor: "rgba(81,43,212,0.2)" },
  "C#": { icon: TbBrandCSharp, brandColor: "#239120", glowColor: "rgba(35,145,32,0.2)" },
  "Python & FastAPI": { icon: SiPython, brandColor: "#3776AB", glowColor: "rgba(55,118,171,0.2)" },
  "REST API Design": { icon: FaLink, brandColor: "#10B981", glowColor: "rgba(16,185,129,0.2)" },
  "JWT Authentication": { icon: FaKey, brandColor: "#10B981", glowColor: "rgba(16,185,129,0.2)" },

  MongoDB: { icon: SiMongodb, brandColor: "#47A248", glowColor: "rgba(71,162,72,0.2)" },
  "SQL Server": { icon: DiMsqlServer, brandColor: "#CC292B", glowColor: "rgba(204,41,43,0.2)" },
  MySQL: { icon: SiMysql, brandColor: "#4479A1", glowColor: "rgba(68,121,161,0.2)" },
  "Entity Framework": { icon: SiDotnet, brandColor: "#512BD4", glowColor: "rgba(81,43,212,0.2)" },

  "Git & GitHub": { icon: SiGit, brandColor: "#F05032", glowColor: "rgba(240,80,50,0.2)" },
  Docker: { icon: SiDocker, brandColor: "#2496ED", glowColor: "rgba(36,150,237,0.2)" },
  Postman: { icon: SiPostman, brandColor: "#FF6C37", glowColor: "rgba(255,108,55,0.2)" },

  Azure: { icon: FaCloud, brandColor: "#0078D4", glowColor: "rgba(0,120,212,0.2)" },
  AWS: { icon: FaCloud, brandColor: "#FF9900", glowColor: "rgba(255,153,0,0.2)" },
  Vercel: { icon: FaCloud, brandColor: "#FFFFFF", glowColor: "rgba(255,255,255,0.15)" },
  Railway: { icon: FaCloud, brandColor: "#7B68EE", glowColor: "rgba(123,104,238,0.2)" },
  "CI/CD": { icon: FaCogs, brandColor: "#3B82F6", glowColor: "rgba(59,130,246,0.2)" },

  DSA: { icon: FaCode, brandColor: "#8B5CF6", glowColor: "rgba(139,92,246,0.2)" },
  OOP: { icon: FaCube, brandColor: "#06B6D4", glowColor: "rgba(6,182,212,0.2)" },
  "SOLID Principles": { icon: FaLayerGroup, brandColor: "#10B981", glowColor: "rgba(16,185,129,0.2)" },
  "System Design": { icon: FaProjectDiagram, brandColor: "#F59E0B", glowColor: "rgba(245,158,11,0.2)" },
  "Version Control": { icon: SiGit, brandColor: "#F05032", glowColor: "rgba(240,80,50,0.2)" },

  Communication: {icon: FaUsers,brandColor: "#60A5FA", glowColor: "rgba(96,165,250,0.2)",},
  Teamwork: { icon: FaUsers,brandColor: "#34D399",glowColor: "rgba(52,211,153,0.2)",},
  "Problem Solving": {icon: FaCode, brandColor: "#F59E0B",glowColor: "rgba(245,158,11,0.2)",},
  "Time Management": {icon: FaProjectDiagram, brandColor: "#A78BFA", glowColor: "rgba(167,139,250,0.2)",},
  Adaptability: {icon: FaCloud,brandColor: "#22D3EE",glowColor: "rgba(34,211,238,0.2)",},
};

const colorMap: Record<string, { text: string; glow: string; borderLeft: string }> = {
  violet: { text: "text-violet-400", glow: "bg-violet-500/10", borderLeft: "border-l-2 border-l-violet-500/40" },
  blue: { text: "text-blue-400", glow: "bg-blue-500/10", borderLeft: "border-l-2 border-l-blue-500/40" },
  emerald: { text: "text-emerald-400", glow: "bg-emerald-500/10", borderLeft: "border-l-2 border-l-emerald-500/40" },
  amber: { text: "text-amber-400", glow: "bg-amber-500/10", borderLeft: "border-l-2 border-l-amber-500/40" },
};

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Frontend: FaCode,
  Backend: FaServer,
  Database: FaDatabase,
  "Tools & Platforms": FaWrench,
  "Core Concepts": FaProjectDiagram,
  "Soft Skills": FaUsers,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full max-w-6xl py-14 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">My toolkit</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Technical Skills</h2>
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
      </motion.div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {categories.map((cat) => {
          const colors = colorMap[cat.color];
          const Icon = iconMap[cat.title];

          return (
            <motion.div
              key={cat.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className={`group glass rounded-3xl p-6 sm:p-8 hover:border-white/10 transition-all duration-300 hover:glow-sm relative overflow-hidden ${colors.borderLeft}`}
            >
              {/* Background glow shadow */}
              <div className={`absolute -right-16 -top-16 w-36 h-36 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${colors.glow}`} />

              {/* Card Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">{cat.title}</h3>
                
                {/* Count Badge */}
                <span className="ml-auto text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-slate-400 group-hover:text-slate-300 transition-colors">
                  {cat.items.length} Skills
                </span>
              </div>

              {/* Skill Boxes Grid */}
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill) => {
                  const details = skillDetails[skill.name] || { icon: FaCode, brandColor: "#94a3b8", glowColor: "rgba(148, 163, 184, 0.15)" };
                  const SkillIcon = details.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{
                        y: -3,
                        scale: 1.04,
                        borderColor: details.brandColor,
                        boxShadow: `0 4px 20px ${details.glowColor}`,
                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                      }}
                      className="group/skill flex items-center gap-2.5 px-4 py-2.5 bg-white/3 border border-white/5 text-slate-300 font-medium text-sm rounded-2xl cursor-default transition-all duration-200"
                    >
                      <SkillIcon size={18} style={{ color: details.brandColor }} className="group-hover/skill:scale-110 transition-transform duration-300" />
                      <span className="text-slate-300 group-hover/skill:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      
    </section>
  );
};

export default Skills;
