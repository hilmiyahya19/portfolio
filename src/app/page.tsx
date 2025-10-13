"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { fadeInUp } from "@/lib/motion";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent1 to-accent2 text-transparent bg-clip-text"
        variants={fadeInUp(0)}
        initial="hidden"
        animate="show"
      >
        Hi, I’m <span className="text-accent2">Hilmi Yahya</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8"
        variants={fadeInUp(0)}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
      >
        In coding, as in life, you don’t need to rush. Every small step, every tiny improvement, every line you write with patience builds something greater. Stay consistent, stay curious — growth always follows persistence.
      </motion.p>

      <motion.div
        className="flex gap-4"
        variants={fadeInUp(0)}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.4 }}
      >
        <ScrollLink
          to="portfolio"
          smooth={true}
          duration={600}
          offset={-50}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent1 to-accent2 text-white font-medium hover:opacity-90 transition cursor-pointer"
        >
          View My Work
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={600}
          offset={-50}
          className="px-6 py-3 rounded-xl border border-accent2 text-accent2 hover:bg-accent2 hover:text-white transition cursor-pointer"
        >
          About Me
        </ScrollLink>
      </motion.div>
    </section>
  );
}
