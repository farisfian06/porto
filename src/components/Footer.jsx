import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primaryOrange-0">
              Let's Connect
            </h3>
            <p className="text-sm">
              Great things start with collaboration. Let’s make it happen!
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primaryOrange-0">
              Reach Me
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/farisfian06"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primaryOrange-0 transition-colors duration-200"
              >
                <FaGithub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/farisihsanalifian"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primaryOrange-0 transition-colors duration-200"
              >
                <FaLinkedin className="h-6 w-6 hover:text-primaryOrange transition-colors duration-200" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/faris_ihsan.a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primaryOrange-0 transition-colors duration-200"
              >
                <FaInstagram className="h-6 w-6 hover:text-primaryOrange transition-colors duration-200" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="mailto:your.email@farisfian06@gmail.com"
                className="hover:text-primaryOrange-0 transition-colors duration-200"
              >
                <FaEnvelope className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Faris Ihsan. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            Designed and built with passion
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primaryOrange-0 opacity-10 rounded-tl-full"></div>
    </footer>
  );
};

export default Footer;
