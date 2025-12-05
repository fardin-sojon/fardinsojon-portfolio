import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ toggleDarkMode, isDarkMode }) {
  return (
    <header className="fixed w-full top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-display text-primary">
          FAR<span className="text-text-light dark:text-text-dark">DIN</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="font-medium hover:text-primary transition-colors">Home</a>
          <a href="#about" className="font-medium hover:text-primary transition-colors">About</a>
          <a href="#services" className="font-medium hover:text-primary transition-colors">Services</a>
          <a href="#skills" className="font-medium hover:text-primary transition-colors">Skills</a>
          <a href="#experience" className="font-medium hover:text-primary transition-colors">Experience</a>
          <a href="#portfolio" className="font-medium hover:text-primary transition-colors">Portfolio</a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors">Contact</a>
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <span className="material-icons-outlined text-yellow-400">light_mode</span>
            ) : (
              <span className="material-icons-outlined text-gray-600">dark_mode</span>
            )}
          </button>
        </nav>
        <button className="md:hidden p-2">
          <span className="material-icons-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
