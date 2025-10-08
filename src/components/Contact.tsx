import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null); // New state for errors

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setError("Failed to submit. Please try again later.");
        console.error("Server error:", result);
      }
    } catch (error) {
      setError("An error occurred. Check if the server is running.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6 text-pink-500">Contact Me</h3>
        <p className="text-lg text-gray-400 mb-12">
          Fill out the form below to get in touch, or connect with me on LinkedIn.
        </p>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 h-32 resize-none"
                required
              />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>} {/* Display error message */}
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Send Message
            </motion.button>
          </form>
        ) : (
          <p className="text-lg text-green-400 mb-12">Thank you for your message! I'll get back to you soon.</p>
        )}
        <div className="flex justify-center gap-6 mt-8">
          <motion.a
            href="mailto:sreyavijayan17@gmail.com"
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope /> Email
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/sreya-vijayan-k"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gray-800 text-gray-200 rounded-xl font-semibold border-2 border-gray-700 hover:border-pink-500 hover:text-pink-500 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <FaLinkedin /> LinkedIn
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;