import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <section className="py-20 bg-gray-100" id="about">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
                <p className="text-lg text-center mb-6">
                    Hi, I'm Tarosh Mathuria, a passionate software engineer with a love for building innovative solutions. 
                    My journey in technology began at a young age, and since then, I've been dedicated to honing my skills 
                    and expanding my knowledge in various programming languages and frameworks.
                </p>
                <div className="timeline">
                    <div className="timeline-item">
                        <h3 className="font-semibold">2023</h3>
                        <p>Worked on the ONDC Seller-Buyer Integration project, enhancing e-commerce capabilities.</p>
                    </div>
                    <div className="timeline-item">
                        <h3 className="font-semibold">2022</h3>
                        <p>Developed a SaaS Buyer App for Tata, streamlining their purchasing processes.</p>
                    </div>
                    <div className="timeline-item">
                        <h3 className="font-semibold">2021</h3>
                        <p>Contributed to various personal projects focusing on AI and machine learning.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;