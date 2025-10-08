import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  // Animation variants for staggered text and elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-16 px-6 bg-gradient-to-b from-black to-gray-900" // Reduced py-20 to py-16
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto text-center"> {/* Reduced max-w-6xl to max-w-5xl */}
        <motion.h3
          className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
          variants={itemVariants}
        >
          About Me
        </motion.h3>

        <motion.div
          className="space-y-4 text-gray-300" // Reduced space-y-6 to space-y-4
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" // Reduced max-w-3xl to max-w-2xl
            variants={itemVariants}
          >
            I'm Sreya Vijayan, a passionate <span className="text-pink-500">Full-Stack Developer</span> and{" "}
            <span className="text-purple-500">Machine Learning Enthusiast</span> with a knack for creating
            innovative, scalable, and user-friendly applications. With a strong foundation in{" "}
            <span className="font-semibold">Python</span>, <span className="font-semibold">Java</span>,
            <span className="font-semibold">React</span>, and modern web technologies, I thrive on solving
            complex problems and turning ideas into reality.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" // Reduced max-w-3xl to max-w-2xl
            variants={itemVariants}
          >
            My journey in tech is driven by curiosity and a love for learning. I've worked on diverse
            projects, from building responsive web applications to experimenting with machine learning
            models for real-world applications. Whether it's crafting clean, efficient code or diving into
            data-driven solutions, I'm always eager to push the boundaries of what's possible.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-6" // Reduced gap-6 to gap-4, mt-8 to mt-6, max-w-3xl to max-w-2xl
            variants={containerVariants}
          >
            <motion.div
              className="p-3 bg-gray-800/50 rounded-lg shadow-lg border border-gray-700 hover:border-pink-500 transition-all" // Reduced p-4 to p-3
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-semibold text-pink-500 mb-2">Technical Expertise</h4>
              <p className="text-gray-400">
                Proficient in full-stack development with tools like React, Node.js, Python, Java, and
                databases like MongoDB and PostgreSQL. Experienced in building RESTful APIs and
                microservices.
              </p>
            </motion.div>
            <motion.div
              className="p-3 bg-gray-800/50 rounded-lg shadow-lg border border-gray-700 hover:border-purple-500 transition-all" // Reduced p-4 to p-3
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-semibold text-purple-500 mb-2">ML & Data Passion</h4>
              <p className="text-gray-400">
                Skilled in machine learning frameworks like TensorFlow and scikit-learn, with a focus on
                data analysis, model training, and deploying AI-driven solutions for practical use cases.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;