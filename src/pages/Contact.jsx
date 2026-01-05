import React from 'react';
import PageTransition from '../components/PageTransition';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Contact() {
  return (
    <PageTransition>
      <div id="contact" className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <RevealOnScroll>
              <div className="flex flex-col gap-12">
                <div className="relative">
                  <div className="absolute -top-10 -left-6 bg-primary/20 w-24 h-24 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <span className="font-semibold text-primary mb-2 block">Contact</span>
                    <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                      Let's<br />connect
                    </h1>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-8">
                    <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-3xl">mail</span>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email us</p>
                      <a className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors" href="mailto:fardinsojon@gmail.com">fardinsojon@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-8">
                    <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-3xl">call</span>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Call us</p>
                      <a className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors" href="tel:+8801650230536">+880 1650 230 536</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-8">
                    <span className="devicon-whatsapp-plain text-gray-500 dark:text-gray-400 text-3xl"></span>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</p>
                      <a className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors" href="https://wa.me/8801650230536" target="_blank" rel="noopener noreferrer">+880 1650 230 536</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-3xl">location_on</span>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">Rajshahi, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="w-full">
                <form action="#" className="space-y-6" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
                      <input className="w-full bg-background-light dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition duration-150 ease-in-out text-gray-900 dark:text-gray-100" id="name" name="name" placeholder="Your name*" required="" type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
                      <input className="w-full bg-background-light dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition duration-150 ease-in-out text-gray-900 dark:text-gray-100" id="email" name="email" placeholder="Your email*" required="" type="email" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2" htmlFor="phone">Phone</label>
                      <input className="w-full bg-background-light dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition duration-150 ease-in-out text-gray-900 dark:text-gray-100" id="phone" name="phone" placeholder="Your number" type="tel" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2" htmlFor="subject">Subject*</label>
                      <input className="w-full bg-background-light dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition duration-150 ease-in-out text-gray-900 dark:text-gray-100" id="subject" name="subject" placeholder="Your subject*" required="" type="text" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2" htmlFor="message">Message</label>
                    <textarea className="w-full bg-background-light dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition duration-150 ease-in-out text-gray-900 dark:text-gray-100" id="message" name="message" placeholder="Type your message" rows="5"></textarea>
                  </div>
                  <div>
                    <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-offset-background-dark dark:focus:ring-gray-100 transition-all duration-300 group" type="submit">
                      Submit
                      <span className="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                    </button>
                  </div>
                </form>
                <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Follow me</span>
                  <div className="w-20 h-px bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>
                  <div className="flex gap-6 items-center text-2xl">
                    <a aria-label="GitHub Profile" href="https://github.com/fardin-sojon" className="hover:text-primary dark:hover:text-primary transition-colors">
                      <i className="devicon-github-original"></i>
                    </a>
                    <a aria-label="LinkedIn Profile" href="https://www.linkedin.com/in/fardin-sojon" className="hover:text-primary dark:hover:text-primary transition-colors">
                      <i className="devicon-linkedin-plain"></i>
                    </a>
                    <a aria-label="Facebook Profile" href="https://www.facebook.com/fardinsojon" className="hover:text-primary dark:hover:text-primary transition-colors">
                      <i className="devicon-facebook-plain"></i>
                    </a>
                    <a aria-label="Twitter Profile" href="https://x.com/fardin_sojon" className="hover:text-primary dark:hover:text-primary transition-colors">
                      <i className="devicon-twitter-original"></i>
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
