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
      {/* Header/Navigation - Ultra Mobile Optimized */}
      <header className="sticky top-0 z-50 bg-white/98 dark:bg-slate-900/98 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 p-3 sm:p-4">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
            <a href="/" className="hover:opacity-80 transition-opacity">Mugabo</a>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-3 xl:space-x-6">
            <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">About</a>
            <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">Projects</a>
            <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">Skills</a>
            <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">Gallery</a>
            <a href="/contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">Contact</a>
            <button
              onClick={toggleTheme}
              className="ml-3 p-2 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 hover:scale-110"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`p-2 bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 ${isMobileMenuOpen ? 'bg-slate-300 dark:bg-slate-600' : ''}`}
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

        {/* Enhanced Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-4 border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
            <div className="flex flex-col space-y-1 pt-3">
              <a href="/" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-2" onClick={() => setIsMobileMenuOpen(false)}>🏠 Home</a>
              <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-2" onClick={() => setIsMobileMenuOpen(false)}>👤 About</a>
              <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-2" onClick={() => setIsMobileMenuOpen(false)}>📁 Projects</a>
              <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-2" onClick={() => setIsMobileMenuOpen(false)}>🛠️ Skills</a>
              <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-2" onClick={() => setIsMobileMenuOpen(false)}>🖼️ Gallery</a>
              <a href="/contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-2" onClick={() => setIsMobileMenuOpen(false)}>📞 Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Ultra Mobile Optimized */}
      <main className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-16">
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
          <div className="order-2 xl:order-1 text-center xl:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
              Tech Entrepreneur,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>AI Practitioner,
              <br className="hidden md:block" />
              <span className="sm:hidden"> </span>SpaceTech Enthusiast
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto xl:mx-0 leading-relaxed">
              <i>Bridging AI, IoT, and real-world impact. Expert in autonomous systems, drones-UAVs, and SpaceTech solutions.</i>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center xl:justify-start">
              <a
                href="/projects"
                className="bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-300 transition-all duration-300 text-sm sm:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform text-center min-h-[48px] flex items-center justify-center"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="border-2 border-slate-800 dark:border-slate-200 text-slate-800 dark:text-slate-200 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl hover:bg-slate-800 hover:text-white dark:hover:bg-slate-200 dark:hover:text-slate-800 transition-all duration-300 text-sm sm:text-base lg:text-lg font-semibold hover:scale-105 transform text-center min-h-[48px] flex items-center justify-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="order-1 xl:order-2 relative">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto xl:max-w-none aspect-[4/3] bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden">
              <img src="/mugabo.jpg" alt="Mugabo's profile photo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Featured Projects - Ultra Mobile Optimized */}
        <section className="mt-12 sm:mt-16 lg:mt-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-3 sm:mb-4 text-center">Featured Projects</h3>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 lg:mb-12 text-center max-w-3xl mx-auto px-2">
            Hands-on innovations solving real-world problems in Africa and beyond. Each project leverages AI, IoT, and cutting-edge tech for impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* OpenClimate */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-green-200/50 dark:border-green-700/30">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                  <span className="text-white text-sm sm:text-base lg:text-lg">🌍</span>
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-800 dark:text-white">OpenClimate</h4>
              </div>
              <p className="text-green-700 dark:text-green-300 font-medium mb-2 sm:mb-3 italic text-xs sm:text-sm lg:text-base">"Stay informed, Stay Safe: Leveraging technologies to save more lives and infrastructure."</p>
              <p className="text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base">AI-driven disaster management and climate resilience platform for Africa, integrating real-time data and predictive analytics.</p>
              <a href="/projects" className="inline-block bg-green-600 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg hover:bg-green-700 transition-all duration-200 font-medium text-xs sm:text-sm lg:text-base min-h-[40px] flex items-center justify-center">Learn More</a>
            </div>

            {/* RoutiQ */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-200/50 dark:border-blue-700/30">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                  <span className="text-white text-sm sm:text-base lg:text-lg">🚗</span>
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-800 dark:text-white">RoutiQ</h4>
              </div>
              <p className="text-blue-700 dark:text-blue-300 font-medium mb-2 sm:mb-3 italic text-xs sm:text-sm lg:text-base">"Smarter Routes. Safest and Fastest Journeys. Greener Cities. Powered By Intelligence."</p>
              <p className="text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base">Traffic intelligence and route optimization app for Africa, using ML and IoT for real-time navigation and eco-friendly paths.</p>
              <a href="/projects" className="inline-block bg-blue-600 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium text-xs sm:text-sm lg:text-base min-h-[40px] flex items-center justify-center">Learn More</a>
            </div>

            {/* eNeza Marketplace */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-purple-200/50 dark:border-purple-700/30 md:col-span-2 xl:col-span-1">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                  <span className="text-white text-sm sm:text-base lg:text-lg">🛒</span>
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-800 dark:text-white">eNeza Marketplace</h4>
              </div>
              <p className="text-purple-700 dark:text-purple-300 font-medium mb-2 sm:mb-3 text-xs sm:text-sm lg:text-base">Integrated e-commerce platform with AI recommendations and secure logistics for seamless shopping.</p>
              <p className="text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base">Boosts local economies with smart recommendations, payments, and efficient supply chains.</p>
              <a href="/projects" className="inline-block bg-purple-600 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg hover:bg-purple-700 transition-all duration-200 font-medium text-xs sm:text-sm lg:text-base min-h-[40px] flex items-center justify-center">Learn More</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Ultra Mobile Optimized */}
      <footer className="bg-slate-800 dark:bg-slate-900 text-white py-6 sm:py-8 lg:py-12 mt-12 sm:mt-16 lg:mt-20">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 lg:mb-6">Subscribe to Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row justify-center items-center max-w-sm sm:max-w-md mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                value={newsletterData.name}
                onChange={(e) => setNewsletterData({ ...newsletterData, name: e.target.value })}
                className="w-full sm:flex-1 px-3 sm:px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-300 border-0 focus:ring-2 focus:ring-slate-500 focus:outline-none text-sm sm:text-base min-h-[48px]"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={newsletterData.email}
                onChange={(e) => setNewsletterData({ ...newsletterData, email: e.target.value })}
                className="w-full sm:flex-1 px-3 sm:px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-300 border-0 focus:ring-2 focus:ring-slate-500 focus:outline-none sm:ml-2 lg:ml-3 text-sm sm:text-base min-h-[48px]"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-slate-600 hover:bg-slate-500 text-white px-4 sm:px-6 py-3 rounded-lg transition-all duration-200 font-medium sm:ml-2 lg:ml-3 mt-2 sm:mt-0 min-h-[48px] flex items-center justify-center text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="text-center border-t border-slate-700 pt-4 sm:pt-6 lg:pt-8">
            <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">&copy; 2025 Mugabo. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <a href="https://linkedin.com/in/nshuti-martin15" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">LinkedIn</a>
              <a href="https://github.com/merma1509" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
