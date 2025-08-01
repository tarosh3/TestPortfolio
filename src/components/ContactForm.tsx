import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setError('All fields are required.');
            return;
        }
        setError('');
        // Handle form submission logic here (e.g., send to an API)
        console.log('Form submitted:', { name, email, message });
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <motion.div
            className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows={4}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                >
                    Send Message
                </button>
            </form>
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Connect with me:</h3>
                <div className="flex space-x-4 mt-2">
                    <a href="https://github.com/taroshmathuria" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                    <a href="https://linkedin.com/in/taroshmathuria" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
                    <a href="mailto:taroshmathuria@example.com" className="text-blue-500 hover:underline">Email</a>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactForm;