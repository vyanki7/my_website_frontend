// src/components/About.js
import React from 'react';
import myImage from '../assets/images/my.jpeg'; // Adjust the path to your image

const About = () => {
  return (
    <section id="about" className="about bg-neutral-900 flex flex-col lg:flex-row items-center justify-center h-screen bg text-white p-6 lg:p-10">
      {/* Left Side: Image */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
        <img
          src={myImage}
          alt="About"
          className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-3/5 xl:w-2/5 max-h-[400px] rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Right Side: Info */}
      <div className="lg:w-1/2 lg:pl-10 text-center lg:text-left">
        <h2 className="text-6xl font-bold mb-4">About Me</h2>
        <h5 className="font-bold mb-4 text-3xl text-orange-600">Developer</h5>
        <p className="text-base lg:text-lg mb-4">
          Welcome! I'm Vyankatesh Raut, a passionate developer dedicated to creating high-performance web and mobile applications.
        </p>
        <p className="text-base lg:text-lg">
          With expertise in both web and Flutter development, I transform ideas into seamless digital experiences.
          Let’s build something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;
