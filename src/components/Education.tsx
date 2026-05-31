import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";

type TimelineItem = {
  type: "work" | "education" | "cert";
  title: string;
  org: string;
  period: string;
  detail?: string;
  tags?: string[];
};

const timeline: TimelineItem[] = [
  {
    type: "work",
    title: "Software Developer Intern",
    org: "Weberfox Technologies",
    period: "Dec 2025 – Apr 2026",
    detail: "Delivered production ERP modules using React.js + TypeScript. Engineered RESTful APIs with Node.js/Express.js. Built responsive dashboards ensuring cross-browser consistency.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    type: "education",
    title: "Master of Computer Applications (MCA)",
    org: "Cochin University of Science and Technology",
    period: "Jul 2024 – Apr 2026",
    detail: "GPA: 8.80 / 10",
    tags: ["Full Stack", "DBMS", "Algorithms", "Software Engineering"],
  },
  {
    type: "education",
    title: "B.Sc. Mathematics",
    org: "Mahatma Gandhi College, Kannur University",
    period: "Oct 2021 – May 2024",
    detail: "GPA: 9.32 / 10",
    tags: ["Analytics", "Problem Solving", "Statistics"],
  },
  {
    type: "cert",
    title: "Microsoft Full-Stack Developer Professional",
    org: "Coursera",
    period: "2026",
    tags: [".NET", "Azure", "React"],
  },
  {
    type: "cert",
    title: "Data Structures and Algorithms",
    org: "Coursera",
    period: "2026",
    tags: ["DSA", "Problem Solving"],
  },
];

const iconMap = {
  work: { icon: FaBriefcase, bg: "bg-violet-500/20 border-violet-500/40", text: "text-violet-400" },
  education: { icon: FaGraduationCap, bg: "bg-blue-500/20 border-blue-500/40", text: "text-blue-400" },
  cert: { icon: FaCertificate, bg: "bg-emerald-500/20 border-emerald-500/40", text: "text-emerald-400" },
};

const Education: React.FC = () => {
  return (
    <section id="education" className="w-full max-w-4xl py-14 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">My path</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Journey</h2>
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-white/5 to-transparent" />

        <div className="flex flex-col gap-6">
          {timeline.map((item, i) => {
            const { icon: Icon, bg, text } = iconMap[item.type];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-16"
              >
                {/* Icon dot on timeline */}
                <div className={`absolute left-0 top-4 w-10 h-10 rounded-xl border flex items-center justify-center ${bg} ${text}`}>
                  <Icon size={16} />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 6, scale: 1.005, boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.15)" }}
                  className="glass rounded-2xl p-6 hover:border-white/10 transition-all duration-300 hover:glow-sm group cursor-default"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg group-hover:text-gradient transition-all">{item.title}</h3>
                      <p className={`font-medium text-sm mt-0.5 ${text}`}>{item.org}</p>
                    </div>
                    <span className="flex-shrink-0 text-xs font-semibold text-slate-500 bg-white/5 border border-white/8 px-3 py-1.5 rounded-lg self-start">
                      {item.period}
                    </span>
                  </div>

                  {item.detail && (
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.detail}</p>
                  )}

                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ y: -2, scale: 1.05, borderColor: "rgba(139, 92, 246, 0.3)", color: "#c084fc", backgroundColor: "rgba(139, 92, 246, 0.05)" }}
                          className="px-2.5 py-1 bg-white/5 text-slate-500 text-xs rounded-md font-mono border border-white/5 cursor-default transition-all duration-200"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;