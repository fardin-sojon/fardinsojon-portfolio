import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { education } from '../data/education';

export default function Education() {
  return (
    <div id="education" className="py-20">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Education</h2>
          </div>
        </RevealOnScroll>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <RevealOnScroll key={index}>
              <div className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-700 last:pb-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full ring-4 ring-white dark:ring-gray-900"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    {edu.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-medium mb-3">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
