import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import RevealOnScroll from '../components/RevealOnScroll';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-primary hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-12 px-6 lg:px-12 max-w-7xl mx-auto">
        <Link to="/#portfolio" className="inline-flex items-center gap-2 mb-8 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
          <span className="material-icons-outlined">arrow_back</span>
          Back to Portfolio
        </Link>
        
        <RevealOnScroll>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full rounded-2xl shadow-xl object-cover hover:scale-[1.02] transition-transform duration-500" 
              />
              <div className="mt-8 flex gap-4 flex-wrap">
                 {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-bold text-center hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                  >
                    Live Preview <span className="material-icons-outlined text-lg">open_in_new</span>
                  </a>
                 )}
                 <a 
                  href={project.repoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white py-3 px-6 rounded-lg font-bold text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                >
                  GitHub Repo <i className="devicon-github-original text-lg"></i>
                </a>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">{project.title}</h1>
                <span className="inline-block bg-primary/10 text-primary py-1 px-3 rounded-full text-sm font-semibold">
                  {project.category}
                </span>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Overview</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Technology Stack</h2>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech, index) => (
                    <span key={index} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Challenges Faced</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Future Improvements</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.improvements}
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </PageTransition>
  );
}
