import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import MiniGame from "./components/MiniGame";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/tailwind.css";

function App() {
  // Light/dark mode
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  const toggleTheme = () => setTheme(t => (t === "dark" ? "light" : "dark"));

  // Smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Console easter egg (for most browsers)
  useEffect(() => {
    const onOpen = () => {
      console.log(`%c
   _______                  _     _       _   _       _ _       
  |__   __|                | |   | |     | | (_)     (_) |      
     | | ___ _ __ ___  __ _| |__ | | ___ | |_ _ _ __  _| |_ ___ 
     | |/ _ \\ '__/ _ \\/ _\` | '_ \\| |/ _ \\| __| | '_ \\| | __/ _ \\
     | |  __/ | |  __/ (_| | |_) | | (_) | |_| | | | | | ||  __/
     |_|\\___|_|  \\___|\\__,_|_.__/|_|\\___/ \\__|_|_| |_|_|\\__\\___|
                                                                 
                                                                 
          `, "color: #38bdf8; font-family:monospace; font-size:12px;");
      console.log("%cHey developer! Curious minds build the future. 🚀", "color:#fbbf24;font-size:14px;");
    };
    window.addEventListener("keydown", e => {
      if (
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.metaKey && e.altKey && e.key === "I")
      ) {
        setTimeout(onOpen, 500);
      }
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 min-h-screen transition-colors">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <HeroBanner />
        <About />
        <Projects />
        <Skills />
        <MiniGame />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;