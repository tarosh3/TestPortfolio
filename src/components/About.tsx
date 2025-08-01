import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../animations/framerConfig";

const timeline = [
  {
    year: "2021",
    title: "Graduated from DTU",
    desc: "B.Tech in Software Engineering, Delhi Technological University.",
  },
  {
    year: "2021-2022",
    title: "ONDC Seller-Buyer Integration",
    desc: "Integrated seller-side and buyer-side apps with India's Open Network for Digital Commerce (ONDC).",
  },
  {
    year: "2022-2024",
    title: "SaaS Buyer App Lead",
    desc: "Led development of a SaaS-based buyer app used by Tata, Ola, Paytm, enabling seamless onboarding, catalog search, and order management.",
  },
  {
    year: "2024+",
    title: "Generative AI & Resilient Systems",
    desc: "Working on Generative AI and building resilient, scalable systems.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">
            About Me
          </h2>
        </motion.div>
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
            I’m a Software Engineer with over 3 years of professional experience in backend systems, API integrations, and scalable full-stack web applications.<br/>
            I graduated from Delhi Technological University (DTU) with a B.Tech in Software Engineering.<br/>
            I’ve played a key role in integrating both the seller-side and buyer-side apps with India’s Open Network for Digital Commerce (ONDC).<br/>
            I also led development of a SaaS-based buyer application used by major clients like Tata, Ola, Paytm, and others, enabling them to transact over ONDC with seamless onboarding, catalog search, and order management.<br/>
            I’m skilled in Go, Python, React, Kafka, MongoDB, and Postgres, and passionate about building resilient systems, working on Generative AI, and improving user experiences.
          </p>
        </motion.div>
        <div className="relative pl-6 border-l-4 border-blue-400 dark:border-blue-600">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.year}
              className="mb-8"
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: idx * 0.1 }}
            >
              <div className="absolute -left-3 w-6 h-6 bg-blue-400 dark:bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              <div className="ml-6">
                <h3 className="font-semibold text-lg text-blue-700 dark:text-blue-300">{item.title} <span className="text-gray-500 text-base">({item.year})</span></h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}