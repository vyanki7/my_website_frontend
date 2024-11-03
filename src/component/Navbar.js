// src/components/Navbar.js
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-20 bg-black text-white py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="text-orange-500 font-bold text-lg hover:text-orange-600">Rv_developer</div>

      {/* Links for desktop */}
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-orange-600">
          Home
        </a>
        <a href="#about" className="hover:text-orange-600">
          About
        </a>
        <a href="#services" className="hover:text-orange-600">
          Services
        </a>
        {/* <a href="#portfolio" className="hover:text-orange-600">
          Portfolio
        </a> */}
        <a href="#contact" className="hover:text-orange-600">
          Contact
        </a>
      </div>

      {/* Hamburger menu icon for mobile */}
      <div className="md:hidden" onClick={toggleMenu}>
        <button className="text-white focus:outline-none">
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 right-0 w-3/4 h-screen bg-black flex flex-col items-center justify-center space-y-6 md:hidden">
          <a
            href="#home"
            className="hover:text-orange-600 text-lg"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-orange-600 text-lg"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-orange-600 text-lg"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="hover:text-orange-600 text-lg"
            onClick={toggleMenu}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="hover:text-orange-600 text-lg"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
