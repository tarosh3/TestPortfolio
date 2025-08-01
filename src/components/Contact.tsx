import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideUp } from "../animations/framerConfig";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/taroshmathuria", icon: "🐙" },
  { name: "LinkedIn", url: "https://linkedin.com/in/taroshmathuria", icon: "💼" },
  { name: "Email", url: "mailto:tarosh.mathuria@gmail.com", icon: "✉️" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const errs: { [k: string]: string } = {};
    if (!form.name) errs.name = "Name required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    if (!form.message) errs.message = "Message required";
    return errs;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-300" variants={slideUp} initial="hidden" whileInView="visible">
          Contact Me
        </motion.h2>
        <motion.form
          className="glass p-8 rounded-xl flex flex-col gap-4"
          onSubmit={handleSubmit}
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={`p-3 rounded bg-white/70 dark:bg-gray-800/70 border ${errors.name ? "border-red-400" : "border-gray-200 dark:border-gray-700"}`}
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={`p-3 rounded bg-white/70 dark:bg-gray-800/70 border ${errors.email ? "border-red-400" : "border-gray-200 dark:border-gray-700"}`}
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
          <textarea
            name="message"
            placeholder="Your Message"
            className={`p-3 rounded bg-white/70 dark:bg-gray-800/70 border ${errors.message ? "border-red-400" : "border-gray-200 dark:border-gray-700"}`}
            value={form.message}
            onChange={handleChange}
            rows={4}
          />
          {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
          >
            Send
          </button>
          {sent && <span className="text-green-500 text-sm">Message sent! (Demo only)</span>}
        </motion.form>
        <div className="flex gap-6 mt-8 justify-center">
          {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition-transform">
              <span role="img" aria-label={link.name}>{link.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}