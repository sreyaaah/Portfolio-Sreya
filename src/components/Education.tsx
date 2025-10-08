import React from "react";
import { motion } from "framer-motion";

const EducationAndExperience: React.FC = () => {
  const timeline = [
    {
      title: "Master of Computer Applications",
      institution: "Cochin University of Science and Technology",
      duration: "2026",
      gpa: "",
      category: "Education",
      icon: "🎓",
    },
    {
      title: "AI/ML Intern - Elevate Labs",
      institution: "",
      duration: "2026",
      description: "Developed and fine-tuned a machine learning model for a movie recommendation system, improving relevance of suggestions. Applied data preprocessing and analysis techniques using Python libraries (Pandas, NumPy) to clean and prepare datasets.",
      category: "Experience",
      icon: "🤖",
    },
    {
      title: "Bachelor of Science in Mathematics",
      institution: "Mahatma Gandhi College, Kannur University",
      duration: "2024",
      gpa: "",
      category: "Education",
      icon: "📊",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as const,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring" as const, 
        stiffness: 200, 
        delay: 0.5 
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      id="education"
      className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education & Experience
        </motion.h2>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-600 hidden md:block"></div>
          
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className={`mb-16 flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-between`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Content Card */}
              <motion.div
                className={`w-full md:w-5/12 p-8 bg-gray-800/50 rounded-xl shadow-2xl border border-gray-700 hover:border-pink-500 transition-all duration-300 group ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.2)"
                }}
              >
                {/* Category Badge */}
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                  item.category === "Education" 
                    ? "bg-pink-500/20 text-pink-400" 
                    : "bg-purple-500/20 text-purple-400"
                }`}>
                  <span className="mr-2">{item.icon}</span>
                  {item.category}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-500 transition-colors">
                  {item.title}
                </h3>
                
                {item.institution && (
                  <p className="text-lg text-gray-300 mb-2 font-medium">
                    {item.institution}
                  </p>
                )}
                
                {item.gpa && (
                  <p className="text-purple-400 font-semibold mb-4">{item.gpa}</p>
                )}
                
                {item.description && (
                  <p className="text-gray-400 leading-relaxed mt-4 text-base">
                    {item.description}
                  </p>
                )}

                {/* Duration */}
                <div className="mt-6 pt-4 border-t border-gray-600">
                  <span className="text-pink-500 font-bold text-lg">
                    {item.duration}
                  </span>
                </div>
              </motion.div>

              {/* Timeline Icon - Visible on desktop */}
              <motion.div
                className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-2xl shadow-2xl border-4 border-gray-900"
                variants={iconVariants}
                whileHover="hover"
              >
                {item.icon}
              </motion.div>

              {/* Timeline Icon - Visible on mobile */}
              <div className="md:hidden flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-lg mb-4 shadow-lg border-2 border-gray-900">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.section>
  );
};

export default EducationAndExperience;