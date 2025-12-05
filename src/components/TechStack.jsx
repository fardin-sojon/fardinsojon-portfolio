import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

const techStack = [
  { name: 'JavaScript', category: 'Frontend', icon: 'devicon-javascript-plain colored' },
  { name: 'React', category: 'Frontend', icon: 'devicon-react-original colored' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'devicon-tailwindcss-original colored' },
  { name: 'TypeScript', category: 'Frontend', icon: 'devicon-typescript-plain colored' },
  { name: 'Redux', category: 'Frontend', icon: 'devicon-redux-original colored' },
  { name: 'Next.js', category: 'Frontend', icon: 'devicon-nextjs-original' },
  { name: 'MongoDB', category: 'Backend', icon: 'devicon-mongodb-plain colored' },
  { name: 'Express.js', category: 'Backend', icon: 'devicon-express-original' },
  { name: 'Node.js', category: 'Backend', icon: 'devicon-nodejs-plain colored' },
  { name: 'Vercel', category: 'DevOps', icon: 'devicon-vercel-original' }, 
  { name: 'Netlify', category: 'DevOps', icon: 'devicon-netlify-plain colored' },
  { name: 'Git', category: 'DevOps', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', category: 'DevOps', icon: 'devicon-github-original' },
  { name: 'Postman', category: 'Tools', icon: 'devicon-postman-plain colored' },
  { name: 'Figma', category: 'Tools', icon: 'devicon-figma-plain colored' },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'Tools'];

  const filteredTech = activeTab === 'All' 
    ? techStack 
    : techStack.filter(tech => tech.category === activeTab);

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900/50 ">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tech Stack
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Core tools I use to build scalable full-stack MERN applications.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                  activeTab === category
                    ? 'bg-primary text-white shadow-md transform scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredTech.map((tech, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center aspect-square group">
                    <i className={`${tech.icon} text-3xl mb-2 transition-transform duration-300 group-hover:scale-110`}></i>
                    <span className="text-gray-900 dark:text-white font-medium text-xs sm:text-sm">{tech.name}</span>
                </div>
            ))}
        </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
