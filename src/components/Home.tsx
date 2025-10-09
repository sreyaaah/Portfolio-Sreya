import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Pic from "../assets/pic.jpg";

const Home: React.FC = () => {
  const icons = [
    { Icon: FaEnvelope, href: "mailto:sreyavijayan17@gmail.com", label: "Email" }, // Replace with your email
    { Icon: FaPhone, href: "tel:+919744065606", label: "Phone" }, // Replace with your phone number
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/sreya-vijayan-k/", label: "LinkedIn" }, // Replace with your LinkedIn URL
    { Icon: FaGithub, href: "https://github.com/sreyaaah", label: "GitHub" }, // Already provided in your code
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-black to-gray-900 scroll-mt-20" // Added scroll-mt-20 for navbar offset
    >
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Sreya
            </span>
          </h2>
          <h3 className="text-2xl text-gray-400 mb-8">
            <Typewriter
              words={["Full-Stack Developer", "ML Enthusiast", "Python", "Java"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          <p className="text-gray-300 mb-4 text-lg max-w-md">
            Explore my skills and projects through my resume, or reach out to collaborate!
          </p>
          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="/Sreya-Vijayan-K.pdf" // Replace with the actual path or URL to your resume
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-800 text-gray-200 rounded-lg font-medium border-2 border-gray-700 hover:border-pink-500 hover:text-pink-500 transition-all"
            >
              Contact
            </a>
            <a
              href="https://github.com/sreyaaah"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-gray-200 rounded-lg font-medium border-2 border-gray-700 hover:border-pink-500 hover:text-pink-500 transition-all"
            >
              View GitHub
            </a>
          </motion.div>

          <div className="flex space-x-4">
            {icons.map(({ Icon, href, label }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : "_self"} // Open external links in new tab
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                title={label} // Accessibility: Add tooltip for screen readers
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all hover:text-pink-500"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          className="relative w-full flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-pink-500">
            <img src={Pic} alt="Sreya Vijayan" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-pink-500 rounded-full opacity-30 blur-2xl animate-pulse"></div>
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-500 rounded-full opacity-30 blur-2xl animate-pulse"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;