import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const services = [
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces that enhance user experience.',
    icon: 'design_services',
  },
  {
    title: 'Web Development',
    description: 'Building responsive and high-performance websites using modern technologies.',
    icon: 'code',
  },
  {
    title: 'Mobile App Design',
    description: 'Designing user-friendly mobile applications for iOS and Android platforms.',
    icon: 'smartphone',
  },
  {
    title: 'Brand Identity',
    description: 'Developing unique brand identities that resonate with your target audience.',
    icon: 'branding_watermark',
  },
];

export default function Services() {
  return (
    <div id="services" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">What I Do</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">My Services</h2>
          </div>
        </RevealOnScroll>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={index}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <span className="material-icons-outlined text-primary text-3xl group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
