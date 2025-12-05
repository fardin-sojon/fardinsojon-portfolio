import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const skills = [
  { name: 'React', level: '90%' },
  { name: 'JavaScript', level: '85%' },
  { name: 'TypeScript', level: '80%' },
  { name: 'Tailwind CSS', level: '95%' },
  { name: 'Node.js', level: '75%' },
  { name: 'Figma', level: '85%' },
];

export default function Skills() {
  return (
    <div id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">My Skills</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                I Develop Skills Regularly to Keep Me Update
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Most common methods for developing a website that work well on desktop is responsive and adaptive design
              </p>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      <span className="text-primary font-medium">{skill.level}</span>
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
          <RevealOnScroll>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-2xl text-center">
                    <span className="text-4xl font-bold text-primary block mb-2">90%</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Figma</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-2xl text-center">
                    <span className="text-4xl font-bold text-primary block mb-2">85%</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">React</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-2xl text-center">
                    <span className="text-4xl font-bold text-primary block mb-2">95%</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Tailwind</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-2xl text-center">
                    <span className="text-4xl font-bold text-primary block mb-2">80%</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
