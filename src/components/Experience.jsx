import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const experiences = [
  {
    year: '2025 - Present',
    role: 'Frontend Developer',
    company: 'Freelance',
    description: 'Started my journey in coding, specializing in building responsive and interactive web applications using React and Tailwind CSS.',
  },
  {
    year: '2025 - Present',
    role: 'Backend Developer',
    company: 'Freelance',
    description: 'Building scalable server-side applications and APIs using Node.js, Express.js, and MongoDB.',
  },
  {
    year: '2023 - 2027',
    role: 'Diploma in Computer Science',
    company: 'Bangladesh Polytechnic Institute, Rajshahi',
    description: 'Pursuing Diploma in Computer Science & Technology, building a strong foundation in programming and computer systems.',
  },
];

export default function Experience() {
  return (
    <div id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Experience & Education</h2>
          </div>
        </RevealOnScroll>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <RevealOnScroll key={index}>
              <div className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-700 last:pb-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full ring-4 ring-white dark:ring-gray-900"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.description}
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
