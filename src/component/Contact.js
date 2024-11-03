// src/components/Contact.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="contact text-white bg-neutral-900 py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-6xl font-bold  mb-4">Contact Us</h2>
        <p className="tex-white mb-8">
          Feel free to reach us via email, phone, or use the contact form below.
        </p>
        <div className="contact-info mb-8">
          <p className="text-lg text-white">
            <strong className="text-orange-500">Email:</strong> vyankateshr777@gmail.com
          </p>
          <p className="text-lg text-white">
            <strong className="text-orange-500">Phone:</strong> +91 8208514294
          </p>
        </div>

        {/* Centered Social Media Icons */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-4">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
