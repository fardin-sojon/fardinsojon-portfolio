import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <div id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
             <p className="text-sm font-semibold text-primary uppercase tracking-wider">My Skills</p>
             <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Technical Expertise
             </h2>
             <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
               I continuously learn and adapt to new technologies to build robust and scalable applications.
             </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <RevealOnScroll key={index}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 h-full">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-primary font-medium text-sm">{skill.level}</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
