import React from 'react';
import { motion } from 'framer-motion';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 bg-white shadow-md z-10">
                <nav className="flex justify-between items-center p-4">
                    <h1 className="text-xl font-bold">Tarosh Mathuria</h1>
                    <ul className="flex space-x-4">
                        <li><a href="#about" className="hover:text-blue-500">About</a></li>
                        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                        <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
                        <li><a href="#mini-game" className="hover:text-blue-500">Mini Game</a></li>
                        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="flex-grow">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            </main>
            <footer className="bg-gray-800 text-white text-center p-4">
                <p>&copy; {new Date().getFullYear()} Tarosh Mathuria. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;