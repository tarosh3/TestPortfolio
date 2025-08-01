import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../animations/framerConfig";

const skills = [
  { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", level: 90 },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 85 },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 80 },
  { name: "Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", level: 75 },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 80 },
  { name: "Postgres", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-300" variants={slideUp} initial="hidden" whileInView="visible">
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map(skill => (
            <motion.div
              key={skill.name}
              className="glass p-6 rounded-xl flex flex-col items-center gap-4"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
            >
              <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
              <span className="font-semibold text-blue-700 dark:text-blue-200">{skill.name}</span>
              <div className="w-full bg-blue-100 dark:bg-blue-900 rounded-full h-3">
                <div
                  className="bg-blue-500 dark:bg-blue-400 h-3 rounded-full transition-all"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}