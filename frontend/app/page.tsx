'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('light');
  const [newsletterData, setNewsletterData] = useState({ name: '', email: '' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newsletterData),
      });
      if (response.ok) {
        alert('Subscribed successfully!');
        setNewsletterData({ name: '', email: '' });
      } else {
        alert('Error subscribing. Please try again.');
      }
    } catch (error) {
      alert('Error subscribing. Please try again.');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header/Navigation - Mobile First */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 p-4 sm:p-6">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
            <a href="/" className="hover:opacity-80 transition-opacity">Mugabo</a>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-3 py-2">About</a>
            <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-3 py-2">Projects</a>
            <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-3 py-2">Skills</a>
            <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-3 py-2">Gallery</a>
            <a href="/contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-3 py-2">Contact</a>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 hover:scale-110"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200"
            >
              <svg className="w-5 h-5 text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col space-y-2 pt-4">
              <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
              <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
              <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
              <a href="/contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Mobile First */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6 leading-tight">
              Tech Entrepreneur,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>AI Practitioner,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>SpaceTech Enthusiast
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              <i>Bridging AI, IoT, and real-world impact. Expert in autonomous systems, drones-UAVs, and SpaceTech solutions.</i>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="/projects"
                className="bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-300 transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform text-center"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="border-2 border-slate-800 dark:border-slate-200 text-slate-800 dark:text-slate-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-slate-800 hover:text-white dark:hover:bg-slate-200 dark:hover:text-slate-800 transition-all duration-300 text-base sm:text-lg font-semibold hover:scale-105 transform text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="w-full max-w-sm mx-auto lg:max-w-none aspect-[4/3] bg-gradient-to-br from-slate-400 to-slate-600 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
              <img src="/mugabo.jpg" alt="Mugabo's profile photo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Featured Projects - Mobile First */}
        <section className="mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-3 sm:mb-4 text-center">Featured Projects</h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 sm:mb-12 text-center max-w-3xl mx-auto px-4">
            Hands-on innovations solving real-world problems in Africa and beyond. Each project leverages AI, IoT, and cutting-edge tech for impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* OpenClimate */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-green-200/50 dark:border-green-700/30">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-lg sm:text-xl">🌍</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white">OpenClimate</h4>
              </div>
              <p className="text-green-700 dark:text-green-300 font-medium mb-3 italic text-sm sm:text-base">"Stay informed, Stay Safe: Leveraging technologies to save more lives and infrastructure."</p>
              <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm sm:text-base">AI-driven disaster management and climate resilience platform for Africa, integrating real-time data and predictive analytics.</p>
              <a href="/projects" className="inline-block bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-green-700 transition-all duration-200 font-medium text-sm sm:text-base">Learn More</a>
            </div>

            {/* RoutiQ */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-200/50 dark:border-blue-700/30">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-lg sm:text-xl">🚗</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white">RoutiQ</h4>
              </div>
              <p className="text-blue-700 dark:text-blue-300 font-medium mb-3 italic text-sm sm:text-base">"Smarter Routes. Safest and Fastest Journeys. Greener Cities. Powered By Intelligence."</p>
              <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm sm:text-base">Traffic intelligence and route optimization app for Africa, using ML and IoT for real-time navigation and eco-friendly paths.</p>
              <a href="/projects" className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium text-sm sm:text-base">Learn More</a>
            </div>

            {/* eNeza Marketplace */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-purple-200/50 dark:border-purple-700/30 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-lg sm:text-xl">🛒</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white">eNeza Marketplace</h4>
              </div>
              <p className="text-purple-700 dark:text-purple-300 font-medium mb-3 text-sm sm:text-base">Integrated e-commerce platform with AI recommendations and secure logistics for seamless shopping.</p>
              <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm sm:text-base">Boosts local economies with smart recommendations, payments, and efficient supply chains.</p>
              <a href="/projects" className="inline-block bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-purple-700 transition-all duration-200 font-medium text-sm sm:text-base">Learn More</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Mobile First */}
      <footer className="bg-slate-800 dark:bg-slate-900 text-white py-8 sm:py-12 mt-16 sm:mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Subscribe to Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row justify-center items-center max-w-md mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                value={newsletterData.name}
                onChange={(e) => setNewsletterData({ ...newsletterData, name: e.target.value })}
                className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-300 border-0 focus:ring-2 focus:ring-slate-500 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={newsletterData.email}
                onChange={(e) => setNewsletterData({ ...newsletterData, email: e.target.value })}
                className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-300 border-0 focus:ring-2 focus:ring-slate-500 focus:outline-none sm:ml-3"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-slate-600 hover:bg-slate-500 text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium sm:ml-3 mt-3 sm:mt-0"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="text-center border-t border-slate-700 pt-6 sm:pt-8">
            <p className="text-slate-300 mb-4">&copy; 2025 Mugabo. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a href="https://linkedin.com/in/nshuti-martin15" className="text-slate-300 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/merma1509" className="text-slate-300 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
