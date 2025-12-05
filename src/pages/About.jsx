import React from 'react';
import PageTransition from '../components/PageTransition';
import RevealOnScroll from '../components/RevealOnScroll';
import aboutImage from '../../public/asset/about-fardin.png'

export default function About() {
  return (
    <PageTransition>
      <div id="about" className="max-w-7xl mx-auto p-8 lg:p-16">
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <RevealOnScroll>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-primary/80 rounded-[3rem] transform -rotate-12 scale-105"></div>
              <div className="relative w-full max-w-sm">
                <img alt="Portrait of Mark Henry" className="rounded-[3rem] relative z-10 w-full" src={aboutImage} />
              </div>
            </div>
          </RevealOnScroll>
          <div className="space-y-6">
            <RevealOnScroll>
              <p className="text-primary font-semibold">About me</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">Fardin Rahman Sojon</h1>
              <h2 className="text-xl font-medium text-gray-700 dark:text-gray-400 mt-4 mb-3">Full Stack Developer</h2>
              <p className="text-gray-600 dark:text-gray-400 font-medium">A passionate Full Stack Developer with 6 months of experience in building modern web applications. I love creating seamless user experiences and robust backend systems.</p>
              <p className="text-gray-500 dark:text-gray-500">I specialize in the MERN stack and have a knack for solving complex problems. My goal is to build scalable and efficient software solutions that make a real impact.</p>
              <p className="font-signature text-4xl text-gray-800 dark:text-gray-300 mt-4">Fardin Rahman Sojon</p>
            </RevealOnScroll>
          </div>
        </section>
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <RevealOnScroll>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">My vision is to build scalable and user-centric web solutions</h2>
              <p className="text-gray-500 dark:text-gray-500 max-w-lg mt-4">I believe in the power of clean code and intuitive design. My mission is to bridge the gap between complex backend logic and seamless frontend experiences, creating applications that are not only functional but also a joy to use.</p>
              <div className="flex space-x-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">15+</p>
                  <p className="text-gray-500 dark:text-gray-500">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">10+</p>
                  <p className="text-gray-500 dark:text-gray-500">Happy Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">12+</p>
                  <p className="text-gray-500 dark:text-gray-500">Technologies Mastered</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          <div className="space-y-8">
            <RevealOnScroll>
              <div className="relative">
                <div className="absolute -top-6 -left-4 w-20 h-20 bg-primary/80 rounded-full"></div>
                <p className="relative text-7xl font-bold text-gray-900 dark:text-white z-10">6+</p>
                <p className="text-7xl font-bold stroke-text text-gray-300 dark:text-gray-700 mt-[-1rem]">Months of</p>
                <p className="text-7xl font-bold stroke-text text-gray-300 dark:text-gray-700">experience</p>
              </div>
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 flex justify-between items-center text-white">
                <div>
                  <p className="text-sm text-gray-300">SAY HELLO!</p>
                  <a className="text-lg md:text-xl font-semibold text-white" href="mailto:hello@henry.com">fardinsojon@gmail.com</a>
                </div>
                <span className="material-icons text-3xl transform -rotate-45">arrow_forward</span>
              </div>
            </RevealOnScroll>
          </div>
        </section>
        <style>{`
        .stroke-text {
            -webkit-text-stroke: 1px;
            -webkit-text-fill-color: transparent;
        }
      `}</style>
      </div>
    </PageTransition>
  );
}
