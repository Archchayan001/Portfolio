import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mt-7 flex items-center justify-between sticky top-0 ">
      <div className="flex flex-shrink-0 items-center pl-20">
        <span className="font-bold text-3xl">Ar</span>
      </div>

      <div className="flex items-center justify-center gap-6 text-lg text-white">
        <a href="#about" className="hover:text-gray-400">About Me</a>
        <a href="#technologies" className="hover:text-gray-400">Technologies</a>
        {/* <a href="#experience" className="hover:text-gray-400">Experience</a> */}
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact Me</a>
      </div>

      <div className="flex items-center justify-center gap-4 text-2xl text-white pr-20">
        <a href="https://www.linkedin.com/in/archchayan001" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/archchayan001" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;
