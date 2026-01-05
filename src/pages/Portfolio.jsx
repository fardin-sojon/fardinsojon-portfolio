import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import RevealOnScroll from '../components/RevealOnScroll';
import { projects } from '../data/projects';

export default function Portfolio() {
  return (
    <PageTransition>
      <div id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <RevealOnScroll>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              My recent work
            </h1>
          </RevealOnScroll>
        </div>
        <div className="mt-12 sm:mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <RevealOnScroll key={project.id}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 w-full h-64 overflow-hidden">
                  <img 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
                    src={project.img} 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.category}
                  </p>
                  <p className="text-gray-400 text-sm line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {project.description}
                  </p>
                  <div className="mt-4 flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                    <Link to={`/project/${project.id}`} className="flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-bold">
                      View details <span className="material-icons-outlined text-base">arrow_forward</span>
                    </Link>
                  </div>
                </div>
                {/* Always visible title for mobile/default state if preferred, or rely on hover */}
                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent md:hidden">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.category}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
