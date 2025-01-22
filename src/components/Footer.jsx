import React from "react";
import Logo from "../assets/400x250.png";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-white py-6">
      <div className="container mx-auto px-6 text-center md:text-left max-w-[1280px]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Name */}
          <div className="mb-4 md:mb-0">
            <img src={Logo} alt="Company Logo" className="h-10 w-20" />
          </div>
          {/* Links */}
          <div className="mb-4 md:mb-0 text-black">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="flex space-x-4 text-black">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
        {/* Bottom Text */}
        <div className="mt-4 text-sm text-black">
          © {new Date().getFullYear()} NWS LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
