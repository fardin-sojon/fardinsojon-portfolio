import React from 'react';
import PageTransition from '../components/PageTransition';
import RevealOnScroll from '../components/RevealOnScroll';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack Service',
    description: 'A modern e-commerce platform with product management, cart functionality, and secure payments using MERN Stack.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPM_D3KMV6EfMLacgz1BpG4A0hX1XPdGe9X4GJ_hpoLQfqxqvkUlprMk7cr-oxLkCEpiXBIqVthHpuXJzCCIROuNzNIiohtcnVVbivQxDF9vEGwinHc9lleNm3xD5NIGuqu6U5H5vVHx8h3-woQlS8giucvrDUWIz-uXirUAn-evn5s1nUTnjS2K6P5xtJOJ4_WxpnAqVMhpLZ2d6xcx4bfyXWZRuNIYAWdadQHKXe6ndn5Evq8b5II4AmdQHlI7XdpZvb25rs4fM', // Placeholder, reused existing
  },
  {
    title: 'Task Management App',
    category: 'Productivity Tool',
    description: 'Collaborative task manager with real-time updates, drag-and-drop interface, and team collaboration features.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSb0nYjKOgXJ508fIf8PibvXrp32lcKRNMjoHbleEYNg5b4hodM8pgnmPIUSLoO_699_MpFKa8bmnP8oG0nl0L-pJydnBHLVZzNrqY48taWMBwr3pGJlxQqE6bHP4XmTp2Sub2RjAMEjSQxoxY9XTje2NtvTeY2LyoRfW99TJxYHdeLCZcAQdQXf_kZVXaxfVadOVY4rxaj-UcSPAjouLlwaXqDasvqrgukZka-0HKtNp2tpXZKDgg_IhhJXTL1L9Ea9GCIrlPK-0', // Placeholder
  },
  {
    title: 'Social Media Dashboard',
    category: 'Analytics Dashboard',
    description: 'Comprehensive analytics dashboard for social media metrics built with Next.js and Tailwind CSS.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZlPPusIDrQFG4i72bLOvy-6up3G4eKDEH9uMTIwy1jRCcn3nVdVn91M-brxPCwkpgWrfJOKRSTS1UdKIO-0GjzERfRSlpqNI6oz3mVFUIEGJpsSoG6EgTw_UDg7tWIYeMfNV0Zmtnn5W46xfM5DX14I6P6QJlP7yl6AUgUDV3fXOh9J9WFPVQv9sgbSi5OnVCYYkbC5g9drfaem2aGYTQ7gaFD4InzksztsZelVvPbFiAdAunn_Z2-0JxWPWGmbA76xQhzrXQx54', // Placeholder
  },
  {
    title: 'Real-time Chat App',
    category: 'Communication Tool',
    description: 'Instant messaging application featuring private chats, group conversations, and file sharing using Socket.io.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRf9UwzpEbrlYELiL2Nr0KdkTW8qAnKKdlYFDlRukpJGl8ja4iNbhNX0uvdK_CCJfSEe53m5P_fUyjPq4cj8tcHPG-tvRUuBELad9AiX8exEZ5n9SikP7Nx5IqAnYV4YrSNc3k3Xd6q6Y_TOlyX0u5ZSrEO2UvhjZvuPGEi5uMSTFyQvrXcrv37X_bTN01uBIigYaroWn3yoA9p0Hmut0Hgrz6fgld-tNKkOKqwO3LANsD6d6MuZusU7GxTpNjM0EI__rLOicEvPQ', // Placeholder
  },
];

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
          {projects.map((project, index) => (
            <RevealOnScroll key={index}>
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
                    <a href="#" className="flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-bold">
                      View Project <span className="material-icons-outlined text-base">arrow_forward</span>
                    </a>
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
