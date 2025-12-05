import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white relative w-fit">
            <span className="absolute -top-3 -left-4 w-12 h-12 bg-primary rounded-full -z-10"></span>
            Let's work<br />together
          </h2>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <span>Based in Bangladesh</span>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <div className="flex items-center gap-3 text-2xl">
                <a aria-label="GitHub Profile" href="https://github.com/fardin-sojon" className="hover:text-primary dark:hover:text-primary transition-colors">
                  <i className="devicon-github-original"></i>
                </a>
                <a aria-label="LinkedIn Profile" href="https://www.linkedin.com/in/fardin-sojon" className="hover:text-primary dark:hover:text-primary transition-colors">
                  <i className="devicon-linkedin-plain"></i>
                </a>
                <a aria-label="Facebook Profile" href="https://www.facebook.com/fardinsojon" className="hover:text-primary dark:hover:text-primary transition-colors">
                  <i className="devicon-facebook-plain"></i>
                </a>
                <a aria-label="Twitter Profile" href="https://x.com/fardin_sojon" className="hover:text-primary dark:hover:text-primary transition-colors">
                  <i className="devicon-twitter-original"></i>
                </a>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          <a className="group bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg p-8 flex flex-col justify-between hover:border-primary dark:hover:border-primary transition-colors duration-300" href="mailto:fardinsojon@gmail.com">
            <div>
              <p className="text-gray-800 dark:text-gray-200">Looking for a Web Developer?</p>
            </div>
            <div className="flex items-center justify-between mt-12">
              <span className="text-lg font-medium text-primary">fardinsojon@gmail.com</span>
              <span className="material-icons-outlined text-gray-500 dark:text-gray-400 group-hover:text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">arrow_outward</span>
            </div>
          </a>
          <a className="group bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg p-8 flex flex-col justify-between hover:border-primary dark:hover:border-primary transition-colors duration-300" href="tel:+8801650230536">
            <div>
              <p className="text-gray-800 dark:text-gray-200">Want to discuss a project?</p>
            </div>
            <div className="flex items-center justify-between mt-12">
              <span className="text-lg font-medium text-primary">+880 1650 230 536</span>
              <span className="material-icons-outlined text-gray-500 dark:text-gray-400 group-hover:text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">arrow_outward</span>
            </div>
          </a>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-[10vw] md:text-8xl lg:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white text-center">
          FARDIN RAHMAN SOJON
        </h1>
      </div>
      <div className="mt-10 sm:mt-24 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">©2025 Fardin Rahman Sojon, All Rights Reserved</p>
        <a className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">
          Back to Top
          <span className="material-icons-outlined">arrow_upward</span>
        </a>
      </div>
    </footer>
  );
}
