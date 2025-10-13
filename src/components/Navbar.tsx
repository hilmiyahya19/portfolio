"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Contact", to: "contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4 overflow-hidden">
        {/* 🔹 Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={600}
          offset={-80}
          className="cursor-pointer text-xl font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent whitespace-nowrap"
        >
          HILMI
        </ScrollLink>

        {/* 🔹 Tombol menu (mobile) */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* 🔹 Menu Desktop */}
        <ul className="hidden md:flex space-x-6 text-sm">
          {navItems.map((item) => (
            <li key={item.to}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="text-accent2"
                className="cursor-pointer hover:text-accent2 transition"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 Menu Mobile (Dropdown) */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center bg-dark/90 backdrop-blur-lg border-t border-white/10 py-4 space-y-3 text-sm"
        >
          {navItems.map((item) => (
            <li key={item.to}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="text-accent2"
                className="cursor-pointer hover:text-accent2 transition"
                onClick={() => setIsOpen(false)} // otomatis tutup menu setelah klik
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
