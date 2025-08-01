import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideUp, bounce } from "../animations/framerConfig";

export default function HeroBanner() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24">
      <motion.div
        className="max-w-2xl mx-auto text-center glass p-10"
        variants={slideUp}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-700 dark:text-blue-300" variants={fadeIn}>
          Tarosh Mathuria
        </motion.h1>
        <motion.h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-200" variants={fadeIn}>
          Software Engineer
        </motion.h2>
        <motion.p className="mb-6 text-gray-600 dark:text-gray-300" variants={fadeIn}>
          Building scalable systems that power India's digital backbone.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="/resume.pdf" download className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Download Resume</a>
          <a href="#contact" className="px-6 py-2 rounded-lg bg-white/80 dark:bg-gray-800/80 text-blue-700 dark:text-blue-200 font-semibold shadow hover:bg-blue-100 dark:hover:bg-gray-700 transition">Get in Touch</a>
          <motion.a
            href="#minigame"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold shadow hover:scale-105 transition"
            variants={bounce}
            animate="visible"
            initial="hidden"
          >
            Play Mini-Game
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}