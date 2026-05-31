import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6c86f182-07a2-4d1b-b573-fd3afc6d774c",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        console.error("Error from Web3Forms:", result);
        setStatus("idle");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("idle");
      alert("Failed to send message. Please check your connection.");
    }
  };

  const contacts = [
    {
      icon: FaEnvelope,
      label: "sreyavijayan17@gmail.com",
      href: "mailto:sreyavijayan17@gmail.com",
      color: "text-violet-400 hover:text-violet-300",
      newTab: false,
    },
    {
      icon: FaPhone,
      label: "+91 97440 65606",
      href: "tel:+919744065606",
      color: "text-blue-400 hover:text-blue-300",
      newTab: false,
    },
    {
      icon: FaLinkedin,
      label: "linkedin.com/in/sreya-vijayan-k",
      href: "https://linkedin.com/in/sreya-vijayan-k",
      color: "text-sky-400 hover:text-sky-300",
      newTab: true,
    },
    {
      icon: FaGithub,
      label: "github.com/sreyaaah",
      href: "https://github.com/sreyaaah",
      color: "text-slate-400 hover:text-slate-200",
      newTab: true,
    },
  ];

  return (
    <section id="contact" className="w-full max-w-6xl py-14 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
          Let's talk
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          Get In Touch
        </h2>
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <p className="text-slate-400 text-lg leading-relaxed">
            I'm currently open to{" "}
            <span className="text-white font-semibold">
              full-time opportunities
            </span>{" "}
            and{" "}
            <span className="text-white font-semibold">freelance projects</span>
            . Whether you have a question, a project idea, or just want to say
            hi — my inbox is always open.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {contacts.map(({ icon: Icon, label, href, color, newTab }) => (
              <motion.a
                key={label}
                href={href}
                {...(newTab
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                whileHover={{
                  x: 6,
                  scale: 1.01,
                  boxShadow: "0 8px 25px -8px rgba(139, 92, 246, 0.12)",
                }}
                className="group flex items-center gap-4 glass rounded-2xl px-5 py-4 hover:border-white/10 transition-all duration-200"
              >
                <div className={`${color} transition-colors`}>
                  <Icon size={18} />
                </div>
                <span
                  className={`text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors ${color.includes("hover") ? color : ""}`}
                >
                  {label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-slate-400 text-xs font-semibold tracking-wider uppercase">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Sreya Vijayan"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-400 text-xs font-semibold tracking-wider uppercase">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-slate-400 text-xs font-semibold tracking-wider uppercase">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project or just say hello..."
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className={`self-start flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                status === "sent"
                  ? "bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 cursor-default"
                  : status === "sending"
                    ? "bg-violet-600/50 text-violet-300 cursor-wait border border-violet-500/30"
                    : "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/30 hover:scale-105 active:scale-95 border border-violet-500"
              }`}
            >
              {status === "sent" ? (
                "Message Sent! 🎉"
              ) : status === "sending" ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                <>
                  <FaPaperPlane
                    size={13}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
