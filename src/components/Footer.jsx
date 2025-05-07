import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope,FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo or Title */}
        <div className="text-xl font-semibold uppercase text-blue-400">
          c/dev
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#portfolio" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a href="https://github.com/codehub1001" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a href="https://ng.linkedin.com/in/chukwuka-erondu-4344232bb " target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/+8112780944" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaWhatsapp />
          </a>
          <a href="https://x.com/ChukwukaErondu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="mailto:oluwachukkie@gmail.com" className="hover:text-blue-400 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()}  All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
