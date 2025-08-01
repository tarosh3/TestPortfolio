import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/framerConfig";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Mini-Game", href: "#minigame" },
  { name: "Contact", href: "#contact" },
];

export default function Header({ toggleTheme, theme }: { toggleTheme: () => void; theme: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        <a href="#home" className="font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400">Tarosh Mathuria</a>
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors font-medium">{link.name}</a>
          ))}
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-blue-100 dark:bg-gray-800 hover:bg-blue-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
        {/* Mobile menu */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Open menu">
          <span className="text-2xl">{open ? "✖️" : "☰"}</span>
        </button>
        {open && (
          <div className="absolute top-14 right-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex flex-col gap-4 p-4 md:hidden">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors font-medium" onClick={() => setOpen(false)}>{link.name}</a>
            ))}
            <button
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className="mt-2 p-2 rounded-full bg-blue-100 dark:bg-gray-800 hover:bg-blue-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        )}
      </nav>
    </motion.header>
  );
}