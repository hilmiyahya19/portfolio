"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.h2
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-accent1 to-accent2 text-transparent bg-clip-text"
        variants={fadeInUp(0)}
        initial="hidden"
        animate="show"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="text-gray-300 max-w-2xl mb-10"
        variants={fadeInUp(0)}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
      >
        {"Let's connect! I'm always open to new opportunities, collaborations, or just a friendly chat."}
      </motion.p>

      <motion.div
        className="flex gap-6"
        variants={fadeInUp(0)}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.4 }}
      >
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/hyhlmyhy"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white/5 hover:bg-accent1/20 transition-transform transform hover:-translate-y-1"
        >
          <FaLinkedin className="text-3xl text-accent1 hover:text-accent2 transition" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/hilmiyahya19"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white/5 hover:bg-accent1/20 transition-transform transform hover:-translate-y-1"
        >
          <FaGithub className="text-3xl text-gray-300 hover:text-accent2 transition" />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/hyhlmyhy"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white/5 hover:bg-accent1/20 transition-transform transform hover:-translate-y-1"
        >
          <FaInstagram className="text-3xl text-pink-400 hover:text-accent2 transition" />
        </a>
      </motion.div>

      {/* <motion.p
        className="text-sm text-gray-500 mt-10"
        variants={fadeInUp(0)}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.6 }}
      >
        Or email me at{" "}
        <a
          href="mailto:hilmi.yahya@example.com"
          className="text-accent2 hover:underline"
        >
          hilmi.yahya@example.com
        </a>
      </motion.p> */}
    </section>
  );
}
