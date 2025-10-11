'use client';

import { useState, useEffect } from 'react';

export default function Gallery() {
  const [theme, setTheme] = useState('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const galleryItems = [
    {
      title: "OpenClimate Dashboard",
      description: "Interactive dashboard for real-time disaster monitoring and alerts.",
      type: "image",
      src: "/images/openclimate-dashboard.jpg",
      alt: "OpenClimate AI dashboard for disaster management",
      icon: "🌍"
    },
    {
      title: "RoutiQ App Interface",
      description: "User interface for route optimization and traffic predictions.",
      type: "image",
      src: "/images/routiq-interface.jpg",
      alt: "RoutiQ traffic optimization app",
      icon: "🚗"
    },
    {
      title: "eNeza Marketplace Demo",
      description: "Screenshots of the e-commerce platform in action.",
      type: "image",
      src: "/images/eneza-marketplace.jpg",
      alt: "eNeza e-commerce platform demo",
      icon: "🛒"
    },
    {
      title: "Drone Prototype",
      description: "Early hardware prototype for autonomous UAV development.",
      type: "image",
      src: "/images/drone-prototype.jpg",
      alt: "Early drone hardware prototype",
      icon: "🚁"
    },
    {
      title: "University Project Presentation",
      description: "Presenting AI project at university for credibility and knowledge sharing.",
      type: "image",
      src: "/images/innopolis.jpg",
      alt: "Presenting AI project",
      icon: "🎓"
    }
  ];

  return (
    <>
      {/* Header/Navigation - Mobile First */}
      <header className="sticky top-0 z-50 bg-white/98 dark:bg-slate-900/98 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 p-3 sm:p-4">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
            <a href="/" className="hover:opacity-80 transition-opacity">Mugabo</a>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-3 xl:space-x-6">
            <a href="/" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">Home</a>
            <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">About</a>
            <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">Projects</a>
            <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">Skills</a>
            <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white font-semibold transition-colors px-2 py-2 text-sm xl:text-base">Gallery</a>
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
              className="p-1.5 sm:p-2 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`p-2 sm:p-3 bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 ${isMobileMenuOpen ? 'bg-slate-300 dark:bg-slate-600 scale-105' : ''}`}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="lg:hidden mt-2 sm:mt-3 pb-3 sm:pb-4 border-t border-slate-200 dark:border-slate-700 bg-white/98 dark:bg-slate-900/98 backdrop-blur-lg">
            <div className="flex flex-col space-y-1 pt-2 sm:pt-3">
              <a href="/" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
              <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
              <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white font-semibold transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
              <a href="/contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-6 sm:py-8 lg:py-16">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 text-center">Gallery</h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 sm:mb-12 lg:mb-16 text-center max-w-4xl mx-auto px-2">
            Visual journey through my projects, prototypes, and milestones. From AI dashboards to drone hardware, see the tech in action.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-slate-200/40 dark:border-slate-700/40 group">
                <div className="w-full h-40 sm:h-48 lg:h-56 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg sm:text-xl lg:text-2xl">{item.icon}</span>
                  </div>
                  {/* Placeholder for actual image when available */}
                  <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">Image Coming Soon</span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-800 dark:text-white mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
            <p className="text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">More visuals and updates as projects evolve!</p>
            <a
              href="/projects"
              className="bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-300 transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform min-h-[48px] flex items-center justify-center"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
