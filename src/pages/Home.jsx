import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Home() {
  return (
    <PageTransition>
      <div id="home" className="container mx-auto px-6 pt-28 lg:pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-10 lg:gap-12">
            <RevealOnScroll>
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-text-light dark:bg-text-dark"></div>
                <p className="font-medium text-lg text-primary">Hello, I'm 👋</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold leading-none tracking-tighter relative">
                <span className="relative">
                  <span className="absolute -top-4 -left-6 w-20 h-20 bg-primary/20 rounded-full z-0"></span>
                  <span className="relative z-10">F</span>ardin Rahman
                </span>
                <br />
                <span>Sojon</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="text-lg font-medium text-secondary-light dark:text-secondary-dark">Web Developer | Based in Bangladesh</p>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="flex items-center gap-4">
                <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-md font-bold flex items-center gap-2">
                  <span>Let's Talk</span>
                  <span className="material-icons-outlined text-base">north_east</span>
                </a>
                <a href="#portfolio" className="bg-transparent border border-secondary-light dark:border-secondary-dark px-6 py-3 rounded-md font-bold flex items-center gap-2">
                  <span>My Work</span>
                  <span className="material-icons-outlined text-base">north_east</span>
                </a>
                <a href="/Fardin Rahman Sojon_Resume.pdf" download className="bg-transparent border border-secondary-light dark:border-secondary-dark px-6 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                  <span>Download CV</span>
                  <span className="material-icons-outlined text-base">download</span>
                </a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 pt-8">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">1.2k+</span>
                  <span className="ml-2 font-medium text-secondary-light dark:text-secondary-dark">Worldwide client</span>
                </div>
                <div className="hidden md:block h-6 w-px bg-border-light dark:border-border-dark"></div>
                <div className="flex items-center gap-5 text-2xl text-secondary-light dark:text-secondary-dark">
                  <a aria-label="GitHub Profile" href="https://github.com/fardin-sojon" className="hover:text-primary transition-colors">
                    <i className="devicon-github-original"></i>
                  </a>
                  <a aria-label="LinkedIn Profile" href="https://www.linkedin.com/in/fardin-sojon" className="hover:text-primary transition-colors">
                    <i className="devicon-linkedin-plain"></i>
                  </a>
                  <a aria-label="Facebook Profile" href="https://www.facebook.com/fardinsojon" className="hover:text-primary transition-colors">
                    <i className="devicon-facebook-plain"></i>
                  </a>
                  <a aria-label="Twitter Profile" href="https://x.com/fardin_sojon" className="hover:text-primary transition-colors">
                    <i className="devicon-twitter-original"></i>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          <div className="hidden lg:block relative justify-self-end">
            <div className="absolute w-[450px] h-[600px] xl:w-[500px] xl:h-[650px] bg-primary/20 rounded-[10rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 transform -rotate-[20deg]"></div>
            <img alt="A smiling man with red hair and glasses" className="relative z-10 w-[400px] xl:w-[450px]" src="/asset/banner-fardin.jpg" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
