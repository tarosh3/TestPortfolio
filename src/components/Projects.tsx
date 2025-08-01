import React from "react";
import { motion } from "framer-motion";
import { glassCardHover, slideUp } from "../animations/framerConfig";

const projects = [
  {
    title: "ONDC Seller-Buyer Integration",
    desc: "Integrated seller and buyer apps with India's Open Network for Digital Commerce (ONDC), enabling seamless digital transactions.",
    tags: ["Go", "Kafka", "API", "ONDC"],
    link: "#",
  },
  {
    title: "SaaS Buyer App for Tata, Paytm, Ola",
    desc: "Led development of a SaaS-based buyer application for major clients, supporting onboarding, catalog search, and order management.",
    tags: ["React", "MongoDB", "Postgres", "SaaS"],
    link: "#",
  },
  {
    title: "Generative AI Playground",
    desc: "Personal project exploring generative AI models and user experience improvements.",
    tags: ["Python", "AI", "UX"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-300" variants={slideUp} initial="hidden" whileInView="visible">
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.a
              key={proj.title}
              href={proj.link}
              className="glass p-6 rounded-xl shadow-lg flex flex-col gap-4 hover:scale-105 transition-transform cursor-pointer"
              variants={glassCardHover}
              initial="rest"
              whileHover="hover"
              animate="rest"
              whileInView="visible"
            >
              <h3 className="font-semibold text-xl text-blue-700 dark:text-blue-200">{proj.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded text-xs">{tag}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}