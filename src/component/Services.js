// src/components/Services.js
import React from 'react';
import mobileApp from '../assets/images/mobile_app.jpg';
import webApplication from '../assets/images/web-design.jpg';
import website from '../assets/images/website.jpg';

const Services = () => {
  return (
    <section id="services" className="services bg-black text-white py-12 px-6">
      <div className="text-center mb-10">
        <h2 className="text-6xl font-bold">Services</h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-8 lg:space-y-0">
        {/* Card 1 */}
        <div className="bg-neutral-900 shadow-lg rounded-lg p-4 max-w-sm text-center">
          <img
            src={mobileApp} // Replace with the actual path or URL of the image
            alt="Service One"
            className="w-full h-52 object-cover rounded-t-lg mb-3"
          />
          <h3 className="text-xl text-orange-500 font-semibold mb-2">Mobile Application Development</h3>
          <p className="text-white mb-4">
          Crafting high-performance, cross-platform mobile apps with Flutter, delivering seamless user experiences and robust functionality for Android and iOS.
          </p>
          {/* <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
            Learn More
          </button> */}
        </div>

        {/* Card 2 */}
        <div className="bg-neutral-900 shadow-lg rounded-lg p-4 max-w-sm text-center">
          <img
            src={website} // Replace with the actual path or URL of the image
            alt="Service Two"
            className="w-full h-52 object-cover rounded-t-lg mb-3"
          />
          <h3 className="text-xl text-orange-500 font-semibold mb-2">Website Development</h3>
          <p className="text-white mb-4">
          Building responsive, user-friendly websites tailored to your brand, focusing on design, speed, and optimized performance across all devices.r benefits.
          </p>
          {/* <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
            Learn More
          </button> */}
        </div>

        {/* Card 3 */}
        <div className="bg-neutral-900 shadow-lg rounded-lg p-4 max-w-sm text-center">
          <img
            src={webApplication} // Replace with the actual path or URL of the image
            alt="Service Three"
            className="w-full h-52 object-cover rounded-t-lg mb-3"
          />
          <h3 className="text-xl font-semibold mb-2 text-orange-500">Web Application Development</h3>
          <p className="text-white mb-4">
          Developing dynamic, feature-rich web applications with intuitive interfaces, designed for scalability, security, and efficient functionality to meet business needs.
          </p>
          {/* <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
            Learn More
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
