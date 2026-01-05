import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ toggleDarkMode, isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-display text-primary">
          FAR<span className="text-text-light dark:text-text-dark">DIN</span>
        </a>
        
        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
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
            <button onClick={toggleMenu} className="p-2" aria-label="Toggle Menu">
                <span className="material-icons-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-dark shadow-xl py-4 flex flex-col items-center gap-4 animate-fadeIn">
            <a href="#home" onClick={closeMenu} className="font-medium hover:text-primary transition-colors py-2 w-full text-center">Home</a>
            <a href="#about" onClick={closeMenu} className="font-medium hover:text-primary transition-colors py-2 w-full text-center">About</a>
            <a href="#services" onClick={closeMenu} className="font-medium hover:text-primary transition-colors py-2 w-full text-center">Services</a>
            <a href="#skills" onClick={closeMenu} className="font-medium hover:text-primary transition-colors py-2 w-full text-center">Skills</a>
            <a href="#experience" onClick={closeMenu} className="font-medium hover:text-primary transition-colors py-2 w-full text-center">Experience</a>
            <a href="#portfolio" onClick={closeMenu} className="font-medium hover:text-primary transition-colors py-2 w-full text-center">Portfolio</a>
            <a href="#contact" onClick={closeMenu} className="font-medium hover:text-primary transition-colors py-2 w-full text-center">Contact</a>
        </div>
      )}
    </header>
  );
}
