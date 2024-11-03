// src/components/Hero.js
import React from "react";
import image from "../assets/images/file.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-screen text-white p-6 lg:p-10 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm bg-opacity-100"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Social Media Icons */}
      <div className="relative z-10 flex space-x-4 mb-6">
        <a
          href="https://www.linkedin.com/in/vyankatesh-raut-69b623208/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 w-10 h-10 flex items-center justify-center rounded-full"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://github.com/vyanki7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 w-10 h-10 flex items-center justify-center rounded-full"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href="https://www.instagram.com/_vyanki_7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 w-10 h-10 flex items-center justify-center rounded-full"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 w-10 h-10 flex items-center justify-center rounded-full"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          I'm Vyankatesh Raut
        </h1>
        <p className="text-base lg:text-lg mb-6">
          Transforming ideas into stunning, high-performance web and mobile
          experiences with expert Web & Flutter development!
        </p>
        <a
          href="mailto:vyankateshr777@gmail.com"
          className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
